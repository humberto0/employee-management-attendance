import { useQuery, UseQueryOptions } from "react-query";

import { apiAuth } from "../apiAuthClient";

type User = {
  id: string;
  name: string;
  email: string;
  createdAt: string;
};

type GetUsersReponse = {
  totalCount: number;
  users: User[];
};

export async function getUsers(page: number): Promise<GetUsersReponse> {
  const { data } = await apiAuth.get("/cliente", {
    params: {},
  });

  const totalCount = Number(data.totalItem);

  const users = data.customers.map(user => {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      createdAt: new Date(user.created_at).toLocaleDateString("pt-br", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      }),
    };
  });

  return {
    users,
    totalCount,
  };
}

export function useUsers(page: number, options?: UseQueryOptions) {
  return useQuery(["users", page], () => getUsers(page), {
    staleTime: 1000 * 60 * 1,
    ...options,
  });
}
