import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { InteractiveCard } from "@/components/interactive-card"
import { InteractiveButton } from "@/components/interactive-button"
import Image from "next/image"
import { MapPin, Users, Swords, Crown, Skull, Waves } from "lucide-react"

const arcs = [
  {
    name: "East Blue Saga",
    islands: ["Fuchsia Village", "Orange Town", "Syrup Village", "Baratie", "Arlong Park", "Loguetown"],
    description: "Le début de l'aventure de Luffy, où il forme son équipage initial dans la mer la plus paisible.",
    episodes: "1-61",
    chapters: "1-100",
    keyCharacters: ["Luffy", "Zoro", "Nami", "Usopp", "Sanji"],
    image: "/images/east-blue-saga.webp",
    color: "bg-blue-500",
    icon: Waves,
    status: "Terminé",
  },
  {
    name: "Alabasta Saga",
    islands: ["Reverse Mountain", "Whisky Peak", "Little Garden", "Drum Island", "Alabasta"],
    description: "L'équipage entre sur Grand Line et aide la princesse Vivi à sauver son royaume du désert.",
    episodes: "62-135",
    chapters: "101-217",
    keyCharacters: ["Vivi", "Crocodile", "Chopper", "Nico Robin"],
    image: "/images/AlabastaSaga.webp",
    color: "bg-yellow-500",
    icon: Crown,
    status: "Terminé",
  },
  {
    name: "Sky Island Saga",
    islands: ["Jaya", "Skypiea"],
    description: "L'aventure dans les cieux et la découverte de l'île céleste au-dessus des nuages.",
    episodes: "136-206",
    chapters: "218-302",
    keyCharacters: ["Cricket", "Enel", "Wyper", "Gan Fall"],
    image: "/images/SkyIslandSaga.avif",
    color: "bg-sky-500",
    icon: Waves,
    status: "Terminé",
  },
  {
    name: "Water 7 Saga",
    islands: ["Long Ring Long Land", "Water 7", "Enies Lobby"],
    description: "La séparation temporaire de l'équipage et le sauvetage dramatique de Robin.",
    episodes: "207-325",
    chapters: "303-441",
    keyCharacters: ["Franky", "Iceburg", "CP9", "Tom"],
    image: "/images/Water7.jpg",
    color: "bg-cyan-500",
    icon: Swords,
    status: "Terminé",
  },
  {
    name: "Thriller Bark Saga",
    islands: ["Thriller Bark"],
    description: "L'île fantôme et la rencontre avec Brook, le musicien squelette aux pouvoirs mystérieux.",
    episodes: "326-384",
    chapters: "442-489",
    keyCharacters: ["Brook", "Gecko Moria", "Perona", "Bartholomew Kuma"],
    image: "/images/ThrillerBark.jpg",
    color: "bg-purple-500",
    icon: Skull,
    status: "Terminé",
  },
  {
    name: "Summit War Saga",
    islands: ["Archipel Sabaody", "Amazon Lily", "Impel Down", "Marineford"],
    description: "La séparation de l'équipage et la guerre au sommet pour sauver Ace des mains de la Marine.",
    episodes: "385-516",
    chapters: "490-597",
    keyCharacters: ["Rayleigh", "Boa Hancock", "Jinbe", "Portgas D. Ace", "Barbe Blanche"],
    image: "/images/SummitWar.avif",
    color: "bg-red-500",
    icon: Swords,
    status: "Terminé",
  },
  {
    name: "Fishman Island Saga",
    islands: ["Île des Hommes-Poissons"],
    description: "Les retrouvailles de l'équipage après 2 ans et l'aventure sous-marine à 10 000 mètres de profondeur.",
    episodes: "517-574",
    chapters: "598-653",
    keyCharacters: ["Jinbe", "Shirahoshi", "Hody Jones", "Neptune"],
    image: "/images/FishmanIsland.avif",
    color: "bg-teal-500",
    icon: Waves,
    status: "Terminé",
  },
  {
    name: "Dressrosa Saga",
    islands: ["Punk Hazard", "Dressrosa"],
    description: "L'alliance avec Law et la bataille contre Doflamingo dans le royaume des jouets et des gladiateurs.",
    episodes: "575-746",
    chapters: "654-801",
    keyCharacters: ["Trafalgar Law", "Doflamingo", "Rebecca", "Kyros", "Sabo"],
    image: "/images/Dressrosa.jpg",
    color: "bg-pink-500",
    icon: Crown,
    status: "Terminé",
  },
  {
    name: "Whole Cake Island Saga",
    islands: ["Zou", "Whole Cake Island"],
    description: "La mission de sauvetage de Sanji et l'affrontement avec Big Mom, l'un des Quatre Empereurs.",
    episodes: "747-877",
    chapters: "802-902",
    keyCharacters: ["Big Mom", "Katakuri", "Pudding", "Pedro", "Carrot"],
    image: "/images/WholeCakeIsland.avif",
    color: "bg-orange-500",
    icon: Crown,
    status: "Terminé",
  },
  {
    name: "Wano Country Saga",
    islands: ["Reverie", "Wano"],
    description: "La plus grande bataille de One Piece contre Kaido et Big Mom dans le pays des samouraïs.",
    episodes: "878-1085",
    chapters: "903-1057",
    keyCharacters: ["Kaido", "Oden", "Yamato", "Momonosuke", "Kinemon"],
    image: "/images/wano.jpg",
    color: "bg-red-600",
    icon: Swords,
    status: "Terminé",
  },
  {
    name: "Egghead Saga",
    islands: ["Egghead"],
    description: "L'île du futur avec le Dr. Vegapunk et les mystères de la technologie avancée.",
    episodes: "1086+",
    chapters: "1058+",
    keyCharacters: ["Dr. Vegapunk", "Kizaru", "Saturn", "Bonney", "Kuma"],
    image: "/images/Egghead.webp",
    color: "bg-green-500",
    icon: Users,
    status: "En cours",
  },
]

const sagaStats = [
  { label: "Total des Arcs", value: "11", icon: MapPin },
  { label: "Épisodes Animés", value: "1000+", icon: Users },
  { label: "Chapitres Manga", value: "1100+", icon: Swords },
  { label: "Années d'Aventure", value: "25+", icon: Crown },
]

export default function IlesArcsPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="pirate-text text-5xl md:text-7xl font-bold text-amber-100 mb-6">Îles & Arcs Narratifs</h1>
          <p className="ancient-text text-xl text-amber-200 max-w-4xl mx-auto">
            Explorez les sagas épiques de One Piece, des premiers pas de Luffy dans East Blue jusqu'aux batailles
            légendaires du Nouveau Monde. Chaque arc raconte une histoire unique dans cette aventure extraordinaire.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {sagaStats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <InteractiveCard
                key={stat.label}
                className="parchment-bg border-amber-600 text-center p-6"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <IconComponent className="h-8 w-8 text-amber-700 mx-auto mb-3" />
                <div className="pirate-text text-3xl font-bold text-amber-900 mb-1">{stat.value}</div>
                <div className="ancient-text text-amber-700 text-sm">{stat.label}</div>
              </InteractiveCard>
            )
          })}
        </div>

        {/* Arcs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {arcs.map((arc, index) => {
            const IconComponent = arc.icon
            return (
              <InteractiveCard
                key={arc.name}
                className="parchment-bg border-amber-600 overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative">
                  <Image
                    src={arc.image || "/placeholder.svg"}
                    alt={arc.name}
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge
                      variant={arc.status === "En cours" ? "default" : "secondary"}
                      className={arc.status === "En cours" ? "bg-green-600 text-white" : "bg-gray-600 text-white"}
                    >
                      {arc.status}
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <div className={`p-2 ${arc.color} rounded-full`}>
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="ancient-text text-2xl text-amber-900 flex items-center justify-between">
                    {arc.name}
                    <div className="text-sm text-amber-700">
                      Ch. {arc.chapters} | Ep. {arc.episodes}
                    </div>
                  </CardTitle>
                  <CardDescription className="text-amber-700 text-base">{arc.description}</CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div>
                    <h4 className="ancient-text font-semibold text-amber-900 mb-2">Îles principales :</h4>
                    <div className="flex flex-wrap gap-1">
                      {arc.islands.map((island) => (
                        <Badge key={island} variant="outline" className="border-amber-600 text-amber-800 text-xs">
                          {island}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="ancient-text font-semibold text-amber-900 mb-2">Personnages clés :</h4>
                    <div className="flex flex-wrap gap-1">
                      {arc.keyCharacters.map((character) => (
                        <Badge key={character} variant="secondary" className="bg-red-600 text-white text-xs">
                          {character}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <InteractiveButton
                    variant="outline"
                    className="w-full border-amber-600 text-amber-800 hover:bg-amber-600 hover:text-white"
                  >
                    <MapPin className="mr-2 h-4 w-4" />
                    Explorer cette saga
                  </InteractiveButton>
                </CardContent>
              </InteractiveCard>
            )
          })}
        </div>

        {/* Timeline Section */}
        <div className="text-center">
          <InteractiveCard className="parchment-bg border-amber-600 max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="pirate-text text-3xl text-amber-900">Chronologie de l'Aventure</CardTitle>
              <CardDescription className="ancient-text text-lg text-amber-700">
                Plus de 25 ans d'aventures épiques à travers les mers
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center space-y-2">
                  <div className="pirate-text text-4xl font-bold text-red-600">1997</div>
                  <h3 className="ancient-text font-semibold text-amber-900">Début du Manga</h3>
                  <p className="text-amber-700 text-sm">Eiichiro Oda commence One Piece</p>
                </div>
                <div className="text-center space-y-2">
                  <div className="pirate-text text-4xl font-bold text-blue-600">1999</div>
                  <h3 className="ancient-text font-semibold text-amber-900">Début de l'Anime</h3>
                  <p className="text-amber-700 text-sm">Première diffusion de l'adaptation animée</p>
                </div>
                <div className="text-center space-y-2">
                  <div className="pirate-text text-4xl font-bold text-green-600">2024</div>
                  <h3 className="ancient-text font-semibold text-amber-900">Saga Finale</h3>
                  <p className="text-amber-700 text-sm">L'aventure approche de sa conclusion</p>
                </div>
              </div>

              <div className="bg-red-100 border border-red-400 rounded-lg p-4 mt-6">
                <p className="text-red-800 font-semibold text-center">
                  🏴‍☠️ L'aventure continue ! Suivez les derniers développements de l'équipage du Chapeau de Paille !
                </p>
              </div>
            </CardContent>
          </InteractiveCard>
        </div>
      </div>
    </div>
  )
}
