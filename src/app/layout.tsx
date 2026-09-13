import type { Metadata, Viewport } from "next";
import { getAdsenseConfig, shouldShowAds } from "@/lib/adsense";

export const metadata: Metadata = {
  title: "The Beast's Portfolio",
  description:
    "Moe Pike Soe aka The Beast — colorful, bubbly and futuristic graphic design. Restored ~2012 portfolio.",
  robots: "index,follow",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const { client } = getAdsenseConfig();
  const showAds = shouldShowAds();

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href="/assets/css/site.css" />
        {client ? <meta name="google-adsense-account" content={client} /> : null}
        {showAds ? (
          <script
            async
            crossOrigin="anonymous"
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${encodeURIComponent(client)}`}
          />
        ) : null}
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
