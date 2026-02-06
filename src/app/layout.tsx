import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "NK | Graphic & Social Media Designer",
  description:
    "Portfolio of NK, a graphic designer and content creator specializing in social media design, photography, and video editing.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* This ensures the favicon appears next to the title */}
        <title>{metadata.title}</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
