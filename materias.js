// Lista completa de materias según tu lista corregida, con años, cuatrimestres, correlativas, carga horaria, etc.
const materias = [
  // 1er Año
  { 
    nombre: "Introducción a la Ingeniería Química (Int. I)", 
    id: "intro-iq", 
    anio: 1, 
    cuatrimestre: 1, 
    correlativas: [],
    carga_horaria: 6
  },
  { 
    nombre: "Ingeniería y Sociedad", 
    id: "ing-sociedad", 
    anio: 1, 
    cuatrimestre: 1, 
    correlativas: [],
    carga_horaria: 4
  },
  { 
    nombre: "Álgebra y Geometría Analítica", 
    id: "algebra", 
    anio: 1, 
    cuatrimestre: 1, 
    correlativas: [],
    carga_horaria: 10
  },
  { 
    nombre: "Análisis Matemático I", 
    id: "am-i", 
    anio: 1, 
    cuatrimestre: 1, 
    correlativas: [],
    carga_horaria: 10
  },
  { 
    nombre: "Química", 
    id: "quimica-general", 
    anio: 1, 
    cuatrimestre: 2, 
    correlativas: [],
    carga_horaria: 10
  },
  { 
    nombre: "Sistemas de Representación", 
    id: "sistemas-rep", 
    anio: 1, 
    cuatrimestre: 2, 
    correlativas: [],
    carga_horaria: 4
  },
  { 
    nombre: "Análisis Matemático II", 
    id: "am-ii", 
    anio: 1, 
    cuatrimestre: 2, 
    correlativas: ["am-i"],
    carga_horaria: 10
  },
  { 
    nombre: "Inglés I", 
    id: "ingles-i", 
    anio: 1, 
    cuatrimestre: 2, 
    correlativas: [],
    carga_horaria: 4
  },

  // 2do Año
  { 
    nombre: "Física I", 
    id: "fisica-i", 
    anio: 2, 
    cuatrimestre: 1, 
    correlativas: [],
    carga_horaria: 10
  },
  { 
    nombre: "Fundamentos de Informática", 
    id: "informatica", 
    anio: 2, 
    cuatrimestre: 1, 
    correlativas: [],
    carga_horaria: 4
  },
  { 
    nombre: "Probabilidad y Estadística", 
    id: "probabilidad", 
    anio: 2, 
    cuatrimestre: 1, 
    correlativas: ["am-i"],
    carga_horaria: 6
  },
  { 
    nombre: "Química Inorgánica", 
    id: "quimica-inorganica", 
    anio: 2, 
    cuatrimestre: 1, 
    correlativas: ["quimica-general"],
    carga_horaria: 8
  },
  { 
    nombre: "Inglés II", 
    id: "ingles-ii", 
    anio: 2, 
    cuatrimestre: 1, 
    correlativas: ["ingles-i"],
    carga_horaria: 4
  },
  { 
    nombre: "Introducción a Equipos y Procesos (Int. II)", 
    id: "intro-equipos", 
    anio: 2, 
    cuatrimestre: 2, 
    correlativas: ["intro-iq", "quimica-general"],
    carga_horaria: 6
  },
  { 
    nombre: "Física II", 
    id: "fisica-ii", 
    anio: 2, 
    cuatrimestre: 2, 
    correlativas: ["fisica-i"],
    carga_horaria: 10
  },
  { 
    nombre: "Química Orgánica", 
    id: "quimica-organica", 
    anio: 2, 
    cuatrimestre: 2, 
    correlativas: ["quimica-inorganica"],
    carga_horaria: 10
  },
  { 
    nombre: "Matemática Superior Aplicada", 
    id: "matematica-superior", 
    anio: 2, 
    cuatrimestre: 2, 
    correlativas: ["am-ii"],
    carga_horaria: 6
  },

  // 3er Año
  { 
    nombre: "Termodinámica", 
    id: "termodinamica", 
    anio: 3, 
    cuatrimestre: 1, 
    correlativas: ["quimica-inorganica", "am-ii", "fisica-ii"],
    carga_horaria: 8
  },
  { 
    nombre: "Ciencia de los Materiales", 
    id: "ciencia-materiales", 
    anio: 3, 
    cuatrimestre: 1, 
    correlativas: ["intro-equipos", "quimica-inorganica", "quimica-organica"],
    carga_horaria: 4
  },
  { 
    nombre: "Química Analítica", 
    id: "quimica-analitica", 
    anio: 3, 
    cuatrimestre: 1, 
    correlativas: ["probabilidad", "quimica-inorganica", "quimica-organica"],
    carga_horaria: 8
  },
  { 
    nombre: "Microbiología y Química Biológica", 
    id: "microbiologia", 
    anio: 3, 
    cuatrimestre: 1, 
    correlativas: ["quimica-inorganica", "quimica-organica"],
    carga_horaria: 6
  },
  { 
    nombre: "Economía", 
    id: "economia", 
    anio: 3, 
    cuatrimestre: 1, 
    correlativas: ["intro-equipos"],
    carga_horaria: 6
  },
  { 
    nombre: "Balances de Masa y Energía (Int. III)", 
    id: "bme", 
    anio: 3, 
    cuatrimestre: 2, 
    correlativas: ["quimica-general", "sistemas-rep", "intro-equipos", "fisica-ii"],
    carga_horaria: 6
  },
  { 
    nombre: "Legislación", 
    id: "legislacion", 
    anio: 3, 
    cuatrimestre: 2, 
    correlativas: ["intro-iq", "ing-sociedad"],
    carga_horaria: 4
  },
  { 
    nombre: "Fisicoquímica", 
    id: "fisicoquimica", 
    anio: 3, 
    cuatrimestre: 2, 
    correlativas: ["intro-equipos", "am-ii", "fisica-ii"],
    carga_horaria: 8
  },
  { 
    nombre: "Fenómenos de Transporte", 
    id: "fenomenos-transporte", 
    anio: 3, 
    cuatrimestre: 2, 
    correlativas: ["intro-equipos", "am-ii", "fisica-ii"],
    carga_horaria: 10
  },
  { 
    nombre: "Química Aplicada", 
    id: "quimica-aplicada", 
    anio: 3, 
    cuatrimestre: 2, 
    correlativas: ["intro-equipos", "quimica-inorganica", "fisica-ii", "quimica-organica"],
    carga_horaria: 4
  },

  // 4to Año
  { 
    nombre: "Operaciones Unitarias I", 
    id: "ou-i", 
    anio: 4, 
    cuatrimestre: 1, 
    correlativas: ["bme", "termodinamica", "fenomenos-transporte"],
    carga_horaria: 10
  },
  { 
    nombre: "Tecnología de la Energía Térmica", 
    id: "tecnologia-energia", 
    anio: 4, 
    cuatrimestre: 1, 
    correlativas: ["bme", "termodinamica", "fisicoquimica", "fenomenos-transporte"],
    carga_horaria: 10
  },
  { 
    nombre: "Ingeniería de las Reacciones Químicas", 
    id: "irq", 
    anio: 4, 
    cuatrimestre: 1, 
    correlativas: ["bme", "termodinamica", "fisicoquimica", "fenomenos-transporte"],
    carga_horaria: 10
  },
  { 
    nombre: "Diseño, Simulación, Optimización y Seguridad de Procesos (Int. IV)", 
    id: "diseno-procesos", 
    anio: 4, 
    cuatrimestre: 2, 
    correlativas: ["bme", "matematica-superior"],
    carga_horaria: 8
  },
  { 
    nombre: "Operaciones Unitarias II", 
    id: "ou-ii", 
    anio: 4, 
    cuatrimestre: 2, 
    correlativas: ["termodinamica", "fisicoquimica", "fenomenos-transporte"],
    carga_horaria: 10
  },
  { 
    nombre: "Higiene y Seguridad de Procesos", 
    id: "seguridad", 
    anio: 4, 
    cuatrimestre: 2, 
    correlativas: ["quimica-inorganica", "quimica-organica", "bme"],
    carga_horaria: 4
  },
  { 
    nombre: "Organización Industrial", 
    id: "organizacion-industrial", 
    anio: 4, 
    cuatrimestre: 2, 
    correlativas: ["probabilidad"],
    carga_horaria: 6
  },
  { 
    nombre: "Procesos Biotecnológicos", 
    id: "procesos-biotec", 
    anio: 4, 
    cuatrimestre: 2, 
    correlativas: ["bme", "fisicoquimica", "fenomenos-transporte", "microbiologia"],
    carga_horaria: 6
  },

  // 5to Año
  { 
    nombre: "Proyecto Final (Int. V)", 
    id: "proyecto-final", 
    anio: 5, 
    cuatrimestre: 0, // Anual
    correlativas: ["diseno-procesos", "ou-i", "tecnologia-energia", "ou-ii", "irq", "organizacion-industrial"],
    carga_horaria: 4
  },
  { 
    nombre: "Control Automático de Procesos", 
    id: "control-procesos", 
    anio: 5, 
    cuatrimestre: 1, 
    correlativas: ["diseno-procesos", "ou-ii"],
    carga_horaria: 8
  },
  { 
    nombre: "Mecánica Industrial", 
    id: "mecanica-industrial", 
    anio: 5, 
    cuatrimestre: 1, 
    correlativas: ["intro-equipos", "fisicoquimica"],
    carga_horaria: 6
  },
  { 
    nombre: "Ingeniería Ambiental", 
    id: "ingenieria-ambiental", 
    anio: 5, 
    cuatrimestre: 1, 
    correlativas: ["quimica-aplicada", "ou-i", "ou-ii", "irq"],
    carga_horaria: 6
  },
  { 
    nombre: "Calidad y Control Estadístico de Procesos", 
    id: "calidad", 
    anio: 5, 
    cuatrimestre: 2, 
    correlativas: ["probabilidad", "quimica-aplicada"],
    carga_horaria: 6
  },
  { 
    nombre: "Máquinas e Instalaciones Eléctricas", 
    id: "maquinas-electricas", 
    anio: 5, 
    cuatrimestre: 1, 
    correlativas: ["ou-i"],
    carga_horaria: 4
  },

  // Electivas
  { 
    nombre: "Tecnología de los Alimentos", 
    id: "electiva-alimentos", 
    anio: 0, 
    cuatrimestre: 1, 
    correlativas: ["procesos-biotec"],
    carga_horaria: 6
  },
  { 
    nombre: "Ingeniería de las Instalaciones", 
    id: "electiva-instalaciones", 
    anio: 0, 
    cuatrimestre: 2, 
    correlativas: ["mecanica-industrial"],
    carga_horaria: 4
  },
  { 
    nombre: "Física de los Materiales", 
    id: "electiva-fisica-materiales", 
    anio: 0, 
    cuatrimestre: 2, 
    correlativas: ["ciencia-materiales", "fisicoquimica"],
    carga_horaria: 6
  },
  { 
    nombre: "Formaciones de Tutores Emprendedores", 
    id: "electiva-tutores", 
    anio: 0, 
    cuatrimestre: 2, 
    correlativas: ["organizacion-industrial"],
    carga_horaria: 4
  },
  { 
    nombre: "Catalizadores y Procesos Catalíticos", 
    id: "electiva-catalizadores", 
    anio: 0, 
    cuatrimestre: 2, 
    correlativas: ["irq"],
    carga_horaria: 6
  },
  { 
    nombre: "Introducción a la Investigación Científica", 
    id: "electiva-investigacion", 
    anio: 0, 
    cuatrimestre: 2, 
    correlativas: ["diseno-procesos", "ou-i", "irq"],
    carga_horaria: 4
  },
  { 
    nombre: "Gestión de Potencial Humano", 
    id: "electiva-gestion-humana", 
    anio: 0, 
    cuatrimestre: 1, 
    correlativas: ["organizacion-industrial"],
    carga_horaria: 4
  },
  { 
    nombre: "Herramientas de Dirección y Gestión Empresarial", 
    id: "electiva-gestion-empresarial", 
    anio: 0, 
    cuatrimestre: 2, 
    correlativas: [],
    carga_horaria: 4
  },
  { 
    nombre: "Prácticas Profesionales Supervisadas", 
    id: "pps", 
    anio: 0, 
    cuatrimestre: 0, 
    correlativas: ["diseno-procesos", "ou-i", "tecnologia-energia", "ou-ii", "irq", "organizacion-industrial"],
    carga_horaria: 150,
    nota: "Es condición previa para Proyecto Final"
  },
  { 
    nombre: "Planificación, Desarrollo y Seguimiento de Proyectos Industriales", 
    id: "electiva-proyectos-industriales", 
    anio: 0, 
    cuatrimestre: 1, 
    correlativas: ["diseno-procesos", "organizacion-industrial"],
    carga_horaria: 4
  }
];

// Guardado del progreso en localStorage
let materiasRendidas = JSON.parse(localStorage.getItem('materiasRendidas')) || [];

// Contenedor de la malla
const contenedor = document.getElementById('malla');

// Función que indica si una materia está habilitada
function estaHabilitada(materia) {
  return materia.correlativas.every(c => materiasRendidas.includes(c));
}

// Agrupar materias por año-cuatrimestre o electivas
function agruparMaterias() {
  const grupos = {};
  materias.forEach(m => {
    let key = (m.anio === 0) ? 'Electivas' : `${m.anio}-${m.cuatrimestre}`;
    if (!grupos[key]) grupos[key] = [];
    grupos[key].push(m);
  });
  return grupos;
}

// Renderiza la malla completa
function render() {
  contenedor.innerHTML = '';

  const grupos = agruparMaterias();

  for (const grupo in grupos) {
    const divGrupo = document.createElement('div');
    divGrupo.className = 'cuatrimestre';

    let titulo = grupo === 'Electivas' ? 'Materias Electivas' : `Año ${grupo.split('-')[0]} - Cuatrimestre ${grupo.split('-')[1]}`;
    const h2 = document.createElement('h2');
    h2.textContent = titulo;
    divGrupo.appendChild(h2);

    const divMaterias = document.createElement('div');
    divMaterias.className = 'materias';

    grupos[grupo].forEach(m => {
      const divM = document.createElement('div');
      divM.className = 'materia';
      divM.textContent = m.nombre;

      if (materiasRendidas.includes(m.id)) {
        divM.dataset.rendida = 'true';
      } else if (estaHabilitada(m)) {
        divM.dataset.habilitada = 'true';
      } else {
        divM.dataset.habilitada = 'false';
      }

      if (estaHabilitada(m) || materiasRendidas.includes(m.id)) {
        divM.style.cursor = 'pointer';
        divM.title = `Carga horaria: ${m.carga_horaria} hs` + (m.nota ? '\nNota: ' + m.nota : '');
        divM.addEventListener('click', () => {
          if (materiasRendidas.includes(m.id)) {
            materiasRendidas = materiasRend
