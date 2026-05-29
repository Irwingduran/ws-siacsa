"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, ChevronDown, Phone } from "lucide-react"
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
                isScrolled ? "text-gray-800 hover:text-[#EF7632]" : "text-white hover:text-[#F5B98B]"
              }`}
            >
              Inicio
            </Link>

            <Link
              href="/#about"
              className={`font-medium transition-colors ${
                isScrolled ? "text-gray-800 hover:text-[#EF7632]" : "text-white hover:text-[#F5B98B]"
              }`}
            >
              Nosotros
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger
                className={`flex items-center font-medium transition-colors ${
                  isScrolled ? "text-gray-800 hover:text-[#EF7632]" : "text-white hover:text-[#F5B98B]"
                }`}
              >
                Productos <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center" className="w-56">
                <DropdownMenuItem asChild>
                  <Link href="/products" className="cursor-pointer">
                    Todos los productos
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/products#expansion-directa" className="cursor-pointer">
                    Expansión Directa
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/products#agua-helada" className="cursor-pointer">
                    Agua Helada
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/products#vrf" className="cursor-pointer">
                    VRF
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/products#herramientas-controles" className="cursor-pointer">
                    Herramientas y Controles
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              href="/#contact"
              className={`font-medium transition-colors ${
                isScrolled ? "text-gray-800 hover:text-[#EF7632]" : "text-white hover:text-[#F5B98B]"
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
              <Phone onClick={() => window.open("tel:5544444234")} className="h-5 w-5 mr-2 text-[#EF7632] cursor-pointer" />
             <a href="tel:+525544444234"><span className="font-medium">(+52) 55 4444 4234 </span></a> 
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
            <Link href="/products">Todos los Productos</Link>
          </SheetClose>
          <SheetClose asChild>
            <Link href="/products#expansion-directa">Expansión Directa</Link>
          </SheetClose>
          <SheetClose asChild>
            <Link href="/products#agua-helada">Agua Helada</Link>
          </SheetClose>
          <SheetClose asChild>
            <Link href="/products#vrf">VRF</Link>
          </SheetClose>
          <SheetClose asChild>
            <Link href="/products#herramientas-controles">Herramientas y Controles</Link>
          </SheetClose>
         
        </div>
      </div>

      <SheetClose asChild>
        <Link href="/#about" className="text-lg font-medium">
          Nosotros
        </Link>
      </SheetClose>

      <SheetClose asChild>
        <Link href="/#contact" className="text-lg font-medium">
          Contacto
        </Link>
      </SheetClose>

      <div className="pt-4 border-t">
        <div className="flex items-center space-x-2 text-base font-medium">
          <Phone className="h-5 w-5 text-[#EF7632]" />
          <a href="tel:+525544444234" > <span>(+52) 55 4444 4234</span></a>
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
