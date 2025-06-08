"use client"

import { useState, useRef, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, X, Filter } from "lucide-react"
import { useSearch } from "@/hooks/use-search"
import { useAudioContext } from "@/components/audio-manager"
import Link from "next/link"

const categories = [
  { id: "all", name: "Tout", icon: "🔍" },
  { id: "character", name: "Personnages", icon: "👤" },
  { id: "fruit", name: "Fruits", icon: "🍎" },
  { id: "island", name: "Îles", icon: "🏝️" },
  { id: "arc", name: "Arcs", icon: "📖" },
  { id: "pirate", name: "Pirates", icon: "🏴‍☠️" },
]

export function SearchBar() {
  const [isOpen, setIsOpen] = useState(false)
  const [showFilters, setShowFilters] = useState(false)
  const searchRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()
  const { playHoverSound, playClickSound } = useAudioContext()

  const { query, setQuery, selectedCategory, setSelectedCategory, results } = useSearch()

  // Fermer la recherche quand on clique à l'extérieur
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false)
        setShowFilters(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  // Raccourci clavier pour ouvrir la recherche
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if ((event.ctrlKey || event.metaKey) && event.key === "k") {
        event.preventDefault()
        setIsOpen(true)
        inputRef.current?.focus()
      }
      if (event.key === "Escape") {
        setIsOpen(false)
        setShowFilters(false)
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [])

  const handleSearch = (searchQuery: string) => {
    setQuery(searchQuery)
    if (searchQuery.trim()) {
      setIsOpen(true)
    }
  }

  const clearSearch = () => {
    setQuery("")
    setIsOpen(false)
    setShowFilters(false)
    playClickSound()
  }

  const handleResultClick = (url: string) => {
    setIsOpen(false)
    setShowFilters(false)
    playClickSound()
    router.push(url)
  }

  return (
    <div ref={searchRef} className="relative w-full max-w-md mx-auto">
      {/* Barre de recherche principale */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-amber-600" />
        <Input
          ref={inputRef}
          type="text"
          placeholder="Rechercher personnages, fruits, îles... (Ctrl+K)"
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
          onFocus={() => query && setIsOpen(true)}
          className="pl-10 pr-20 bg-amber-50 border-amber-600 text-amber-900 placeholder:text-amber-600 focus:ring-amber-500"
        />
        <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center space-x-1">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => {
              setShowFilters(!showFilters)
              playClickSound()
            }}
            className="h-6 w-6 p-0 text-amber-600 hover:text-amber-800"
            onMouseEnter={playHoverSound}
          >
            <Filter className="h-3 w-3" />
          </Button>
          {query && (
            <Button
              variant="ghost"
              size="sm"
              onClick={clearSearch}
              className="h-6 w-6 p-0 text-amber-600 hover:text-amber-800"
              onMouseEnter={playHoverSound}
            >
              <X className="h-3 w-3" />
            </Button>
          )}
        </div>
      </div>

      {/* Filtres de catégorie */}
      {showFilters && (
        <Card className="absolute top-12 left-0 right-0 z-50 parchment-bg border-amber-600 shadow-lg">
          <CardContent className="p-3">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => {
                    setSelectedCategory(category.id)
                    playClickSound()
                  }}
                  onMouseEnter={playHoverSound}
                  className={
                    selectedCategory === category.id
                      ? "bg-red-600 hover:bg-red-700 text-white text-xs"
                      : "border-amber-600 text-amber-800 hover:bg-amber-600 hover:text-white text-xs"
                  }
                >
                  <span className="mr-1">{category.icon}</span>
                  {category.name}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Résultats de recherche */}
      {isOpen && query && (
        <Card className="absolute top-12 left-0 right-0 z-40 parchment-bg border-amber-600 shadow-lg max-h-96 overflow-y-auto">
          <CardContent className="p-0">
            {results.length > 0 ? (
              <div className="space-y-1">
                {results.slice(0, 8).map((result) => (
                  <Link
                    key={result.id}
                    href={result.url}
                    onClick={() => handleResultClick(result.url)}
                    onMouseEnter={playHoverSound}
                    className="block p-3 hover:bg-amber-100 transition-colors border-b border-amber-200 last:border-b-0"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="ancient-text font-semibold text-amber-900 text-sm">{result.title}</h4>
                        <p className="text-amber-700 text-xs mt-1 line-clamp-2">{result.description}</p>
                        <div className="flex items-center mt-2 space-x-2">
                          <Badge variant="outline" className="border-amber-600 text-amber-800 text-xs">
                            {categories.find((c) => c.id === result.category)?.icon}{" "}
                            {categories.find((c) => c.id === result.category)?.name}
                          </Badge>
                          {result.tags.slice(0, 2).map((tag) => (
                            <Badge key={tag} variant="secondary" className="bg-red-600 text-white text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
                {results.length > 8 && (
                  <div className="p-3 text-center text-amber-700 text-sm border-t border-amber-200">
                    +{results.length - 8} autres résultats...
                  </div>
                )}
              </div>
            ) : (
              <div className="p-6 text-center">
                <Search className="h-8 w-8 text-amber-600 mx-auto mb-2" />
                <p className="text-amber-700">Aucun résultat trouvé pour "{query}"</p>
                <p className="text-amber-600 text-sm mt-1">Essayez avec d'autres mots-clés ou changez de catégorie</p>
              </div>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  )
}
