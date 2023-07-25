import Link from "next/link";
import React from "react";

function Dashboard() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <p>This is your dashboard</p>
      <Link
        href="/"
        className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
      >
        Go to Landing Page
      </Link>
    </main>
  );
}

export default Dashboard;
