import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import "../index.css";

export const metadata: Metadata = {
  title: "VOXXAI - Full-Stack Engineer",
  description:
    "Voxxai's portfolio. Full-stack engineer crafting modern web experiences with React, TypeScript, and elegant design.",
  openGraph: {
    title: "VOXXAI - Full-Stack Engineer",
    description:
      "Voxxai's portfolio. Full-stack engineer crafting modern web experiences with React, TypeScript, and elegant design.",
    type: "website",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a0a0a",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
