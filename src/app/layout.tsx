import type { Metadata } from "next";

import "./globals.css";

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
        {/* Favicon */}

        {/*OpenGraph metadata*/}
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="Magoyapp" />
        <meta property="og:title" content="Magoyapp | Front-end dev challenge" />
        <meta property="og:description" content="Magoyapp | Front-end dev challenge" />
      </head>
      <body>{children}</body>
    </html>
  );
}
