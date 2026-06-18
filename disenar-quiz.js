var preguntas = {};
var participantes = {};
function crearPregunta() {
    const container = document.getElementById('preguntas');
    var preguntasActuales = container.children.length;
    preguntasActuales++;
    const nueva = document.createElement('div');
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