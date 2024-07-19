import type { Metadata } from "next";

import { Kanit } from "next/font/google";

import ThemeClient from "@/components/ui/commons/ThemeClient";

import StyledComponentsRegistry from "./lib/registry";

export const metadata: Metadata = {
  title: "Magoyapp",
  description: "Magoyapp with Next.js",
};
const kanit_init = Kanit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-kanit",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={kanit_init.variable}>
      <head>
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
