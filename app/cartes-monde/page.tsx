"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Compass, Waves, Mountain } from "lucide-react"

const islands = [
  {
    id: "east-blue",
    name: "East Blue",
    description: "La mer la plus paisible, berceau de nombreux pirates légendaires",
    color: "bg-blue-500",
    position: { x: 20, y: 60 },
    arcs: ["Romance Dawn", "Orange Town", "Syrup Village", "Baratie", "Arlong Park", "Loguetown"],
  },
  {
    id: "grand-line-first",
    name: "Première moitié de Grand Line",
    description: "Paradise - Le début de la vraie aventure",
    color: "bg-green-500",
    position: { x: 50, y: 40 },
    arcs: ["Reverse Mountain", "Whisky Peak", "Little Garden", "Drum Island", "Alabasta", "Jaya", "Skypiea"],
  },
  {
    id: "water-7",
    name: "Water 7",
    description: "La cité de l'eau et des charpentiers navals",
    color: "bg-cyan-500",
    position: { x: 65, y: 35 },
    arcs: ["Water 7", "Enies Lobby", "Post-Enies Lobby"],
  },
  {
    id: "thriller-bark",
    name: "Thriller Bark",
    description: "Le navire fantôme le plus terrifiant des mers",
    color: "bg-purple-500",
    position: { x: 75, y: 50 },
    arcs: ["Thriller Bark"],
  },
  {
    id: "sabaody",
    name: "Archipel Sabaody",
    description: "La dernière île avant le Nouveau Monde",
    color: "bg-pink-500",
    position: { x: 85, y: 45 },
    arcs: ["Archipel Sabaody", "Retour à Sabaody"],
  },
  {
    id: "new-world",
    name: "Nouveau Monde",
    description: "La seconde moitié de Grand Line, territoire des Empereurs",
    color: "bg-red-500",
    position: { x: 50, y: 20 },
    arcs: ["Île des Hommes-Poissons", "Punk Hazard", "Dressrosa", "Zou", "Whole Cake Island", "Wano", "Egghead"],
  },
]

export default function CartesPage() {
  const [selectedIsland, setSelectedIsland] = useState<string | null>(null)

  const selectedIslandData = islands.find((island) => island.id === selectedIsland)

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="pirate-text text-5xl md:text-7xl font-bold text-amber-100 mb-6">Cartes & Monde</h1>
          <p className="ancient-text text-xl text-amber-200 max-w-4xl mx-auto">
            Explorez la carte interactive du monde de One Piece et découvrez les îles légendaires que l'équipage du
            Chapeau de Paille a visitées.
          </p>
        </div>

        {/* Interactive Map */}
        <div className="mb-16">
          <Card className="parchment-bg border-amber-600 overflow-hidden">
            <CardHeader className="text-center">
              <CardTitle className="pirate-text text-3xl text-amber-900 flex items-center justify-center gap-2">
                <Compass className="h-8 w-8" />
                Carte Interactive de Grand Line
              </CardTitle>
              <CardDescription className="ancient-text text-amber-700">
                Cliquez sur les îles pour découvrir leurs arcs narratifs
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative w-full h-96 bg-gradient-to-b from-sky-300 via-blue-400 to-blue-600 rounded-lg overflow-hidden border-2 border-amber-600">
                {/* Ocean waves effect */}
                <div className="absolute inset-0 opacity-30">
                  <div className="wave-animation absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent"></div>
                </div>

                {/* Red Line */}
                <div className="absolute top-1/2 left-0 right-0 h-1 bg-red-600 transform -translate-y-1/2"></div>
                <div className="absolute top-0 bottom-0 left-1/2 w-1 bg-red-600 transform -translate-x-1/2"></div>

                {/* Islands */}
                {islands.map((island) => (
                  <button
                    key={island.id}
                    className={`absolute w-6 h-6 ${island.color} rounded-full border-2 border-white shadow-lg hover:scale-150 transition-all duration-300 cursor-pointer z-10`}
                    style={{
                      left: `${island.position.x}%`,
                      top: `${island.position.y}%`,
                      transform: "translate(-50%, -50%)",
                    }}
                    onClick={() => setSelectedIsland(island.id)}
                  >
                    <MapPin className="h-4 w-4 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                  </button>
                ))}

                {/* Labels */}
                <div className="absolute top-4 left-4 bg-amber-100/90 px-3 py-2 rounded-lg border border-amber-600">
                  <p className="ancient-text text-amber-900 font-semibold text-sm">Grand Line</p>
                </div>
                <div className="absolute bottom-4 right-4 bg-amber-100/90 px-3 py-2 rounded-lg border border-amber-600">
                  <p className="ancient-text text-amber-900 font-semibold text-sm">Red Line</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Selected Island Details */}
        {selectedIslandData && (
          <div className="mb-16">
            <Card className="parchment-bg border-amber-600">
              <CardHeader>
                <CardTitle className="ancient-text text-2xl text-amber-900 flex items-center gap-2">
                  <div className={`w-4 h-4 ${selectedIslandData.color} rounded-full`}></div>
                  {selectedIslandData.name}
                </CardTitle>
                <CardDescription className="text-amber-700 text-lg">{selectedIslandData.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <h3 className="ancient-text text-xl text-amber-900 mb-4">Arcs narratifs :</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedIslandData.arcs.map((arc) => (
                    <Badge key={arc} variant="secondary" className="bg-red-600 text-white">
                      {arc}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Islands Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {islands.map((island, index) => (
            <Card
              key={island.id}
              className="parchment-bg border-amber-600 hover:scale-105 transition-transform duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <CardTitle className="ancient-text text-amber-900 flex items-center gap-2">
                  <div className={`w-4 h-4 ${island.color} rounded-full`}></div>
                  {island.name}
                </CardTitle>
                <CardDescription className="text-amber-700">{island.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <p className="text-amber-800 font-semibold">Arcs principaux :</p>
                  <div className="flex flex-wrap gap-1">
                    {island.arcs.slice(0, 3).map((arc) => (
                      <Badge key={arc} variant="outline" className="border-amber-600 text-amber-800 text-xs">
                        {arc}
                      </Badge>
                    ))}
                    {island.arcs.length > 3 && (
                      <Badge variant="outline" className="border-amber-600 text-amber-800 text-xs">
                        +{island.arcs.length - 3} autres
                      </Badge>
                    )}
                  </div>
                  <Button
                    variant="outline"
                    className="w-full border-amber-600 text-amber-800 hover:bg-amber-600 hover:text-white"
                    onClick={() => setSelectedIsland(island.id)}
                  >
                    <MapPin className="mr-2 h-4 w-4" />
                    Explorer cette région
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Navigation Tools */}
        <div className="mt-16 text-center">
          <Card className="parchment-bg border-amber-600 max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="pirate-text text-2xl text-amber-900 flex items-center justify-center gap-2">
                <Compass className="h-6 w-6" />
                Outils de Navigation
              </CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center space-y-2">
                <Compass className="h-8 w-8 text-amber-700 mx-auto" />
                <h3 className="ancient-text font-semibold text-amber-900">Log Pose</h3>
                <p className="text-amber-700 text-sm">Boussole magnétique essentielle</p>
              </div>
              <div className="text-center space-y-2">
                <Waves className="h-8 w-8 text-amber-700 mx-auto" />
                <h3 className="ancient-text font-semibold text-amber-900">Eternal Pose</h3>
                <p className="text-amber-700 text-sm">Pointe vers une île spécifique</p>
              </div>
              <div className="text-center space-y-2">
                <Mountain className="h-8 w-8 text-amber-700 mx-auto" />
                <h3 className="ancient-text font-semibold text-amber-900">Vivre Card</h3>
                <p className="text-amber-700 text-sm">Indique la direction d'une personne</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
