const pokemonData = [
    {
        img: "../img/Bulbasuar.png",
        name: "Bulbasaur",
        number: "#001",
        type: "Planta/Veneno",
        desc: "Bulbasaur es un Pokémon que crece con la luz del sol. Su planta en la espalda florece a medida que evoluciona."
    },
    {
        img: "../img/Ivysaur.png",
        name: "Ivysaur",
        number: "#002",
        type: "Planta/Veneno",
        desc: "Ivysaur es más fuerte que Bulbasaur y su planta ha crecido. Le gusta estar al sol para absorber energía."
    },
    {
        img: "../img/Venusaur.png",
        name: "Venusaur",
        number: "#003",
        type: "Planta/Veneno",
        desc: "Venusaur tiene una gran flor en su espalda que libera polen. Es muy poderoso y puede causar terremotos."
    },
    {
        img: "../img/Charmander.png",
        name: "Charmander",
        number: "#004",
        type: "Fuego",
        desc: "Charmander es un Pokémon de fuego con una llama en su cola. Si la llama se apaga, Charmander se debilita."
    },
    {
        img: "../img/Charmeleon.png",
        name: "Charmeleon",
        number: "#005",
        type: "Fuego",
        desc: "Charmeleon es feroz y territorial. Su cola arde intensamente cuando está enfadado."
    },
    {
        img: "../img/Charizard.png",
        name: "Charizard",
        number: "#006",
        type: "Fuego/Volador",
        desc: "Charizard puede volar alto y lanzar llamas desde su boca. Es uno de los Pokémon más poderosos."
    },
    {
        img: "../img/Squirtle.png",
        name: "Squirtle",
        number: "#007",
        type: "Agua",
        desc: "Squirtle es un Pokémon tortuga que puede lanzar chorros de agua para defenderse."
    },
    {
        img: "../img/Wartortle.png",
        name: "Wartortle",
        number: "#008",
        type: "Agua",
        desc: "Wartortle tiene orejas largas y una cola esponjosa. Es ágil y puede nadar rápidamente."
    },
    {
        img: "../img/Blastoise.png",
        name: "Blastoise",
        number: "#009",
        type: "Agua",
        desc: "Blastoise es un Pokémon tortuga gigante con cañones de agua en sus hombros. Puede lanzar potentes chorros de agua."
    },
    {
        img: "../img/Caterpie.png",
        name: "Caterpie",
        number: "#010",
        type: "Bicho",
        desc: "Caterpie es un Pokémon oruga que se camufla entre las hojas. Se convierte en Metapod al evolucionar."
    },
    {
        img: "../img/Metapod.png",
        name: "Metapod",
        number: "#011",
        type: "Bicho",
        desc: "Metapod es una crisálida dura y resistente. Está en reposo mientras se prepara para convertirse en Butterfree."
    },
    {
        img: "../img/Butterfree.png",
        name: "Butterfree",
        number: "#012",
        type: "Bicho/Volador",
        desc: "Butterfree tiene alas grandes y coloridas. Puede liberar polen para dormir a sus enemigos."
    },
    {
        img: "../img/Weedle.png",
        name: "Weedle",
        number: "#013",
        type: "Bicho/Veneno",
        desc: "Weedle tiene un aguijón venenoso en su cabeza. Es pequeño pero peligroso si se siente amenazado."
    },
    {
        img: "../img/kakuna.png",
        name: "Kakuna",
        number: "#014",
        type: "Bicho/Veneno",
        desc: "Kakuna es una crisálida que está en reposo. Se prepara para evolucionar a Beedrill."
    },
    {
        img: "../img/Beedrill.png",
        name: "Beedrill",
        number: "#015",
        type: "Bicho/Veneno",
        desc: "Beedrill es un Pokémon abeja agresivo. Tiene aguijones afilados y puede atacar en enjambre."
    },
    {
        img: "../img/pidgey.png",
        name: "Pidgey",
        number: "#016",
        type: "Normal/Volador",
        desc: "Pidgey es un Pokémon ave muy común que prefiere evitar el combate, pero si lo atacan, lanza arena para escapar."
    },
    {
        img: "../img/pidgeotto.png",
        name: "Pidgeotto",
        number: "#017",
        type: "Normal/Volador",
        desc: "Pidgeotto tiene un gran sentido territorial. Vuela con velocidad para cazar a su presa desde el aire."
    },
    {
        img: "../img/pidgeot.png",
        name: "Pidgeot",
        number: "#018",
        type: "Normal/Volador",
        desc: "Pidgeot es majestuoso y rápido. Puede volar a velocidades supersónicas para atrapar a sus presas."
    },
    {
        img: "../img/rattata.png",
        name: "Rattata",
        number: "#019",
        type: "Normal",
        desc: "Rattata es rápido y siempre alerta. Tiene incisivos que no dejan de crecer, así que los usa constantemente."
    },
    {
        img: "../img/raticate.png",
        name: "Raticate",
        number: "#020",
        type: "Normal",
        desc: "Raticate es feroz. Sus colmillos duros como el acero le permiten roer casi cualquier cosa."
    },
    {
        img: "../img/spearow.png",
        name: "Spearow",
        number: "#021",
        type: "Normal/Volador",
        desc: "Spearow tiene un chillido agudo y un carácter agresivo. Es territorial y vuela bajo buscando comida."
    },
    {
        img: "../img/fearow.png",
        name: "Fearow",
        number: "#022",
        type: "Normal/Volador",
        desc: "Fearow puede volar largas distancias sin descanso. Tiene un pico largo con el que caza en vuelo."
    },
    {
        img: "../img/ekans.png",
        name: "Ekans",
        number: "#023",
        type: "Veneno",
        desc: "Ekans es una serpiente que se enrosca para dormir. Puede deslizarse silenciosamente para atrapar presas."
    },
    {
        img: "../img/arbok.png",
        name: "Arbok",
        number: "#024",
        type: "Veneno",
        desc: "Arbok intimida a sus enemigos con los aterradores patrones de su capucha. Es muy fuerte físicamente."
    },
    {
        img: "../img/pikachu.png",
        name: "Pikachu",
        number: "#025",
        type: "Eléctrico",
        desc: "Pikachu es el Pokémon emblema. Acumula electricidad en sus mejillas y la libera en forma de rayos."
    }
    , {
        img: "../img/raichu.png",
        name: "Raichu",
        number: "#026",
        type: "Eléctrico",
        desc: "Raichu es la evolución de Pikachu. Puede generar electricidad más potente y es muy ágil."
    },
    {
        img: "../img/sandshrew.png",
        name: "Sandshrew",
        number: "#027",
        type: "Tierra",
        desc: "Sandshrew es un Pokémon topo que se entierra en la arena para protegerse del calor."
    },
    {
        img: "../img/sandslash.png",
        name: "Sandslash",
        number: "#028",
        type: "Tierra",
        desc: "Sandslash tiene garras afiladas que usa para excavar y defenderse. Es muy resistente."
    },
    {
        img: "../img/nidoran-f.png",
        name: "Nidoran♀",
        number: "#029",
        type: "Veneno",
        desc: "Nidoran♀ es un Pokémon pequeño y tímido. Tiene un cuerno en la frente que usa para defenderse."
    },
    {
        img: "../img/nidorina.png",
        name: "Nidorina",
        number: "#030",
        type: "Veneno",
        desc: "Nidorina es más fuerte que Nidoran♀. Su cuerno se ha vuelto más afilado y puede atacar con fuerza."
    },
    {
        img: "../img/nidoqueen.png",
        name: "Nidoqueen",
        number: "#031",
        type: "Veneno/Tierra",
        desc: "Nidoqueen es una poderosa Pokémon que protege a sus crías. Puede lanzar ataques de tierra y veneno."
    },
    {
        img: "../img/nidoran-m.png",
        name: "Nidoran♂",
        number: "#032",
        type: "Veneno",
        desc: "Nidoran♂ es un Pokémon pequeño con un cuerno en la frente. Es territorial y defiende su espacio."
    },
    {
        img: "../img/nidorino.png",
        name: "Nidorino",
        number: "#033",
        type: "Veneno",
        desc: "Nidorino es más agresivo que Nidoran♂. Su cuerno se ha vuelto más afilado y puede atacar con fuerza."
    },
    {
        img: "../img/nidoking.png",
        name: "Nidoking",
        number: "#034",
        type: "Veneno/Tierra",
        desc: "Nidoking es un Pokémon fuerte y territorial. Su cuerno puede perforar rocas y su fuerza es temida."
    },
    {
        img: "../img/clefairy.png",
        name: "Clefairy",
        number: "#035",
        type: "Hada",
        desc: "Clefairy es un Pokémon mágico que se dice que viene de la luna. Es amistoso y le gusta bailar."
    },
    {
        img: "../img/clefable.png",
        name: "Clefable",
        number: "#036",
        type: "Hada",
        desc: "Clefable es la evolución de Clefairy. Tiene alas pequeñas y puede volar cortas distancias."
    },
    {
        img: "../img/vulpix.png",
        name: "Vulpix",
        number: "#037",
        type: "Fuego",
        desc: "Vulpix es un Pokémon zorro con seis colas. Puede controlar el fuego y es muy ágil."
    },
    {
        img: "../img/ninetales.png",
        name: "Ninetales",
        number: "#038",
        type: "Fuego",
        desc: "Ninetales tiene nueve colas que representan su longevidad. Es muy sabio y poderoso."
    },
    {
        img: "../img/jigglypuff.png",
        name: "Jigglypuff",
        number: "#039",
        type: "Normal/Hada",
        desc: "Jigglypuff canta para dormir a sus enemigos. Su voz suave y melodiosa es irresistible."
    },
    {
        img: "../img/wigglytuff.png",
        name: "Wigglytuff",
        number: "#040",
        type: "Normal/Hada",
        desc: "Wigglytuff es la evolución de Jigglypuff. Tiene un cuerpo blando y puede inflarse para defenderse."
    },
    {
        img: "../img/zubat.png",
        name: "Zubat",
        number: "#041",
        type: "Veneno/Volador",
        desc: "Zubat es un Pokémon murciélago que vive en cuevas. Usa ecolocalización para navegar en la oscuridad."
    },
    {
        img: "../img/golbat.png",
        name: "Golbat",
        number: "#042",
        type: "Veneno/Volador",
        desc: "Golbat es más grande que Zubat y tiene colmillos afilados. Se alimenta de la sangre de sus presas."
    },
    {
        img: "../img/oddish.png",
        name: "Oddish",
        number: "#043",
        type: "Planta/Veneno",
        desc: "Oddish es un Pokémon planta que se entierra en la tierra durante el día. Florece por la noche."
    },
    {
        img: "../img/gloom.png",
        name: "Gloom",
        number: "#044",
        type: "Planta/Veneno",
        desc: "Gloom tiene un olor desagradable que ahuyenta a los enemigos. Su flor se abre cuando está feliz."
    },
    {
        img: "../img/vileplume.png",
        name: "Vileplume",
        number: "#045",
        type: "Planta/Veneno",
        desc: "Vileplume tiene una gran flor que libera esporas. Es muy poderoso y puede causar somnolencia."
    },
    {
        img: "../img/paras.png",
        name: "Paras",
        number: "#046",
        type: "Bicho/Planta",
        desc: "Paras es un Pokémon hongo que parasita a otros Pokémon. Sus hongos crecen en su espalda."
    },
    {
        img: "../img/parasect.png",
        name: "Parasect",
        number: "#047",
        type: "Bicho/Planta",
        desc: "Parasect es la evolución de Paras. Sus hongos han crecido tanto que controlan su mente."
    },
    {
        img: "../img/venonat.png",
        name: "Venonat",
        number: "#048",
        type: "Bicho/Veneno",
        desc: "Venonat tiene ojos grandes y peludos. Puede lanzar polvo venenoso para cegar a sus enemigos."
    },
    {
        img: "../img/venomoth.png",
        name: "Venomoth",
        number: "#049",
        type: "Bicho/Veneno",
        desc: "Venomoth es la evolución de Venonat. Tiene alas grandes y puede liberar polen venenoso."
    },
    {
        img: "../img/diglett.png",
        name: "Diglett",
        number: "#050",
        type: "Tierra",
        desc: "Diglett es un Pokémon topo que vive bajo tierra. Solo se ve su cabeza y es muy rápido."
    },
    {
        img: "../img/dugtrio.png",
        name: "Dugtrio",
        number: "#051",
        type: "Tierra",
        desc: "Dugtrio es la evolución de Diglett. Tres cabezas trabajan juntas para excavar rápidamente."
    },
];

const originalPokemon = [...pokemonData];

// DOM
const container = document.getElementById("card-container");
const filterSelect = document.getElementById("filter");
// const form = document.getElementById("from");
const form = document.getElementById("pokemon-form"); 

// Cargar Pokémon desde el localStorage al inicio
function loadFromLocalStorage() {
    const stored = localStorage.getItem("pokemonList");
    if (stored) {
        const saved = JSON.parse(stored);
        saved.forEach(p => {
            const exists = pokemonData.some(
                poke => poke.name === p.name || poke.number === p.number
            );
            if (!exists) {
                pokemonData.push(p);
            }
        });
    }
}
function saveToLocalStorage() {
    localStorage.setItem("pokemonList", JSON.stringify(pokemonData));
}

// Renderizar las tarjetas de Pokémon
function renderCards(data) {
    container.innerHTML = "";
    data.forEach(p => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <img src="${p.img}" alt="${p.name}">
            <h2>${p.name}</h2>
            <p>${p.number} - Tipo: ${p.type}</p>
            <p>${p.desc}</p>
        `;
        container.appendChild(card);
    });
}

// Filtrar por tipo y ordenar alfabéticamente
filterSelect.addEventListener("change", () => {
    const value = filterSelect.value;

    if (value === "all") {
        renderCards(pokemonData);
    } else if (value === "alphabet") {
    const sorted = [...pokemonData].sort((a, b) => a.name.localeCompare(b.name));
    renderCards(sorted);
    } else {
    const filtered = pokemonData.filter(p => p.type.includes(value));
    renderCards(filtered);
    }
});

// --- Agregar Pokémon desde el formulario ---

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const newPokemon = {
        img: document.getElementById("pokeImg").value.trim(),
        name: document.getElementById("pokeName").value.trim(),
        number: document.getElementById("pokeNumber").value.trim(),
        type: document.getElementById("pokeType").value.trim(),
        desc: document.getElementById("pokeDesc").value.trim()
    };

    // Validación básica
    if (!newPokemon.img || !newPokemon.name || !newPokemon.number || !newPokemon.type || !newPokemon.desc) {
        alert("Por favor completa todos los campos.");
        return;
    }

    // Evitar duplicados
    const exists = pokemonData.some(p =>
        p.name.toLowerCase() === newPokemon.name.toLowerCase() ||
        p.number === newPokemon.number
    );

    if (exists) {
        alert("Ese Pokémon ya existe.");
        return;
    }

    // Guardar
    pokemonData.push(newPokemon);
    saveToLocalStorage();
    renderCards(pokemonData);
    form.reset();
});

// Mostrar todos al cargar
loadFromLocalStorage();
renderCards(pokemonData);