'use client';

import { Button } from "@/components/ui/button";
import { Menu, Calendar } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const navLinks = [
    { href: "/", text: "Inicio" },
    { href: "/#conocenos", text: "Conócenos" },
    { href: "#servicios", text: "Servicios" },
    { href: "/#blog", text: "Blog" },
  ];



  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-slate-200 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-16 h-16 rounded-lg flex items-center justify-center">
              <Image 
                src="/logo/logo.png" 
                alt="Logo PIC Patología" 
                width={64} 
                height={64} 
                priority
                className="w-full h-auto"
              />
            </div>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-slate-700 hover:text-blue-600 font-medium transition-colors"
              >
                {link.text}
              </Link>
            ))}
            
            <Link href="/#contacto">
            <Button 
              className="bg-blue-600 hover:bg-blue-700 text-white ml-4 transition-colors duration-200"
              aria-label="Agendar cita por WhatsApp"
            >
              <Calendar className="w-4 h-4 mr-2" />
            Contacto
            </Button></Link>
          </nav>

          <Button 
            className="md:hidden" 
            variant="ghost" 
            size="sm"
            aria-label="Menú móvil"
          >
            <Menu className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
