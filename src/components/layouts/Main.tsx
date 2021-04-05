import React, { ReactNode } from "react";
import { useUserProfile } from "../../hooks/useUserProfile";
import { Navbar } from "../reusable";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  useUserProfile();
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default MainLayout;
