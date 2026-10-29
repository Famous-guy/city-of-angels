import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { SITE, ESTATE } from "@/lib/config";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: `City of Angels Estate | ${SITE.name}`,
  description: `${ESTATE.tagline}. ${ESTATE.description} Located at ${ESTATE.location}.`,
  keywords: [
    "City of Angels Estate",
    "IM Properties",
    "real estate Port Harcourt",
    "houses for sale Port Harcourt",
    "Obiri-Ikwerre Airport Road",
    "Certificate of Occupancy",
    "affordable housing Nigeria",
    "Federal Mortgage Bank",
    "terrace houses",
    "duplexes Port Harcourt",
  ],
  openGraph: {
    title: `City of Angels Estate — ${SITE.name}`,
    description: ESTATE.tagline,
    url: SITE.url,
    siteName: SITE.name,
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `City of Angels Estate — ${SITE.name}`,
    description: ESTATE.tagline,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={dmSans.variable}>
      <body>{children}</body>
    </html>
  );
}
