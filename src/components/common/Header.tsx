"use client";

import dynamic from "next/dynamic";
import Loader from "@/components/common/Loader";
import Navbar from "../navbar/Navbar";

const Breadcrumbs = dynamic(() => import("@/components/common/Breadcrumbs"), {
  ssr: false,
  loading: () => <Loader />,
});

export default function Header() {
  return (
    <>
      <Navbar />
      <Breadcrumbs />
    </>
  );
}
