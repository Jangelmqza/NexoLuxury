# 💎 Instrucciones para Gemini — Catálogo de Joyería

> Este archivo contiene una lista de tareas para que Gemini construya paso a paso una página web tipo catálogo para una tienda de joyería (oro laminado y plata .925).
> **Regla importante:** Al terminar cada tarea, Gemini debe preguntarle al usuario: *"¿Puedo continuar con la siguiente tarea?"* antes de avanzar.

---

## 🗂️ Lista de Tareas

### Tarea 1 — Estructura del proyecto con Node.js + Express
Crea la estructura base del proyecto:

```
jewelry-catalog/
├── server.js
├── package.json
├── public/
│   ├── index.html
│   ├── css/
│   │   └── styles.css
│   ├── js/
│   │   └── main.js
│   └── images/          ← carpeta donde el usuario subirá sus imágenes
└── views/
    └── (opcional si se usan templates)
```

- Inicializa el proyecto con `npm init -y`
- Instala Express: `npm install express`
- Crea `server.js` con un servidor Express básico que sirva la carpeta `public/` como archivos estáticos
- El servidor debe correr en el puerto `3000`
- Agrega un script `"start": "node server.js"` en `package.json`

**Al terminar esta tarea, pregunta: "¿Puedo continuar con la Tarea 2?"**

---

### Tarea 2 — Página HTML principal (`public/index.html`)
Crea el archivo `index.html` con la estructura semántica completa:

- `<header>` con el nombre de la tienda y un menú de navegación (Inicio, Colecciones, Contacto)
- `<section id="hero">` con un mensaje de bienvenida y subtítulo de la tienda
- `<section id="collections">` con subsecciones para:
  - Oro Laminado
  - Plata .925
- `<section id="catalog">` con una cuadrícula (`grid`) de tarjetas de productos
- `<footer>` con información de contacto y redes sociales
- Enlaza `css/styles.css` y `js/main.js`
- Agrega el `<link>` a Google Fonts (fuentes elegantes, ej. `Cormorant Garamond` para títulos y `Lato` para cuerpo)

**Al terminar esta tarea, pregunta: "¿Puedo continuar con la Tarea 3?"**

---

### Tarea 3 — Tarjetas de productos con espacios para imágenes y precios
Dentro de `#catalog`, crea **al menos 8 tarjetas de producto** con esta estructura HTML:

```html
<div class="product-card">
  <div class="product-image">
    <!-- REEMPLAZA "imagen-01.jpg" con el nombre real de tu imagen -->
    <img src="images/imagen-01.jpg" alt="Nombre del producto" />
    <!-- Si no tienes imagen aún, usa este placeholder: -->
    <!-- <div class="img-placeholder">📷 Agregar imagen</div> -->
  </div>
  <div class="product-info">
    <h3 class="product-name">Nombre del Producto</h3>
    <p class="product-material">Oro Laminado / Plata .925</p>
    <!-- REEMPLAZA el precio -->
    <p class="product-price">$000.00 MXN</p>
    <a href="TU_LINK_DE_WHATSAPP_AQUÍ" class="btn-whatsapp" target="_blank">
      Consultar por WhatsApp
    </a>
  </div>
</div>
```

- Usa comentarios claros dentro del HTML marcando dónde el usuario debe colocar imagen y precio
- Divide las tarjetas por categoría: 4 de Oro Laminado y 4 de Plata .925

**Al terminar esta tarea, pregunta: "¿Puedo continuar con la Tarea 4?"**

---

### Tarea 4 — Estilos CSS (`public/css/styles.css`)
Aplica un diseño oscuro y elegante, paleta de colores negros y grises:

#### Variables de color (usar CSS custom properties):
```css
:root {
  --bg-primary: #0a0a0a;
  --bg-secondary: #141414;
  --bg-card: #1c1c1c;
  --text-primary: #f0f0f0;
  --text-secondary: #a0a0a0;
  --accent-gold: #c9a84c;       /* dorado elegante para detalles */
  --accent-silver: #b0b8c1;     /* plateado para detalles plata */
  --border-color: #2e2e2e;
  --whatsapp-green: #25D366;
}
```

#### Estilos requeridos:
- Fondo general oscuro (`--bg-primary`)
- Header fijo con fondo semitransparente y `backdrop-filter: blur`
- Hero section con texto centrado y un sutil degradado o textura de fondo
- Grid de productos responsivo: 1 columna en móvil, 2 en tablet, 3-4 en desktop (`grid-template-columns: repeat(auto-fill, minmax(260px, 1fr))`)
- Tarjetas con bordes sutiles, hover con elevación (`box-shadow`) y transición suave
- Imágenes con `object-fit: cover` y `aspect-ratio: 1/1` o `4/5`
- Placeholder de imagen visible con borde punteado y ícono centrado
- Tipografía: títulos en `Cormorant Garamond`, cuerpo en `Lato`
- Botón de WhatsApp verde con ícono

**Al terminar esta tarea, pregunta: "¿Puedo continuar con la Tarea 5?"**

---

### Tarea 5 — Botón flotante de WhatsApp
Agrega un botón flotante de WhatsApp en la esquina inferior derecha que sea visible en toda la página:

#### HTML (agregar justo antes de `</body>`):
```html
<!-- BOTÓN FLOTANTE WHATSAPP -->
<!-- REEMPLAZA "TU_LINK_AQUÍ" con tu enlace real de WhatsApp -->
<a
  href="TU_LINK_AQUÍ"
  class="whatsapp-float"
  target="_blank"
  aria-label="Chatear por WhatsApp"
>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="28" height="28">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15
    -.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475
    -.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52
    .149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207
    -.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372
    -.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2
    5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085
    1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.558 4.126 1.533 5.862L0 24l6.336-1.51
    A11.942 11.942 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818
    0 01-5.006-1.373l-.36-.214-3.724.978.997-3.647-.235-.374A9.818 9.818 0 1112 21.818z"/>
  </svg>
</a>
```

#### CSS para el botón flotante:
```css
.whatsapp-float {
  position: fixed;
  bottom: 28px;
  right: 28px;
  background-color: #25D366;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 20px rgba(37, 211, 102, 0.4);
  z-index: 1000;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.whatsapp-float:hover {
  transform: scale(1.1);
  box-shadow: 0 6px 28px rgba(37, 211, 102, 0.6);
}
```

**Al terminar esta tarea, pregunta: "¿Puedo continuar con la Tarea 6?"**

---

### Tarea 6 — JavaScript básico (`public/js/main.js`)
Agrega funcionalidad básica al sitio:

- **Filtro de categorías**: botones para mostrar solo "Oro Laminado", solo "Plata .925" o "Todos"
- **Scroll suave**: para los enlaces del menú de navegación
- **Header sticky**: que cambie ligeramente de opacidad o color al hacer scroll
- **Animación de entrada**: las tarjetas aparecen con una animación sutil al entrar al viewport (usar `IntersectionObserver`)

**Al terminar esta tarea, pregunta: "¿Puedo continuar con la Tarea 7?"**

---

### Tarea 7 — Sección Hero y branding
Mejora la sección hero con:

- Nombre de la tienda destacado (el usuario puede reemplazarlo)
- Subtítulo: *"Joyería de Oro Laminado y Plata .925"*
- Un botón CTA: *"Ver Colección"* que haga scroll a `#catalog`
- Fondo con un degradado oscuro o una imagen de fondo tenue (placeholder comentado en el código para que el usuario lo reemplace)
- Comentario en el HTML: `<!-- REEMPLAZA este fondo con tu imagen: background-image: url('images/hero-bg.jpg') -->`

**Al terminar esta tarea, pregunta: "¿Puedo continuar con la Tarea 8?"**

---

### Tarea 8 — Prueba final y revisión
Verifica que todo funcione correctamente:

1. Corre el servidor con `npm start` y abre `http://localhost:3000`
2. Confirma que el grid de productos se ve bien en pantallas grandes y pequeñas
3. Confirma que el botón flotante de WhatsApp aparece y tiene el espacio marcado para el link
4. Confirma que los placeholders de imágenes son visibles con instrucciones claras
5. Confirma que los precios están marcados con `$000.00 MXN` como placeholder
6. Confirma que los filtros de categoría funcionan
7. Muestra el árbol final del proyecto con todos los archivos creados

**Al terminar esta tarea, informa al usuario que el proyecto está listo y entrégale un resumen de:**
- Cómo agregar sus imágenes (carpeta `public/images/`)
- Cómo cambiar los precios (buscar `$000.00 MXN` en `index.html`)
- Cómo agregar su link de WhatsApp (buscar `TU_LINK_AQUÍ` en `index.html`)
- Cómo iniciar el servidor (`npm start`)

---

## 📝 Notas para el usuario

| Elemento | Dónde modificarlo |
|---|---|
| 🖼️ Imágenes | Subir a `public/images/` y cambiar el `src` en cada `<img>` |
| 💰 Precios | Buscar `$000.00 MXN` en `index.html` |
| 📱 Link de WhatsApp | Buscar `TU_LINK_AQUÍ` en `index.html` (aparece 2 veces: botón flotante y botones de tarjetas) |
| 🏪 Nombre de la tienda | Buscar `Nombre de la Tienda` en `index.html` |
| 🎨 Colores | Modificar variables en `:root {}` dentro de `styles.css` |

---

*Archivo generado para uso con Gemini. Cada tarea debe completarse en orden y Gemini debe pedir confirmación antes de avanzar a la siguiente.*
