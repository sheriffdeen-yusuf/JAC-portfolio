import React from "react";
import Image from "next/image";
import { useRouter, Router } from "next/router";
import Link from "next/link";

function Logo() {
  const router = useRouter();
  const useLogo = router.pathname === "/" ? "/logo.svg" : "/logoBlack.svg";

  return (
    <div className="flex items-center justify-center gap-1">
      <Link href="/">
        <Image src={useLogo} alt="logo" height={50} width={50} />
      </Link>
      <h1 className="text-2xl font-semibold tracking-wide">
        Joshua Akubo Gabriel
      </h1>
    </div>
  );
}

export default Logo;
