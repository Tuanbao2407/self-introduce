import { Oswald, Inter } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-oswald",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata = {
  title: "Portfolio | Bùi Viết Tuấn Bảo",
  description: "Portfolio cá nhân của Bùi Viết Tuấn Bảo - Web Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${oswald.variable} ${inter.variable} bg-marshallBlack text-marshallWhite`}>
        {children}
      </body>
    </html>
  );
}
