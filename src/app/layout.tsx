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
  title: "Shubham Maurya | Software & Web Developer Portfolio",
  description: "Professional portfolio of Shubham Maurya, a Software and Web Developer based in Ghansoli, Navi Mumbai. Specialize in MERN stack, Next.js, Java, Python, and Machine Learning.",
  keywords: [
    "Shubham Maurya",
    "Software Developer",
    "Web Developer",
    "MERN Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Python Developer",
    "Java Developer",
    "Navi Mumbai",
    "Ghansoli",
    "SIES Nerul",
    "Computer Science Graduate",
    "Machine Learning Developer",
    "Portfolio Website",
  ],
  authors: [{ name: "Shubham Maurya" }],
  creator: "Shubham Maurya",
  openGraph: {
    title: "Shubham Maurya | Software & Web Developer Portfolio",
    description: "Explore the computer science projects, MERN web applications, and professional credentials of Shubham Maurya.",
    type: "website",
    locale: "en_IN",
    siteName: "Shubham Maurya Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shubham Maurya | Software & Web Developer Portfolio",
    description: "Explore the computer science projects, MERN web applications, and professional credentials of Shubham Maurya.",
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
