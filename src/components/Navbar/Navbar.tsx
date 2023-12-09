"use client"

import Link from "next/link"
import {
  Navbar,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuToggle,
} from "@nextui-org/react"
import { mainNavbarData } from "@/data/mainNavbarData"
import SecondaryButton from "../../ui/SecondaryButton"
import PrimaryButton from "../../ui/PrimaryButton"
import { useState } from "react"

export default function MainNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

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
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <SecondaryButton className="py-2 px-6">
            <Link href="#">Login</Link>
          </SecondaryButton>
        </NavbarItem>
        <NavbarItem>
          <PrimaryButton className="py-2 px-6">
            <Link href={"/signup"}>Sign Up</Link>
          </PrimaryButton>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className="bg-light dark:bg-dark bg-opacity-95">
        {mainNavbarData.map((item, index) => (
          <Link
            href={item.link}
            key={index}
            className="text-dark dark:text-light hover:text-primary before:bg-primary before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:transition hover:before:scale-100 relative text-2xl"
          >
            {item.name}
          </Link>
        ))}
      </NavbarMenu>
    </Navbar>
  )
}
