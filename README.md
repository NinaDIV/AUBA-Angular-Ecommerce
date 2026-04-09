# AUBA - Enterprise E-Commerce Platform

AUBA es una plataforma de comercio electrónico de alto rendimiento desarrollada con **Angular 21**, estructurada bajo los principios de **Clean Architecture** y **Screaming Architecture** para garantizar escalabilidad y mantenibilidad.

## 🏗️ Arquitectura del Sistema (Modular & Layered)

La aplicación sigue una separación estricta de responsabilidades dividida en módulos core, compartidos y de funcionalidades:

### 1. Core Module (`src/app/core`)

Infraestructura global instanciada una sola vez.

- **Servicios Globales:** Autenticación, gestión de estado global.
- **Interceptors:** Manejo de tokens JWT y errores HTTP.
- **Guards:** Protección de rutas.

### 2. Shared Module (`src/app/shared`)

Recursos reutilizables en toda la aplicación.

- **UI Components:** Botones, modales, tarjetas de producto (visuales).
- **Pipes & Directives:** Formateo de precios, validaciones.

### 3. Feature Modules (`src/app/features`)

Cada módulo (auth, products, cart, orders) implementa sus propias capas internas:

- **Presentation:** Componentes puramente visuales (sin lógica de negocio).
- **Application:** Servicios que contienen los casos de uso.
- **Domain:** Modelos, interfaces y contratos de negocio.
- **Infrastructure:** Servicios API, mappers (conversión de DTO a Dominio).

## 📜 Reglas de Oro (Strict Policy)

- **Cero Lógica en Componentes:** Los componentes solo muestran datos y emiten eventos. La lógica reside en los servicios.
- **Comunicación API:** Prohibido llamar a APIs directamente desde los componentes. Se debe usar la capa de infraestructura.
- **Inmutabilidad:** Uso de **Angular Signals** y **RxJS** para la gestión del estado reactivo.
- **Tipado Estricto:** Uso mandatorio de interfaces y DTOs para cada respuesta del backend.

## 🛠️ Stack Tecnológico

- **Framework:** Angular v21.2.7
- **SSR & Hydration:** Habilitado con Event Replay para SEO y rendimiento
- **Testing:** Vitest para unit testing
- **Estilos:** SCSS con arquitectura modular
- **Scripting:** TypeScript v5.9.2

## 🚀 Comandos de Desarrollo

Inicia el servidor de desarrollo:

```bash
npm install
npm start
```
