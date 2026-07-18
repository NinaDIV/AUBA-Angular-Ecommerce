# AUBA — Plataforma E-Commerce de Moda con Angular

![Angular](https://img.shields.io/badge/Angular-21.2.7-DD0031?logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.2-3178C6?logo=typescript&logoColor=white)
![SCSS](https://img.shields.io/badge/Estilos-SCSS-CC6699?logo=sass&logoColor=white)
![Vitest](https://img.shields.io/badge/Testing-Vitest-6E9F18?logo=vitest&logoColor=white)
![Vercel](https://img.shields.io/badge/Demo-Vercel-000000?logo=vercel&logoColor=white)

**AUBA** es una plataforma de comercio electrónico de moda de alto rendimiento desarrollada con **Angular 21**, estructurada bajo los principios de **Clean Architecture** y **Screaming Architecture** para garantizar escalabilidad y mantenibilidad. Incluye SSR con hidratación para mejorar el SEO y el rendimiento inicial.

🔗 **Demo en vivo:** [https://auba.vercel.app](https://auba.vercel.app)

## ✨ Características

- Arquitectura modular con separación estricta de responsabilidades (core, shared y features).
- Módulos de funcionalidad para autenticación, productos, carrito y órdenes, cada uno con sus propias capas internas.
- Gestión de estado reactivo e inmutable con **Angular Signals** y **RxJS**.
- **SSR e hidratación** habilitados con *Event Replay* para SEO y rendimiento.
- Manejo centralizado de tokens JWT y errores HTTP mediante interceptors.
- Protección de rutas con guards.
- Tipado estricto con interfaces y DTOs para cada respuesta del backend.

## 🏗️ Arquitectura del sistema

La aplicación sigue una separación estricta de responsabilidades dividida en módulos core, compartidos y de funcionalidades:

### 1. Core Module (`src/app/core`)

Infraestructura global instanciada una sola vez.

- **Servicios globales:** autenticación, gestión de estado global.
- **Interceptors:** manejo de tokens JWT y errores HTTP.
- **Guards:** protección de rutas.

### 2. Shared Module (`src/app/shared`)

Recursos reutilizables en toda la aplicación.

- **Componentes de UI:** botones, modales, tarjetas de producto (visuales).
- **Pipes y directivas:** formateo de precios, validaciones.

### 3. Feature Modules (`src/app/features`)

Cada módulo (auth, products, cart, orders) implementa sus propias capas internas:

- **Presentation:** componentes puramente visuales (sin lógica de negocio).
- **Application:** servicios que contienen los casos de uso.
- **Domain:** modelos, interfaces y contratos de negocio.
- **Infrastructure:** servicios API y mappers (conversión de DTO a dominio).

## 📜 Reglas de oro (Strict Policy)

- **Cero lógica en componentes:** los componentes solo muestran datos y emiten eventos. La lógica reside en los servicios.
- **Comunicación con la API:** prohibido llamar a APIs directamente desde los componentes. Se debe usar la capa de infraestructura.
- **Inmutabilidad:** uso de **Angular Signals** y **RxJS** para la gestión del estado reactivo.
- **Tipado estricto:** uso obligatorio de interfaces y DTOs para cada respuesta del backend.

## 🛠️ Tecnologías

| Tecnología | Versión / Detalle |
|---|---|
| Angular | 21.2.7 |
| TypeScript | 5.9.2 |
| SSR e hidratación | Habilitados con Event Replay |
| Testing | Vitest (unit testing) |
| Estilos | SCSS con arquitectura modular |
| Despliegue | Vercel |

## 📋 Requisitos previos

Antes de arrancar el proyecto necesitas tener instalado:

- **Node.js 20.19 o superior** (se recomienda la LTS más reciente; Angular 21 requiere Node 20+) — [descargar](https://nodejs.org/)
- **npm** (incluido con Node.js)
- **Angular CLI 21** (opcional, los scripts de npm lo resuelven localmente):

  ```bash
  npm install -g @angular/cli
  ```

- **Git** para clonar el repositorio

## 🚀 Instalación y ejecución

1. Clona el repositorio:

   ```bash
   git clone https://github.com/NinaDIV/AUBA-Angular-Ecommerce.git
   cd AUBA-Angular-Ecommerce
   ```

2. Entra a la carpeta del proyecto Angular (el código vive en el subdirectorio `AUBA/`):

   ```bash
   cd AUBA
   ```

3. Instala las dependencias:

   ```bash
   npm install
   ```

4. Inicia el servidor de desarrollo:

   ```bash
   npm start
   ```

5. Abre el navegador en **http://localhost:4200**. Deberías ver la tienda AUBA; la aplicación se recarga automáticamente al modificar el código fuente.

### Build de producción

```bash
npm run build
```

Los artefactos compilados (incluido el bundle de SSR) se generan en la carpeta `dist/`.

### Tests

```bash
npm test
```

Ejecuta las pruebas unitarias con Vitest.

## 📁 Estructura del proyecto

```
AUBA-Angular-Ecommerce/
├── AUBA/                     # Proyecto Angular
│   └── src/
│       └── app/
│           ├── core/         # Servicios globales, interceptors, guards
│           ├── shared/       # Componentes de UI, pipes y directivas reutilizables
│           └── features/     # Módulos de funcionalidad (auth, products, cart, orders)
│               └── <feature>/
│                   ├── presentation/     # Componentes visuales
│                   ├── application/      # Casos de uso
│                   ├── domain/           # Modelos y contratos
│                   └── infrastructure/   # Servicios API y mappers
├── .gitignore
└── README.md
```
