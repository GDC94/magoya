import type { Metadata } from "next";

import "./globals.css";
import ThemeClient from "@/components/commons/ThemeClient";

import StyledComponentsRegistry from "./lib/registry";

export const metadata: Metadata = {
  title: "Magoyapp",
  description: "Magoyapp with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/*OpenGraph metadata*/}
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="Magoyapp" />
        <meta property="og:title" content="Magoyapp | Front-end dev challenge" />
        <meta property="og:description" content="Magoyapp | Front-end dev challenge" />
      </head>
      <StyledComponentsRegistry>
        <ThemeClient>
          <body>{children}</body>
        </ThemeClient>
      </StyledComponentsRegistry>
    </html>
  );
}
