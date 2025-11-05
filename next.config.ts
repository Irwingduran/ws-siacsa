import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // variables de entorno pensadas para un neubox 
  env: {
    NEXT_PUBLIC_EMAILJS_SERVICE_ID: 'service_buc7lne',
    NEXT_PUBLIC_EMAILJS_TEMPLATE_ID: 'template_f5zdg5k',
    NEXT_PUBLIC_EMAILJS_PUBLIC_KEY: 'kLCvhJziVsD7K4Xd5',
  }
};

export default nextConfig;
