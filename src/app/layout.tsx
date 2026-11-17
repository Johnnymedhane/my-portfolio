import type { Metadata, Viewport } from "next";
import Script from "next/script";
import Header from "../ui/Header";
import Footer from "../ui/Footer";
import { Providers } from "./providers";
import "../index.css";

export const metadata: Metadata = {
  title: "My-portfolio",
  description:
    "Johnny Medhane's portfolio - Full-stack developer showcasing React, JavaScript, and web development projects",
  icons: {
    icon: "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>JM</text></svg>",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
          rel="stylesheet"
        />
      </head>
      <body>
        <noscript>You need to enable JavaScript to run this app.</noscript>
        <Providers>
          <div className="app-layout">
            <Header />
            <div className="main-wrapper">
              <div className="main-container">{children}</div>
            </div>
            <Footer />
          </div>
        </Providers>
        <Script
          src="https://kit.fontawesome.com/51cb423296.js"
          strategy="afterInteractive"
          crossOrigin="anonymous"
        />
      </body>
    </html>
  );
}
