function agruparMaterias(materias) {
  const agrupadas = {};

  materias.forEach((m) => {
    const clave = m.anio + '-' + m.cuatrimestre;
    if (!agrupadas[clave]) agrupadas[clave] = [];
    agrupadas[clave].push(m);
  });

  return agrupadas;
}

function materiaHabilitada(m, aprobadas) {
  const cor = m.correlativas || [];
  const corAp = m.correlativas_aprobadas || [];

  return (
    cor.every((id) => aprobadas.includes(id)) &&
    corAp.every((id) => aprobadas.includes(id) || cor.includes(id))
  );
}

function crearCheckbox(materia, aprobadas) {
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.checked = aprobadas.includes(materia.id);
  checkbox.disabled = !materiaHabilitada(materia, aprobadas) && !checkbox.checked;
  checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
      aprobadas.push(materia.id);
    } else {
      const i = aprobadas.indexOf(materia.id);
      if (i !== -1) aprobadas.splice(i, 1);
    }
    localStorage.setItem('materiasAprobadas', JSON.stringify(aprobadas));
    renderizar();
  });
  return checkbox;
}

function renderizar() {
  const contenedor = document.getElementById('malla');
  contenedor.innerHTML = '';
  const aprobadas = JSON.parse(localStorage.getItem('materiasAprobadas') || '[]');
  const materiasPorBloque = agruparMaterias(materias);

  const claves = Object.keys(materiasPorBloque).sort((a, b) => {
    const [a1, a2] = a.split('-').map(Number);
    const [b1, b2] = b.split('-').map(Number);
    return a1 - b1 || a2 - b2;
  });

  claves.forEach((clave) => {
    const bloque = document.createElement('div');
    bloque.className = 'bloque';
    const [anio, cuat] = clave.split('-');
    const titulo = cuat === '0'
      ? `Año ${anio} - Anual`
      : cuat === '1'
        ? `Año ${anio} - 1er Cuatrimestre`
        : `Año ${anio} - 2do Cuatrimestre`;
    bloque.innerHTML = `<h2>${titulo}</h2>`;

    materiasPorBloque[clave].forEach((materia) => {
      const fila = document.createElement('div');
      fila.className = 'materia';
      const check = crearCheckbox(materia, [...aprobadas]);
      const label = document.createElement('label');
      label.textContent = materia.nombre;
      fila.appendChild(check);
      fila.appendChild(label);
      bloque.appendChild(fila);
    });

    contenedor.appendChild(bloque);
  });
}

document.addEventListener('DOMContentLoaded', renderizar);
