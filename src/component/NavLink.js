"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const inactive = "text-gray-300 hover:bg-gray-700 hover:text-white";
const active = "bg-gray-700 text-white";
const base = "px-3 py-2 rounded-md text-sm font-medium";

function NavLink({ href, children, block }) {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={`${base} ${pathname === href ? active : inactive} ${
        block ? "block" : ""
      }`}
    >
      {children}
    </Link>
  );
}

export default NavLink;
