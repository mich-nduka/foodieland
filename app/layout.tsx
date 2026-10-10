import { Footer } from "@/components/Footer"
import Header from "@/components/Header"
import { ROUTES as routes } from "@/data"
import type { Metadata } from "next"
import { Bricolage_Grotesque, Hanken_Grotesk } from "next/font/google"
import type { ReactNode } from "react"
import "./globals.css"

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
})

const sans = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Foodieland — Recipes worth cooking twice",
  description: "A modern classic recipe journal: seasonal recipes, technique guides and interviews.",
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body className="bg-paper font-sans text-ink antialiased">
        <Header links={routes} />
        {children}
        <Footer />
      </body>
    </html>
  )
}
