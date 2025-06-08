"use client"

import { useState, useEffect } from "react"

interface SearchResult {
  id: string
  title: string
  description: string
  category: string
  tags: string[]
  url: string
}

const searchDatabase: SearchResult[] = [
  {
    id: "luffy",
    title: "Monkey D. Luffy",
    description: "Capitaine de l'équipage du Chapeau de Paille, rêve de devenir le Roi des Pirates",
    category: "character",
    tags: ["chapeau de paille", "gomu gomu", "pirate", "capitaine"],
    url: "/equipage",
  },
  {
    id: "zoro",
    title: "Roronoa Zoro",
    description: "Épéiste de l'équipage, aspire à devenir le meilleur au monde",
    category: "character",
    tags: ["épéiste", "sabre", "santoryu", "pirate"],
    url: "/equipage",
  },
  {
    id: "nami",
    title: "Nami",
    description: "Navigatrice de l'équipage, experte en cartographie et en météorologie",
    category: "character",
    tags: ["navigatrice", "carte", "météo", "pirate"],
    url: "/equipage",
  },
  {
    id: "usopp",
    title: "Usopp",
    description: "Tireur d'élite de l'équipage, menteur talentueux et inventeur",
    category: "character",
    tags: ["tireur d'élite", "mensonge", "invention", "pirate"],
    url: "/equipage",
  },
  {
    id: "sanji",
    title: "Vinsmoke Sanji",
    description: "Cuisinier de l'équipage, expert en arts martiaux et en cuisine",
    category: "character",
    tags: ["cuisinier", "arts martiaux", "jambe noire", "pirate"],
    url: "/equipage",
  },

  // Pirates Empereurs
  {
    id: "shanks",
    title: "Shanks",
    description: "Empereur, ancien membre de l'équipage de Roger, mentor de Luffy",
    category: "pirate",
    tags: ["empereur", "roux", "haki", "roger", "mentor"],
    url: "/pirates",
  },
  {
    id: "barbe-noire",
    title: "Marshall D. Teach (Barbe Noire)",
    description: "Empereur, seul homme à posséder deux Fruits du Démon",
    category: "pirate",
    tags: ["empereur", "ténèbres", "tremblement", "deux fruits", "teach"],
    url: "/pirates",
  },

  // Supernovas
  {
    id: "kid",
    title: "Eustass Kid",
    description: "Supernova, capitaine brutal avec le pouvoir du magnétisme",
    category: "pirate",
    tags: ["supernova", "magnétisme", "métal", "south blue", "brutal"],
    url: "/pirates",
  },
  {
    id: "law",
    title: "Trafalgar D. Water Law",
    description: "Supernova, le Chirurgien de la Mort avec le pouvoir de l'Ope Ope no Mi",
    category: "pirate",
    tags: ["supernova", "chirurgien", "room", "opération", "alliance"],
    url: "/pirates",
  },

  // Pirates Légendaires
  {
    id: "roger",
    title: "Gol D. Roger",
    description: "Le légendaire Roi des Pirates qui a trouvé le One Piece",
    category: "pirate",
    tags: ["roi des pirates", "one piece", "roger", "légendaire", "exécution"],
    url: "/pirates",
  },
  {
    id: "barbe-blanche",
    title: "Edward Newgate (Barbe Blanche)",
    description: "L'homme le plus fort du monde, père de centaines de pirates",
    category: "pirate",
    tags: ["empereur", "plus fort", "père", "tremblement", "marineford"],
    url: "/pirates",
  },

  // Plus de personnages
  {
    id: "robin",
    title: "Nico Robin",
    description: "Archéologue de l'équipage, dernière survivante d'Ohara",
    category: "character",
    tags: ["archéologue", "ohara", "ponéglyphes", "hana hana", "histoire"],
    url: "/equipage",
  },
  {
    id: "franky",
    title: "Franky",
    description: "Charpentier cyborg, constructeur du Thousand Sunny",
    category: "character",
    tags: ["charpentier", "cyborg", "sunny", "tom", "water 7"],
    url: "/equipage",
  },
  {
    id: "brook",
    title: "Brook",
    description: "Musicien squelette, utilisateur du Yomi Yomi no Mi",
    category: "character",
    tags: ["musicien", "squelette", "yomi yomi", "laboon", "âme"],
    url: "/equipage",
  },

  // Fruits du démon
  {
    id: "gomu-gomu",
    title: "Gomu Gomu no Mi",
    description: "Fruit du démon de Luffy qui transforme son corps en caoutchouc",
    category: "fruit",
    tags: ["paramecia", "caoutchouc", "luffy", "gear", "nika"],
    url: "/fruits-demon",
  },
  {
    id: "ope-ope",
    title: "Ope Ope no Mi",
    description: "Fruit du démon de Law permettant de créer une Room",
    category: "fruit",
    tags: ["paramecia", "opération", "room", "law", "chirurgien"],
    url: "/fruits-demon",
  },
  {
    id: "yami-yami",
    title: "Yami Yami no Mi",
    description: "Fruit du démon de Barbe Noire contrôlant les ténèbres",
    category: "fruit",
    tags: ["logia", "ténèbres", "barbe noire", "absorption", "gravité"],
    url: "/fruits-demon",
  },

  // Îles
  {
    id: "water-7",
    title: "Water 7",
    description: "Cité de l'eau, capitale mondiale de la construction navale",
    category: "island",
    tags: ["eau", "charpentiers", "iceburg", "franky", "cp9"],
    url: "/iles-arcs",
  },
  {
    id: "marineford",
    title: "Marineford",
    description: "Quartier général de la Marine, théâtre de la guerre au sommet",
    category: "island",
    tags: ["marine", "guerre", "ace", "barbe blanche", "sommet"],
    url: "/iles-arcs",
  },
  {
    id: "wano",
    title: "Wano",
    description: "Pays des samouraïs, isolé du reste du monde",
    category: "island",
    tags: ["samouraï", "kaido", "kozuki", "shogun", "isolé"],
    url: "/iles-arcs",
  },

  // Arcs
  {
    id: "arc-alabasta",
    title: "Arc Alabasta",
    description: "L'équipage aide la princesse Vivi à sauver son royaume du désert",
    category: "arc",
    tags: ["vivi", "crocodile", "baroque works", "désert", "robin"],
    url: "/iles-arcs",
  },
  {
    id: "arc-enies-lobby",
    title: "Arc Enies Lobby",
    description: "Sauvetage de Robin des mains du CP9 et du Gouvernement Mondial",
    category: "arc",
    tags: ["robin", "cp9", "buster call", "water 7", "lucci"],
    url: "/iles-arcs",
  },
  {
    id: "arc-marineford",
    title: "Arc Marineford",
    description: "Guerre au sommet pour sauver Ace de l'exécution",
    category: "arc",
    tags: ["ace", "barbe blanche", "marine", "guerre", "akainu"],
    url: "/iles-arcs",
  },
]

// Changement ici : export nommé au lieu d'export par défaut
export function useSearch() {
  const [query, setQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [results, setResults] = useState<SearchResult[]>([])

  useEffect(() => {
    if (query) {
      const filteredResults = searchDatabase.filter((item) => {
        // Filtrer par catégorie si une catégorie spécifique est sélectionnée
        if (selectedCategory !== "all" && item.category !== selectedCategory) {
          return false
        }

        const queryLower = query.toLowerCase()
        return (
          item.title.toLowerCase().includes(queryLower) ||
          item.description.toLowerCase().includes(queryLower) ||
          item.tags.some((tag) => tag.toLowerCase().includes(queryLower))
        )
      })
      setResults(filteredResults)
    } else {
      setResults([])
    }
  }, [query, selectedCategory])

  return {
    query,
    setQuery,
    selectedCategory,
    setSelectedCategory,
    results,
  }
}
