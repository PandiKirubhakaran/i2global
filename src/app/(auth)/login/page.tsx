"use client";

import dynamic from "next/dynamic";
import Loader from "@/components/common/Loader";

const LoginForm = dynamic(
  () => import("@/components/auth/LoginForm"),
  {
    loading: () => <Loader />,
    ssr: false,
  }
);

export default function LoginPage() {
  return <LoginForm />;
}
