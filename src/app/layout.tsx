import type { Metadata } from "next";
import "../index.css";

export const metadata: Metadata = {
  title: {
    default: "Voxxai — Software Engineer",
    template: "%s | VOXXAI",
  },
  description:
    "Portfolio of Gilian Kranendonk (Voxxai), a software engineer building web apps, APIs and product systems.",
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
    title: "Voxxai — Software Engineer",
    description:
      "Gilian Kranendonk builds web apps, APIs and product systems.",
    type: "website",
    locale: "en_US",
    siteName: "VOXXAI Portfolio",
  },
  twitter: {
    card: "summary",
    title: "Voxxai — Software Engineer",
    description:
      "Gilian Kranendonk builds web apps, APIs and product systems.",
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    shortcut: "/favicon.svg",
    apple: "/apple-touch-icon.png",
  },
  metadataBase: new URL("https://voxxai.nl"),
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#080a0f",
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
      </body>
    </html>
  );
}
