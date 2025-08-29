// Clase para manejar ejercicios individuales
class Ejercicio {
  constructor(nombre, series, repeticiones) {
    this.id = Date.now() + Math.random(); // ID único
    this.nombre = nombre;
    this.series = parseInt(series);
    this.repeticiones = parseInt(repeticiones);
  }
}

// Clase principal para gestionar la rutina
class GestorRutina {
  constructor() {
    this.ejercicios = [];
    this.inicializar();
  }

  // Inicializar la aplicación
  inicializar() {
    this.cargarElementosDOM();
    this.configurarEventos();
    this.cargarRutinaGuardada();
    this.renderizarRutina();
  }

  // Obtener referencias a elementos del DOM
  cargarElementosDOM() {
    this.formulario = document.getElementById("ejercicio-form");
    this.inputNombre = document.getElementById("nombre-ejercicio");
    this.inputSeries = document.getElementById("series");
    this.inputRepeticiones = document.getElementById("repeticiones");
    this.btnGuardar = document.getElementById("guardar-rutina");
    this.listaEjercicios = document.getElementById("lista-ejercicios");
    this.rutinaVacia = document.getElementById("rutina-vacia");
    this.mensajeEstado = document.getElementById("mensaje-estado");
    this.totalEjercicios = document.getElementById("total-ejercicios");
  }

  // Configurar todos los eventos
  configurarEventos() {
    // Evento para agregar ejercicio
    this.formulario.addEventListener("submit", (e) => {
      e.preventDefault();
      this.agregarEjercicio();
    });

    // Evento para guardar rutina
    this.btnGuardar.addEventListener("click", () => {
      this.guardarRutina();
    });
  }

  // Agregar un nuevo ejercicio
  agregarEjercicio() {
    const nombre = this.inputNombre.value.trim();
    const series = this.inputSeries.value;
    const repeticiones = this.inputRepeticiones.value;

    // Validar datos
    if (!this.validarDatos(nombre, series, repeticiones)) {
      return;
    }

    // Crear nuevo ejercicio
    const nuevoEjercicio = new Ejercicio(nombre, series, repeticiones);

    // Agregar al array
    this.ejercicios.push(nuevoEjercicio);

    // Limpiar formulario
    this.limpiarFormulario();

    // Renderizar la rutina actualizada
    this.renderizarRutina();

    // Mostrar mensaje de éxito
    this.mostrarMensaje(
      `Ejercicio "${nombre}" agregado correctamente`,
      "exito"
    );
  }

  // Validar los datos del formulario
  validarDatos(nombre, series, repeticiones) {
    if (!nombre) {
      this.mostrarMensaje("El nombre del ejercicio es obligatorio", "error");
      return false;
    }

    if (!series || series < 1 || series > 20) {
      this.mostrarMensaje("Las series deben estar entre 1 y 20", "error");
      return false;
    }

    if (!repeticiones || repeticiones < 1 || repeticiones > 100) {
      this.mostrarMensaje(
        "Las repeticiones deben estar entre 1 y 100",
        "error"
      );
      return false;
    }

    // Verificar si el ejercicio ya existe
    const ejercicioExistente = this.ejercicios.find(
      (ejercicio) => ejercicio.nombre.toLowerCase() === nombre.toLowerCase()
    );

    if (ejercicioExistente) {
      this.mostrarMensaje("Este ejercicio ya existe en tu rutina", "error");
      return false;
    }

    return true;
  }

  // Eliminar un ejercicio específico
  eliminarEjercicio(id) {
    const ejercicio = this.ejercicios.find((ej) => ej.id === id);

    if (ejercicio) {
      this.ejercicios = this.ejercicios.filter((ej) => ej.id !== id);
      this.renderizarRutina();
      this.mostrarMensaje(`Ejercicio "${ejercicio.nombre}" eliminado`, "exito");
    }
  }

  // Renderizar la rutina completa en el DOM
  renderizarRutina() {
    // Limpiar lista actual
    this.listaEjercicios.innerHTML = "";

    // Si no hay ejercicios, mostrar mensaje vacío
    if (this.ejercicios.length === 0) {
      this.rutinaVacia.style.display = "block";
      this.listaEjercicios.classList.remove("visible");
    } else {
      this.rutinaVacia.style.display = "none";
      this.listaEjercicios.classList.add("visible");

      // Crear elementos para cada ejercicio
      this.ejercicios.forEach((ejercicio) => {
        const elementoEjercicio = this.crearElementoEjercicio(ejercicio);
        this.listaEjercicios.appendChild(elementoEjercicio);
      });
    }

    // Actualizar contador
    this.actualizarEstadisticas();
  }

  // Crear elemento HTML para un ejercicio
  crearElementoEjercicio(ejercicio) {
    const li = document.createElement("li");
    li.className = "ejercicio-item";
    li.innerHTML = `
            <div class="ejercicio-info">
                <h3>${ejercicio.nombre}</h3>
                <div class="ejercicio-detalles">
                    <span>📊 ${ejercicio.series} series</span>
                    <span>🔄 ${ejercicio.repeticiones} repeticiones</span>
                </div>
            </div>
            <button class="btn-eliminar" onclick="gestorRutina.eliminarEjercicio(${ejercicio.id})">
                🗑️ Eliminar
            </button>
        `;
    return li;
  }

  // Actualizar estadísticas de la rutina
  actualizarEstadisticas() {
    const totalEjercicios = this.ejercicios.length;
    const totalSeries = this.ejercicios.reduce((sum, ej) => sum + ej.series, 0);

    this.totalEjercicios.textContent = `Total de ejercicios: ${totalEjercicios} | Total de series: ${totalSeries}`;
  }

  // Guardar rutina en localStorage
  guardarRutina() {
    try {
      const rutinaJSON = JSON.stringify(this.ejercicios);
      localStorage.setItem("rutinaGimnasio", rutinaJSON);
      this.mostrarMensaje("Rutina guardada correctamente", "exito");
    } catch (error) {
      this.mostrarMensaje("Error al guardar la rutina", "error");
      console.error("Error guardando rutina:", error);
    }
  }

  // Cargar rutina desde localStorage
  cargarRutinaGuardada() {
    try {
      const rutinaGuardada = localStorage.getItem("rutinaGimnasio");

      if (rutinaGuardada) {
        const ejerciciosGuardados = JSON.parse(rutinaGuardada);

        // Recrear objetos Ejercicio
        this.ejercicios = ejerciciosGuardados.map((data) => {
          const ejercicio = new Ejercicio(
            data.nombre,
            data.series,
            data.repeticiones
          );
          ejercicio.id = data.id; // Mantener ID original
          return ejercicio;
        });

        this.mostrarMensaje("Rutina cargada desde memoria", "exito");
      }
    } catch (error) {
      this.mostrarMensaje("Error al cargar rutina guardada", "error");
      console.error("Error cargando rutina:", error);
    }
  }

  // Mostrar mensajes al usuario
  mostrarMensaje(texto, tipo) {
    this.mensajeEstado.textContent = texto;
    this.mensajeEstado.className = `mensaje-estado ${tipo}`;

    // Ocultar mensaje después de 3 segundos
    setTimeout(() => {
      this.mensajeEstado.style.display = "none";
    }, 3000);
  }

  // Limpiar formulario después de agregar ejercicio
  limpiarFormulario() {
    this.inputNombre.value = "";
    this.inputSeries.value = "";
    this.inputRepeticiones.value = "";
    this.inputNombre.focus(); // Enfocar en el primer campo
  }
}

// Inicializar la aplicación cuando se carga la página
let gestorRutina;

document.addEventListener("DOMContentLoaded", () => {
  gestorRutina = new GestorRutina();
});

// Funciones adicionales para mejorar la experiencia

// Función para exportar rutina como texto
function exportarRutina() {
  if (gestorRutina.ejercicios.length === 0) {
    gestorRutina.mostrarMensaje("No hay ejercicios para exportar", "error");
    return;
  }

  let textoRutina = "🏋️‍♂️ MI RUTINA DE GIMNASIO 🏋️‍♂️\n\n";

  gestorRutina.ejercicios.forEach((ejercicio, index) => {
    textoRutina += `${index + 1}. ${ejercicio.nombre}\n`;
    textoRutina += `   📊 Series: ${ejercicio.series}\n`;
    textoRutina += `   🔄 Repeticiones: ${ejercicio.repeticiones}\n\n`;
  });

  // Crear elemento temporal para copiar al portapapeles
  const elementoTemporal = document.createElement("textarea");
  elementoTemporal.value = textoRutina;
  document.body.appendChild(elementoTemporal);
  elementoTemporal.select();

  try {
    document.execCommand("copy");
    gestorRutina.mostrarMensaje("Rutina copiada al portapapeles", "exito");
  } catch (error) {
    gestorRutina.mostrarMensaje("Error al copiar rutina", "error");
  }

  document.body.removeChild(elementoTemporal);
}

// Función para limpiar toda la rutina
function limpiarRutina() {
  if (gestorRutina.ejercicios.length === 0) {
    gestorRutina.mostrarMensaje("No hay ejercicios para limpiar", "error");
    return;
  }

  gestorRutina.ejercicios = [];
  gestorRutina.renderizarRutina();
  localStorage.removeItem("rutinaGimnasio");
  gestorRutina.mostrarMensaje("Rutina limpiada completamente", "exito");
}
