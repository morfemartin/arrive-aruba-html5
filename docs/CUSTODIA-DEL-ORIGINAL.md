# Custodia del repositorio matriz

Este documento registra cómo se protegió el proyecto original de Arrive Aruba durante la creación de la edición HTML5.

## Principio

Los repositorios originales se trataron como **recursos de solo lectura**. No se crearon commits, ramas, pushes ni modificaciones en ellos. Los recursos reutilizados se **copiaron** a esta carpeta independiente.

## Repositorios inspeccionados

| Repositorio local | Remoto | Rama | Commit |
|---|---|---|---|
| `~/gh-repos/arrive-aruba-shopify-theme` | `morfemartin/arrive-aruba-shopify-theme` | `feat/favicon` | `9552b5a5d048349e2e4dbd7b7db923faba26c3e7` |
| `~/gh-repos/arrive-aruba-website` | `morfemartin/arrive-aruba-website` | `main` | `0455fff0dc7c1225d92a2bdfa98c61e431968645` |
| `~/work/arrive-aruba-website` | `morfemartin/arrive-aruba-website` | `main` | `0455fff0dc7c1225d92a2bdfa98c61e431968645` |
| `~/Documents/GitHub/Web_Arrive-Aruba-3D` | `morfemartin/Web_Arrive-Aruba-3D` | `main` | `ba5ccca1823070ebf59fcfd10f7254376c22073c` |
| `~/gh-repos/arrive-aruba-3d-journey` | `morfemartin/arrive-aruba-3d-journey` | `main` | `156a900135a9b3075733d7efed04dc5fce9c4038` |

La referencia `rafnellm/Web_Arrive-Aruba` citada en el encargo no se consultó: no fue necesaria, porque los recursos de marca provienen del tema de Shopify del propietario.

**Fuente autorizada de los recursos:** `morfemartin/arrive-aruba-shopify-theme` (tema publicado de la tienda) y los mockups de producto entregados por el equipo de diseño.

## Comprobación de integridad

Para cada repositorio se registró, antes y después del trabajo:

- rama y commit actuales (`git rev-parse`);
- número de archivos modificados (`git status --porcelain`);
- huella de la configuración local (`git config --list --local`, resumida con `shasum`).

| Momento | Fecha (UTC) | Resultado |
|---|---|---|
| Antes del desarrollo | 2026-10-16 21:23 | 0 cambios locales en los cinco repositorios |
| Después del desarrollo | 2026-10-16 21:34 | Idéntico al estado inicial en los cinco repositorios |

## Resultado final

Al terminar el desarrollo se repitió la comprobación y se comparó línea por línea con el registro inicial (`diff`): **sin diferencias**. Los cinco repositorios conservan la misma rama, el mismo commit, cero cambios locales y la misma configuración. No se ejecutó ninguna escritura remota sobre ellos.

## Recursos copiados

| Recurso en este proyecto | Origen | Tratamiento |
|---|---|---|
| `assets/images/arrive-logo-blue.webp`, `arrive-logo-negative.webp` | Tema de Shopify (`assets/`) | Copia sin cambios |
| `assets/images/arrive-beach-editorial.jpg`, `arrive-resort-editorial.jpg`, `arrive-island-banner.jpg` | Tema de Shopify | Copia sin cambios |
| `assets/images/arrive-aruba-landscape.jpg` | Tema de Shopify (`arrive-aruba-landscape.webp`) | Convertida a JPG, redimensionada y recortada para eliminar un recuadro blanco |
| `assets/images/arrive-aruba-*-front.jpg`, `*-detail.jpg` | Mockups 1:1 del equipo de diseño | Redimensionados a 900 px |
| `assets/images/arrive-aruba-crew-tee-orange.jpg` | Imagen de producto publicada en la tienda | Redimensionada a 900 px |
| `assets/images/arrive-aruba-llegada-poster.jpg` | Fotograma del segundo 7 del video | Extraído con FFmpeg |
| `assets/video/arrive-aruba-llegada.mp4` | Tema de Shopify (`arrive-hero-desktop.mp4`) | Copia renombrada |
| `assets/video/arrive-aruba-llegada.webm` | Generado a partir del MP4 | Recodificado a VP9 y Opus con FFmpeg |
| `assets/audio/arrive-aruba-ambiente.mp3`, `.m4a` | Pista de sonido del MP4 | Extraída con FFmpeg |
| `assets/icons/arrive-favicon*`, `arrive-apple-touch-icon.png`, `arrive-dividivi-footer.svg` | Tema de Shopify | Copia sin cambios |
| `assets/fonts/geologica-variable.woff2` | Tema de Shopify | Copia sin cambios |

No se copiaron metadatos `.git`, credenciales, configuraciones ni archivos Liquid.

## Recursos excluidos

- **Tipografías ITC Legacy y Port Blair** del proyecto original: no se reutilizan porque no se pudo verificar que su licencia permita redistribuirlas en un repositorio público. Se sustituyen por Cormorant Garamond (Google Fonts).
- Código Liquid, scripts y configuraciones de Shopify.
