import React, { ReactNode, useCallback, useState } from "react";

export interface AuthContextInterface {
  token: string | null;
  isAuthenticated: boolean;
  login: (token: string) => void;
  logout: () => void;
}

export interface Props {
  children: ReactNode;
}

export const authContextDefaults: AuthContextInterface = {
  token: null,
  isAuthenticated: false,
  login: () => null,
  logout: () => null,
};

export const AuthContext =
  React.createContext<AuthContextInterface>(authContextDefaults);

const isServer = () => {
  return typeof window === "undefined";
};

const getToken = () => {
  if (!isServer()) {
    return localStorage.getItem("authToken");
  }
  return null;
};

export const AuthContextProvider = (props: Props) => {
  const [token, setToken] = useState(getToken());

  const userIsAuthenticated = !!token;

  const logoutHandler = useCallback(() => {
    setToken(null);
    if (!isServer()) {
      localStorage.removeItem("authToken");
    }
  }, []);

  const loginHandler = (token: string) => {
    setToken(token);
    if (!isServer()) {
      localStorage.setItem("authToken", token);
    }
  };

  const contextValue: AuthContextInterface = {
    token: token,
    isAuthenticated: userIsAuthenticated,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
