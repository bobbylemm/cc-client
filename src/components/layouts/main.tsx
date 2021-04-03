import React, { ReactNode } from "react";
import { useUserProfile } from "../../hooks/useUserProfile";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  useUserProfile();
  return <div>{children}</div>;
};

export default MainLayout;
