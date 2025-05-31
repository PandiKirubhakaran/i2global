"use client";

import styles from "./DotGroup.module.css";

export default function DotGroup() {
  return (
    <div className={styles.dotGroup}>
      <span className={`${styles.dot} ${styles.greenDot}`} />
      <span className={`${styles.dot} ${styles.blueDot}`} />
      <span className={`${styles.dot} ${styles.redDot}`} />
    </div>
  );
}
