import React from "react";
import { createContext, useEffect, useState } from "react";
import UserDataService from "../services/UserService";

const AuthContext = createContext({
  loggedIn: null,
  setLoggedIn: Function,
  triggerRender: null,
  setTriggerRender: Function,
});

const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [loggedIn, setLoggedIn] = useState(null);
  const [triggerRender, setTriggerRender] = useState(null);
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

  useEffect(() => {
    let isMounted = true;
    console.log("mounting");
    UserDataService.getLoggedIn()
      .then((response: any) => {
        setLoggedIn(response.data.info);
      })
      .catch((err: any) => {
        console.log(err);
      });
    return () => {
      setLoggedIn(null);
      isMounted = false;
    };
  }, [triggerRender]);

  return (
    <AuthContext.Provider
      value={{
        loggedIn,
        setLoggedIn,
        triggerRender,
        setTriggerRender,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

export { AuthContextProvider };
