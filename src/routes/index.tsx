import { UserProps } from "../types/user";
import { PublicRoutes } from "./public.route";
import { PrivateRoutes } from "./private.route";

export function Routes() {
  const user: UserProps = {
    nome: "pasip",
    email: "passip@gmail.com",
    password: "123456",
    logged: false,
  };

  if (user.logged) return <PrivateRoutes />;
  return <PublicRoutes />;
}
