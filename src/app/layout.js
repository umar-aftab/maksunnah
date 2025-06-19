import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from '@vercel/analytics/next';


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Maktabah As Sunnah - Calgary",
  description: "Upon the methodology of the salaf !",
  icons: {
    icon: 'favicon-png.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta name="description" content="Daily Islamic articles, Salah timings, Twitter feed, and downloadable fliers from Maktabah As Sunnah, Calgary." />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics/>
      </body>
    </html>
  );
}
