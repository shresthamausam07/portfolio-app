import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mausam Shrestha - Digital Architect | Software Engineer",
  description: "Founding Software Engineer at Blue Collar Pro, architecting the future of construction technology. Computer Science major specializing in Next.js, TypeScript, AWS, and innovative SaaS solutions.",
  keywords: ["Software Engineer", "Full Stack Developer", "Next.js", "TypeScript", "AWS", "Blue Collar Pro", "Construction Tech", "SaaS", "Digital Architect"],
  authors: [{ name: "Mausam Shrestha" }],
  openGraph: {
    title: "Mausam Shrestha - Digital Architect",
    description: "Building the future of construction technology at Blue Collar Pro",
    url: "https://mausam-portfolio.vercel.app",
    siteName: "Digital Architect Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
