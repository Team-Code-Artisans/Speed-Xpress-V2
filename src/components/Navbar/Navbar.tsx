"use client";

import Link from "next/link";
import {
  Navbar,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuToggle,
} from "@nextui-org/react";
import SecondaryButton from "../../ui/SecondaryButton";
import PrimaryButton from "../../ui/PrimaryButton";
import { useState } from "react";
import { mainNavbarData } from "@/data/mainNavbarData";
import { useAuthContext } from "@/hooks/useAuthContext";
import { useRouter } from "next/navigation";

const MainNavbar = () => {
  const { user, role, logOut, loading } = useAuthContext();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const router = useRouter();

  const handleDashboardClick = () => {
    if (role) {
      const dashboardUrl = `/dashboard/${role.toLowerCase()}`;
      router.push(dashboardUrl);
    }
  };

  return (
    <Navbar
      shouldHideOnScroll
      isBordered
      onMenuOpenChange={setIsMenuOpen}
      className="bg-light dark:bg-dark border-gray-200 dark:border-gray-800"
      maxWidth="xl"
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <Link href={"/"} className="font-bold text-inherit text-xl select-none">
          SPEED<span className="text-primary">XPRESS</span>
        </Link>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-6" justify="center">
        {mainNavbarData.map((item, index) => (
          <Link
            key={index}
            href={item.link}
            className="text-dark dark:text-light hover:text-primary before:bg-primary text-xl before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:transition hover:before:scale-100 relative"
          >
            {item.name}
          </Link>
        ))}
      </NavbarContent>
      {!user && loading ? (
        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <SecondaryButton isLoading={loading}></SecondaryButton>
          </NavbarItem>
          <NavbarItem>
            <PrimaryButton isLoading={loading}></PrimaryButton>
          </NavbarItem>
        </NavbarContent>
      ) : !user ? (
        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <SecondaryButton href="/login">Login</SecondaryButton>
          </NavbarItem>
          <NavbarItem>
            <PrimaryButton href="/register">Sign Up</PrimaryButton>
          </NavbarItem>
        </NavbarContent>
      ) : (
        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <SecondaryButton onClick={() => logOut()}>Log Out</SecondaryButton>
          </NavbarItem>
          <NavbarItem>
            <PrimaryButton onClick={handleDashboardClick}>
              Dashboard
            </PrimaryButton>
          </NavbarItem>
        </NavbarContent>
      )}
      <NavbarMenu className="bg-light dark:bg-dark bg-opacity-95">
        {mainNavbarData.map((item, index) => (
          <Link
            href={item.link}
            key={index}
            className="text-dark dark:text-light hover:text-primary before:bg-primary text-xl before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:transition hover:before:scale-100 relative"
          >
            {item.name}
          </Link>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default MainNavbar;
