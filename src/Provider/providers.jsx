"use client";

import { Toaster } from "react-hot-toast";
import NextAuthSessionProvider from "@/NextAuthSessionProvider/NextAuthSessionProvider";

export default function Providers({ children }) {
  return (
    <NextAuthSessionProvider>
      {children}
      <Toaster position="top-right" reverseOrder={false} />
    </NextAuthSessionProvider>
  );
}
