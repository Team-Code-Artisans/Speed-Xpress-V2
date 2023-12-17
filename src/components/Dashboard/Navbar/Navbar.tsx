"use client";

import Link from "next/link";
import { Navbar, NavbarContent, NavbarItem } from "@nextui-org/react";
import PrimaryButton from "@/ui/PrimaryButton";
import {
  adminNavbarData,
  merchantNavbarData,
  regularNavbarData,
  riderNavbarData,
} from "@/data/navbarData";
import { useAuth } from "@/hooks/useAuth";

const DashboardNavbar = () => {
  const { user, role, logOut, loading } = useAuth();

  let navbarData = [];

  switch (role) {
    case "regular":
      navbarData = regularNavbarData;
      break;
    case "merchant":
      navbarData = merchantNavbarData;
      break;
    case "rider":
      navbarData = riderNavbarData;
      break;
    case "admin":
      navbarData = adminNavbarData;
      break;
    default:
      navbarData = regularNavbarData;
      break;
  }

  return (
    <Navbar
      shouldHideOnScroll
      isBordered
      className="bg-light dark:bg-dark border-gray-200 dark:border-gray-800"
      maxWidth="xl"
    >
      <NavbarContent>
        <Link href={"/"} className="font-bold text-inherit text-xl select-none">
          SPEED<span className="text-primary">XPRESS</span>
        </Link>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-6" justify="end">
        {navbarData.map((item, index) => (
          <Link
            key={index}
            href={item.link}
            className="text-dark dark:text-light hover:text-primary before:bg-primary text-xl before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:transition hover:before:scale-100 relative whitespace-nowrap select-none"
          >
            {item.name}
          </Link>
        ))}
        <NavbarItem>
          <PrimaryButton href="/register" size="md">
            Sign Up
          </PrimaryButton>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default DashboardNavbar;
