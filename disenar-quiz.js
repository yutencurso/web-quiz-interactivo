var preguntas = {};
var participantes = {};
function crearPregunta() {
    const container = document.getElementById('preguntas');
    var preguntasActuales = container.children.length;
    preguntasActuales++;
    const nueva = document.createElement('div');
    nueva.id = `pregunta${preguntasActuales}`;
    container.addEventListener("dblclick", (e) => {
        const elementoDiv = e.target.closest('div');
        if (elementoDiv) {
            elementoDiv.remove();
        }
    })
    nueva.innerHTML = 
    `<input type="text" id="titulo-pregunta${preguntasActuales}" placeholder="Título">
        <ul>
            <li><input type="text" id="pregunta-${preguntasActuales}a" placeholder="A"></li>
            <li><input type="text" id="pregunta-${preguntasActuales}b" placeholder="B"></li>
            <li><input type="text" id="pregunta-${preguntasActuales}c" placeholder="C"></li>
            <li><input type="text" id="pregunta-${preguntasActuales}d" placeholder="D"></li>
        </ul>
        <p>Respuesta correcta:</p>
        <select id="pregunta-${preguntasActuales}correcta">
            <option value="none"></option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="D">D</option>
        </select>`;
        nueva.style = "border: 1px solid black; border-radius: 5px; margin: 10px;";
    container.appendChild(nueva);
}
function anadirParticipante(nombre) {
    const container = document.getElementById('participantes');
    var participantesActuales = container.children.length;
    participantesActuales++;
    container.addEventListener("click", (e) => {
        const elementoLi = e.target.closest('li');
        if (elementoLi) {
            elementoLi.remove();
        }
    })
    const nuevo = document.createElement('li');
    nuevo.style.cursor = "pointer";
    nuevo.innerHTML = nombre;
    container.appendChild(nuevo);
}
function obtenerDatos() {
  const preguntas = obtenerPreguntas()
  const participantes = obtenerParticipantes()
  const nombre = document.getElementById('nombre-proyecto').value
  const datosQuiz = {
        titulo: nombre,
        preguntas: preguntas,
        participantes: participantes
  };
  const jsonString = JSON.stringify(datosQuiz, null, 2);
  const blob = new Blob([jsonString], { type: "application/octet-" });
  const enlace = document.createElement("a");
  enlace.href = URL.createObjectURL(blob);
  enlace.download = nombre + " data.dquiz"
  enlace.click();
  URL.revokeObjectURL(enlace.href)
  return jsonString
}
function obtenerPreguntas() {
    let preguntasData = {};
    
    // Suponiendo que sabes cuántas preguntas hay, o puedes usar un contador
    // Si se crean dinámicamente, es mejor buscar por clase, pero usando tu estructura de IDs:
    let i = 1;
    
    while (document.getElementById(`pregunta${i}`)) {
        let pregunta = {
            titulo: document.getElementById(`titulo-pregunta${i}`).value,
            opciones: {
                A: document.getElementById(`pregunta-${i}a`).value,
                B: document.getElementById(`pregunta-${i}b`).value,
                C: document.getElementById(`pregunta-${i}c`).value,
                D: document.getElementById(`pregunta-${i}d`).value,
            },
            correcta: document.getElementById(`pregunta-${i}correcta`).value
        };
        preguntasData[`pregunta${i}`] = pregunta;
        i++; // Pasa a la siguiente pregunta
    }
    console.log(preguntasData);
    return preguntasData;
}
function obtenerParticipantes() {
    let participantesData = {}; // Inicializamos como objeto JSON vacío
    const contenedor = document.getElementById('participantes');
    const elementos = contenedor.children;
    
    // Recorremos los elementos hijos que agregaste dinámicamente
    for (let i = 0; i < elementos.length; i++) {
        let numeroParticipante = i + 1;
        
        // Creamos la clave dinámica ("participante1", "participante2"...)
        // .innerText extrae el nombre visible del elemento
        participantesData[`participante${numeroParticipante}`] = elementos[i].innerText.trim();
    }
    
    console.log(participantesData);
    return participantesData;
}