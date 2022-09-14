import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetServerSidePropsResult,
} from "next";
import { parseCookies } from "nookies";

export function withSSRGuest<P>(fn: GetServerSideProps<P>) {
  return async (
    ctx: GetServerSidePropsContext,
  ): Promise<GetServerSidePropsResult<P>> => {
    const cookies = parseCookies(ctx);
    if (cookies["dev.token"]) {
      return {
        redirect: {
          destination: "dashboard",
          permanent: false,
        },
      };
    } //redirecionar o usuário caso ele ja tenha um token
    return await fn(ctx);
  };
}
