"use client"
import OptionsHeader from "@/components/options-header";
import React, { createContext, useCallback, useContext } from "react";
import Link from 'next/link'
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/mode-toggle";

const AuthContext = createContext(null)

export const useAuth = () => useContext(AuthContext)

const Header = () => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  const toggleNavbar = useCallback(() => {
    setNavbarOpen((prev) => !prev)
  }, [])

  return (
    <header className="fixed top-0 w-full z-50 nav-separator">
      <div className="max-w-5xl mx-auto flex justify-center flex-wrap flex-col md:flex-row">
        <div className="flex flex-row items-center justify-between p-3 md:py-4 w-full">
          <Link
            href="#home"
            className="flex text-xl md:text-3xl font-medium md:mb-0 dark:text-foreground"
          >HeroAI
          </Link>
          <div
            className="hidden md:flex flex-col md:flex-row flex-grow items-center transition-all"
          >
            <OptionsHeader />
          </div>
          <div className="flex gap-2 items-center">
            <Button>
              <Link href="/logout">
                Login
              </Link>
            </Button>
            <ModeToggle />
            <div
              className="md:hidden"
              onClick={toggleNavbar}
            >
              <Menu />
            </div>
          </div>
        </div>
        <div
          className={
            (navbarOpen ? " max-md:h-[85vh]" : " hidden")
          }
        >
          <OptionsHeader />
        </div>
      </div>
    </header>
  );
}

export default Header

