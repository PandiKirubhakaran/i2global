import Link from "next/link";
import styles from "./Navbar.module.css";
import classes from "../../app/page.module.css";
import { NavBarLable } from "@/constant/enums";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={classes.container}>
        <div className={styles.logo}>
          <Link href="/">{NavBarLable.KeepNotes}</Link>
        </div>
        <div className={styles.navLinks}>
          <Link href="/about">{NavBarLable.About}</Link>
          <Link href="/notes">{NavBarLable.Notes}</Link>
          <Link href="/account">{NavBarLable.Account}</Link>
          <Link href="/login">{NavBarLable.Login}</Link>
        </div>
      </div>
    </nav>
  );
}
