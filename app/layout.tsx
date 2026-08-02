import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://mias-smack-shack.bertjxz2016.chatgpt.site"),
  title: "Mia's Smack Shack | Main Quad",
  description: "Snacks, sips, and lunch on the Main quad, Tuesday through Friday. Cash only.",
  openGraph: {
    title: "Mia's Smack Shack | Today's Menu",
    description: "Today's lunch, snacks, and drinks from Mia's Smack Shack.",
    images: [{ url: "/og.png", width: 1536, height: 1024, alt: "Mia's Smack Shack today's menu" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mia's Smack Shack | Today's Menu",
    description: "Today's lunch, snacks, and drinks from Mia's Smack Shack.",
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
