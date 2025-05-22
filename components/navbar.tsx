"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X, ChevronDown, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }


    handleScroll()
    
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled 
          ? "bg-white shadow-md py-2" 
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative h-20 w-40">
              <Image
                src="/logo.png"
                alt="Proveedora de Climas"
                fill
                className={`object-contain transition-all duration-300 ${
                  isScrolled ? "" : "brightness-0 invert"
                }`}
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link
              href="/"
              className={`font-medium transition-colors ${
                isScrolled ? "text-gray-800 hover:text-red-500" : "text-white hover:text-red-300"
              }`}
            >
              Inicio
            </Link>

            <Link
              href="/nosotros"
              className={`font-medium transition-colors ${
                isScrolled ? "text-gray-800 hover:text-red-500" : "text-white hover:text-red-300"
              }`}
            >
              Nosotros
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger
                className={`flex items-center font-medium transition-colors ${
                  isScrolled ? "text-gray-800 hover:text-red-500" : "text-white hover:text-red-300"
                }`}
              >
                Productos <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center" className="w-56">
                <DropdownMenuItem asChild>
                  <Link href="/productos/mini-split" className="cursor-pointer">
                    Mini Split
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/productos/aire-central" className="cursor-pointer">
                    Aire Central
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/productos/vrf" className="cursor-pointer">
                    Sistemas VRF
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/productos/chillers" className="cursor-pointer">
                    Chillers
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/productos/accesorios" className="cursor-pointer">
                    Accesorios
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              href="/blog"
              className={`font-medium transition-colors ${
                isScrolled ? "text-gray-800 hover:text-red-500" : "text-white hover:text-red-300"
              }`}
            >
              Proyectos
            </Link>

            <Link
              href="/contacto"
              className={`font-medium transition-colors ${
                isScrolled ? "text-gray-800 hover:text-red-500" : "text-white hover:text-red-300"
              }`}
            >
              Contacto
            </Link>
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className={`flex items-center ${
              isScrolled ? "text-gray-800" : "text-white"
            }`}>
              <Phone className="h-5 w-5 mr-2 text-red-500" />
              <span className="font-medium">+52 (55) 2653 7063</span>
            </div>
          </div>

          {/* Mobile Menu Trigger */}
          <Sheet>
  <SheetTrigger asChild>
    <Button variant="ghost" size="icon" className="lg:hidden">
      <Menu className={`h-6 w-6 ${
        isScrolled ? "text-gray-800" : "text-white"
      }`} />
      <span className="sr-only">Abrir menú</span>
    </Button>
  </SheetTrigger>
  <SheetContent side="right" className="w-[300px] sm:w-[350px]">
    <div className="flex flex-col space-y-6 mt-8">
      <SheetClose asChild>
        <Link href="/" className="text-lg font-medium">
          Inicio
        </Link>
      </SheetClose>

      <div className="space-y-2">
        <p className="text-lg font-medium">Productos</p>
        <div className="ml-4 flex flex-col space-y-2 text-base">
          <SheetClose asChild>
            <Link href="/productos/mini-split">Mini Split</Link>
          </SheetClose>
          <SheetClose asChild>
            <Link href="/productos/aire-central">Aire Central</Link>
          </SheetClose>
          <SheetClose asChild>
            <Link href="/productos/vrf">Sistemas VRF</Link>
          </SheetClose>
          <SheetClose asChild>
            <Link href="/productos/chillers">Chillers</Link>
          </SheetClose>
          <SheetClose asChild>
            <Link href="/productos/accesorios">Accesorios</Link>
          </SheetClose>
        </div>
      </div>

      <SheetClose asChild>
        <Link href="/nosotros" className="text-lg font-medium">
          Nosotros
        </Link>
      </SheetClose>

      <SheetClose asChild>
        <Link href="/blog" className="text-lg font-medium">
          Proyectos
        </Link>
      </SheetClose>

      <SheetClose asChild>
        <Link href="/contacto" className="text-lg font-medium">
          Contacto
        </Link>
      </SheetClose>

      <div className="pt-4 border-t">
        <div className="flex items-center space-x-2 text-base font-medium">
          <Phone className="h-5 w-5 text-red-500" />
          <span>+52 (55) 2653 7063</span>
        </div>
      </div>
    </div>
  </SheetContent>
</Sheet>

        </div>
      </div>
    </header>
  )
}