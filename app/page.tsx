import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section - Full Screen Seasonal Showcase */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/20 to-background/60 z-10" />
        <img
          src="/elegant-minimalist-fashion-model-wearing-neutral-t.jpg"
          alt="Seasonal Collection"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light text-foreground mb-6 text-balance">
            Spring Summer 2024
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-2xl mx-auto leading-relaxed">
            Discover our latest collection of timeless pieces crafted with intention and care
          </p>
          <Link href="/collections">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-base tracking-wider"
            >
              Explore Collection
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground mb-4">Curated for You</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Each piece is thoughtfully designed to complement your lifestyle
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/shop?category=essentials" className="group relative aspect-[3/4] overflow-hidden bg-muted">
              <img
                src="/minimalist-wardrobe-essentials-neutral-clothing.jpg"
                alt="Essentials"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-background">
                <h3 className="font-serif text-2xl md:text-3xl font-light mb-2">Essentials</h3>
                <p className="text-sm text-background/90">Timeless basics</p>
              </div>
            </Link>

            <Link href="/shop?category=outerwear" className="group relative aspect-[3/4] overflow-hidden bg-muted">
              <img
                src="/elegant-outerwear-coat-neutral-tones.jpg"
                alt="Outerwear"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-background">
                <h3 className="font-serif text-2xl md:text-3xl font-light mb-2">Outerwear</h3>
                <p className="text-sm text-background/90">Refined layers</p>
              </div>
            </Link>

            <Link href="/shop?category=dresses" className="group relative aspect-[3/4] overflow-hidden bg-muted">
              <img
                src="/flowing-dress-minimalist-fashion-natural-fabric.jpg"
                alt="Dresses"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-background">
                <h3 className="font-serif text-2xl md:text-3xl font-light mb-2">Dresses</h3>
                <p className="text-sm text-background/90">Effortless elegance</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground mb-6 text-balance">
            Crafted with Intention
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-3xl mx-auto">
            At Serene Atelier, we believe in creating clothing that transcends trends. Each piece is thoughtfully
            designed using sustainable materials and ethical practices, ensuring that beauty and responsibility go hand
            in hand.
          </p>
          <Link href="/about">
            <Button variant="outline" size="lg" className="px-8 py-6 text-base tracking-wider bg-transparent">
              Our Story
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
