import Logo from "@/components/Logo";
import NavLinks from "@/components/NavLinks";
import SocialLinks from "@/components/SocialLinks";
import { useRouter } from "next/router";
import React from "react";

function Header() {
  const router = useRouter();
  const bgPath =
    router.pathname === "/" ? "bg-stone-900 text-white" : "bg-white text-black";
  return (
    <header
      className={`item-center ${bgPath} fixed  left-0 top-0 flex w-full justify-between  px-20 py-2`}
    >
      <Logo />
      <NavLinks />
      <SocialLinks />
    </header>
  );
}

export default Header;
