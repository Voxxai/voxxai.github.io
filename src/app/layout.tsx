import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import "../index.css";

export const metadata: Metadata = {
  title: {
    default: "VOXXAI - Full-Stack Engineer",
    template: "%s | VOXXAI",
  },
  description:
    "Voxxai's portfolio. Full-stack engineer crafting modern web experiences with React, TypeScript, and elegant design. Specialized in frontend architecture, API design, and scalable systems.",
  keywords: [
    "Voxxai",
    "Full-Stack Developer",
    "React Developer",
    "TypeScript",
    "Web Development",
    "Frontend Engineer",
    "Portfolio",
  ],
  authors: [{ name: "Voxxai" }],
  creator: "Voxxai",
  openGraph: {
    title: "VOXXAI - Full-Stack Engineer",
    description:
      "Voxxai's portfolio. Full-stack engineer crafting modern web experiences with React, TypeScript, and elegant design.",
    type: "website",
    locale: "en_US",
    siteName: "VOXXAI Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "VOXXAI - Full-Stack Engineer",
    description:
      "Full-stack engineer crafting modern web experiences with React, TypeScript, and elegant design.",
  },
  icons: {
    icon: "/favicon.svg",
  },
  metadataBase: new URL("https://voxxai.github.io"),
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
