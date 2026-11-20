import type { Metadata, Viewport } from "next";
import Script from "next/script";
import Header from "../ui/Header";
import Footer from "../ui/Footer";
import { Providers } from "./providers";
import styles from "../ui/AppLayout.module.css";
import "../index.css";

export const metadata: Metadata = {
  title: {
    default: "JohnnyMe - Home",
    template: "JohnnyMe - %s",
  },
  description:
    "Johnny Medhane's portfolio - Full-stack developer showcasing React, JavaScript, and web development projects",
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
          <div className={styles.appLayout}>
            <Header />
            <div className={styles.mainWrapper}>
              <div className={styles.mainContainer}>{children}</div>
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
