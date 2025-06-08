import Link from "next/link"
import { Anchor, Facebook, Twitter, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 border-t border-amber-600/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Anchor className="h-6 w-6 text-amber-300" />
              <span className="pirate-text text-xl font-bold text-amber-100">One Piece</span>
            </div>
            <p className="text-amber-200/80 text-sm">
              Rejoignez l'aventure sur Grand Line et découvrez l'univers extraordinaire de One Piece !
            </p>
          </div>

          <div>
            <h3 className="ancient-text text-amber-100 font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/equipage" className="text-amber-200/80 hover:text-amber-300 transition-colors">
                  Équipage
                </Link>
              </li>
              <li>
                <Link href="/iles-arcs" className="text-amber-200/80 hover:text-amber-300 transition-colors">
                  Îles & Arcs
                </Link>
              </li>
              <li>
                <Link href="/fruits-demon" className="text-amber-200/80 hover:text-amber-300 transition-colors">
                  Fruits du Démon
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="ancient-text text-amber-100 font-semibold mb-4">Ressources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/cartes-monde" className="text-amber-200/80 hover:text-amber-300 transition-colors">
                  Cartes & Monde
                </Link>
              </li>
              <li>
                <Link href="/galerie" className="text-amber-200/80 hover:text-amber-300 transition-colors">
                  Galerie
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="ancient-text text-amber-100 font-semibold mb-4">Suivez-nous</h3>
            <div className="flex space-x-4">
              <Facebook className="h-6 w-6 text-amber-200/80 hover:text-amber-300 cursor-pointer transition-colors" />
              <Twitter className="h-6 w-6 text-amber-200/80 hover:text-amber-300 cursor-pointer transition-colors" />
              <Instagram className="h-6 w-6 text-amber-200/80 hover:text-amber-300 cursor-pointer transition-colors" />
            </div>
          </div>
        </div>

        <div className="border-t border-amber-600/20 mt-8 pt-8 text-center">
          <p className="text-amber-200/60 text-sm">
            © 2024 One Piece Fan Site. Tous droits réservés. One Piece © Eiichiro Oda
          </p>
        </div>
      </div>
    </footer>
  )
}
