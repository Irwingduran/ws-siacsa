export const productCategories = [
  {
    id: 'expansion-directa',
    name: 'EXPANSIÓN DIRECTA',
    products: [
      'MINISPLIT HIGH WALL INVERTER',
      'MINI VRF DIVERSE',
      'DIVIDIDO UNIVERSAL INVERTER',
      'PAQUETE INVERTER 18 SEER',
      'PAQUETE COMERCIAL ON-OFF',
      'PAQUETE COMERCIAL INVERTER',
      'SISTEMA DIVIDIDO COMERCIAL'
    ]
  },
  {
    id: 'agua-helada',
    name: 'AGUA HELADA',
    products: [
      'FAN & COIL HIDRÓNICO',
      'CASSETTE 4 VÍAS HIDRÓNICO',
      'CASSETTE 1 VÍA HIDRÓNICO',
      'HIGH WALL HIDRÓNICO',
      'UNIDAD MANEJADORA ANDRADE',
      'MINI CHILLER MODULAR R-32 (1-4 TR)',
      'MINI CHILLER MODULAR 5 TR',
      'CHILLER MODULAR HEAT PUMP',
      'CHILLER MODULAR INVERTER',
      'CHILLER SCROLL',
      'CHILLER TORNILLO'
    ]
  },
  {
    id: 'vrf',
    name: 'VRF',
    products: [
      'MINI VRF AVANTGARDE',
      'VRF AVANTGARDE'
    ]
  },
  {
    id: 'herramientas-controles',
    name: 'HERRAMIENTAS Y CONTROLES',
    products: [
      'BOMBA DE VACÍO',
      'EVOLUTION TERMOSTATO INTELIGENTE'
    ]
  }
];

{/* productos destacadas de la landig page principal */}
export const featuredProducts = [
  {
    id: 1,
    name: 'MINISPLIT HIGH WALL INVERTER',
    brand: 'Intensity',
    rating: 4.8,
    image: '/products/minisplit-high-wall/minisplit-high-wall.png',
    category: 'expansion-directa',
    description: 'Le permite alcanzar el máximo ahorro de energía gracias a su alta eficiencia. Capacidades completas garantizadas.'
  },
  {
    id: 2,
    name: 'MINI VRF DIVERSE',
    brand: 'Intensity',
    rating: 4.7,
    image: '/products/mini-vrf-diverse/mini-vrf-diverse.png',
    category: 'expansion-directa',
    description: 'Este novedoso Sistema lntensity Diverse, permite conectar cualquier combinación disponible de Unidades Interiores hasta que lo permita el sistema de selección según cada proyecto, aprovechando la tecnología lnverter para optimizar el consumo de energía y el controlador maestro CCM15 (opcional) para poder manejar cada sistema completo desde un smartphone o tablet.'
  },
  {
    id: 3,
    name: 'CHILLER MODULAR INVERTER',
    brand: 'Intensity',
    rating: 4.9,
    image: '/products/ChillerModularInverter.png',
    category: 'agua-helada',
    description: 'La solución más confiable para acondicionar tus espacios'
  },
  {
    id: 4,
    name: 'VRF AVANTGARDE',
    brand: 'Intensity',
    rating: 4.8,
    image: '/products/vrf-avantgarde.png',
    category: 'vrf',
    description: 'Nuestro VRF AVANTGARDE es la solución perfecta para el acondicionamiento de tus espacios.'
  },
  {
    id: 5,
    name: 'DIVIDIDO UNIVERSAL INVERTER',
    brand: 'Intensity',
    rating: 4.6,
    image: '/products/dividido-universal-inverter.png',
    category: 'expansion-directa',
    description: 'Es la mejor opción para climatizar tu espacio, de uno y dos circuitos según su capacidad.'
  },
  {
    id: 6,
    name: 'PAQUETE INVERTER 18 SEER',
    brand: 'Intensity',
    rating: 4.7,
    image: '/products/paquete-inverter-18.png',
    category: 'expansion-directa',
    description: 'Llega a revolucionar en este tipo de aplicación en el mercado nacional, formando parte de la nueva línea Black Series lntensity. Su gran ahorro energético se debe a la tecnología lnverter en su compresor rotativo y su alta eficiencia de 18 SEER.'
  },
  {
    id: 7,
    name: 'UNIDAD MANEJADORA ANDRADE',
    brand: 'Intensity',
    image: '/products/UMA.png',
    category: 'agua-helada',
    description: 'Unidad de excelente aceptación en el mercado debido a su fabricación de doble pared con poliuretano inyectado de 25 mm y su capacidad de enfriamiento mejorada gracias a su serpentín de 6 hieleras. ¡Calidad de primer nivel!'
  },
  {
    id: 8,
    name: 'MINI CHILLER MODULAR R-32 (1-4 TR)',
    brand: 'Intensity',
    image: '/products/MiniChillerModularR32.png',
    category: 'agua-helada',
    description: 'El Mini Chiller Modular Inverter es un sistema integral que brinda enfriamiento y calefacción confiable durante todo el año; ideal para espacios de crecimiento prograsico.'
  }
];

{/* empieza todos los productos de la landing page correspondiente */}
export const sectionOneProducts = [ 
  {
    id: 1,
    name: 'MINISPLIT HIGH WALL INVERTER',
    brand: 'Intensity',
    rating: 4.8,
    image: '/products/minisplit-high-wall/minisplit-high-wall.png',
    category: 'expansion-directa',
    description: 'Le permite alcanzar  el máximo  ahorro  de energía gracias  a su alta eficiencia. Capacidades completas garantizadas.',
    specifications: [
      'Capacidades disponibles: 1, 1.5 y 3 TR (Frío - Calor)',
      'Voltaje: 115V (1 TR) y 220V (1-3 TR)',
      'Refrigerante: R-410A'
    ]
  },
  {
    id: 2,
    name: 'MINI VRF DIVERSE',
    brand: 'Intensity',
    image: '/products/mini-vrf-diverse/mini-vrf-diverse.png',
    category: 'expansion-directa',
    description: 'Este novedoso Sistema lntensity Diverse, permite conectar cualquier combinación disponible de Unidades Interiores hasta que lo permita el sistema de selección según cada proyecto, aprovechando la tecnología lnverter para optimizar el consumo de energía y el controlador maestro CCM15 (opcional) para poder manejar cada sistema completo desde un smartphone o tablet.',
    specifications: [
      'Modelos: Fan & Coil, Cassette 1 vía, Cassette 4 vías, High Wall, Condensadora',
      'Volltaje de operación: 220V-1F-60Hz',
      'refrigerante: R-410A'
    ]
  },
  {
    id: 3,
    name: 'DIVIDIDO UNIVERSAL INVERTER',
    brand: 'Intensity',
    image: '/products/dividido-universal-inverter.png',
    category: 'expansion-directa',
    description: 'Es la mejor opción para climatizar tu espacio, de uno y dos circuitos según su capacidad.',
    specifications: [
      'Manejadora horizontal.',
      'Un circuito en 7.5 y 10 TR',
      'Dos circuitos en 15 y 20 TR',
      'Controlador incluido',
      'capacidades disponibles: 7.5, 10, 15 y 20 TR (solo frio)',
      'Voltaje: 220V-3F-60Hz',
      'Refrigerante: R-410A'
    ]
  },
  {
    id: 4,
    name: 'PAQUETE INVERTER 18 SEER',
    brand: 'Intensity',
    image: '/products/paquete-inverter-18.png',
    category: 'expansion-directa',
    description: 'Llega a revolucionar en este tipo de aplicación en el mercado nacional, formando parte de la nueva línea Black Series lntensity. Su gran ahorro energético se debe a la tecnología lnverter en su compresor rotativo y su alta eficiencia de 18 SEER.',
    specifications: [
      'Compresor rotativo Inverter',
      'Motor evaporador tipo ECM y condensador DC Inverter',
      'Descarga y retorno de aire horizontal',
      'Recubrimiento anticorrosivo para ambiente salino',
      'La calefacción opera hasta -15°C',
      'Capacidades: 3 y 5 TR',
      'Voltaje: 220V-1F-60Hz',
      'Refrigerante: R-410A'
    ]
  },
  {
    id: 5,
    name: 'PAQUETE COMERCIAL ON-OFF',
    brand: 'Intensity',
    image: '/products/paquete-comercial-on-off.png',
    category: 'agua-helada',
    description: 'Son las unidades más compactas del mercado aprovechando así los espacios exteriores donde se instalan, contando con inyección y retorno de manera horizontal para su conveniente instalación. Incluye termostato digital básico.',
    specifications: [
      'Capacidades disponibles: 7.5, 10, 15, 20, 25 y 30 TR (Solo frío)',
      'Voltaje de operación: 220V-3F-60Hz (7.5 a 30 TR)',
      'Voltaje de operación: 460V-3F-60Hz (20 a 30 TR)',
      'Refrigerante R-410A'
    ]
  },
  {
    id: 6,
    name: 'PAQUETE COMERCIAL INVERTER',
    brand: 'Intensity',
    image: '/products/paquete-comercial-inverter.png',
    category: 'agua-helada',
    description: 'El paquete Comercial lntensity ahora cuenta con la opción de controlarse bajo la tecnología WiFi. Diseño compacto, descarga de inyección y retorno horizontal y filtro lavable incluido hacen de esta unidad la más eficiente, tecnológica y versátil para sus proyectos.',
    specifications: [
      'Capacidad disponible: 220V - 5, 10, 15 y 20 TR (Frío-Calor)',
      'Capacidad disponible: 460V - 15, 20, 25 y 30 TR (Solo frío)',
      'Voltaje de operación: 220V-3F-60Hz y 460V-3F-60Hz',
      'Refrigerante: R-410A'
    ]
  },
  {
    id: 7,
    name: 'SISTEMA DIVIDIDO COMERCIAL',
    brand: 'Intensity',
    image: '/products/sistema-dividido-comercial.png',
    category: 'vrf',
    description: 'Es la mejor opción para climatizar tu espacio, de uno y dos circuitos según su capacidad.',
    specifications: [
      'Manejadora horizontal',
      'Un circuito en 7.5 y 10 TR',
      'Dos circuitos en 15 y 20 TR',
      'Controlador incluido',
      'Capacidad disponible: 7.5, 10, 15 y 20 TR (Solo frío)',
      'Voltaje de operación: 220V-3F-60Hz',
      'Refrigerante: R-410A'
    ]
  },
];

export const sectionTwoProducts = [
  {
    id: 1,
    name: 'FAN & COIL HIDRÓNICO',
    brand: 'Intensity',
    image: '/products/fan-coil-hifronico/fan-coil.png',
    category: 'agua-helada',
    description: 'Es el complemento perfecto para unidades genera­ doras de agua helada. Cuenta con un diseño de bajo peralte.',
    specifications: [
      'Termostato incluido lntensity',
      'Serpentín intercambiable de izquierda a derecha',
      'Serpentín de 4 hileras',
      'Capacidades disponibles: 1, 1.5, 2, 3, 4 y 5 TR 4 hileras (Frío - Calor)',
      'Voltaje de operación: 115V-1F-60Hz (1, 1.5 y 2 TR)',
      'Voltaje de operación: 220V-1F-60Hz (3, 4 y 5 TR)',
      'Agua helada / Agua caliente'
    ]
  },
  {
    id: 2,
    name: 'CASSETTE 4 VÍAS HIDRÓNICO',
    brand: 'Intensity',
    image: '/products/cassette-4vias-compacto.png',
    category: 'agua-helada',
    description: 'Cuenta con 4 vías de distribución de aire, ofrece un desempeño óptimo.',
    specifications: [
      'Bomba de drenado para alcanzar una altura de hasta 75 cm',
      'Control remoto incluido',
      'Opción a controlador alámbrico, como accesorio adicional',
      'Capacidades disponibles: 1 TR 4 Chasis compacto y 1.5, 2, 3 y 4 TR Chasis estándar',
      'Voltaje de operación: 220V-1F-60Hz',
      'Agua helada / Agua caliente'
    ]
  },
  {
    id: 3,
    name: 'CASSETTE 1 VÍA HIDRÓNICO',
    brand: 'Intensity',
    image: '/products/cassette-1va-hidronico.png',
    category: 'agua-helada',
    description: 'Con diseño estético y compacto ofrece practicidad en instalación para lugares de bajo peralte y aquellos espacios limitados a 22 cm de altura en plafones.',
    specifications: [
      'Bomba de drenado para alcanzar  una altura de hasta 75 cm',
      'Control remoto incluido',
      'Opción a controlador alámbrico, como accesorio adicional',
      'Capacidades disponibles: 1 y 1.5 TR (Frío - Calor)',
      'Voltaje de operación: 220V-1F-60Hz',
      'Agua helada / agua caliente'
    ]
  },
  {
    id: 4,
    name: 'HIGH WALL HIDRÓNICO',
    brand: 'Intensity',
    image: '/products/highwall-hidronico.png',
    category: 'agua-helada',
    description: 'Diseño estático, con bajo nivel de ruido para sistemas de agua helada es ideal en nuevas instalaciones sin utilizar ductería.',
    specifications: [
      'Control remoto incluido',
      'Opción a controlador alámbrico, como accesorio adicional',
      'Válvula de 3 vías instalada de fábrica',
      'Capacidades disponibles: 1 y 1.5 TR (Frío - Calor)',
      'Voltaje de operación: 220V-1F-60Hz',
      'Agua helada / Agua caliente'
    ]
  },
  {
    id: 5,
    name: 'UNIDAD MANEJADORA ANDRADE',
    brand: 'Intensity',
    image: '/products/UMA.png',
    category: 'agua-helada',
    description: 'Unidad de excelente aceptación en el mercado debido a su fabricación de doble pared con poliuretano inyectado de 25 mm y su capacidad de enfriamiento mejorada gracias a su serpentín de 6 hieleras. ¡Calidad de primer nivel!',
    specifications: [
      'Filtro metálico lavable',
      'Construida con paneles doble pared, con espesor de 1 pulgada',
      'Incluye base metálica para montaje',
      'Termostato digital incluido',
      'Controlado a 24 voltios, compatible con Termostato WiFi',
      'capacidades disponibles: 5, 7.5, 10, 12.5, 20, 25 y 30 TR (Frío - Calor)',
      'Voltaje de operación: 220V-3F-60Hz de 5 a 30 TR',
      'Voltaje de operación: 560V-3F-60Hz de 15 a 30 TR (Bajo pedido',
      'Agua helada / Agua caliente'
    ]
  },
  {
    id: 6,
    name: 'MINI CHILLER MODULAR R-32 (1-4 TR)',
    brand: 'Intensity',
    image: '/products/MiniChillerModularR32.png',
    category: 'agua-helada',
    description: 'El Mini Chiller Modular Inverter es un sistema integral que brinda enfriamiento y calefacción confiable durante todo el año; ideal para espacios de crecimiento prograsico. Puede conectarse a la res local del edificio gracias a su controlador alámbrico inteligente, permitiendo controlar la unidad fácilmente desde cualquier teléfono inteligente.',
    specifications: [
      'Incluye controlador inalámbrico',
      'Opción de recubrimiento anticorrosivo, bajo pedido o para proyectos especiales',
      'Pueden conectarse hasta 6 módulos)',
      'Escalable hasta 24 TR',
      'Capacidades disponibles: 1.5 a 4 TR (Frío - Calor)',
      'Voltaje de operación: 220V-1F-60Hz',
      'Refrigerante: R32'
    ]
  },
  {
    id: 7,
    name: 'MINI CHILLER MODULAR 5 TR',
    brand: 'Intensity',
    image: '/products/mini-chiller-r32-5-TR.png',
    category: 'agua-helada',
    description: 'Compresor Inverter. Bomba recirculadora interna. Diseño modular (conecta hasta 4 módulos). Recubrimiento anticorrosivo Golden Fin. Capacidad: 5 TR frío-calor.',
    specifications: [
      'Compresor Inverter eficiente',
      'Bomba recirculadora interna',
      'Hasta 4 módulos (20 TR)',
      'Recubrimiento Golden Fin',
      'Capacidad: 5 TR frío-calor'
    ]
  },
  {
    id: 8,
    name: 'CHILLER MODULAR HEAT PUMP',
    brand: 'Intensity',
    image: '/products/ChillerModularHeatPump.png',
    category: 'agua-helada',
    description: 'El chiller Modular Heat Pump Intensity, es especial para proyectos con crecimiento progresivo, ya que permite adicionar unidades de 15, 35 y 50 TR.',
    specifications: [
      'Escalable hasta 280 TR',
      'Evaporador de casco y tubo 15, 35 y 50 TR',
      'Controlador alámbrico remoto incluido',
      'Cuenta con opción módulo BACnet (solicitándolo de fábrica)',
      'Opera hasta 52°C temperatura exterior',
      'Opción de recubrimiento anticorrosivo, bajo pedido o para proyectos especiales',
      'Capacidades disponibles: 15, 35 y 50 TR (Frío - Calor)',
      'Voltaje de operación: 220V-3F-60Hz',
      'Refrigerante: R-410A'
    ]
  },
  {
    id: 9,
    name: 'CHILLER MODULAR INVERTER',
    brand: 'Intensity',
    image: '/products/ChillerModularInverter.png',
    category: 'agua-helada',
    description: 'La solución más confiable para acondicionar tus espacios: Ideal para confort y proceso, Diseño compacto y modular: Permite conectar hasta 16 unidades, Recubrimiento Golden Fin en serpentín condensador, Operación más precisa y eficiente gracias a sus válvulas de expansión electrónicas.',
    specifications: [
      'Escalable hasta 320 TR',
      'Capacidades disponibles: 10 y 20 TR (Frío - Calor)',
      'Voltaje de operación: 220V-3F-60Hz',
      'Refrigerante: R-410A'
    ]
  },
  {
    id: 10,
    name: 'CHILLER SCROLL',
    brand: 'Intensity',
    image: '/products/ChillerScroll.png',
    category: 'agua-helada',
    description: 'El chiller Scroll Intensity cuenta con: Amplio rango de operación en enfriamiento de 15°C a 48°C, Operación silenciosa, diseño de ventiladores de alta eficiencia y bajo nivel de ruido, Panel de control Touch Screen, con tamaño de 7” y de color, lo cual permite una interacción amigable con el usuario.',
    specifications: [
      'Capacidades disponibles: 115 hasta 300 TR (Solo frío)',
      'Voltaje de operación: 460V-3F-60Hz',
      'Capacidades de 1 solo módulo: 115 y 150 TR',
      'Capacidades de módulos combinados: 115 +115 = 230 TR, 115 + 150 = 265 TR y 150 + 150 = 300 TR',
      'Refrigerante: R-410A'
    ]
  },
  {
    id: 11,
    name: 'CHILLER TORNILLO',
    brand: 'Intensity',
    image: '/products/ChillerTornillo.png',
    category: 'agua-helada',
    description: 'El chiller Tornillo enfriado por aire Intensity cuenta con: Compresores BITZER, Controlador digital marca SCHNEIDER, Configurable a base de programa de selección, Cuenta con opción de recubrimiento anticorrosivo, bajo pedido o proyectos especiales.',
    specifications: [
      'Capacidades disponibles: 100 - 400 TR (Solo frío)',
      'Voltaje de operación: 460V-3F-60Hz',
      'Refrigerante: R-134A'
    ]
  },
];

export const sectionThreeProducts = [
  {
    id: 1,
    name: 'MINI VRF DIVERSE',
    brand: 'Intensity',
    rating: 4.7,
    image: '/products/Mini-VRF-AVANTGARDE.png',
    category: 'expansion-directa',
    description: 'Compresor Inverter DC de alta eficiencia. Amplio rango de temperatura. Auto direccionamiento de evaporadoras. Capacidades: 6.3, 7.96 y 9.52 TR.',
    specifications: [
      'Compresor Inverter DC',
      'Auto direccionamiento',
      'Amplio rango temperatura',
      'Capacidades: 6.3-9.52 TR',
      'Alta eficiencia energética'
    ]
  },
  {
    id: 2,
    name: 'VRF AVANTGARDE',
    brand: 'Intensity',
    rating: 4.8,
    image: '/products/vrf-avantgarde.png',
    category: 'vrf',
    description: 'Nuestro VRF AVANTGARDE es la solución perfecta para el acondicionamiento de tus espacios.',
    specifications: [
      'Descarga vertical',
      'Compresor Inverter DC de Alta Eficiencia',
      'Tecnología inteligente de deshielo',
      'Motores Condensadores DC de Alta Eficiencia',
      'Posibilidad de conectar 4 módulos para alcanzar 77 TR',
      'Capacidades disponibles: 6.37, 7.96, 9.56, 11.37, 12.79, 14.33, 15.92, 17.49 y 19.33 TR (Solo frío)',
      'Voltaje de operación 220V-3F-60Hz y 460V-3F-60Hz',
      'Refrigerante: R-410A',
      'Factor de diversidad: 135%'
    ]
  },
];

export const sectionFourProducts = [
  {
    id: 1,
    name: 'BOMBA DE VACÍO',
    brand: 'Intensity',
    image: '/products/Chupacabras.png',
    category: 'expansion-directa',
    description: 'Es la herramienta ideal para desempeñar vacíos a unidades VRF o varios sistemas a la vez. Su alto desempeño se define por la velocidad en el proceso de vacío, el cual es el más eficiente del mercado.',
    specifications: [
      '6 puertos de servicio',
      'Nivel de ruido: 58 dB',
      'Capacidades disponibles: 24 CFM',
      'Voltaje de operación 220V-1F-60Hz',
      'Consumo corriente: 6.4 SMP'
    ]
  },
  {
    id: 2,
    name: 'EVOLUTION® TERMOSTATO INTELIGENTE',
    brand: 'Intensity',
    image: '/products/termostrato-inteligente.png',
    category: 'expansion-directa',
    description: 'EVOLUTION® TERMOSTATO INTELIGENTE by  INTENSITY',
    specifications: [
      'Modo de Operación: Frío, Calor, Automático, Emergencia',
      'Voltaje: 24 VCA'
    ]
  },
];
{/* acaba todos los productos de la landing page correspondiente */}
