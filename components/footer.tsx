import React from 'react'
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import {
  Phone,
  Mail,
  MessageCircle,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
const Footer = () => {
  return (
    <div>
      <footer className="bg-slate-900 text-white py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
                <Link href="/">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-30 h-30 rounded-lg flex items-center justify-center">
                  <Image src="/logo/logo.png" alt="Logo" width={50} height={50} />
                </div>
            
              </div>
              </Link>
              <p className="text-slate-400 mb-4">
                Laboratorio de referencia en México especializado en patología y biología molecular, comprometidos con
                la excelencia diagnóstica desde el año 2000.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white">
                  <Phone className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white">
                  <Mail className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white">
                  <MessageCircle className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <div style={{ fontFamily: 'Source Sans Pro Bold, Arial, Helvetica, sans-serif' }}>
              <h4 className="font-semibold mb-4">Servicios</h4>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Inmunohistoquímica
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Patología Quirúrgica
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Biología Molecular
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Hematopatología
                  </Link>
                </li>
              </ul>
            </div>

            <div style={{ fontFamily: 'Source Sans Pro Bold, Arial, Helvetica, sans-serif' }}>
              <h4 className="font-semibold mb-4">Contacto Rápido</h4>
              <ul className="space-y-2 text-slate-400">
                <li>55 5254 3827</li>
                <li>info@picpatologia.com</li>
               <Link href="https://wa.me/525619852072"> <li>WhatsApp: 56 1985 2072</li></Link>
                <li>Polanco, CDMX</li>
              </ul>
            </div>
          </div>

          <Separator className="my-8 bg-slate-700" />

          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm">
              © {new Date().getFullYear()} Patología - Todos los derechos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-slate-400 hover:text-white text-sm transition-colors">
                Privacidad
              </Link>
              <Link href="#" className="text-slate-400 hover:text-white text-sm transition-colors">
                Términos
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer


