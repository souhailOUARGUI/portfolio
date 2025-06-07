import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Souhail OUARGUI's Portfolio",
  description: "Full-stack (MERN) web and mobile developer with expertise in IoT solutions. Software Engineering student passionate about creating efficient, scalable applications.",
  keywords: ["Souhail OUARGUI", "Software Engineer", "Full Stack Developer", "MERN Stack", "Mobile Developer", "IoT", "React", "Node.js", "Portfolio"],
  authors: [{ name: "Souhail OUARGUI" }],
  creator: "Souhail OUARGUI",
  openGraph: {
    title: "Souhail OUARGUI's Portfolio",
    description: "Full-stack (MERN) web and mobile developer with expertise in IoT solutions",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Souhail OUARGUI's Portfolio",
    description: "Full-stack (MERN) web and mobile developer with expertise in IoT solutions",
    creator: "@SouhailOuargui_",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
