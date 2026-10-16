# Control de calidad

Fecha: 16 de octubre de 2026. Navegador de prueba: Google Chrome (modo sin interfaz) controlado con Puppeteer.

## 1. Validación HTML

**Herramienta:** Nu Html Checker del W3C (`https://validator.w3.org/nu/?out=json`).

| Página | Errores | Avisos |
|---|---|---|
| `index.html` | 0 | 0 |
| `coleccion.html` | 0 | 0 |
| `experiencia.html` | 0 | 0 |
| `contacto.html` | 0 | 0 |

## 2. Validación CSS

**Herramienta:** CSS Validation Service del W3C (perfil CSS3 + SVG).

| Archivo | Errores | Avisos |
|---|---|---|
| `css/styles.css` | 0 | 9 |
| `css/responsive.css` | 0 | 0 |

Los avisos de `styles.css` corresponden a propiedades modernas que el validador no reconoce como estándar cerrado (por ejemplo, `backdrop-filter` o la pseudoclase `:user-invalid`). No afectan al funcionamiento: los navegadores que no las admiten las ignoran.

## 3. Enlaces, archivos e identificadores

Script de comprobación (Python, `html.parser`):

- 101 referencias locales (`href`, `src`, `poster`) comprobadas: 0 archivos inexistentes y 0 fragmentos inexistentes.
- IDs duplicados por página: 0.
- Recursos copiados sin uso en ninguna página: eliminados (3 imágenes).

## 4. Diseño responsive

Prueba automatizada: se carga cada página, se recorre hasta el final y se compara el ancho del documento con el de la ventana.

| Ancho | index | colección | experiencia | contacto |
|---|---|---|---|---|
| 375 px | Sin desborde | Sin desborde | Sin desborde | Sin desborde |
| 768 px | Sin desborde | Sin desborde | Sin desborde | Sin desborde |
| 1440 px | Sin desborde | Sin desborde | Sin desborde | Sin desborde |

Las tablas se desplazan dentro de su propio contenedor en pantallas estrechas, por lo que no generan desborde en la página.

## 5. Multimedia (servidor local HTTP)

| Prueba | Resultado |
|---|---|
| Video: fuente elegida por Chrome | `arrive-aruba-llegada.webm` |
| Video: reproducción | Avanza (3,2 s tras 3,2 s de prueba); sin errores de decodificación |
| Pista WebVTT | 6 descripciones cargadas; el texto de la escena activa aparece en pantalla |
| Audio: fuente elegida | `arrive-aruba-ambiente.mp3`; se reproduce sin errores |
| Reproducción automática | Ninguna: video y audio solo se inician con los controles |

**Observación:** abiertos con `file://`, Chrome bloquea la carga de la pista WebVTT por seguridad. Por eso el README indica abrir el sitio con un servidor local. En GitHub Pages este bloqueo no se produce.

**Aviso esperado:** Chrome cancela la precarga parcial del video (`ERR_ABORTED`) cuando solo necesita sus metadatos. No es un error del sitio.

## 6. Formulario

| Prueba | Resultado |
|---|---|
| Formulario vacío | No válido (`checkValidity()` = `false`) |
| Correo mal escrito | Detectado (`validity.typeMismatch` = `true`) |
| Formulario completo | Válido |
| Envío | No se envía ni cambia la URL; aparece el aviso «Los datos son válidos. Como se trata de una demostración, el mensaje no se ha enviado ni guardado.» |

## 7. Accesibilidad (revisión manual)

- Enlace «Saltar al contenido principal» visible al recibir el foco.
- Un único `h1` por página y jerarquía sin saltos.
- Textos alternativos descriptivos; imágenes decorativas con `alt=""`.
- Página activa marcada con `aria-current="page"`.
- Foco visible en color naranja de la marca.
- Controles de formulario de 48 px de alto como mínimo.
- Animaciones desactivadas con `prefers-reduced-motion`.

**Pendiente:** no se ha realizado una prueba con lector de pantalla ni una auditoría Lighthouse; no se indican puntuaciones.

## 8. Ortografía

Se revisaron los textos de las páginas, los atributos `alt`, los metadatos `description`, los mensajes del formulario y la documentación. Antes de entregar, conviene una lectura final del estudiante, dado que cada error penaliza dos puntos.

## 9. Custodia del repositorio matriz

Ver el resultado de la comprobación final en la sección siguiente.

### Comprobación final

Comparación del estado de los cinco repositorios originales antes (21:23 UTC) y después (21:34 UTC) del desarrollo, el 16 de octubre de 2026: **sin diferencias** en rama, commit, cambios locales ni configuración. Detalle en `CUSTODIA-DEL-ORIGINAL.md`.
