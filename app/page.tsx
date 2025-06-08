import { Button } from "@/components/ui/button"
import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"
import { Compass, Users, Map, Zap, Calendar, Play } from "lucide-react"
import { InteractiveButton } from "@/components/interactive-button"
import { InteractiveCard } from "@/components/interactive-card"

const crewMembers = [
  {
    name: "Monkey D. Luffy",
    role: "Capitaine",
    power: "Gomu Gomu no Mi",
    image: "/images/luffy.jpg",
  },
  { name: "Roronoa Zoro", role: "Épéiste", power: "Trois sabres", image: "/images/Roronoa_Zoro_Infobox.webp" },
  { name: "Nami", role: "Navigatrice", power: "Climatact", image: "/images/Immagine-2022-08-18-121006.webp" },
  { name: "Usopp", role: "Tireur d'élite", power: "Fronde", image: "/images/Usopp.webp" },
  { name: "Sanji", role: "Cuisinier", power: "Jambe Noire", image: "/images/Vinsmoke_Sanji.webp" },
  {
    name: "Tony Tony Chopper",
    role: "Médecin",
    power: "Hito Hito no Mi",
    image: "/images/Chopper.webp",
  },
]

const latestEpisodes = [
  { title: "Épisode 1089", description: "La bataille finale commence !", date: "2024-01-15", type: "anime" },
  { title: "Chapitre 1105", description: "Les secrets d'Egghead révélés", date: "2024-01-14", type: "manga" },
  { title: "Épisode 1088", description: "L'alliance des pirates", date: "2024-01-08", type: "anime" },
]

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/one-piece-001.webp"
            alt="Luffy et son équipage sur le Thousand Sunny"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/70 via-transparent to-blue-900/70" />
        </div>

        <div className="relative z-10 text-center space-y-8 px-4 max-w-4xl mx-auto">
          <h1 className="pirate-text text-6xl md:text-8xl font-bold text-amber-100 wave-animation">One Piece</h1>
          <p className="ancient-text text-2xl md:text-4xl text-amber-200 font-semibold">
            Rejoignez l'aventure sur Grand Line !
          </p>
          <p className="text-lg md:text-xl text-amber-100/90 max-w-2xl mx-auto">
            Découvrez l'univers extraordinaire de Monkey D. Luffy et de son équipage du Chapeau de Paille dans leur
            quête du One Piece !
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <InteractiveButton
              size="lg"
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-200"
            >
              <Compass className="mr-2 h-5 w-5" />
              Explorer le monde de One Piece
            </InteractiveButton>
            <InteractiveButton
              variant="outline"
              size="lg"
              className="border-amber-300 text-amber-100 hover:bg-amber-300 hover:text-amber-900 px-8 py-4 text-lg"
            >
              <Play className="mr-2 h-5 w-5" />
              Regarder la bande-annonce
            </InteractiveButton>
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-20 left-10 float-animation">
          <div className="w-16 h-16 bg-amber-400 rounded-full opacity-20"></div>
        </div>
        <div className="absolute bottom-20 right-10 float-animation" style={{ animationDelay: "2s" }}>
          <div className="w-12 h-12 bg-red-400 rounded-full opacity-20"></div>
        </div>
      </section>

      {/* Crew Section */}
      <section className="py-20 bg-gradient-to-b from-blue-900 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="pirate-text text-4xl md:text-6xl font-bold text-amber-100 mb-4">
              L'Équipage du Chapeau de Paille
            </h2>
            <p className="ancient-text text-xl text-amber-200 max-w-3xl mx-auto">
              Rencontrez les pirates les plus déterminés de Grand Line, unis par leur rêve et leur amitié inébranlable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {crewMembers.map((member, index) => (
              <InteractiveCard
                key={member.name}
                className="parchment-bg border-amber-600"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 relative">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={150}
                      height={150}
                      className="rounded-full border-4 border-amber-600"
                    />
                  </div>
                  <CardTitle className="ancient-text text-amber-900 text-xl">{member.name}</CardTitle>
                  <CardDescription className="text-amber-700 font-semibold">{member.role}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Badge variant="secondary" className="bg-red-600 text-white">
                    {member.power}
                  </Badge>
                </CardContent>
              </InteractiveCard>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/equipage">
              <InteractiveButton size="lg" className="bg-amber-600 hover:bg-amber-700 text-white">
                <Users className="mr-2 h-5 w-5" />
                Découvrir tout l'équipage
              </InteractiveButton>
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Episodes Section */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-blue-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="pirate-text text-4xl md:text-6xl font-bold text-amber-100 mb-4">Dernières Aventures</h2>
            <p className="ancient-text text-xl text-amber-200">
              Ne manquez aucun épisode ni chapitre de l'épopée de Luffy !
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {latestEpisodes.map((episode, index) => (
              <InteractiveCard
                key={episode.title}
                className="bg-gradient-to-b from-amber-100 to-amber-50 border-amber-600"
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge
                      variant={episode.type === "anime" ? "default" : "secondary"}
                      className={episode.type === "anime" ? "bg-red-600" : "bg-blue-600"}
                    >
                      {episode.type === "anime" ? "Anime" : "Manga"}
                    </Badge>
                    <div className="flex items-center text-amber-700 text-sm">
                      <Calendar className="mr-1 h-4 w-4" />
                      {episode.date}
                    </div>
                  </div>
                  <CardTitle className="ancient-text text-amber-900">{episode.title}</CardTitle>
                  <CardDescription className="text-amber-700">{episode.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button
                    variant="outline"
                    className="w-full border-amber-600 text-amber-800 hover:bg-amber-600 hover:text-white"
                  >
                    <Play className="mr-2 h-4 w-4" />
                    {episode.type === "anime" ? "Regarder" : "Lire"}
                  </Button>
                </CardContent>
              </InteractiveCard>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-red-900 via-amber-800 to-red-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="pirate-text text-4xl md:text-6xl font-bold text-amber-100 mb-8">Prêt pour l'Aventure ?</h2>
          <p className="ancient-text text-xl text-amber-200 mb-12 max-w-3xl mx-auto">
            Explorez les îles mystérieuses, découvrez les pouvoirs des Fruits du Démon et suivez les traces des plus
            grands pirates de tous les temps !
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Link href="/iles-arcs" className="group">
              <div className="parchment-bg p-8 rounded-lg border-2 border-amber-600 hover:scale-105 transition-transform duration-300">
                <Map className="h-12 w-12 text-amber-700 mx-auto mb-4 group-hover:text-red-600 transition-colors" />
                <h3 className="ancient-text text-xl font-bold text-amber-900 mb-2">Îles & Arcs</h3>
                <p className="text-amber-700">Explorez les îles légendaires</p>
              </div>
            </Link>
            <Link href="/fruits-demon" className="group">
              <div className="parchment-bg p-8 rounded-lg border-2 border-amber-600 hover:scale-105 transition-transform duration-300">
                <Zap className="h-12 w-12 text-amber-700 mx-auto mb-4 group-hover:text-red-600 transition-colors" />
                <h3 className="ancient-text text-xl font-bold text-amber-900 mb-2">Fruits du Démon</h3>
                <p className="text-amber-700">Découvrez les pouvoirs mystiques</p>
              </div>
            </Link>
            <Link href="/cartes-monde" className="group">
              <div className="parchment-bg p-8 rounded-lg border-2 border-amber-600 hover:scale-105 transition-transform duration-300">
                <Compass className="h-12 w-12 text-amber-700 mx-auto mb-4 group-hover:text-red-600 transition-colors" />
                <h3 className="ancient-text text-xl font-bold text-amber-900 mb-2">Cartes & Monde</h3>
                <p className="text-amber-700">Naviguez sur Grand Line</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
