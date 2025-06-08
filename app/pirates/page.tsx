import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { InteractiveCard } from "@/components/interactive-card"
import { InteractiveButton } from "@/components/interactive-button"
import Image from "next/image"
import { Crown, Skull, Swords, Users, Zap, Star } from "lucide-react"

const emperors = [
  {
    name: "Kaido",
    title: "Roi des Bêtes",
    crew: "Équipage des Cent Bêtes",
    bounty: "4,611,100,000",
    power: "Uo Uo no Mi (Dragon)",
    territory: "Wano",
    status: "Défait",
    description: "La créature la plus forte du monde, connu pour être invincible en combat singulier.",
    image: "/images/kaido.webp",
    color: "bg-purple-600",
  },
  {
    name: "Charlotte Linlin",
    title: "Big Mom",
    crew: "Équipage de Big Mom",
    bounty: "4,388,000,000",
    power: "Soru Soru no Mi (Âme)",
    territory: "Totto Land",
    status: "Défaite",
    description: "Impératrice de Totto Land, capable de manipuler les âmes et créer des Homies.",
    image: "/images/Linlin.webp",
    color: "bg-pink-600",
  },
  {
    name: "Marshall D. Teach",
    title: "Barbe Noire",
    crew: "Équipage de Barbe Noire",
    bounty: "3,996,000,000",
    power: "Yami Yami no Mi + Gura Gura no Mi",
    territory: "Hachinosu",
    status: "Actif",
    description: "Le seul homme à posséder deux Fruits du Démon, maître des ténèbres et des tremblements.",
    image: "/images/Teach.png",
    color: "bg-black",
  },
  {
    name: "Shanks",
    title: "Le Roux",
    crew: "Équipage du Roux",
    bounty: "4,048,900,000",
    power: "Haki légendaire",
    territory: "Elbaf (?)",
    status: "Actif",
    description: "L'homme qui a inspiré Luffy, maître absolu du Haki et ancien membre de l'équipage de Roger.",
    image: "/images/shanks.jpg",
    color: "bg-red-600",
  },
]

const supernovas = [
  {
    name: "Eustass Kid",
    crew: "Équipage de Kid",
    bounty: "3,000,000,000",
    power: "Jiki Jiki no Mi (Magnétisme)",
    origin: "South Blue",
    description: "Capitaine brutal capable de manipuler le métal et le magnétisme.",
    image: "/images/kid.webp",
  },
  {
    name: "Trafalgar D. Water Law",
    crew: "Équipage du Heart",
    bounty: "3,000,000,000",
    power: "Ope Ope no Mi (Opération)",
    origin: "North Blue",
    description: "Le Chirurgien de la Mort, capable de manipuler tout dans sa Room.",
    image: "/images/law.jpg",
  },
  {
    name: "Basil Hawkins",
    crew: "Équipage de Hawkins",
    bounty: "320,000,000",
    power: "Wara Wara no Mi (Paille)",
    origin: "North Blue",
    description: "Le Magicien, utilise la divination et les poupées vaudou.",
    image: "/images/hawkins.jpg",
  },
  {
    name: "X Drake",
    crew: "Marine (SWORD)",
    bounty: "222,000,000",
    power: "Ryu Ryu no Mi (Allosaurus)",
    origin: "North Blue",
    description: "Ancien pirate devenu agent secret de la Marine.",
    image: "/images/drake.jpg",
  },
  {
    name: "Jewelry Bonney",
    crew: "Équipage de Bonney",
    bounty: "320,000,000",
    power: "Toshi Toshi no Mi (Âge)",
    origin: "South Blue",
    description: "La Gloutonne, capable de manipuler l'âge des êtres vivants.",
    image: "/images/Bonney.jpg",
  },
  {
    name: "Capone Bege",
    crew: "Équipage du Fire Tank",
    bounty: "350,000,000",
    power: "Shiro Shiro no Mi (Château)",
    origin: "West Blue",
    description: "Le Parrain, transforme son corps en forteresse mobile.",
    image: "/images/Bege.jpg",
  },
]

const legendaryPirates = [
  {
    name: "Gol D. Roger",
    title: "Roi des Pirates",
    crew: "Équipage de Roger",
    bounty: "5,564,800,000",
    achievement: "A trouvé le One Piece",
    description: "Le légendaire Roi des Pirates qui a conquis Grand Line et trouvé le trésor ultime.",
    image: "/images/roger.webp",
    status: "Décédé",
  },
  {
    name: "Edward Newgate",
    title: "Barbe Blanche",
    crew: "Équipage de Barbe Blanche",
    bounty: "5,046,000,000",
    achievement: "L'homme le plus proche du One Piece",
    description: "L'homme le plus fort du monde, père de centaines de pirates.",
    image: "/images/Edward.webp",
    status: "Décédé",
  },
  {
    name: "Shiki",
    title: "Le Lion d'Or",
    crew: "Équipage du Lion d'Or",
    bounty: "Non révélée",
    achievement: "Premier évadé d'Impel Down",
    description: "Pirate légendaire capable de faire flotter les îles.",
    image: "/images/shiki.webp",
    status: "Inconnu",
  },
]

const pirateStats = [
  { label: "Empereurs Actuels", value: "2", icon: Crown },
  { label: "Supernovas", value: "11", icon: Star },
  { label: "Prime la plus élevée", value: "5.5B", icon: Skull },
  { label: "Équipages Légendaires", value: "50+", icon: Users },
]

export default function PiratesPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="pirate-text text-5xl md:text-7xl font-bold text-amber-100 mb-6">Pirates Légendaires</h1>
          <p className="ancient-text text-xl text-amber-200 max-w-4xl mx-auto">
            Explorez l'univers des pirates les plus redoutables des mers ! Des Quatre Empereurs aux Supernovas,
            découvrez les équipages qui ont marqué l'histoire de Grand Line.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {pirateStats.map((stat, index) => {
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

        {/* Empereurs Section */}
        <div className="mb-20">
          <h2 className="pirate-text text-4xl text-amber-100 text-center mb-12">Les Quatre Empereurs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {emperors.map((emperor, index) => (
              <InteractiveCard
                key={emperor.name}
                className="parchment-bg border-amber-600 overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative">
                  <Image
                    src={emperor.image || "/placeholder.svg"}
                    alt={emperor.name}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge
                      variant={emperor.status === "Actif" ? "default" : "secondary"}
                      className={emperor.status === "Actif" ? "bg-green-600 text-white" : "bg-gray-600 text-white"}
                    >
                      {emperor.status}
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <div className={`p-2 ${emperor.color} rounded-full`}>
                      <Crown className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="ancient-text text-2xl text-amber-900">{emperor.name}</CardTitle>
                  <CardDescription className="text-amber-700 font-semibold text-lg">{emperor.title}</CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-amber-800">{emperor.description}</p>

                  <div className="grid grid-cols-1 gap-3">
                    <div>
                      <span className="ancient-text font-semibold text-amber-900">Équipage: </span>
                      <span className="text-amber-700">{emperor.crew}</span>
                    </div>
                    <div>
                      <span className="ancient-text font-semibold text-amber-900">Prime: </span>
                      <Badge variant="secondary" className="bg-red-600 text-white">
                        {emperor.bounty} ฿
                      </Badge>
                    </div>
                    <div>
                      <span className="ancient-text font-semibold text-amber-900">Pouvoir: </span>
                      <span className="text-amber-700">{emperor.power}</span>
                    </div>
                    <div>
                      <span className="ancient-text font-semibold text-amber-900">Territoire: </span>
                      <span className="text-amber-700">{emperor.territory}</span>
                    </div>
                  </div>

                  <InteractiveButton
                    variant="outline"
                    className="w-full border-amber-600 text-amber-800 hover:bg-amber-600 hover:text-white"
                  >
                    <Crown className="mr-2 h-4 w-4" />
                    Découvrir l'équipage
                  </InteractiveButton>
                </CardContent>
              </InteractiveCard>
            ))}
          </div>
        </div>

        {/* Supernovas Section */}
        <div className="mb-20">
          <h2 className="pirate-text text-4xl text-amber-100 text-center mb-12">Les Supernovas</h2>
          <p className="ancient-text text-lg text-amber-200 text-center mb-8 max-w-3xl mx-auto">
            Les onze pirates rookies avec une prime supérieure à 100 millions avant d'atteindre l'Archipel Sabaody.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {supernovas.map((supernova, index) => (
              <InteractiveCard
                key={supernova.name}
                className="parchment-bg border-amber-600"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 relative">
                    <Image
                      src={supernova.image || "/placeholder.svg"}
                      alt={supernova.name}
                      width={150}
                      height={150}
                      className="rounded-full border-4 border-amber-600"
                    />
                    <div className="absolute -bottom-2 -right-2 bg-yellow-500 rounded-full p-2">
                      <Star className="h-4 w-4 text-white" />
                    </div>
                  </div>
                  <CardTitle className="ancient-text text-amber-900 text-lg">{supernova.name}</CardTitle>
                  <CardDescription className="text-amber-700">{supernova.crew}</CardDescription>
                </CardHeader>

                <CardContent className="space-y-3">
                  <p className="text-amber-800 text-sm text-center">{supernova.description}</p>

                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="ancient-text text-amber-900 text-sm">Prime:</span>
                      <Badge variant="secondary" className="bg-red-600 text-white text-xs">
                        {supernova.bounty} ฿
                      </Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="ancient-text text-amber-900 text-sm">Origine:</span>
                      <span className="text-amber-700 text-sm">{supernova.origin}</span>
                    </div>
                    <div className="text-center">
                      <Badge variant="outline" className="border-amber-600 text-amber-800 text-xs">
                        {supernova.power}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </InteractiveCard>
            ))}
          </div>
        </div>

        {/* Pirates Légendaires Section */}
        <div className="mb-16">
          <h2 className="pirate-text text-4xl text-amber-100 text-center mb-12">Pirates Légendaires</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {legendaryPirates.map((pirate, index) => (
              <InteractiveCard
                key={pirate.name}
                className="parchment-bg border-amber-600"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 relative">
                    <Image
                      src={pirate.image || "/placeholder.svg"}
                      alt={pirate.name}
                      width={150}
                      height={150}
                      className="rounded-full border-4 border-amber-600 grayscale"
                    />
                    <div className="absolute -bottom-2 -right-2 bg-purple-600 rounded-full p-2">
                      <Skull className="h-4 w-4 text-white" />
                    </div>
                  </div>
                  <CardTitle className="ancient-text text-amber-900 text-lg">{pirate.name}</CardTitle>
                  <CardDescription className="text-amber-700 font-semibold">{pirate.title}</CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-amber-800 text-sm text-center">{pirate.description}</p>

                  <div className="space-y-2">
                    <div>
                      <span className="ancient-text font-semibold text-amber-900 text-sm">Équipage: </span>
                      <span className="text-amber-700 text-sm">{pirate.crew}</span>
                    </div>
                    {pirate.bounty !== "Non révélée" && (
                      <div>
                        <span className="ancient-text font-semibold text-amber-900 text-sm">Prime: </span>
                        <Badge variant="secondary" className="bg-purple-600 text-white text-xs">
                          {pirate.bounty} ฿
                        </Badge>
                      </div>
                    )}
                    <div>
                      <span className="ancient-text font-semibold text-amber-900 text-sm">Exploit: </span>
                      <span className="text-amber-700 text-sm">{pirate.achievement}</span>
                    </div>
                    <div className="text-center">
                      <Badge
                        variant="outline"
                        className={`border-amber-600 text-xs ${
                          pirate.status === "Décédé" ? "text-gray-600" : "text-amber-800"
                        }`}
                      >
                        {pirate.status}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </InteractiveCard>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <InteractiveCard className="parchment-bg border-amber-600 max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="pirate-text text-3xl text-amber-900">L'Ère des Pirates Continue</CardTitle>
              <CardDescription className="ancient-text text-lg text-amber-700">
                De nouveaux pirates émergent chaque jour sur Grand Line
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-amber-800 max-w-2xl mx-auto">
                Avec la mort de Barbe Blanche et l'exécution de Roger, une nouvelle génération de pirates se lance à la
                conquête des mers. Qui sera le prochain Roi des Pirates ?
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center space-y-2">
                  <Swords className="h-8 w-8 text-amber-700 mx-auto" />
                  <h3 className="ancient-text font-semibold text-amber-900">Nouvelles Alliances</h3>
                  <p className="text-amber-700 text-sm">Les équipages s'unissent pour défier les Empereurs</p>
                </div>
                <div className="text-center space-y-2">
                  <Zap className="h-8 w-8 text-amber-700 mx-auto" />
                  <h3 className="ancient-text font-semibold text-amber-900">Pouvoirs Éveillés</h3>
                  <p className="text-amber-700 text-sm">Les Fruits du Démon révèlent leurs vrais potentiels</p>
                </div>
                <div className="text-center space-y-2">
                  <Crown className="h-8 w-8 text-amber-700 mx-auto" />
                  <h3 className="ancient-text font-semibold text-amber-900">Course au One Piece</h3>
                  <p className="text-amber-700 text-sm">La bataille finale pour le trésor ultime approche</p>
                </div>
              </div>
            </CardContent>
          </InteractiveCard>
        </div>
      </div>
    </div>
  )
}
