import Footer from "@/components/footer";
import Header from "@/components/header";
import type { Metadata } from "next";
import { Poppins, Volkhov } from "next/font/google";
import "./globals.css";
import { SelectedFlightProvider } from '@/context/SelectedFlightContext'
import { AuthProvider } from '@/context/auth-context'

const volkhov = Volkhov({
  variable: "--font-volkhov",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const poppins = Poppins({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Skysham - Book Your Flights",
  description: "Find and book the best flights worldwide with Skysham",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${volkhov.variable} ${poppins.variable} antialiased font-poppins bg-light-white`}
      >
        <AuthProvider>
          <SelectedFlightProvider>
            <Header />
            {children}
            <Footer />
          </SelectedFlightProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
