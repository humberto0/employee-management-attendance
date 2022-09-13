import axios, { AxiosError } from "axios";
import { parseCookies, setCookie } from "nookies";
import { signOut } from "src/contexts/AuthContext";

import { AuthTokenError } from "./errors/AuthTokenError";

let isRefreshing = false;
let failedRequestsQueue = [];

export function setupApiClient(ctx = undefined) {
  let cookies = parseCookies(ctx);
  const apiAuth = axios.create({
    baseURL: "http://localhost:3333",
    headers: {
      Authorization: `Bearer ${cookies["dev.token"]} `,
    },
  });

  apiAuth.interceptors.response.use(
    response => {
      return response; // a requisição deu certo
    },
    (error: any) => {
      if (error.response.status === 401) {
        if (error.response.data?.code === "token.expired") {
          cookies = parseCookies(ctx);

          const { "dev.refreshToken": refreshToken } = cookies;
          const originalConfig = error.config;
          if (!isRefreshing) {
            isRefreshing = true;
            apiAuth
              .post("/refresh", { refreshToken })
              .then(response => {
                const { token } = response.data;

                setCookie(ctx, "dev.token", token, {
                  maxAge: 60 * 60 * 24, //1 dia
                  path: "/",
                });
                setCookie(ctx, "dev.refreshToken", response.data.refreshToken, {
                  maxAge: 60 * 60 * 24, //1 dia
                  path: "/",
                });
                apiAuth.defaults.headers["Authorization"] = `Bearer ${token}`;
                failedRequestsQueue.forEach(request =>
                  request.onSuccess(token),
                );
                failedRequestsQueue = [];
              })
              .catch(err => {
                failedRequestsQueue.forEach(request => request.onFailure(err));
                failedRequestsQueue = [];
                if (typeof window !== "undefined") {
                  signOut();
                }
              })
              .finally(() => {
                isRefreshing = false;
              });
          }
          return new Promise((resolve, reject) => {
            failedRequestsQueue.push({
              onSuccess: (token: string) => {
                originalConfig.headers["Authorization"] = `Bearer ${token}`;
                resolve(apiAuth(originalConfig));
              },
              onFailure: (err: AxiosError) => {
                reject(err);
              },
            });
          }); // fila de requisições enquanto o token não é atualizado
          //renovar o token
        } else {
          if (typeof window !== "undefined") {
            signOut();
          } //somente do lado cliente
          else {
            return Promise.reject(new AuthTokenError());
          }
          //deslogar
        }
      }
      return Promise.reject(error);
    },
  );
  return apiAuth;
}
