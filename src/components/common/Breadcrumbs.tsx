"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Breadcrumbs.module.css";
import { AuthLable } from "@/constant/enums";

export default function Breadcrumbs() {
  const pathname = usePathname();

  const routeMap: { [key: string]: string } = {
    "/login": "Login Page",
    "/signup": "SignUp Page",
    "/notes": "YourNotes",
    "/": "Homepage",
  };

  const current = routeMap[pathname || ""];

  if (!current || pathname === "/") return null;

  return (
    <nav className={styles.breadcrumbs}>
      <Link href="/">{AuthLable.Homepage}</Link> <span>/</span> <span>{current}</span>
    </nav>
  );
}
