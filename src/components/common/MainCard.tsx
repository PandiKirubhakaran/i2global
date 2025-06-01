"use client";

import styles from "./MainCard.module.css";

interface MainCardProps {
  title: string;
  secondary?: React.ReactNode;
  children: React.ReactNode;
  whiteBg?: boolean;
  className?: string;
}

export default function MainCard({
  title,
  secondary,
  children,
  whiteBg,
  className,
}: MainCardProps) {
  return (
    <div className={`${styles.card} ${className ?? ""}`}>
      <div className={styles.header}>
        <h2 className={styles.title}>{title}</h2>
        {secondary && <div className={styles.secondary}>{secondary}</div>}
      </div>
      <div className={`${styles.body} ${whiteBg ? styles.whiteBg : ""}`}>
        {children}
      </div>
    </div>
  );
}
