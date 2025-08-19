let pokemonData = [];
const container = document.getElementById("card-container");
const filterSelect = document.getElementById("filter");
const form = document.getElementById("pokemon-form");
const searchInput = document.getElementById("search");
const toggleDark = document.getElementById("toggle-dark");
const resetBtn = document.getElementById("reset-pokedex");

// ---- Funciones de LocalStorage ----
function loadFromLocalStorage() {
    try {
        const stored = localStorage.getItem("pokemonList");
        if (stored) {
            const saved = JSON.parse(stored);
            pokemonData.push(...saved);
        }
    } catch (err) {
        console.error("Error leyendo localStorage:", err);
    }
}
function saveToLocalStorage() {
    try {
        localStorage.setItem("pokemonList", JSON.stringify(pokemonData));
    } catch (err) {
        console.error("Error guardando en localStorage:", err);
    }
}

// ---- Renderizar tarjetas ----
function renderCards(data) {
    container.innerHTML = "";
    if (data.length === 0) {
        container.innerHTML = "<p>No se encontraron resultados.</p>";
        return;
    }
    data.forEach((p, index) => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <img src="${p.img}" alt="${p.name}">
            <h2>${p.name}</h2>
            <p>${p.number} - Tipo: ${p.type}</p>
            <p>${p.desc}</p>
            <button class="delete-btn" data-index="${index}">❌ Eliminar</button>
        `;
        container.appendChild(card);
    });

    // Evento de eliminar Pokémon
    document.querySelectorAll(".delete-btn").forEach(btn => {
        btn.addEventListener("click", (e) => {
            const idx = e.target.getAttribute("data-index");
            pokemonData.splice(idx, 1);
            saveToLocalStorage();
            renderCards(pokemonData);
            Swal.fire("Pokémon eliminado");
        });
    });
}

// ---- Cargar Pokémon desde JSON ----
async function loadPokemonData() {
    try {
        const res = await fetch("pokemon.json");
        const data = await res.json();
        pokemonData = data;
        loadFromLocalStorage(); // mezclar con los guardados
        renderCards(pokemonData);
    } catch (err) {
        console.error("Error al cargar JSON:", err);
        Swal.fire("Error al cargar datos iniciales.");
    }
}

// ---- Filtros ----
filterSelect.addEventListener("change", () => {
    const value = filterSelect.value;
    let filtered = [...pokemonData];

    if (value === "alphabet") {
        filtered.sort((a, b) => a.name.localeCompare(b.name));
    } else if (value !== "all") {
        filtered = pokemonData.filter(p => p.type.includes(value));
    }
    renderCards(filtered);
});

// ---- Buscador ----
searchInput.addEventListener("input", () => {
    const term = searchInput.value.toLowerCase();
    const results = pokemonData.filter(
        p => p.name.toLowerCase().includes(term) || p.number.includes(term)
    );
    renderCards(results);
});

// ---- Dark Mode ----
toggleDark.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    localStorage.setItem("darkMode", document.body.classList.contains("dark"));
});
if (localStorage.getItem("darkMode") === "true") {
    document.body.classList.add("dark");
}

// ---- Agregar Pokémon desde formulario ----
form.addEventListener("submit", (e) => {
    e.preventDefault();

    const newPokemon = {
        img: document.getElementById("pokeImg").value.trim(),
        name: document.getElementById("pokeName").value.trim(),
        number: document.getElementById("pokeNumber").value.trim(),
        type: document.getElementById("pokeType").value.trim(),
        desc: document.getElementById("pokeDesc").value.trim()
    };

    if (!newPokemon.img || !newPokemon.name || !newPokemon.number || !newPokemon.type || !newPokemon.desc) {
        Swal.fire("Por favor completa todos los campos.");
        return;
    }

    const exists = pokemonData.some(p =>
        p.name.toLowerCase() === newPokemon.name.toLowerCase() || p.number === newPokemon.number
    );
    if (exists) {
        Swal.fire({ icon: "error", title: "Ese Pokémon ya existe..." });
        return;
    }

    pokemonData.push(newPokemon);
    saveToLocalStorage();
    renderCards(pokemonData);
    form.reset();

    Swal.fire("¡Pokémon agregado exitosamente!");
});

// ---- Resetear Pokedex ----
resetBtn.addEventListener("click", async () => {
    Swal.fire({
        title: "¿Seguro?",
        text: "Se eliminarán todos los Pokémon agregados manualmente.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Sí, resetear",
        cancelButtonText: "Cancelar"
    }).then(async (result) => {
        if (result.isConfirmed) {
            localStorage.removeItem("pokemonList"); // limpiar datos guardados
            await loadPokemonData(); // volver a cargar desde JSON
            Swal.fire("Pokedex reseteada", "Se restauraron los Pokémon originales", "success");
        }
    });
});

// ---- Inicialización ----
loadPokemonData();
