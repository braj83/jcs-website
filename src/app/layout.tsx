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
  title: "JCS Software",
  description: "Just playing around with code",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Add suppressHydrationWarning for next-themes
    <html lang="en" suppressHydrationWarning>
      <body className={cn("font-sans antialiased", poppins.variable)}>
        {/* Wrap your children with the ThemeProvider */}
        <ThemeProvider
          attribute="class"
          defaultTheme="dark" // Set dark as the default theme
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
