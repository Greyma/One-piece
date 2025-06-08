"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Anchor } from "lucide-react"
import { useAudioContext } from "@/components/audio-manager"
import { SearchBar } from "@/components/search-bar"

// Ajouter Pirates à la navigation
const navItems = [
  { href: "/", label: "Accueil" },
  { href: "/equipage", label: "Équipage" },
  { href: "/pirates", label: "Pirates" },
  { href: "/iles-arcs", label: "Îles & Arcs" },
  { href: "/fruits-demon", label: "Fruits du Démon" },
  { href: "/cartes-monde", label: "Cartes & Monde" },
  { href: "/galerie", label: "Galerie" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const { playHoverSound } = useAudioContext()

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-amber-600/20 bg-gradient-to-r from-amber-900/90 via-amber-800/90 to-red-900/90 backdrop-blur supports-[backdrop-filter]:bg-amber-900/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <Anchor className="h-8 w-8 text-amber-300 flag-animation" />
          <span className="pirate-text text-2xl font-bold text-amber-100">One Piece</span>
        </Link>

        {/* Barre de recherche - Desktop */}
        <div className="hidden lg:block flex-1 max-w-md mx-8">
          <SearchBar />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="ancient-text text-amber-100 hover:text-amber-300 transition-colors duration-200 hover:scale-105 transform interactive-nav-link"
              onMouseEnter={playHoverSound}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="text-amber-100">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] bg-gradient-to-b from-amber-900 to-red-900 border-amber-600">
            <div className="flex flex-col space-y-4 mt-8">
              {/* Barre de recherche mobile */}
              <div className="mb-4">
                <SearchBar />
              </div>

              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="ancient-text text-amber-100 hover:text-amber-300 transition-colors duration-200 text-lg"
                  onClick={() => setIsOpen(false)}
                  onMouseEnter={playHoverSound}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* Barre de recherche mobile - en dessous de la nav */}
      <div className="lg:hidden border-t border-amber-600/20 p-4">
        <SearchBar />
      </div>
    </nav>
  )
}
