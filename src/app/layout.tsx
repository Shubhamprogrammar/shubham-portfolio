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
  title: "Shubham Maurya | Software Developer",
  description: "Shubham Maurya is a Full Stack Developer specializing in Next.js, React, Node.js, AWS and AI.",
  keywords: [
    "Shubham Maurya",
    "Software Developer",
    "Web Developer",
    "MERN Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Python Developer",
    "Navi Mumbai",
    "Ghansoli",
    "SIES Nerul",
    "Computer Science Graduate",
    "Portfolio Website",
  ],
  authors: [{ name: "Shubham Maurya" }],
  creator: "Shubham Maurya",
  openGraph: {
    title: "Shubham Maurya | Software Developer",
    description: "Shubham Maurya is a Full Stack Developer specializing in Next.js, React, Node.js, AWS and AI.",
    type: "website",
    locale: "en_IN",
    siteName: "Shubham Maurya",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shubham Maurya | Software Developer",
    description: "Shubham Maurya is a Full Stack Developer specializing in Next.js, React, Node.js, AWS and AI.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background text-foreground transition-colors duration-300">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
