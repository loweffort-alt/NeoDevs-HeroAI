"use client"
import LogoNavbar from "@/components/ui/logo-navbar";
import MenuToggle from "@/components/menu-toggle";
import OptionsHeader from "@/components/options-header";
import React, { createContext, useCallback, useContext } from "react";

const AuthContext = createContext(null)

export const useAuth = () => useContext(AuthContext)

const Header = () => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  const toggleNavbar = useCallback(() => {
    setNavbarOpen((prev) => !prev)
  }, [])

  return (
    <header className="fixed top-0 w-full clearNav z-50">
      <div className="max-w-5xl mx-auto flex flex-wrap p-3 flex-col md:flex-row">
        <div className="flex flex-row items-center justify-between p-3 md:p-1">
          <LogoNavbar />
          <MenuToggle onClick={toggleNavbar} />
        </div>
        <div
          className={
            "md:flex flex-col md:flex-row flex-grow items-center transition-all" +
            (navbarOpen ? " flex max-md:h-[85vh] w-full self-end" : " hidden")
          }
        >
          <OptionsHeader />
        </div>
      </div>
    </header>
  );
}

export default Header

