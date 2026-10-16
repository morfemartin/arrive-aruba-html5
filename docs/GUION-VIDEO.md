# Guion del video explicativo (máximo 10 minutos)

Grabar la pantalla con el sitio abierto en un servidor local y el editor de código al lado. Hablar con calma; los tiempos son orientativos.

| Tiempo | Contenido |
|---|---|
| 0:00–0:45 | Presentación del proyecto |
| 0:45–2:00 | Estructura de archivos |
| 2:00–3:30 | HTML5 y semántica |
| 3:30–4:45 | Encabezados, listas y tablas |
| 4:45–6:00 | Formularios |
| 6:00–7:15 | Imágenes, audio y video |
| 7:15–8:30 | Navegación y diseño responsive |
| 8:30–9:30 | Demostración funcional y cierre |

## 0:00–0:45 · Presentación

> Hola, soy [nombre]. Presento *Arrive Aruba — HTML5 Edition*, mi e-actividad 2.1 de Frontend. Es una adaptación académica de Arrive Aruba, una marca de ropa resort de Aruba. El objetivo es demostrar HTML5 semántico en un sitio real, accesible y adaptable a cualquier pantalla.

**Mostrar:** la portada en el navegador.

## 0:45–2:00 · Estructura de archivos

> El proyecto tiene cuatro páginas HTML en la raíz. Los recursos están en `assets`, separados por tipo; los estilos, en `css`, y el JavaScript, en `js`. En `docs` está la documentación: la matriz de cumplimiento, el control de calidad y las referencias.

**Mostrar:** el árbol de carpetas en el editor.

## 2:00–3:30 · HTML5 y semántica

> Cada página empieza con `<!DOCTYPE html>` y `<html lang="es">`. En el `head` están `meta charset`, `viewport` para móviles y un `title` propio. El cuerpo se organiza con `header`, `nav`, `main`, `section`, `article`, `aside` y `footer`, cada uno según su significado: por ejemplo, cada prenda es un `article` porque tiene sentido por sí misma.

**Mostrar:** `index.html`, líneas del `head` y del `header`; un `article` de `coleccion.html`.

## 3:30–4:45 · Encabezados, listas y tablas

> Cada página tiene un único `h1` y luego `h2` y `h3` en orden. Uso `ul` para los detalles, `ol` para pasos con orden y `dl` para las fichas, porque son pares de término y descripción. La tabla comparativa tiene `caption`, `thead`, `tbody` y `tfoot`, y los encabezados de fila usan `th scope="row"`.

**Mostrar:** `coleccion.html`, la tabla en el código y en el navegador.

## 4:45–6:00 · Formularios

> El formulario de contacto agrupa los campos con `fieldset` y `legend`. Cada control tiene su `label`. Uso `type="email"` y `type="tel"`, `select` con `option`, `textarea`, `required` y validación nativa. Es una demostración: no envía datos a ningún servidor.

**Mostrar:** intentar enviar el formulario vacío y luego completo, con el aviso final.

## 6:00–7:15 · Imágenes, audio y video

> Las imágenes tienen texto alternativo. El video tiene dos `source`, WebM y MP4, para que el navegador elija el formato que admite, y un `track` WebVTT con la descripción de cada escena. El audio tiene MP3 y M4A. Ninguno se reproduce solo.

**Mostrar:** `experiencia.html`, reproducir el video y ver la descripción; reproducir el audio.

## 7:15–8:30 · Navegación y responsive

> El menú enlaza las cuatro páginas y marca la actual con `aria-current`. El diseño parte del móvil y se adapta a 600 y 900 píxeles con `responsive.css`.

**Mostrar:** las herramientas de desarrollo del navegador con vista de teléfono, tableta y escritorio.

## 8:30–9:30 · Comprobaciones y cierre

> Validé las cuatro páginas con el Nu Html Checker del W3C: cero errores. También comprobé los enlaces, la ausencia de desbordes y el funcionamiento multimedia. Gracias.

**Mostrar:** el validador del W3C con una página validada.

## Fragmentos de código recomendados

1. `index.html`: `<head>` completo.
2. `coleccion.html`: un `article` de prenda con `figure`, `ul` y `dl`.
3. `coleccion.html`: la tabla comparativa.
4. `contacto.html`: un `fieldset` completo.
5. `experiencia.html`: el elemento `video` con `source` y `track`.

## Preguntas probables del docente

| Pregunta | Respuesta breve |
|---|---|
| ¿Por qué `article` y no `div`? | Porque cada prenda es un contenido independiente con sentido propio. |
| ¿Para qué sirve `figcaption`? | Es el pie de la figura y la relaciona semánticamente con su imagen o su video. |
| ¿Por qué dos `source` en el video? | Para que el navegador elija el primer formato que pueda reproducir. |
| ¿Qué hace `track`? | Añade texto sincronizado al video; aquí, descripciones de cada escena. |
| ¿Cómo validas el formulario sin servidor? | Con los atributos nativos de HTML5; JavaScript solo evita el envío y muestra un aviso. |
| ¿Cuánto código es de terceros? | No hay bibliotecas externas; el código asistido por IA está declarado en el README. |
