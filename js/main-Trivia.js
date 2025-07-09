// ---- Trivia Modernizada ----
const triviaContainer = document.getElementById("trivia-container");
const startButton = document.getElementById("start-trivia-btn");

let preguntas = [
    {
        texto: "¿Cuáles son los pokémones iniciales de la región de Kanto?",
        opciones: ["Bulbasaur", "Mew", "Arceus"],
        correcta: 0
    },
    {
        texto: "¿Cuál es el Pokémon más fuerte de la región de Kanto?",
        opciones: ["Pikachu", "Charizard", "Mewtwo"],
        correcta: 2
    },
    {
        texto: "¿Cómo se llama el primer líder de gimnasio de la región de Kanto?",
        opciones: ["Brock", "Misty", "Giovanni"],
        correcta: 0
    },
    {
        texto: "¿Debilidades super efectivas que tienen los pokémon de tipo planta?",
        opciones: ["Fuego, Volador, Veneno, Bicho, y Hielo", "Tierra, Roca", "Fantasma, Hada, Hielo"],
        correcta: 0
    }
];

let indice = 0;
let puntos = 0;

startButton.addEventListener("click", () => {
    indice = 0;
    puntos = 0;
    mostrarPregunta();
});

function mostrarPregunta() {
    const p = preguntas[indice];
    triviaContainer.innerHTML = `
        <h3>${p.texto}</h3>
        <form id="form-opciones">
            ${p.opciones.map((op, i) => `
                <label>
                    <input type="radio" name="opcion" value="${i}" required>
                    ${op}
                </label><br>
            `).join("")}
            <br>
            <button type="submit">Responder</button>
        </form>
    `;

    const formOpciones = document.getElementById("form-opciones");
    formOpciones.addEventListener("submit", (e) => {
        e.preventDefault();
        const respuesta = parseInt(formOpciones.opcion.value);
        if (respuesta === p.correcta) {
            puntos++;
        }
        indice++;
        if (indice < preguntas.length) {
            mostrarPregunta();
        } else {
            mostrarResultado();
        }
    });
}

function mostrarResultado() {
    triviaContainer.innerHTML = `
        <h3>¡Trivia completada!</h3>
        <p>Tu puntaje fue: ${puntos}/${preguntas.length}</p>
        <button onclick="reiniciarTrivia()">Volver a jugar</button>
    `;
}

function reiniciarTrivia() {
    triviaContainer.innerHTML = `<button id="start-trivia-btn">¡Comenzar trivia!</button>`;
    document.getElementById("start-trivia-btn").addEventListener("click", () => {
        indice = 0;
        puntos = 0;
        mostrarPregunta();
    });
}
