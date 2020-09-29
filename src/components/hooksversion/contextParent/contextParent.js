import React, { useContext } from "react";
import Auth from "../auth/auth";
import BootcampRouteComponent from "../BootcampsParent/BootcampsParent";
import { AuthContext } from "../context/auth-context";

const ContextParent = (props) => {
  const authContext = useContext(AuthContext);
  let content = <Auth />;
  if (authContext.isAuth) {
    content = <BootcampRouteComponent />;
  }
  return content;
};

export default ContextParent;
