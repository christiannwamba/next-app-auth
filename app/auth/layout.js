"use client";
import React from "react";
import { Amplify } from "aws-amplify";
import awsExports from "@/aws-exports";

Amplify.configure({ ...awsExports, ssr: true });

export default function Layout({ children, title }) {
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      {children}
    </div>
  );
}
