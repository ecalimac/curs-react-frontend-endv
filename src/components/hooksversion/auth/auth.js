import React, { useContext } from "react";
import Card from "../card/card";
import { AuthContext } from "../context/auth-context";

const Auth = (props) => {
  const authContext = useContext(AuthContext);

  const loginHandler = () => {
    authContext.login();
  };
  return (
    <div>
      <Card>
        <p>You are not authorized</p>
        <p>Please log in!</p>
        <button onClick={loginHandler}>Log in</button>
      </Card>
    </div>
  );
};

export default Auth;
