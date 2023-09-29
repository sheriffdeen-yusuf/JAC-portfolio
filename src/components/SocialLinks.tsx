import React from "react";
import { Instagram, Facebook, Linkedin } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import ThemeToggle from "@/layouts/ThemeToggle";

function SocialLinks() {
  const router = useRouter();
  const youTube =
    router.pathname === "/" ? "/youtube.svg" : "/youtubeBlack.svg";

  return (
    <div className="flex items-center justify-center gap-1">
      {/* <ThemeToggle /> */}
      <Link
        href="https://www.linkedin.com/in/yusuf-sheriffdeen-203199185/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="  rounded-full bg-slate-200/10 px-2 shadow-lg hover:bg-slate-200/50 ">
          <Instagram className="h-6 w-6 md:h-10 md:w-6" />
        </button>
      </Link>
      <Link
        href="https://www.linkedin.com/in/yusuf-sheriffdeen-203199185/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="rounded-full bg-slate-200/10 px-2 shadow-lg hover:bg-slate-200/50 ">
          <Facebook className="h-6 w-6 md:h-10 md:w-6" />
        </button>
      </Link>
      <Link
        href="https://www.linkedin.com/in/yusuf-sheriffdeen-203199185/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="rounded-full bg-slate-200/10 px-2 shadow-lg hover:bg-slate-200/50 ">
          <Linkedin className="h-6 w-6 md:h-10 md:w-6" />
        </button>
      </Link>

      <Link
        href="https://www.linkedin.com/in/yusuf-sheriffdeen-203199185/"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full bg-slate-200/10 px-2 shadow-lg hover:bg-slate-200/50 "
      >
        <Image
          src={youTube}
          height={100}
          width={100}
          className="h-6 w-6 md:h-10 md:w-6"
          alt="youtube.svg"
        />
      </Link>
    </div>
  );
}

export default SocialLinks;
