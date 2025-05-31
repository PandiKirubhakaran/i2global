"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import MainCard from "@/components/common/MainCard";
import Input from "@/components/common/Input";
import DotGroup from "@/components/common/DotGroup";
import styles from "./SignupForm.module.css";

export default function SignupForm() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  return (
    <div className={styles.container}>
      <MainCard
        title="Sign Up"
        secondary={<DotGroup />}
      >
        <h1 style={{ textAlign: "center", marginBottom: "10px" }}>
          Sign Up
        </h1>
        <Input label="Username" value={username} onChange={setUsername} />
        <Input label="Email" type="email" value={email} onChange={setEmail} />
        <Input
          label="Password"
          type="password"
          value={password}
          onChange={setPassword}
        />
        <Input
          label="Confirm Password"
          type="password"
          value={confirm}
          onChange={setConfirm}
        />

        <div className={styles.buttonGroup}>
          <button
            className={styles.greenButton}
            onClick={() => alert("Signed up!")}
          >
            Register
          </button>

          <button
            className={styles.brownButton}
            onClick={() => router.push("/login")}
          >
            Login
          </button>
        </div>
      </MainCard>
    </div>
  );
}
