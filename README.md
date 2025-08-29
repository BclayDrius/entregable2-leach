# 💪 Entregable 2 – Gestor de Rutinas de Gimnasio

Proyecto realizado por **Barclay Leach**, estudiante de la Comisión **73500 de JavaScript**.  
Soy de Perú 🇵🇪 y esta es mi segunda entrega... ¡ahora con **DOM, eventos y almacenamiento local**! 😄

---

## 🎯 Objetivos Generales

- Crear un simulador interactivo que funcione completamente en el DOM.
- Aplicar manipulación del DOM, eventos y almacenamiento local.
- Eliminar completamente el uso de `prompt`, `alert` y `console.log`.
- Implementar una interfaz visual profesional y funcional.

---

## 🧩 Objetivos Específicos

- Capturar datos mediante formularios HTML.
- Manipular el DOM dinámicamente para mostrar información.
- Usar eventos para la interactividad (`submit`, `click`).
- Implementar **localStorage** para persistencia de datos.
- Crear una experiencia de usuario fluida y visual.

---

## 📁 Estructura del Proyecto

/index.html → Documento principal con formulario y visualización
/css/styles.css → Estilos con background de Arnold
/js/app.js → Lógica completa con clases y métodos
/assets/arnold.jpg → Imagen de fondo para diseño profesional

---

## 🚀 Cómo funciona el Gestor de Rutinas

### 🔄 Flujo Principal

1. **Interfaz Visual** → Página con diseño profesional usando imagen de Arnold como fondo.
2. **Formulario Interactivo** → Campos para nombre, series y repeticiones.
3. **Validación en Tiempo Real** → Verificación de datos sin usar alert/prompt.
4. **Visualización Dinámica** → Los ejercicios aparecen inmediatamente en la lista.
5. **Persistencia** → La rutina se guarda automáticamente en `localStorage`.
6. **Gestión Completa** → Agregar, eliminar y visualizar ejercicios.

### ✨ Características Avanzadas

- Prevención de duplicados.
- Estadísticas en vivo (contador de ejercicios y series totales).
- Mensajes visuales de confirmación y error.
- Diseño responsive (móviles y desktop).
- Efectos de **glassmorphism** y animaciones suaves.

---

## 👨‍🏫 Criterios de Evaluación (y cómo los abordé)

| Criterio                 | ¿Lo cumple? | Implementación                                                            |
| ------------------------ | ----------- | ------------------------------------------------------------------------- |
| Estructura HTML completa | ✅          | Formulario semántico, secciones organizadas, accesibilidad                |
| Archivo JS referenciado  | ✅          | Conectado al final del body, carga optimizada                             |
| Manipulación del DOM     | ✅          | Renderizado dinámico, creación de elementos, actualización en tiempo real |
| Eventos implementados    | ✅          | `submit` del formulario, `click` en botones, `DOMContentLoaded`           |
| Sin prompt/alert         | ✅          | Toda interacción visual en la página con mensajes elegantes               |
| Objetos y Arrays         | ✅          | Clase `Ejercicio`, array de rutinas, métodos organizados                  |
| localStorage             | ✅          | Persistencia automática, carga al iniciar, manejo de errores              |

---

## 🔧 Arquitectura Técnica

### 🏗️ Clases Implementadas

- **`Ejercicio`** → Modelo de datos para cada ejercicio.
- **`GestorRutina`** → Controlador principal que maneja toda la lógica.

### ⚙️ Métodos Principales

- `inicializar()` → Configura la aplicación al cargar.
- `agregarEjercicio()` → Valida y agrega ejercicios.
- `eliminarEjercicio()` → Remueve ejercicios específicos.
- `renderizarRutina()` → Actualiza la visualización en el DOM.
- `guardarRutina()` / `cargarRutinaGuardada()` → Persistencia en `localStorage`.

### ✅ Validaciones Implementadas

- Campos obligatorios y rangos numéricos.
- Prevención de duplicados.
- Manejo de errores de localStorage.
- Feedback visual inmediato.

---

## 🎨 Diseño y UX

### 🎭 Elementos Visuales

- **Background profesional** → Imagen de Arnold con overlay elegante.
- **Glassmorphism** → Efectos de blur y transparencia.
- **Animaciones suaves** → Transiciones y hover effects.
- **Iconografía con emojis** para mejor UX.
- **Responsive Design** → Adaptable a todos los dispositivos.

### 👥 Experiencia de Usuario

- Flujo intuitivo: Agregar → Visualizar → Gestionar.
- Feedback inmediato con mensajes visibles.
- Persistencia automática → los datos no se pierden.
- Interacción natural → sin interrupciones molestas.

---

## 📊 Funcionalidades Extra Implementadas

- Estadísticas en tiempo real (ejercicios y series).
- Función de exportar (copiar la rutina al portapapeles).
- Botón de limpieza completa para resetear la rutina.
- Validación avanzada con múltiples capas.
- Manejo de estados (rutina vacía vs. con contenido).

---

## ⚠️ Nota Final

Esta es una evolución significativa respecto al **Entregable 1**:

✅ No usa `prompt`, `alert` ni `console.log`.  
✅ Interactúa completamente con el DOM.  
✅ Tiene persistencia de datos real.  
✅ Diseño profesional y moderno.  
✅ Código organizado en clases y métodos.

El simulador está listo para uso real y demuestra dominio de:

- Manipulación del DOM
- Eventos de JavaScript
- localStorage
- Programación orientada a objetos
- Diseño responsive
- UX/UI profesional

---

📌 **¡Gracias por revisar mi proyecto! 🏋️‍♂️**
