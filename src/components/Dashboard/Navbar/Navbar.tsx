"use client";

import Link from "next/link";
import {
  Avatar,
  Navbar,
  NavbarContent,
  NavbarItem,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem,
  NavbarMenuToggle,
  NavbarMenu,
} from "@nextui-org/react";
import PrimaryButton from "@/ui/PrimaryButton";
import {
  adminDropdownData,
  adminNavbarData,
  dropdownData,
  merchantNavbarData,
  regularNavbarData,
  riderNavbarData,
} from "@/data/navbarData";
import { useAuth } from "@/hooks/useAuth";
import { useState } from "react";

const DashboardNavbar = () => {
  const { user, role, logOut } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
      onMenuOpenChange={setIsMenuOpen}
      className="bg-light dark:bg-dark border-gray-200 dark:border-gray-800"
      maxWidth="xl"
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="lg:hidden"
        />
        <Link
          href={"/"}
          className="font-bold text-inherit text-xl select-none hidden sm:inline-block"
        >
          SPEED<span className="text-primary">XPRESS</span>
        </Link>
      </NavbarContent>

      <NavbarContent className="sm:flex gap-6" justify="end">
        <div className="hidden lg:flex gap-6">
          {navbarData.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              className="text-dark dark:text-light before:bg-primary text-lg before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:transition hover:before:scale-100 relative whitespace-nowrap select-none"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <NavbarItem>
          <PrimaryButton href={`/dashboard/${role}/create-parcel`} size="md">
            Create Parcel
          </PrimaryButton>
        </NavbarItem>
        <Dropdown placement="bottom-end" backdrop="opaque" showArrow>
          <DropdownTrigger className="cursor-pointer">
            <Avatar
              size="sm"
              as="button"
              isBordered
              showFallback
              src={user?.photoURL ?? ""}
              className="transition-transform text-gray-600 dark:text-light"
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions">
            <DropdownSection aria-label="email" showDivider>
              <DropdownItem key="profile" className="h-14 gap-2">
                Signed in as
                <p className="font-semibold">{user?.email}</p>
              </DropdownItem>
            </DropdownSection>
            <DropdownSection aria-label="link" showDivider>
              {role === "admin"
                ? adminDropdownData.map((item) => (
                    <DropdownItem
                      as={Link}
                      href={`/dashboard/admin/${item.link}`}
                      key={item.name}
                    >
                      {item.name}
                    </DropdownItem>
                  ))
                : dropdownData.map((item) => (
                    <DropdownItem
                      as={Link}
                      href={`/dashboard/${role}${item.link}`}
                      key={item.name}
                    >
                      {item.name}
                    </DropdownItem>
                  ))}
            </DropdownSection>
            <DropdownSection aria-label="logout">
              <DropdownItem
                onClick={() => logOut()}
                className="text-danger"
                color="danger"
              >
                Sign Out
              </DropdownItem>
            </DropdownSection>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
      <NavbarMenu className="bg-light dark:bg-dark bg-opacity-95">
        {navbarData.map((item, index) => (
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

export default DashboardNavbar;
