"use client";

import styles from "./Input.module.css";

interface InputProps {
  label: string;
  type?: string;
  value: string;
  onChange: (val: string) => void;
}

export default function Input({ label, type = "text", value, onChange }: InputProps) {
  return (
    <div className={styles.inputGroup}>
      <label>{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required
      />
    </div>
  );
}
