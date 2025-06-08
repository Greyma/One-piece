"use client"

import { useState } from "react"
import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { InteractiveCard } from "@/components/interactive-card"
import { InteractiveButton } from "@/components/interactive-button"
import Image from "next/image"
import { Play, ImageIcon, Video, Download, Heart, Share2, Eye } from "lucide-react"

const categories = [
  { id: "all", name: "Tout", count: 48 },
  { id: "characters", name: "Personnages", count: 18 },
  { id: "battles", name: "Batailles", count: 12 },
  { id: "ships", name: "Navires", count: 8 },
  { id: "islands", name: "Îles", count: 10 },
]

const galleryItems = [
  {
    id: 1,
    title: "Luffy Gear 5 - Nika",
    description: "La transformation ultime de Luffy révélée à Wano",
    type: "image",
    category: "characters",
    image: "/placeholder.svg?height=400&width=600",
    likes: 1250,
    views: 15420,
    featured: true,
  },
  {
    id: 2,
    title: "Bataille de Marineford",
    description: "La guerre au sommet qui a changé le monde",
    type: "video",
    category: "battles",
    image: "/placeholder.svg?height=400&width=600",
    likes: 2100,
    views: 28500,
    duration: "3:45",
    featured: true,
  },
  {
    id: 3,
    title: "Thousand Sunny",
    description: "Le navire de l'équipage du Chapeau de Paille",
    type: "image",
    category: "ships",
    image: "/placeholder.svg?height=400&width=600",
    likes: 890,
    views: 12300,
    featured: false,
  },
  {
    id: 4,
    title: "Skypiea - L'île céleste",
    description: "L'île mystérieuse dans les nuages",
    type: "image",
    category: "islands",
    image: "/placeholder.svg?height=400&width=600",
    likes: 756,
    views: 9800,
    featured: false,
  },
  {
    id: 5,
    title: "Zoro vs Mihawk",
    description: "Le duel légendaire entre épéistes",
    type: "video",
    category: "battles",
    image: "/placeholder.svg?height=400&width=600",
    likes: 1890,
    views: 22100,
    duration: "2:30",
    featured: true,
  },
  {
    id: 6,
    title: "Équipage au complet",
    description: "Tous les membres réunis après Wano",
    type: "image",
    category: "characters",
    image: "/placeholder.svg?height=400&width=600",
    likes: 3200,
    views: 45600,
    featured: true,
  },
  {
    id: 7,
    title: "Dressrosa - Royaume des jouets",
    description: "L'île contrôlée par Doflamingo",
    type: "image",
    category: "islands",
    image: "/placeholder.svg?height=400&width=600",
    likes: 654,
    views: 8900,
    featured: false,
  },
  {
    id: 8,
    title: "Going Merry - Adieux",
    description: "Les adieux émouvants au premier navire",
    type: "video",
    category: "ships",
    image: "/placeholder.svg?height=400&width=600",
    likes: 4500,
    views: 67800,
    duration: "4:12",
    featured: true,
  },
  {
    id: 9,
    title: "Kaido vs Luffy",
    description: "Le combat final à Wano",
    type: "video",
    category: "battles",
    image: "/placeholder.svg?height=400&width=600",
    likes: 5600,
    views: 89200,
    duration: "5:20",
    featured: true,
  },
]

export default function GaleriePage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedItem, setSelectedItem] = useState<number | null>(null)

  const filteredItems = galleryItems.filter((item) => selectedCategory === "all" || item.category === selectedCategory)

  const featuredItems = galleryItems.filter((item) => item.featured)

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="pirate-text text-5xl md:text-7xl font-bold text-amber-100 mb-6">Galerie One Piece</h1>
          <p className="ancient-text text-xl text-amber-200 max-w-4xl mx-auto">
            Découvrez les moments les plus épiques de One Piece à travers notre collection d'images et de vidéos
            exclusives. Revivez les batailles légendaires et les aventures inoubliables !
          </p>
        </div>

        {/* Featured Section */}
        <div className="mb-16">
          <h2 className="pirate-text text-3xl text-amber-100 text-center mb-8">Contenus à la Une</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredItems.slice(0, 3).map((item, index) => (
              <InteractiveCard
                key={item.id}
                className="parchment-bg border-amber-600 overflow-hidden group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    width={600}
                    height={300}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    {item.type === "video" ? (
                      <Play className="h-12 w-12 text-white" />
                    ) : (
                      <Eye className="h-12 w-12 text-white" />
                    )}
                  </div>
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-red-600 text-white">À la Une</Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge variant="outline" className="bg-black/50 text-white border-white">
                      {item.type === "video" ? (
                        <>
                          <Video className="h-3 w-3 mr-1" />
                          {item.duration}
                        </>
                      ) : (
                        <>
                          <ImageIcon className="h-3 w-3 mr-1" />
                          Image
                        </>
                      )}
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 left-4 flex items-center space-x-4 text-white text-sm">
                    <div className="flex items-center">
                      <Heart className="h-4 w-4 mr-1" />
                      {item.likes.toLocaleString()}
                    </div>
                    <div className="flex items-center">
                      <Eye className="h-4 w-4 mr-1" />
                      {item.views.toLocaleString()}
                    </div>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="ancient-text text-amber-900">{item.title}</CardTitle>
                  <CardDescription className="text-amber-700">{item.description}</CardDescription>
                </CardHeader>
              </InteractiveCard>
            ))}
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <InteractiveButton
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              className={
                selectedCategory === category.id
                  ? "bg-red-600 hover:bg-red-700 text-white"
                  : "border-amber-600 text-amber-100 hover:bg-amber-600 hover:text-white"
              }
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.name} ({category.count})
            </InteractiveButton>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item, index) => (
            <InteractiveCard
              key={item.id}
              className="parchment-bg border-amber-600 overflow-hidden group cursor-pointer"
              style={{ animationDelay: `${index * 0.05}s` }}
              onClick={() => setSelectedItem(item.id)}
            >
              <div className="relative">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  width={400}
                  height={250}
                  className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  {item.type === "video" ? (
                    <Play className="h-8 w-8 text-white" />
                  ) : (
                    <Eye className="h-8 w-8 text-white" />
                  )}
                </div>
                <div className="absolute top-2 right-2">
                  <Badge variant="outline" className="bg-black/50 text-white border-white text-xs">
                    {item.type === "video" ? (
                      <>
                        <Video className="h-3 w-3 mr-1" />
                        {item.duration}
                      </>
                    ) : (
                      <ImageIcon className="h-3 w-3" />
                    )}
                  </Badge>
                </div>
                {item.featured && (
                  <div className="absolute top-2 left-2">
                    <Badge className="bg-red-600 text-white text-xs">★</Badge>
                  </div>
                )}
              </div>
              <CardContent className="p-4">
                <h3 className="ancient-text font-semibold text-amber-900 mb-1 text-sm">{item.title}</h3>
                <p className="text-amber-700 text-xs mb-3 line-clamp-2">{item.description}</p>
                <div className="flex items-center justify-between text-xs text-amber-600">
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center">
                      <Heart className="h-3 w-3 mr-1" />
                      {item.likes}
                    </div>
                    <div className="flex items-center">
                      <Eye className="h-3 w-3 mr-1" />
                      {item.views}
                    </div>
                  </div>
                  <div className="flex items-center space-x-1">
                    <InteractiveButton variant="ghost" size="sm" className="h-6 w-6 p-0 text-amber-600">
                      <Share2 className="h-3 w-3" />
                    </InteractiveButton>
                    <InteractiveButton variant="ghost" size="sm" className="h-6 w-6 p-0 text-amber-600">
                      <Download className="h-3 w-3" />
                    </InteractiveButton>
                  </div>
                </div>
              </CardContent>
            </InteractiveCard>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 text-center">
          <InteractiveCard className="parchment-bg border-amber-600 max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="pirate-text text-3xl text-amber-900">Statistiques de la Galerie</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="pirate-text text-3xl font-bold text-red-600 mb-2">48</div>
                  <p className="ancient-text text-amber-700">Contenus Total</p>
                </div>
                <div className="text-center">
                  <div className="pirate-text text-3xl font-bold text-blue-600 mb-2">156K</div>
                  <p className="ancient-text text-amber-700">Vues Total</p>
                </div>
                <div className="text-center">
                  <div className="pirate-text text-3xl font-bold text-green-600 mb-2">23K</div>
                  <p className="ancient-text text-amber-700">Likes Total</p>
                </div>
                <div className="text-center">
                  <div className="pirate-text text-3xl font-bold text-purple-600 mb-2">12</div>
                  <p className="ancient-text text-amber-700">Contenus Exclusifs</p>
                </div>
              </div>
            </CardContent>
          </InteractiveCard>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-red-900 via-amber-800 to-red-900 rounded-lg p-8">
            <h3 className="pirate-text text-2xl text-amber-100 mb-4">Vous avez du contenu One Piece ?</h3>
            <p className="ancient-text text-amber-200 mb-6">
              Partagez vos créations avec la communauté et rejoignez l'aventure !
            </p>
            <InteractiveButton className="bg-amber-600 hover:bg-amber-700 text-white">
              <Share2 className="mr-2 h-4 w-4" />
              Partager du Contenu
            </InteractiveButton>
          </div>
        </div>
      </div>
    </div>
  )
}
