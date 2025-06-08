import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { Sword, Navigation, Target, ChefHat, Stethoscope, Book, Music, Wrench } from "lucide-react"

const fullCrew = [
  {
    name: "Monkey D. Luffy",
    role: "Capitaine",
    power: "Gomu Gomu no Mi",
    description: "Le capitaine optimiste et déterminé qui rêve de devenir le Roi des Pirates.",
    bounty: "3,000,000,000",
    icon: Sword,
    image: "/images/luffy.jpg",
  },
  {
    name: "Roronoa Zoro",
    role: "Épéiste",
    power: "Santoryu (Trois sabres)",
    description: "Le bras droit de Luffy, maître épéiste qui aspire à devenir le plus grand sabreur du monde.",
    bounty: "1,111,000,000",
    icon: Sword,
    image: "/images/Roronoa_Zoro_Infobox.webp",
  },
  {
    name: "Nami",
    role: "Navigatrice",
    power: "Climatact",
    description: "La navigatrice experte qui rêve de cartographier le monde entier.",
    bounty: "366,000,000",
    icon: Navigation,
    image: "/images/Immagine-2022-08-18-121006.webp",
  },
  {
    name: "Usopp",
    role: "Tireur d'élite",
    power: "Fronde et gadgets",
    description: "Le tireur d'élite courageux qui aspire à devenir un brave guerrier des mers.",
    bounty: "500,000,000",
    icon: Target,
    image: "/images/Usopp.webp",
  },
  {
    name: "Sanji",
    role: "Cuisinier",
    power: "Jambe Noire",
    description: "Le cuisinier passionné qui recherche All Blue, la mer légendaire.",
    bounty: "1,032,000,000",
    icon: ChefHat,
    image: "/images/Vinsmoke_Sanji.webp",
  },
  {
    name: "Tony Tony Chopper",
    role: "Médecin",
    power: "Hito Hito no Mi",
    description: "Le médecin renne qui rêve de soigner toutes les maladies du monde.",
    bounty: "1,000",
    icon: Stethoscope,
    image: "/images/Chopper.webp",
  },
  {
    name: "Nico Robin",
    role: "Archéologue",
    power: "Hana Hana no Mi",
    description: "L'archéologue qui cherche à découvrir l'histoire vraie du monde.",
    bounty: "930,000,000",
    icon: Book,
    image: "/images/robine.webp",
  },
  {
    name: "Franky",
    role: "Charpentier",
    power: "Cyborg",
    description: "Le charpentier cyborg qui a construit le Thousand Sunny.",
    bounty: "394,000,000",
    icon: Wrench,
    image: "/images/Franky.webp",
  },
  {
    name: "Brook",
    role: "Musicien",
    power: "Yomi Yomi no Mi",
    description: "Le musicien squelette qui souhaite retrouver son ami Laboon.",
    bounty: "383,000,000",
    icon: Music,
    image: "/images/brook.jpg",
  },
]

export default function EquipagePage() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="pirate-text text-5xl md:text-7xl font-bold text-amber-100 mb-6">
            L'Équipage du Chapeau de Paille
          </h1>
          <p className="ancient-text text-xl text-amber-200 max-w-4xl mx-auto">
            Découvrez chaque membre de l'équipage de Monkey D. Luffy, leurs rêves, leurs pouvoirs et leur histoire
            unique qui les lie dans cette aventure extraordinaire sur Grand Line.
          </p>
        </div>

        {/* Crew Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {fullCrew.map((member, index) => {
            const IconComponent = member.icon
            return (
              <Card
                key={member.name}
                className="parchment-bg border-amber-600 hover:scale-105 transition-all duration-300 hover:shadow-2xl"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 relative">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={200}
                      height={200}
                      className="rounded-full border-4 border-amber-600"
                    />
                    <div className="absolute -bottom-2 -right-2 bg-red-600 rounded-full p-2">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <CardTitle className="ancient-text text-amber-900 text-2xl mb-2">{member.name}</CardTitle>
                  <CardDescription className="text-amber-700 font-semibold text-lg">{member.role}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-amber-800 text-center">{member.description}</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <Badge variant="secondary" className="bg-red-600 text-white">
                      {member.power}
                    </Badge>
                    <Badge variant="outline" className="border-amber-600 text-amber-800">
                      Prime: {member.bounty} ฿
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Ship Section */}
        <div className="mt-20 text-center">
          <Card className="parchment-bg border-amber-600 max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="pirate-text text-3xl text-amber-900">Thousand Sunny</CardTitle>
              <CardDescription className="ancient-text text-lg text-amber-700">
                Le navire de l'équipage du Chapeau de Paille
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Image
                src="/images/ThousandSunny.jpeg"
                alt="Thousand Sunny"
                width={600}
                height={300}
                className="mx-auto rounded-lg border-2 border-amber-600"
              />
              <p className="text-amber-800 max-w-2xl mx-auto">
                Construit par Franky avec le bois précieux de l'Arbre Adam, le Thousand Sunny est le second navire de
                l'équipage. Équipé de nombreuses fonctionnalités innovantes, il accompagne les Chapeaux de Paille dans
                toutes leurs aventures sur Grand Line.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
