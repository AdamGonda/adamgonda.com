import type { Metadata } from "next";
import Script from "next/script";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { ScrollProgress } from "@/components/ScrollProgress";
import "./globals.css";

export const metadata: Metadata = {
  title: "Adam Gonda",
  description: "Clean code, FP concepts, and teaching.",
  metadataBase: new URL("https://www.adamgonda.com/"),
  openGraph: {
    title: "Adam Gonda",
    description: "Clean code, FP concepts, and teaching.",
    images: ["/assets/images/profile-picture.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" type="image/png" href="/assets/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body suppressHydrationWarning>
        <SiteNav />
        <ScrollProgress />
        <div className="min-h-[calc(100vh-135px)] px-s py-sm min-s:max-m:px-m min-m:max-xl:px-l min-xl:px-[20vw]">
          {children}
        </div>
        <SiteFooter />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=UA-178874876-1"
          strategy="afterInteractive"
        />
        <Script id="ga" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'UA-178874876-1');
        `}</Script>
      </body>
    </html>
  );
}
