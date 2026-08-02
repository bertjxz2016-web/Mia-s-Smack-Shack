import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mia's Smack Shack | Main Quad",
  description: "Snacks, sips, and lunch on the Main quad, Tuesday through Friday. Cash only.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
