import { useSelector } from "react-redux";

import { Outlet, Navigate } from "react-router-dom";

export const AuthGuard = () => {
  const userToken = useSelector((state) => state.token.token);
  return userToken ? <Outlet /> : <Navigate replace to={"/"} />;
};

export default AuthGuard;
