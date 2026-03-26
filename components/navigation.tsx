"use client"

import Link from "next/link"
import { ShoppingBag, Heart, Menu, X } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [cartCount, setCartCount] = useState(0)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="font-serif text-2xl md:text-3xl font-light tracking-wide text-foreground">
              Serene Atelier
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/collections"
              className="text-sm tracking-wider uppercase text-foreground/70 hover:text-foreground transition-colors"
            >
              Collections
            </Link>
            <Link
              href="/shop"
              className="text-sm tracking-wider uppercase text-foreground/70 hover:text-foreground transition-colors"
            >
              Shop
            </Link>
            <Link
              href="/lookbook"
              className="text-sm tracking-wider uppercase text-foreground/70 hover:text-foreground transition-colors"
            >
              Lookbook
            </Link>
            <Link
              href="/about"
              className="text-sm tracking-wider uppercase text-foreground/70 hover:text-foreground transition-colors"
            >
              About
            </Link>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <Link href="/wishlist" className="hidden sm:block">
              <Button variant="ghost" size="icon" className="relative">
                <Heart className="h-5 w-5" />
              </Button>
            </Link>
            <Link href="/cart">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingBag className="h-5 w-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-accent text-accent-foreground text-xs flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </Button>
            </Link>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="px-4 py-6 space-y-4">
            <Link
              href="/collections"
              className="block text-base tracking-wider uppercase text-foreground/70 hover:text-foreground transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Collections
            </Link>
            <Link
              href="/shop"
              className="block text-base tracking-wider uppercase text-foreground/70 hover:text-foreground transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Shop
            </Link>
            <Link
              href="/lookbook"
              className="block text-base tracking-wider uppercase text-foreground/70 hover:text-foreground transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Lookbook
            </Link>
            <Link
              href="/about"
              className="block text-base tracking-wider uppercase text-foreground/70 hover:text-foreground transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/wishlist"
              className="block text-base tracking-wider uppercase text-foreground/70 hover:text-foreground transition-colors sm:hidden"
              onClick={() => setMobileMenuOpen(false)}
            >
              Wishlist
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
