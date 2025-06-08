import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { Zap, Droplets, Leaf, Skull, Crown, Wind } from "lucide-react"

const devilFruits = [
  {
    name: "Gomu Gomu no Mi",
    type: "Paramecia",
    user: "Monkey D. Luffy",
    description: "Transforme le corps en caoutchouc, offrant une élasticité et une résistance extraordinaires.",
    awakening: "Gear 5 - Nika",
    icon: Zap,
    color: "bg-red-500",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Mera Mera no Mi",
    type: "Logia",
    user: "Portgas D. Ace / Sabo",
    description: "Permet de créer, contrôler et se transformer en feu.",
    awakening: "Non révélé",
    icon: Zap,
    color: "bg-orange-500",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Hie Hie no Mi",
    type: "Logia",
    user: "Kuzan (Aokiji)",
    description: "Permet de créer, contrôler et se transformer en glace.",
    awakening: "Changement climatique permanent",
    icon: Droplets,
    color: "bg-blue-500",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Yami Yami no Mi",
    type: "Logia",
    user: "Marshall D. Teach (Barbe Noire)",
    description: "Contrôle les ténèbres et peut annuler les pouvoirs des autres Fruits du Démon.",
    awakening: "Non révélé",
    icon: Skull,
    color: "bg-black",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Ope Ope no Mi",
    type: "Paramecia",
    user: "Trafalgar D. Water Law",
    description: "Crée une sphère où l'utilisateur peut manipuler tout à volonté.",
    awakening: "Manipulation sans Room",
    icon: Crown,
    color: "bg-purple-500",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Gura Gura no Mi",
    type: "Paramecia",
    user: "Edward Newgate (Barbe Blanche) / Marshall D. Teach",
    description: "Le pouvoir de créer des tremblements de terre et des tsunamis.",
    awakening: "Non révélé",
    icon: Wind,
    color: "bg-gray-500",
    image: "/placeholder.svg?height=200&width=200",
  },
]

const fruitTypes = [
  {
    name: "Paramecia",
    description: "Modifie le corps de l'utilisateur ou lui donne des capacités surhumaines",
    color: "bg-green-600",
    examples: ["Gomu Gomu no Mi", "Ope Ope no Mi", "Gura Gura no Mi"],
  },
  {
    name: "Zoan",
    description: "Permet de se transformer en animal ou en forme hybride",
    color: "bg-amber-600",
    examples: ["Hito Hito no Mi", "Inu Inu no Mi", "Neko Neko no Mi"],
  },
  {
    name: "Logia",
    description: "Permet de créer, contrôler et se transformer en élément naturel",
    color: "bg-blue-600",
    examples: ["Mera Mera no Mi", "Hie Hie no Mi", "Yami Yami no Mi"],
  },
]

export default function FruitsDemonPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="pirate-text text-5xl md:text-7xl font-bold text-amber-100 mb-6">Fruits du Démon</h1>
          <p className="ancient-text text-xl text-amber-200 max-w-4xl mx-auto">
            Découvrez les mystérieux Fruits du Démon, ces fruits légendaires qui accordent des pouvoirs extraordinaires
            à ceux qui les consomment, au prix de leur capacité à nager.
          </p>
        </div>

        {/* Types Section */}
        <div className="mb-16">
          <h2 className="pirate-text text-3xl text-amber-100 text-center mb-8">Types de Fruits du Démon</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {fruitTypes.map((type, index) => (
              <Card
                key={type.name}
                className="parchment-bg border-amber-600 hover:scale-105 transition-transform duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="text-center">
                  <div className={`w-16 h-16 ${type.color} rounded-full mx-auto mb-4 flex items-center justify-center`}>
                    <Leaf className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="ancient-text text-2xl text-amber-900">{type.name}</CardTitle>
                  <CardDescription className="text-amber-700">{type.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold text-amber-900 mb-2">Exemples :</h4>
                  <div className="space-y-1">
                    {type.examples.map((example) => (
                      <Badge key={example} variant="outline" className="border-amber-600 text-amber-800 mr-1 mb-1">
                        {example}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Famous Fruits Grid */}
        <div className="mb-16">
          <h2 className="pirate-text text-3xl text-amber-100 text-center mb-8">Fruits Légendaires</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {devilFruits.map((fruit, index) => {
              const IconComponent = fruit.icon
              return (
                <Card
                  key={fruit.name}
                  className="parchment-bg border-amber-600 hover:scale-105 transition-all duration-300 hover:shadow-2xl"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader className="text-center">
                    <div className="mx-auto mb-4 relative">
                      <Image
                        src={fruit.image || "/placeholder.svg"}
                        alt={fruit.name}
                        width={150}
                        height={150}
                        className="rounded-full border-4 border-amber-600"
                      />
                      <div className={`absolute -bottom-2 -right-2 ${fruit.color} rounded-full p-2`}>
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <CardTitle className="ancient-text text-amber-900 text-xl mb-2">{fruit.name}</CardTitle>
                    <CardDescription className="text-amber-700 font-semibold">{fruit.user}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-amber-800 text-center text-sm">{fruit.description}</p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      <Badge
                        variant="secondary"
                        className={
                          fruit.type === "Paramecia"
                            ? "bg-green-600 text-white"
                            : fruit.type === "Zoan"
                              ? "bg-amber-600 text-white"
                              : "bg-blue-600 text-white"
                        }
                      >
                        {fruit.type}
                      </Badge>
                      {fruit.awakening !== "Non révélé" && (
                        <Badge variant="outline" className="border-red-600 text-red-800">
                          Éveil: {fruit.awakening}
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Rules Section */}
        <div className="text-center">
          <Card className="parchment-bg border-amber-600 max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="pirate-text text-3xl text-amber-900">Règles des Fruits du Démon</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h3 className="ancient-text text-xl text-amber-900 font-semibold">Avantages</h3>
                  <ul className="text-amber-800 space-y-2 text-left">
                    <li>• Pouvoirs extraordinaires uniques</li>
                    <li>• Capacités surhumaines</li>
                    <li>• Potentiel d'éveil du fruit</li>
                    <li>• Transformation du corps</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h3 className="ancient-text text-xl text-amber-900 font-semibold">Inconvénients</h3>
                  <ul className="text-amber-800 space-y-2 text-left">
                    <li>• Incapacité à nager</li>
                    <li>• Faiblesse face au Granit Marin</li>
                    <li>• Un seul fruit par personne</li>
                    <li>• Vulnérabilité à l'eau de mer</li>
                  </ul>
                </div>
              </div>
              <div className="bg-red-100 border border-red-400 rounded-lg p-4 mt-6">
                <p className="text-red-800 font-semibold">
                  ⚠️ Attention : Consommer deux Fruits du Démon entraîne la mort instantanée !
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
