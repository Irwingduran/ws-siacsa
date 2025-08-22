import type { Metadata } from 'next'
import './globals.css'
import SocialMediaButtons from '@/components/social-media-buttons'

export const metadata: Metadata = {
  title: 'Patología Denisse A. Picazo',
  description: 'Laboratorio especializado en el área de oncología, donde integramos la Patología y la Biología Molecular para ofrecer una gran gama de estudios específicos que proporcionen la información necesaria para definir el diagnóstico, tratamiento y monitoreo de pacientes, a fin de definir terapias de precisión.'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body>
        {children}
        <SocialMediaButtons />
      </body>
    </html>
  )
}