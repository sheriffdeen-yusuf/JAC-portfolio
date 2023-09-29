import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

function NavLinks() {
  const router = useRouter();
  const textColor = router.pathname === "/" ? "text-white" : "text-stone-800";
  return (
    <ul
      className={`${textColor} flex items-center justify-around gap-3 text-sm font-medium`}
    >
      <Link
        href="/about"
        className={`${
          router.pathname === "/" ? "hover:text-white " : "hover:text-black "
        } hover:underline`}
      >
        <li>About</li>
      </Link>
      <Link
        href="/portfolio"
        className={`${
          router.pathname === "/" ? "hover:text-white " : "hover:text-black "
        } hover:underline`}
      >
        <li>Portfolio</li>
      </Link>
      <Link
        href="/resume"
        className={`${
          router.pathname === "/" ? "hover:text-white " : "hover:text-black "
        } hover:underline`}
      >
        <li>Résumé</li>
      </Link>
      <Link
        href="/calendar"
        className={`${
          router.pathname === "/" ? "hover:text-white " : "hover:text-black "
        } hover:underline`}
      >
        <li>Calendar </li>
      </Link>
      <Link
        href="/contact"
        className={`${
          router.pathname === "/" ? "hover:text-white " : "hover:text-black "
        } hover:underline`}
      >
        <li>Contact </li>
      </Link>
    </ul>
  );
}

export default NavLinks;
