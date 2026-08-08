import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://mias-smack-shack.bertjxz2016.chatgpt.site"),
  title: "The Snack Shack | Reitz Union",
  description: "Fast snacks, drinks, and lunch at the Reitz Union, Tuesday through Friday.",
  openGraph: {
    title: "The Snack Shack | Today's Menu",
    description: "Today's lunch, snacks, and drinks from The Snack Shack.",
    images: [{ url: "/og.png", width: 1536, height: 1024, alt: "The Snack Shack menu" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Snack Shack | Today's Menu",
    description: "Today's lunch, snacks, and drinks from The Snack Shack.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
