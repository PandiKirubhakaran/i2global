"use client";

import dynamic from "next/dynamic";
import Loader from "@/components/common/Loader";

const SignupForm = dynamic(
  () => import("@/components/auth/SignupForm"),
  {
    loading: () => <Loader />,
    ssr: false,
  }
);

export default function SignupPage() {
  return <SignupForm />;
}
