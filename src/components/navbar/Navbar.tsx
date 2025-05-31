import Link from "next/link";
import styles from "./Navbar.module.css";
import classes from "../../app/page.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={classes.container}>
        <div className={styles.logo}>
          <Link href="/">KeepNotes</Link>
        </div>
        <div className={styles.navLinks}>
          <Link href="/about">About</Link>
          <Link href="/notes">Notes</Link>
          <Link href="/account">Account</Link>
          <Link href="/login">Login</Link>
        </div>
      </div>
    </nav>
  );
}
