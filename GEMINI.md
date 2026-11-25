# UGC - Guía y Arquitectura del Proyecto

Este archivo (`GEMINI.md`) define la arquitectura, reglas de estilizado y convenciones obligatorias para el desarrollo de esta pagina para presentar los trabajos para una creadora de contenido UGC **UGC**.
El archivo con extensión .npmrc con legacy-peer-deps=true es obligatorio para twind/coe por lo que nunca de ser borrado o elimiando 


---

## 1. Stack Tecnológico y Enrutamiento
- **Core:** React 18+ + Vite + TypeScript en modo estricto (`"strict": true` en `tsconfig.json`).
- **Enrutamiento:** `react-router-dom` utilizando un layout raíz (`MainLayout` con `<Outlet />`) y carga diferida (`React.lazy` + `Suspense`) para las siguientes vistas:
  - `/` (Landing principal: Quién eres, tu nicho (belleza, fitness, viajes, comida, tecnología) y qué tipo de contenido grabas)
  - `/Muestras` Unboxings, reseñas, tutoriales o estilo lifestyle que muestren cómo hablas a cámara y presentas productos.
  - `/Servicios` Qué entregas (videos editados, fotos, derechos de uso para anuncios) 
  - `/Métricas` ejemplos de resultados o colaboración
  - `*` (Página 404 con navegación de retorno)

---

## 2. Sistema de Estilos y Diseño (Twind v1 — Cero CSS)
- **Restricción absoluta:** **Queda terminantemente prohibido crear, mantener o importar archivos `.css`**. Se deben eliminar `src/index.css` y `src/App.css` generados por defecto por Vite.
- **Herramienta exclusiva:** Todo el estilizado se realiza con **Twind v1** (`@twind/core`, `@twind/preset-autoprefix`, `@twind/preset-tailwind`).
- **Configuración y arranque obligatorio:**
  - La configuración reside exclusivamente en `src/core/theme/twind.config.ts`, definiendo tokens de marca (colores corporativos, tipografía, sombras y radios) y ejecutando `install(config)`.
  - `src/main.tsx` debe importar `./core/theme/twind.config` en la primera línea antes de renderizar `<App />` para inyectar el *preflight* y los estilos base.
  - Utilizar la utilidad `tx()` de `@twind/core` para gestionar variantes dinámicas en los componentes de `src/shared/`.

---

## 3. Arquitectura Modular y Patrones de Diseño
El proyecto aplica una arquitectura **Feature-Based** desacoplada mediante el **Patrón Repository** e inyección de dependencias con **React Context**, preparada para conectar un backend REST en el futuro sin modificar la interfaz:

```text
src/
├── core/
│   ├── domain/            # Entidades (User, Company, Client, Product) e interfaces (IPostRepository, IServiceRepository)
│   ├── router/            # Configuración centralizada de rutas, MainLayout y guards
│   └── theme/             # twind.config.ts (tokens de marca y setup de Twind)
├── infrastructure/
│   └── repositories/      # Implementaciones concretas (MockPostRRepository, MockServiceRepository)
├── context/               # ServicesProvider y hooks de consumo (useService, usePost)
├── shared/                # UI Kit reutilizable (Button, Card, Badge, Input, Modal, Navbar, Footer,LoadingSpinner )
└── features/              # Módulos funcionales aislados
    ├── home/              # Secciones de la landing page principal
    ├── Muestras/          # Catálogo, filtros y vista de detalle de fotos, videos y colaboraciones
    ├── Servicios/         # Presentación de colaboraciones que se puede tener  (Unboxing reseñas, tutoriales o estilo lifestyle)
    └── Yo/                # Sección informativa y contacto para empresas

---

## 4. Validación y Calidad
- **Verificación obligatoria:** Antes de dar por finalizada cualquier tarea o cambio en el código, se debe ejecutar y verificar exitosamente:
  ```bash
  npm run build
  ```
  Asegurándose de que no existan errores de TypeScript, fallos de compilación ni problemas de tipos.
