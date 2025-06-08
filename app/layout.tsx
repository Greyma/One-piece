import type React from "react"
import type { Metadata } from "next"
import { Inter, Cinzel, Pirata_One } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AudioProvider } from "@/components/audio-manager"

const inter = Inter({ subsets: ["latin"] })
const cinzel = Cinzel({ subsets: ["latin"], variable: "--font-cinzel" })
const pirataOne = Pirata_One({ weight: "400", subsets: ["latin"], variable: "--font-pirata" })

export const metadata: Metadata = {
  title: "One Piece",
  description:
    "Explorez l'univers de One Piece, découvrez l'équipage du Chapeau de Paille et partez à l'aventure sur Grand Line !",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={`${inter.className} ${cinzel.variable} ${pirataOne.variable} bg-gradient-to-b from-blue-950 to-blue-900 min-h-screen`}>
        <AudioProvider>
          <div className="relative min-h-screen">
            {/* Fond avec texture */}
            <div className="fixed inset-0 bg-[url('/images/parchment-texture.png')] opacity-10 pointer-events-none"></div>
            
            {/* Contenu principal */}
            <div className="relative z-10">
              <Navigation />
              <main className="min-h-screen">
                <div className="container mx-auto px-4 py-8">
                  {children}
                </div>
              </main>
              <Footer />
            </div>
          </div>
        </AudioProvider>
      </body>
    </html>
  )
}
