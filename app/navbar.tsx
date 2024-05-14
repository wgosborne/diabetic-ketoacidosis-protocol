"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";
import classNames from "classnames";
import logo from "../assets/AutoZone-Logo.png";

const NavBar = () => {
  const currPath = usePathname();
  console.log(currPath);

  const links = [
    { label: "Release Results", href: "/" },
    { label: "Plan a Pilot", href: "/" },
  ];

  return (
    <nav className="flex space-x-6 borber-b mb-5 px-5 h-14 items-center navbar">
      <Link href={"/"}>
        {/* <Image height="60" width="95" src={logo} alt="AutoZone Logo" /> */}
      </Link>
      <ul className="flex space-x-6">
        {links.map((link) => (
          <Link
            key={link.href}
            className={classNames({
              "text-zinc-900": link.href === currPath,
              "text-zinc-500": link.href !== currPath,
              "hover:text-zinc-800 transition-colors": true,
            })}
            href={link.href}
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
