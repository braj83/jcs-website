import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
 metadataBase: new URL('https://jcs-software.com'),
 title: {
  default: 'JCS | Software Development & Digital Solutions',
  template: '%s | JCS'
 },
 description: 'JCS delivers custom software development, digital transformation, and innovative IT solutions. Expert team in web development, mobile apps, and enterprise software.',
 keywords: ['software development', 'digital solutions', 'web development', 'mobile apps', 'IT consulting', 'Serbia', 'enterprise software'],
 authors: [{ name: 'JCS' }],
 creator: 'JCS',
 publisher: 'JCS',
 formatDetection: {
  email: false,
  address: false,
  telephone: false,
 },
 openGraph: {
  type: 'website',
  locale: 'en_US',
  url: 'https://jcs-software.com',
  title: 'JCS | Software Development & Digital Solutions',
  description: 'Custom software development and digital transformation solutions for modern businesses.',
  siteName: 'JCS',
  images: [{
   url: '/work-img-1.png',
   width: 1073,
   height: 1025,
   alt: 'JCS Software Development'
  }],
 },
 robots: {
  index: true,
  follow: true,
  googleBot: {
   index: true,
   follow: true,
   'max-video-preview': -1,
   'max-image-preview': 'large',
   'max-snippet': -1,
  },
 },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("font-sans antialiased", poppins.variable)}>
        {/* Wrap your children with the ThemeProvider */}
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
