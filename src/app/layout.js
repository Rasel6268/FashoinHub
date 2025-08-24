import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Providers from "@/provider/providers";

// Google Fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "FashionHub - Trendy Clothing",
  description: "Your ultimate fashion clothing eCommerce website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <html lang="en">
        <body
          className={`flex flex-col min-h-screen ${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <Providers>
            <Navbar />
            <main className="flex-grow">{children}</main>
            <footer>
              <Footer />
            </footer>
          </Providers>
        </body>
      </html>
    </html>
  );
}
