// Styling Imports
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBars } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { Button } from "@/components/ui/button";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

import Navigation from "./Navigation";
import ThemeToggle from "./ThemeToggle";
import Link from "next/link";
const TopNavbar = ({ university }) => {
  return (
    <>
      {/* Navbar */}
      <nav className="shadow-md">
        <div className="flex items-center justify-between max-w-screen-xl p-4 mx-auto">
          {/* Logo */}
          <div className="flex items-center flex-1 space-x-3 rtl:space-x-reverse ">
            <div className="flex items-center justify-center text-2xl text-center">
              {/* Mobile Left Menu Icon */}
              <Drawer direction="left">
                <DrawerTrigger>
                  <div className="pr-4 cursor-pointer md:hidden">
                    <FontAwesomeIcon icon={faBars} />
                  </div>
                </DrawerTrigger>
                <DrawerContent className="w-3/4 h-screen rounded-none">
                  <DrawerHeader>
                    <DrawerTitle>Select an action</DrawerTitle>
                  </DrawerHeader>
                  <Navigation />
                  <DrawerFooter>
                    <DrawerClose>
                      <Button
                        variant="outline"
                        className="border-gray-400 rounded-xl"
                      >
                        Cancel
                      </Button>
                    </DrawerClose>
                  </DrawerFooter>
                </DrawerContent>
              </Drawer>

              {/* Logo */}
              <a href="/login" className="font-semibold whitespace-nowrap">
                WHATSUNI |
              </a>
              <span className="items-center ml-2 text-xl">{university}</span>
            </div>
          </div>
          {/* Search Bar */}
          <div className="flex justify-center w-1/3 md:order-1">
            <div className="relative hidden md:block">
              <div className="absolute inset-y-0 flex items-center pointer-events-none start-0 ps-3">
                <FontAwesomeIcon icon={faSearch} />
              </div>
              <input
                type="text"
                id="search-navbar"
                className="block w-full px-32 py-2 border border-gray-300 rounded-lg text-md ps-10"
                placeholder="Search..."
              ></input>
            </div>
          </div>
          {/* Profile Picture */}
          <div className="items-center justify-end text-xl flex-nowrap md:order-2 md:flex md:flex-1">
            <ThemeToggle />
            <Link href="/mit-edu/u/profile">
              <Image
                src="https://thispersondoesnotexist.com/"
                width={256}
                height={256}
                className="hidden ml-6 rounded-full h-11 w-11 md:block"
                alt="Profile Picture"
              /></Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default TopNavbar;
