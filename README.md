# Hel-Ali - Sitio Web Institucional

## 📋 Descripción del Proyecto

Sitio web institucional para Hel-Ali, una organización dedicada al empoderamiento de comunidades. El proyecto está desarrollado con Astro y React, implementando un diseño moderno y responsivo con Tailwind CSS v4.

## 🎯 Propósito

Este sitio web sirve como la presencia digital principal de Hel-Ali, proporcionando:
- Información sobre la misión, visión y valores de la organización
- Detalles sobre programas y actividades
- Historias e impacto de la comunidad
- Formulario de contacto y opciones de donación
- Navegación móvil optimizada con sidebar deslizante

## ✨ Funcionalidades Principales

### 🏠 Página Principal
- **Hero Section**: Presentación principal con llamada a la acción
- **Mission Section**: Misión, visión y valores organizacionales
- **Approach Section**: Enfoque y metodología de trabajo
- **Programs Section**: Programas y actividades ofrecidas
- **Blog Section**: Historias e impacto en la comunidad
- **Stats Section**: Estadísticas y logros
- **Contact Section**: Formulario de contacto interactivo
- **Call to Action**: Invitación a participar o donar

### 📱 Navegación Móvil
- Sidebar deslizante con animaciones suaves
- Botón hamburguesa animado
- Overlay de fondo con cierre automático
- Navegación por teclado (tecla Escape)
- Cierre automático al seleccionar enlaces
- Diseño completamente responsivo

### 🎨 Componentes UI
- **ContactForm**: Formulario de contacto desarrollado en React
- **DonateButton**: Botón de donación interactivo
- **Header**: Navegación principal con sidebar móvil
- **Footer**: Pie de página con información adicional

## 🛠️ Stack Tecnológico

### Frontend Framework
- **Astro v5.12.3**: Framework principal para sitios estáticos
- **React**: Componentes interactivos específicos
- **TypeScript**: Tipado estático para mejor desarrollo

### Estilos y UI
- **Tailwind CSS v4**: Framework de utilidades CSS
- **PostCSS**: Procesamiento de CSS
- **Diseño Responsivo**: Mobile-first approach

### Herramientas de Desarrollo
- **Vite**: Bundler y servidor de desarrollo
- **npm**: Gestor de paquetes
- **ESLint**: Linting de código

## 📁 Estructura del Proyecto

```
astro-react-project/
├── src/
│   ├── components/
│   │   ├── astro/           # Componentes Astro
│   │   │   ├── Header.astro         # Navegación con sidebar móvil
│   │   │   ├── Layout.astro         # Layout principal
│   │   │   ├── HeroSection.astro    # Sección hero
│   │   │   ├── MissionSection.astro # Misión y valores
│   │   │   ├── ApproachSection.astro# Enfoque
│   │   │   ├── ProgramsSection.astro# Programas
│   │   │   ├── BlogSection.astro    # Historias
│   │   │   ├── StatsSection.astro   # Estadísticas
│   │   │   ├── ContactSection.astro # Contacto
│   │   │   ├── CallToActionSection.astro # CTA
│   │   │   ├── Footer.astro         # Pie de página
│   │   │   └── index.ts            # Exportaciones
│   │   └── ui/              # Componentes React
│   │       ├── ContactForm.tsx     # Formulario de contacto
│   │       └── DonateButton.tsx    # Botón de donación
│   ├── pages/
│   │   └── index.astro      # Página principal
│   ├── styles/
│   │   └── global.css       # Estilos globales
│   └── assets/              # Recursos estáticos
├── public/                  # Archivos públicos
├── astro.config.mjs        # Configuración de Astro
├── tailwind.config.cjs     # Configuración de Tailwind
├── package.json            # Dependencias del proyecto
└── tsconfig.json           # Configuración de TypeScript
```

## 🚀 Instalación y Configuración

### Prerrequisitos
- Node.js (versión 18 o superior)
- npm o pnpm

### Pasos de Instalación

1. **Clonar el repositorio**
   ```bash
   git clone [URL_DEL_REPOSITORIO]
   cd astro-react-project
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   # o
   pnpm install
   ```

3. **Iniciar servidor de desarrollo**
   ```bash
   npm run dev
   # o
   pnpm dev
   ```

4. **Acceder al sitio**
   - Abrir navegador en `http://localhost:4321`
   - Si el puerto está ocupado, Astro asignará automáticamente el siguiente disponible

## 📜 Scripts Disponibles

| Comando | Acción |
|---------|--------|
| `npm run dev` | Inicia servidor de desarrollo |
| `npm run build` | Construye para producción |
| `npm run preview` | Vista previa de build de producción |
| `npm run astro` | Comandos CLI de Astro |

## 🎨 Configuración de Tailwind CSS

El proyecto utiliza Tailwind CSS v4 con configuración personalizada:

- **Safelist**: Clases CSS protegidas para componentes dinámicos
- **Responsive Design**: Breakpoints estándar de Tailwind
- **Componentes Móviles**: Clases específicas para sidebar y navegación

### Clases Principales del Sidebar Móvil
- `transform`, `translate-x-full`, `translate-x-0`: Animaciones de deslizamiento
- `transition-transform`, `duration-300`: Transiciones suaves
- `fixed`, `inset-0`, `z-50`: Posicionamiento y capas
- `bg-white`, `shadow-lg`: Estilos visuales

## 🔧 Configuración Técnica

### Astro Configuration
- **Integración React**: Habilitada para componentes interactivos
- **Vite**: Configuración optimizada para desarrollo
- **TypeScript**: Soporte completo habilitado

### Tailwind Configuration
- **Versión**: v4 (última versión)
- **Purge**: Configurado para optimización de producción
- **Safelist**: Clases protegidas para componentes dinámicos

## 📱 Funcionalidades Móviles

### Sidebar de Navegación
- **Activación**: Botón hamburguesa en header
- **Animaciones**: Deslizamiento suave desde la derecha
- **Interacciones**:
  - Clic en botón hamburguesa: abre/cierra
  - Clic en overlay: cierra sidebar
  - Tecla Escape: cierra sidebar
  - Clic en enlaces: cierra automáticamente
- **Accesibilidad**: Navegación por teclado y screen readers

## 🌐 Despliegue

El proyecto está configurado para despliegue en:
- **Vercel**: Configuración incluida en `.vercel/`
- **Netlify**: Compatible con build estático
- **GitHub Pages**: Soporte para sitios estáticos

### Build de Producción
```bash
npm run build
```
Genera archivos optimizados en `dist/`

## 🤝 Contribución

### Estructura de Componentes
- **Astro Components**: Para contenido estático y layout
- **React Components**: Para interactividad específica
- **Estilos**: Tailwind CSS con clases utilitarias

### Convenciones de Código
- **Naming**: PascalCase para componentes, camelCase para variables
- **Imports**: Organizados por tipo (Astro, React, estilos)
- **TypeScript**: Tipado estricto habilitado

## 📞 Información de Contacto

**Organización**: Hel-Ali  
**Propósito**: Empoderamiento de Comunidades  
**Tecnología**: Astro + React + Tailwind CSS  

---

## 📝 Notas Técnicas

### Resolución de Problemas Comunes

1. **Error de tipos en Tailwind v4**:
   - Configuración simplificada en `astro.config.mjs`
   - Uso de PostCSS en lugar de plugin Vite directo

2. **Puerto ocupado**:
   - Astro asigna automáticamente el siguiente puerto disponible
   - Verificar en terminal el puerto asignado

3. **Estilos no aplicados**:
   - Verificar clases en `safelist` de `tailwind.config.cjs`
   - Reiniciar servidor de desarrollo

### Actualizaciones Recientes
- ✅ Implementación de sidebar móvil funcional
- ✅ Configuración de Tailwind CSS v4
- ✅ Optimización de componentes Astro
- ✅ Estructura de proyecto simplificada
- ✅ Documentación completa del proyecto

---

*Última actualización: Enero 2025*
