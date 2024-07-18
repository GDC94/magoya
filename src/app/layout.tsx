import type { Metadata } from "next";

import { GeistSans } from "geist/font/sans";

import ThemeClient from "@/components/ui/commons/ThemeClient";

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
    <html lang="en" className={GeistSans.className}>
      <head>
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="Magoyapp" />
        <meta property="og:title" content="Magoyapp | Front-end dev challenge" />
        <meta property="og:description" content="Magoyapp | Front-end dev challenge" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Anton&family=Prompt:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <StyledComponentsRegistry>
        <ThemeClient>
          <body>{children}</body>
        </ThemeClient>
      </StyledComponentsRegistry>
    </html>
  );
}
