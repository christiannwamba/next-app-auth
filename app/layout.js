import "./globals.css";
import { Inter } from "next/font/google";
import { Amplify } from "aws-amplify";
import awsExports from "../aws-exports";

Amplify.configure({ ...awsExports, ssr: true });

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Your Next.js App",
  description:
    "A Next.js App that shows you to protect pages in Next.js app directory",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
