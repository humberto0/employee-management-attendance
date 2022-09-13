import React from "react";

import { AuthProvider } from "./AuthContext";
import { SidebarDrawerProvider } from "./SidebarDrawerContext";
const AppProvider = ({ children }: any) => {
  return (
    <SidebarDrawerProvider>
      <AuthProvider>{children}</AuthProvider>;
    </SidebarDrawerProvider>
  );
};
export default AppProvider;
