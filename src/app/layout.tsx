import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Chikoma Portfolio | Software Developer & Creative Problem Solver",
  description: "Multi-skilled software developer, IT technician, and digital marketing specialist delivering real-world solutions.",
  openGraph: {
    title: "Chikoma Sakala | Web Developer, Digital Marketing & Graphic Design",
    description: "Multi-skilled software developer, IT technician, and digital marketing specialist. 2+ years crafting high-impact digital experiences.",
    url: "https://chikoma-portfolio.vercel.app",
    siteName: "Chikoma Portfolio",
    images: [
      {
        url: "https://chikoma-portfolio.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Chikoma Sakala — Portfolio",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chikoma Sakala | Web Developer & Digital Strategist",
    description: "Multi-skilled software developer, IT technician, and digital marketing specialist delivering real-world solutions.",
    images: ["https://chikoma-portfolio.vercel.app/og-image.png"],
  },
  metadataBase: new URL("https://chikoma-portfolio.vercel.app"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground transition-colors duration-300">
        {children}
      </body>
    </html>
  );
}
