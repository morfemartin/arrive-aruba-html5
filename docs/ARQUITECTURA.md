# Arquitectura

## Principios

1. **HTML5 primero.** Cada página es un documento completo y válido que funciona sin CSS ni JavaScript.
2. **CSS3 para la identidad.** Un archivo de estilos globales y otro de adaptación responsive.
3. **JavaScript mínimo.** Solo añade mejoras: revelado de secciones, descripción visible del video y respuesta del formulario de demostración.
4. **Rutas relativas.** El sitio funciona desde una carpeta local servida por HTTP y en GitHub Pages.

## Árbol de directorios

```text
arrive-aruba-html5/
├── index.html              Página principal
├── coleccion.html          Catálogo, listas y tablas
├── experiencia.html        Video, audio y narrativa
├── contacto.html           Formulario
├── assets/
│   ├── images/             Fotografías y mockups (JPG y WebP)
│   ├── video/              MP4, WebM y pista WebVTT
│   ├── audio/              MP3 y M4A
│   ├── fonts/              Geologica (WOFF2)
│   └── icons/              Favicons y árbol divi-divi (SVG)
├── css/
│   ├── styles.css          Tokens de marca y componentes
│   └── responsive.css      Puntos de ruptura: 600 px y 900 px
├── js/
│   └── main.js             Mejoras progresivas
├── docs/                   Documentación académica y capturas
├── .github/workflows/
│   └── validate.yml        Validación HTML automática
├── README.md
└── .gitignore
```

## Mapa de navegación

Las cuatro páginas comparten el mismo encabezado y el mismo pie de página, con enlaces a todas ellas. La página activa se marca con `aria-current="page"`.

```text
index.html ──► coleccion.html (#polo, #hoodie, #franela)
     │                 │
     ├──► experiencia.html
     └──► contacto.html
```

Las tarjetas de la portada enlazan directamente con cada prenda mediante fragmentos (`coleccion.html#polo`).

## Distribución de requisitos por página

| Requisito | index | colección | experiencia | contacto |
|---|---|---|---|---|
| Estructura HTML5 (REQ-001) | ✔ | ✔ | ✔ | ✔ |
| `header`, `nav`, `main`, `footer` | ✔ | ✔ | ✔ | ✔ |
| `section`, `article` | ✔ | ✔ | ✔ | ✔ |
| `aside` | | ✔ | ✔ | ✔ |
| `figure`, `figcaption` | ✔ | ✔ | ✔ | |
| `blockquote` | ✔ | | | |
| `ul`, `li` | ✔ | ✔ | | ✔ |
| `ol` | | ✔ | ✔ | |
| `dl`, `dt`, `dd` | | ✔ | ✔ | ✔ |
| Tablas (REQ-005) | | ✔ (2) | | |
| Formulario (REQ-006) | | | | ✔ |
| `img` | ✔ | ✔ | ✔ | ✔ |
| `video`, `source`, `track` | | | ✔ | |
| `audio`, `source` | | | ✔ | |

## Sistema visual

| Token | Valor | Uso |
|---|---|---|
| `--sapphire` | `#386395` | Botones principales |
| `--sapphire-dark` | `#23405E` | Texto y pie de página |
| `--lake` | `#5F8BB8` | Color complementario |
| `--cream` | `#F0F0E5` | Fondo |
| `--orange` | `#F5A169` | Etiquetas superiores y foco |
| `--font-body` | Geologica | Texto de interfaz |
| `--font-serif` | Cormorant Garamond | Títulos y citas |

## Puntos de ruptura

| Ancho | Comportamiento |
|---|---|
| Menos de 600 px | Navegación bajo el logotipo, botones a ancho completo, fichas en una columna |
| Desde 600 px | Cuadrícula de productos a dos columnas y momentos en tres |
| Desde 900 px | Composiciones editoriales a dos columnas y textos fijos (`sticky`) junto a las imágenes |

## Decisiones técnicas

- **Formulario sin servidor:** el evento `submit` solo se dispara si la validación nativa es correcta; el script evita el envío e informa de que no se ha enviado nada.
- **Pista `<track>` visible:** las pistas de tipo `descriptions` no se muestran por defecto en los navegadores, por lo que `main.js` presenta el texto de cada escena en una región `aria-live`.
- **Video sin reproducción automática:** cumple el requisito de no reproducir sonido sin intervención de la persona usuaria.
- **Movimiento reducido:** las animaciones se desactivan con `prefers-reduced-motion`.
