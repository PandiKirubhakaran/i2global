"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import MainCard from "@/components/common/MainCard";
import Input from "@/components/common/Input";
import styles from "./LoginForm.module.css";
import DotGroup from "../common/DotGroup";
import { AuthLable } from "@/constant/enums";

export default function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className={styles.container}>
      <MainCard title="Login" secondary={<DotGroup />}>
        <h1 style={{ textAlign: "center", marginBottom: "10px" }}>
          {AuthLable.Login}
        </h1>
        <Input label="Email" type="email" value={email} onChange={setEmail} />
        <Input
          label="Password"
          type="password"
          value={password}
          onChange={setPassword}
        />

        <div className={styles.buttonGroup}>
          <button
            className={styles.brownButton}
            onClick={() => router.push("/notes")}
          >
            {AuthLable.Login}
          </button>

          <button
            className={styles.blueButton}
            onClick={() => router.push("/signup")}
          >
            {AuthLable.Register}
          </button>
        </div>
      </MainCard>
    </div>
  );
}
