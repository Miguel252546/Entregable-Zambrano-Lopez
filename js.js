const pokemonData = [
    {
        img: "../ENTREGABLE_ZAMBRANO_LOPEZ_MIGUEL_JOS%C3%89/img/001.png",
        name: "Bulbasaur",
        number: "#001",
        type: "Planta/Veneno",
        desc: "Bulbasaur es un Pokémon que crece con la luz del sol. Su planta en la espalda florece a medida que evoluciona."
    },
    {
        img: "../ENTREGABLE_ZAMBRANO_LOPEZ_MIGUEL_JOS%C3%89/img/002.png",
        name: "Ivysaur",
        number: "#002",
        type: "Planta/Veneno",
        desc: "Ivysaur es más fuerte que Bulbasaur y su planta ha crecido. Le gusta estar al sol para absorber energía."
    },
    {
        img: "../ENTREGABLE_ZAMBRANO_LOPEZ_MIGUEL_JOS%C3%89/img/003.png",
        name: "Venusaur",
        number: "#003",
        type: "Planta/Veneno",
        desc: "Venusaur tiene una gran flor en su espalda que libera polen. Es muy poderoso y puede causar terremotos."
    },
    {
        img: "../ENTREGABLE_ZAMBRANO_LOPEZ_MIGUEL_JOS%C3%89/img/004.png",
        name: "Charmander",
        number: "#004",
        type: "Fuego",
        desc: "Charmander es un Pokémon de fuego con una llama en su cola. Si la llama se apaga, Charmander se debilita."
    },
    {
        img: "../ENTREGABLE_ZAMBRANO_LOPEZ_MIGUEL_JOS%C3%89/img/005.png",
        name: "Charmeleon",
        number: "#005",
        type: "Fuego",
        desc: "Charmeleon es más agresivo que Charmander y su llama arde más intensamente. Es conocido por su espíritu combativo."
    },
    {
        img: "../ENTREGABLE_ZAMBRANO_LOPEZ_MIGUEL_JOS%C3%89/img/006.png",
        name: "Charizard",
        number: "#006",
        type: "Fuego/Volador",
        desc: "Charizard es un Pokémon dragón que puede volar alto. Su aliento de fuego es extremadamente caliente."
    },
    {
        img: "../ENTREGABLE_ZAMBRANO_LOPEZ_MIGUEL_JOS%C3%89/img/007.png",
        name: "Squirtle",
        number: "#007",
        type: "Agua",
        desc: "Squirtle es un Pokémon acuático que puede lanzar chorros de agua. Es muy amigable y le gusta jugar en el agua."
    },
    {
        img: "../ENTREGABLE_ZAMBRANO_LOPEZ_MIGUEL_JOS%C3%89/img/008.png",
        name: "Wartortle",
        number: "#008",
        type: "Agua",
        desc: "Wartortle tiene orejas largas y una cola peluda. Es conocido por su habilidad para nadar rápidamente."
    },
    {
        img: "../ENTREGABLE_ZAMBRANO_LOPEZ_MIGUEL_JOS%C3%89/img/009.png",
        name: "Blastoise",
        number: "#009",
        type: "Agua",
        desc: "Blastoise es un Pokémon poderoso con cañones de agua en su espalda. Puede lanzar chorros de agua a alta presión."
    },
    {
        img: "../ENTREGABLE_ZAMBRANO_LOPEZ_MIGUEL_JOS%C3%89/img/010.png",
        name: "Caterpie",
        number: "#010",
        type: "Bicho",
        desc: "Caterpie es un Pokémon pequeño y verde que se alimenta de hojas. Su objetivo es evolucionar en Metapod."
    },
    {
        img: "../ENTREGABLE_ZAMBRANO_LOPEZ_MIGUEL_JOS%C3%89/img/011.png",
        name: "Metapod",
        number: "#011",
        type: "Bicho",
        desc: "Metapod es la forma evolutiva de Caterpie. Es una crisálida que está en proceso de convertirse en Butterfree."
    },
    {
        img: "../ENTREGABLE_ZAMBRANO_LOPEZ_MIGUEL_JOS%C3%89/img/012.png",
        name: "Butterfree",
        number: "#012",
        type: "Bicho/Volador",
        desc: "Butterfree es un Pokémon mariposa que puede volar alto. Sus alas son coloridas y puede liberar polen."
    },
    {
        img: "../ENTREGABLE_ZAMBRANO_LOPEZ_MIGUEL_JOS%C3%89/img/013.png",
        name: "Weedle",
        number: "#013",
        type: "Bicho/Veneno",
        desc: "Weedle es un Pokémon pequeño con un aguijón venenoso. Se alimenta de hojas y es muy tímido."
    },
    {
        img: "../ENTREGABLE_ZAMBRANO_LOPEZ_MIGUEL_JOS%C3%89/img/014.png",
        name: "Kakuna",
        number: "#014",
        type: "Bicho/Veneno",
        desc: "Kakuna es la forma evolutiva de Weedle. Es una crisálida que está en proceso de convertirse en Beedrill."
    },
    {
        img: "../ENTREGABLE_ZAMBRANO_LOPEZ_MIGUEL_JOS%C3%89/img/015.png",
        name: "Beedrill",
        number: "#015",
        type: "Bicho/Veneno",
        desc: "Beedrill es un Pokémon abeja con aguijones venenosos. Es muy agresivo y protege su colmena."
    },
    {
        img: "../ENTREGABLE_ZAMBRANO_LOPEZ_MIGUEL_JOS%C3%89/img/016.png",
        name: "Pidgey",
        number: "#016",
        type: "Normal/Volador",
        desc: "Pidgey es un Pokémon pájaro que vive en los bosques. Es conocido por su habilidad para volar rápido."
    },
    {
        img: "../ENTREGABLE_ZAMBRANO_LOPEZ_MIGUEL_JOS%C3%89/img/017.png",
        name: "Pidgeotto",
        number: "#017",
        type: "Normal/Volador",
        desc: "Pidgeotto es más grande que Pidgey y tiene garras afiladas. Es un cazador hábil."
    },
    {
        img: "../ENTREGABLE_ZAMBRANO_LOPEZ_MIGUEL_JOS%C3%89/img/018.png",
        name: "Pidgeot",
        number: "#018",
        type: "Normal/Volador",
        desc: "Pidgeot es el Pokémon pájaro más poderoso de su línea evolutiva. Puede volar a gran velocidad y tiene una vista aguda."
    },
    {
        img: "../ENTREGABLE_ZAMBRANO_LOPEZ_MIGUEL_JOS%C3%89/img/019.png",
        name: "Rattata",
        number: "#019",
        type: "Normal",
        desc: "Rattata es un Pokémon roedor que vive en las ciudades. Es muy ágil y puede escapar rápidamente."
    },
    {
        img: "../ENTREGABLE_ZAMBRANO_LOPEZ_MIGUEL_JOS%C3%89/img/020.png",
        name: "Raticate",
        number: "#020",
        type: "Normal",
        desc: "Raticate es la forma evolutiva de Rattata. Es más grande y agresivo, y tiene colmillos afilados."
    },
    {
        img: "../ENTREGABLE_ZAMBRANO_LOPEZ_MIGUEL_JOS%C3%89/img/021.png",
        name: "Spearow",
        number: "#021",
        type: "Normal/Volador",
        desc: "Spearow es un Pokémon pájaro pequeño y agresivo. Puede atacar en grupo para defender su territorio."
    },
    {
        img: "../ENTREGABLE_ZAMBRANO_LOPEZ_MIGUEL_JOS%C3%89/img/022.png",
        name: "Fearow",
        number: "#022",
        type: "Normal/Volador",
        desc: "Fearow es la forma evolutiva de Spearow. Es más grande y fuerte, y puede volar a gran velocidad."
    },
    {
        img: "../ENTREGABLE_ZAMBRANO_LOPEZ_MIGUEL_JOS%C3%89/img/023.png",
        name: "Ekans",
        number: "#023",
        type: "Veneno",
        desc: "Ekans es un Pokémon serpiente que se desliza por el suelo. Su veneno es muy potente."
    },
    {
        img: "../ENTREGABLE_ZAMBRANO_LOPEZ_MIGUEL_JOS%C3%89/img/024.png",
        name: "Arbok",
        number: "#024",
        type: "Veneno",
        desc: "Arbok es la forma evolutiva de Ekans. Tiene una gran cabeza y puede hipnotizar a sus presas."
    },
    {
        img: "../ENTREGABLE_ZAMBRANO_LOPEZ_MIGUEL_JOS%C3%89/img/025.png",
        name: "Pikachu",
        number: "#025",
        type: "Eléctrico",
        desc: "Pikachu es el Pokémon más famoso. Puede generar electricidad y es muy amigable."
    },
    {
        img: "../ENTREGABLE_ZAMBRANO_LOPEZ_MIGUEL_JOS%C3%89/img/026.png",
        name: "Raichu",
        number: "#026",
        type: "Eléctrico",
        desc: "Raichu es la forma evolutiva de Pikachu. Es más grande y puede generar electricidad más potente."
    },
    {
        img: "../ENTREGABLE_ZAMBRANO_LOPEZ_MIGUEL_JOS%C3%89/img/027.png",
        name: "Sandshrew",
        number: "#027",
        type: "Tierra",
        desc: "Sandshrew es un Pokémon topo que vive en el desierto. Es muy resistente y puede excavar túneles."
    },
    {
        img: "../ENTREGABLE_ZAMBRANO_LOPEZ_MIGUEL_JOS%C3%89/img/028.png",
        name: "Sandslash",
        number: "#028",
        type: "Tierra",
        desc: "Sandslash es la forma evolutiva de Sandshrew. Tiene garras afiladas y es muy ágil."
    },
    {
        img: "../ENTREGABLE_ZAMBRANO_LOPEZ_MIGUEL_JOS%C3%89/img/029.png",
        name: "Nidoran♀",
        number: "#029",
        type: "Veneno",
        desc: "Nidoran♀ es un Pokémon pequeño y tímido. Su veneno es menos potente que el de su contraparte masculina."
    },
    {
        img: "../ENTREGABLE_ZAMBRANO_LOPEZ_MIGUEL_JOS%C3%89/img/030.png",
        name: "Nidorina",
        number: "#030",
        type: "Veneno",
        desc: "Nidorina es la forma evolutiva de Nidoran♀. Es más fuerte y puede defenderse mejor."
    },
    {
        img: "../ENTREGABLE_ZAMBRANO_LOPEZ_MIGUEL_JOS%C3%89/img/031.png",
        name: "Nidoqueen",
        number: "#031",
        type: "Veneno/Tierra",
        desc: "Nidoqueen es la forma final de Nidoran♀. Es muy poderosa y puede lanzar ataques de tierra y veneno."
    },
    {
        img: "../ENTREGABLE_ZAMBRANO_LOPEZ_MIGUEL_JOS%C3%89/img/032.png",
        name: "Nidoran♂",
        number: "#032",
        type: "Veneno",
        desc: "Nidoran♂ es un Pokémon pequeño y agresivo. Su veneno es más potente que el de Nidoran♀."
    },
    {
        img: "../ENTREGABLE_ZAMBRANO_LOPEZ_MIGUEL_JOS%C3%89/img/033.png",
        name: "Nidorino",
        number: "#033",
        type: "Veneno",
        desc: "Nidorino es la forma evolutiva de Nidoran♂. Es más fuerte y puede atacar con cuernos afilados."
    },
    {
        img: "../ENTREGABLE_ZAMBRANO_LOPEZ_MIGUEL_JOS%C3%89/img/034.png",
        name: "Nidoking",
        number: "#034",
        type: "Veneno/Tierra",
        desc: "Nidoking es la forma final de Nidoran♂. Es un Pokémon muy poderoso con cuernos afilados y una gran fuerza."
    },
    {
        img: "../ENTREGABLE_ZAMBRANO_LOPEZ_MIGUEL_JOS%C3%89/img/035.png",
        name: "Clefairy",
        number: "#035",
        type: "Hada",
        desc: "Clefairy es un Pokémon pequeño y adorable. Se dice que trae buena suerte y es muy amigable."
    },
    {
        img: "../ENTREGABLE_ZAMBRANO_LOPEZ_MIGUEL_JOS%C3%89/img/036.png",
        name: "Clefable",
        number: "#036",
        type: "Hada",
        desc: "Clefable es la forma evolutiva de Clefairy. Es más grande y puede usar magia para protegerse."
    },
    {
        img: "../ENTREGABLE_ZAMBRANO_LOPEZ_MIGUEL_JOS%C3%89/img/037.png",
        name: "Vulpix",
        number: "#037",
        type: "Fuego",
        desc: "Vulpix es un Pokémon zorro con seis colas. Puede controlar el fuego y es muy ágil."
    },
    {
        img: "../ENTREGABLE_ZAMBRANO_LOPEZ_MIGUEL_JOS%C3%89/img/038.png",
        name: "Ninetales",
        number: "#038",
        type: "Fuego",
        desc: "Ninetales es la forma evolutiva de Vulpix. Tiene nueve colas y puede lanzar llamas poderosas."
    },
    {
        img: "../ENTREGABLE_ZAMBRANO_LOPEZ_MIGUEL_JOS%C3%89/img/039.png",
        name: "Jigglypuff",
        number: "#039",
        type: "Normal/Hada",
        desc: "Jigglypuff es un Pokémon redondo que canta para dormir a sus oponentes. Es muy tierno."
    },
    {
        img: "../ENTREGABLE_ZAMBRANO_LOPEZ_MIGUEL_JOS%C3%89/img/040.png",
        name: "Wigglytuff",
        number: "#040",
        type: "Normal/Hada",
        desc: "Wigglytuff es la forma evolutiva de Jigglypuff. Es más grande y su canto puede hipnotizar a muchos Pokémon."
    },
    {
        img: "../ENTREGABLE_ZAMBRANO_LOPEZ_MIGUEL_JOS%C3%89/img/041.png",
        name: "Zubat",
        number: "#041",
        type: "Veneno/Volador",
        desc: "Zubat es un Pokémon murciélago que vive en cuevas. Es conocido por su habilidad para volar en la oscuridad."
    },
    {
        img: "../ENTREGABLE_ZAMBRANO_LOPEZ_MIGUEL_JOS%C3%89/img/042.png",
        name: "Golbat",
        number: "#042",
        type: "Veneno/Volador",
        desc: "Golbat es la forma evolutiva de Zubat. Tiene colmillos afilados y puede chupar la sangre de sus presas."
    },
    {
        img: "../ENTREGABLE_ZAMBRANO_LOPEZ_MIGUEL_JOS%C3%89/img/043.png",
        name: "Oddish",
        number: "#043",
        type: "Planta/Veneno",
        desc: "Oddish es un Pokémon planta que se alimenta de luz solar. Puede liberar esporas para dormir a sus oponentes."
    },
    {
        img: "../ENTREGABLE_ZAMBRANO_LOPEZ_MIGUEL_JOS%C3%89/img/044.png",
        name: "Gloom",
        number: "#044",
        type: "Planta/Veneno",
        desc: "Gloom es la forma evolutiva de Oddish. Su olor puede causar mareos y su planta crece más grande."
    },
    {
        img: "../ENTREGABLE_ZAMBRANO_LOPEZ_MIGUEL_JOS%C3%89/img/045.png",
        name: "Vileplume",
        number: "#045",
        type: "Planta/Veneno",
        desc: "Vileplume es la forma final de Oddish. Tiene una gran flor en su cabeza que libera polen venenoso."
    },
    {
        img: "../ENTREGABLE_ZAMBRANO_LOPEZ_MIGUEL_JOS%C3%89/img/046.png",
        name: "Paras",
        number: "#046",
        type: "Bicho/Planta",
        desc: "Paras es un Pokémon insecto que tiene hongos creciendo en su espalda. Los hongos le dan fuerza."
    },
    {
        img: "../ENTREGABLE_ZAMBRANO_LOPEZ_MIGUEL_JOS%C3%89/img/047.png",
        name: "Parasect",
        number: "#047",
        type: "Bicho/Planta",
        desc: "Parasect es la forma evolutiva de Paras. Los hongos han crecido tanto que controlan a Parasect."
    },
    {
        img: "../ENTREGABLE_ZAMBRANO_LOPEZ_MIGUEL_JOS%C3%89/img/048.png",
        name: "Venonat",
        number: "#048",
        type: "Bicho/Veneno",
        desc: "Venonat es un Pokémon insecto con ojos grandes. Puede liberar polvo venenoso para defenderse."
    },
    {
        img: "../ENTREGABLE_ZAMBRANO_LOPEZ_MIGUEL_JOS%C3%89/img/049.png",
        name: "Venomoth",
        number: "#049",
        type: "Bicho/Veneno",
        desc: "Venomoth es la forma evolutiva de Venonat. Tiene alas grandes y puede lanzar polen venenoso."
    },
    {
        img: "../ENTREGABLE_ZAMBRANO_LOPEZ_MIGUEL_JOS%C3%89/img/050.png",
        name: "Diglett",
        number: "#050",
        type: "Tierra",
        desc: "Diglett es un Pokémon topo que vive bajo tierra. Es muy rápido y puede excavar túneles."
    },
    {
        img: "../ENTREGABLE_ZAMBRANO_LOPEZ_MIGUEL_JOS%C3%89/img/051.png",
        name: "Dugtrio",
        number: "#051",
        type: "Tierra",
        desc: "Dugtrio es la forma evolutiva de Diglett. Tiene tres cabezas y puede excavar a gran velocidad."
    },
    {
        img: "../ENTREGABLE_ZAMBRANO_LOPEZ_MIGUEL_JOS%C3%89/img/052.png",
        name: "Meowth",
        number: "#052",
        type: "Normal",
        desc: "Meowth es un Pokémon gato que puede hablar. Es muy astuto y le gusta coleccionar monedas."
    },
    {
        img: "../ENTREGABLE_ZAMBRANO_LOPEZ_MIGUEL_JOS%C3%89/img/053.png",
        name: "Persian",
        number: "#053",
        type: "Normal",
        desc: "Persian es la forma evolutiva de Meowth. Es más elegante y ágil, y tiene un pelaje suave."
    },
    {
        img: "../ENTREGABLE_ZAMBRANO_LOPEZ_MIGUEL_JOS%C3%89/img/054.png",
        name: "Psyduck",
        number: "#054",
        type: "Agua",
        desc: "Psyduck es un Pokémon pato que sufre de dolores de cabeza. Cuando se concentra, puede liberar poder psíquico."
    },
    {
        img: "../ENTREGABLE_ZAMBRANO_LOPEZ_MIGUEL_JOS%C3%89/img/055.png",
        name: "Golduck",
        number: "#055",
        type: "Agua",
        desc: "Golduck es la forma evolutiva de Psyduck. Es más rápido y puede nadar a gran velocidad."
    },
    {
        img: "../ENTREGABLE_ZAMBRANO_LOPEZ_MIGUEL_JOS%C3%89/img/056.png",
        name: "Mankey",
        number: "#056",
        type: "Lucha",
        desc: "Mankey es un Pokémon mono muy agresivo. Puede atacar rápidamente con sus puños."
    },
    {
        img: "../ENTREGABLE_ZAMBRANO_LOPEZ_MIGUEL_JOS%C3%89/img/057.png",
        name: "Primeape",
        number: "#057",
        type: "Lucha",
        desc: "Primeape es la forma evolutiva de Mankey. Es aún más agresivo y puede entrar en furia fácilmente."
    },
    {
        img: "../ENTREGABLE_ZAMBRANO_LOPEZ_MIGUEL_JOS%C3%89/img/058.png",
        name: "Growlithe",
        number: "#058",
        type: "Fuego",
        desc: "Growlithe es un Pokémon perro que es leal y valiente. Puede lanzar llamas para defenderse."
    },
    {
        img: "../ENTREGABLE_ZAMBRANO_LOPEZ_MIGUEL_JOS%C3%89/img/059.png",
        name: "Arcanine",
        number: "#059",
        type: "Fuego",
        desc: "Arcanine es la forma evolutiva de Growlithe. Es un Pokémon majestuoso y poderoso."
    },
    {
        img: "../ENTREGABLE_ZAMBRANO_LOPEZ_MIGUEL_JOS%C3%89/img/060.png",
        name: "Poliwag",
        number: "#060",
        type: "Agua",
        desc: "Poliwag es un Pokémon rana con una cola larga. Puede nadar rápidamente en el agua."
    },
    {
        img: "../ENTREGABLE_ZAMBRANO_LOPEZ_MIGUEL_JOS%C3%89/img/061.png",
        name: "Poliwhirl",
        number: "#061",
        type: "Agua",
        desc: "Poliwhirl es la forma evolutiva de Poliwag. Tiene una piel lisa y puede lanzar chorros de agua."
    },
    {
        img: "../ENTREGABLE_ZAMBRANO_LOPEZ_MIGUEL_JOS%C3%89/img/062.png",
        name: "Poliwrath",
        number: "#062",
        type: "Agua/Lucha",
        desc: "Poliwrath es la forma final de Poliwag. Es muy fuerte y puede luchar con sus puños."
    },
    {
        img: "../ENTREGABLE_ZAMBRANO_LOPEZ_MIGUEL_JOS%C3%89/img/063.png",
        name: "Abra",
        number: "#063",
        type: "Psíquico",
        desc: "Abra es un Pokémon psíquico que duerme la mayor parte del tiempo. Puede teletransportarse cuando está en peligro."
    },
    {
        img: "../ENTREGABLE_ZAMBRANO_LOPEZ_MIGUEL_JOS%C3%89/img/064.png",
        name: "Kadabra",
        number: "#064",
        type: "Psíquico",
        desc: "Kadabra es la forma evolutiva de Abra. Tiene un gran poder psíquico y puede mover objetos con su mente."
    },
    {
        img: "../ENTREGABLE_ZAMBRANO_LOPEZ_MIGUEL_JOS%C3%89/img/065.png",
        name: "Alakazam",
        number: "#065",
        type: "Psíquico",
        desc: "Alakazam es la forma final de Abra. Es extremadamente inteligente y puede procesar información a gran velocidad."
    },
    {
        img: "../ENTREGABLE_ZAMBRANO_LOPEZ_MIGUEL_JOS%C3%89/img/066.png",
        name: "Machop",
        number: "#066",
        type: "Lucha",
        desc: "Machop es un Pokémon musculoso que entrena para volverse más fuerte. Puede levantar objetos pesados."
    },
    {
        img: "../ENTREGABLE_ZAMBRANO_LOPEZ_MIGUEL_JOS%C3%89/img/067.png",
        name: "Machoke",
        number: "#067",
        type: "Lucha",
        desc: "Machoke es la forma evolutiva de Machop. Es aún más fuerte y puede luchar con gran habilidad."
    },
    {
        img: "../ENTREGABLE_ZAMBRANO_LOPEZ_MIGUEL_JOS%C3%89/img/068.png",
        name: "Machamp",
        number: "#068",
        type: "Lucha",
        desc: "Machamp es la forma final de Machop. Tiene cuatro brazos y es extremadamente poderoso."
    },
    {
        img: "../ENTREGABLE_ZAMBRANO_LOPEZ_MIGUEL_JOS%C3%89/img/069.png",
        name: "Bellsprout",
        number: "#069",
        type: "Planta/Veneno",
        desc: "Bellsprout es un Pokémon planta que se asemeja a una planta carnívora. Puede lanzar lianas para atrapar a sus presas."
    },
    {
        img: "../ENTREGABLE_ZAMBRANO_LOPEZ_MIGUEL_JOS%C3%89/img/070.png",
        name: "Weepinbell",
        number: "#070",
        type: "Planta/Veneno",
        desc: "Weepinbell es la forma evolutiva de Bellsprout. Su boca se abre para atrapar insectos."
    },
    {
        img: "../ENTREGABLE_ZAMBRANO_LOPEZ_MIGUEL_JOS%C3%89/img/071.png",
        name: "Victreebel",
        number: "#071",
        type: "Planta/Veneno",
        desc: "Victreebel es la forma final de Bellsprout. Es una planta carnívora gigante que puede devorar a sus presas."
    },
    {
        img: "../ENTREGABLE_ZAMBRANO_LOPEZ_MIGUEL_JOS%C3%89/img/072.png",
        name: "Tentacool",
        number: "#072",
        type: "Agua/Veneno",
        desc: "Tentacool es un Pokémon medusa que vive en el agua. Sus tentáculos pueden causar picaduras dolorosas."
    },
    {
        img: "../ENTREGABLE_ZAMBRANO_LOPEZ_MIGUEL_JOS%C3%89/img/073.png",
        name: "Tentacruel",
        number: "#073",
        type: "Agua/Veneno",
        desc: "Tentacruel es la forma evolutiva de Tentacool. Es más grande y sus tentáculos son aún más peligrosos."
    },
    {
        img: "../ENTREGABLE_ZAMBRANO_LOPEZ_MIGUEL_JOS%C3%89/img/074.png",
        name: "Geodude",
        number: "#074",
        type: "Roca/Tierra",
        desc: "Geodude es un Pokémon roca que vive en cuevas. Es muy resistente y puede lanzar rocas."
    },
    {
        img: "../ENTREGABLE_ZAMBRANO_LOPEZ_MIGUEL_JOS%C3%89/img/075.png",
        name: "Graveler",
        number: "#075",
        type: "Roca/Tierra",
        desc: "Graveler es la forma evolutiva de Geodude. Es más grande y puede rodar por el suelo."
    },
    {
        img: "../ENTREGABLE_ZAMBRANO_LOPEZ_MIGUEL_JOS%C3%89/img/076.png",
        name: "Golem",
        number: "#076",
        type: "Roca/Tierra",
        desc: "Golem es la forma final de Geodude. Es extremadamente fuerte y puede causar terremotos."
    },
    {
        img: "../ENTREGABLE_ZAMBRANO_LOPEZ_MIGUEL_JOS%C3%89/img/077.png",
        name: "Ponyta",
        number: "#077",
        type: "Fuego",
        desc: "Ponyta es un Pokémon caballo con una melena de fuego. Puede correr a gran velocidad."
    },
    {
        img: "../ENTREGABLE_ZAMBRANO_LOPEZ_MIGUEL_JOS%C3%89/img/078.png",
        name: "Rapidash",
        number: "#078",
        type: "Fuego",
        desc: "Rapidash es la forma evolutiva de Ponyta. Es aún más rápido y su melena arde intensamente."
    },
    {
        img: "../ENTREGABLE_ZAMBRANO_LOPEZ_MIGUEL_JOS%C3%89/img/079.png",
        name: "Slowpoke",
        number: "#079",
        type: "Agua/Psíquico",
        desc: "Slowpoke es un Pokémon lento que se mueve despacio. Puede liberar poder psíquico cuando se concentra."
    },
    {
        img: "../ENTREGABLE_ZAMBRANO_LOPEZ_MIGUEL_JOS%C3%89/img/080.png",
        name: "Slowbro",
        number: "#080",
        type: "Agua/Psíquico",
        desc: "Slowbro es la forma evolutiva de Slowpoke. Tiene una concha en su cola que le da fuerza y protección."
    },
    {
        img: "../ENTREGABLE_ZAMBRANO_LOPEZ_MIGUEL_JOS%C3%89/img/081.png",
        name: "Magnemite",
        number: "#081",
        type: "Eléctrico/Acero",
        desc: "Magnemite es un Pokémon magnético que flota en el aire. Puede generar electricidad y atraer objetos metálicos."
    },
    {
        img: "../ENTREGABLE_ZAMBRANO_LOPEZ_MIGUEL_JOS%C3%89/img/082.png",
        name: "Magneton",
        number: "#082",
        type: "Eléctrico/Acero",
        desc: "Magneton es la forma evolutiva de Magnemite. Está formado por tres Magnemites unidos y puede generar más electricidad."
    },
    {
        img: "../ENTREGABLE_ZAMBRANO_LOPEZ_MIGUEL_JOS%C3%89/img/083.png",
        name: "Farfetch'd",
        number: "#083",
        type: "Normal/Volador",
        desc: "Farfetch'd es un Pokémon pato que lleva un puerro. Es conocido por su habilidad para luchar con su puerro."
    },
    {
        img: "../ENTREGABLE_ZAMBRANO_LOPEZ_MIGUEL_JOS%C3%89/img/084.png",
        name: "Doduo",
        number: "#084",
        type: "Normal/Volador",
        desc: "Doduo es un Pokémon pájaro con dos cabezas. Puede correr a gran velocidad."
    },
    {
        img: "../ENTREGABLE_ZAMBRANO_LOPEZ_MIGUEL_JOS%C3%89/img/085.png",
        name: "Dodrio",
        number: "#085",
        type: "Normal/Volador",
        desc: "Dodrio es la forma evolutiva de Doduo. Tiene tres cabezas y puede correr aún más rápido."
    },
    {
        img: "../ENTREGABLE_ZAMBRANO_LOPEZ_MIGUEL_JOS%C3%89/img/086.png",
        name: "Seel",
        number: "#086",
        type: "Agua",
        desc: "Seel es un Pokémon foca que vive en el agua. Es muy amigable y le gusta jugar en el hielo."
    },
    {
        img: "../ENTREGABLE_ZAMBRANO_LOPEZ_MIGUEL_JOS%C3%89/img/087.png",
        name: "Dewgong",
        number: "#087",
        type: "Agua/Hielo",
        desc: "Dewgong es la forma evolutiva de Seel. Puede nadar rápidamente y tiene una piel suave."
    },
    {
        img: "../ENTREGABLE_ZAMBRANO_LOPEZ_MIGUEL_JOS%C3%89/img/088.png",
        name: "Grimer",
        number: "#088",
        type: "Veneno",
        desc: "Grimer es un Pokémon de lodo que vive en lugares sucios. Puede absorber toxinas del suelo."
    },
    {
        img: "../ENTREGABLE_ZAMBRANO_LOPEZ_MIGUEL_JOS%C3%89/img/089.png",
        name: "Muk",
        number: "#089",
        type: "Veneno",
        desc: "Muk es la forma evolutiva de Grimer. Es más grande y puede liberar gases tóxicos."
    },
    {
        img: "../ENTREGABLE_ZAMBRANO_LOPEZ_MIGUEL_JOS%C3%89/img/090.png",
        name: "Shellder",
        number: "#090",
        type: "Agua",
        desc: "Shellder es un Pokémon almeja que se cierra en su concha. Puede lanzar chorros de agua para defenderse."
    },
    {
        img: "../ENTREGABLE_ZAMBRANO_LOPEZ_MIGUEL_JOS%C3%89/img/091.png",
        name: "Cloyster",
        number: "#091",
        type: "Agua/Hielo",
        desc: "Cloyster es la forma evolutiva de Shellder. Tiene una concha dura y puede lanzar perlas afiladas."
    },
    {
        img: "../ENTREGABLE_ZAMBRANO_LOPEZ_MIGUEL_JOS%C3%89/img/092.png",
        name: "Gastly",
        number: "#092",
        type: "Fantasma/Veneno",
        desc: "Gastly es un Pokémon fantasma que flota en el aire. Puede liberar gas venenoso para asustar a sus oponentes."
    },
    {
        img: "../ENTREGABLE_ZAMBRANO_LOPEZ_MIGUEL_JOS%C3%89/img/093.png",
        name: "Haunter",
        number: "#093",
        type: "Fantasma/Veneno",
        desc: "Haunter es la forma evolutiva de Gastly. Tiene manos flotantes y puede atravesar paredes."
    },
    {
        img: "../ENTREGABLE_ZAMBRANO_LOPEZ_MIGUEL_JOS%C3%89/img/094.png",
        name: "Gengar",
        number: "#094",
        type: "Fantasma/Veneno",
        desc: "Gengar es la forma final de Gastly. Es un Pokémon oscuro que puede causar pesadillas y asustar a las personas."
    },
    {
        img: "../ENTREGABLE_ZAMBRANO_LOPEZ_MIGUEL_JOS%C3%89/img/095.png",
        name: "Onix",
        number: "#095",
        type: "Roca/Tierra",
        desc: "Onix es un Pokémon roca que se asemeja a una serpiente. Puede excavar túneles y es muy resistente."
    },
    {
        img: "../ENTREGABLE_ZAMBRANO_LOPEZ_MIGUEL_JOS%C3%89/img/096.png",
        name: "Drowzee",
        number: "#096",
        type: "Psíquico",
        desc: "Drowzee es un Pokémon que se alimenta de sueños. Puede hipnotizar a sus oponentes para robar sus sueños."
    },
    {
        img: "../ENTREGABLE_ZAMBRANO_LOPEZ_MIGUEL_JOS%C3%89/img/097.png",
        name: "Hypno",
        number: "#097",
        type: "Psíquico",
        desc: "Hypno es la forma evolutiva de Drowzee. Es más poderoso y puede controlar los sueños de las personas."
    },
    {
        img: "../ENTREGABLE_ZAMBRANO_LOPEZ_MIGUEL_JOS%C3%89/img/098.png",
        name: "Krabby",
        number: "#098",
        type: "Agua",
        desc: "Krabby es un Pokémon cangrejo que vive en la playa. Puede usar sus pinzas para defenderse."
    },
    {
        img: "../ENTREGABLE_ZAMBRANO_LOPEZ_MIGUEL_JOS%C3%89/img/099.png",
        name: "Kingler",
        number: "#099",
        type: "Agua",
        desc: "Kingler es la forma evolutiva de Krabby. Tiene una pinza gigante y es muy fuerte."
    },
    {
        img: "../ENTREGABLE_ZAMBRANO_LOPEZ_MIGUEL_JOS%C3%89/img/100.png",
        name: "Voltorb",
        number: "#100",
        type: "Eléctrico",
        desc: "Voltorb es un Pokémon que se asemeja a una bola eléctrica. Puede explotar si se siente amenazado."
    },
    {
        img: "../ENTREGABLE_ZAMBRANO_LOPEZ_MIGUEL_JOS%C3%89/img/101.png",
        name: "Electrode",
        number: "#101",
        type: "Eléctrico",
        desc: "Electrode es la forma evolutiva de Voltorb. Es más grande y puede generar electricidad a gran escala."
    },
    {
        img: "../ENTREGABLE_ZAMBRANO_LOPEZ_MIGUEL_JOS%C3%89/img/102.png",
        name: "Exeggcute",
        number: "#102",
        type: "Planta/Psíquico",
        desc: "Exeggcute es un grupo de huevos que pueden comunicarse telepáticamente. Pueden lanzar ataques psíquicos."
    },
    {
        img: "../ENTREGABLE_ZAMBRANO_LOPEZ_MIGUEL_JOS%C3%89/img/103.png",
        name: "Exeggutor",
        number: "#103",
        type: "Planta/Psíquico",
        desc: "Exeggutor es la forma evolutiva de Exeggcute. Tiene un tronco largo y puede lanzar hojas afiladas."
    },
    {
        img: "../ENTREGABLE_ZAMBRANO_LOPEZ_MIGUEL_JOS%C3%89/img/104.png",
        name: "Cubone",
        number: "#104",
        type: "Tierra",
        desc: "Cubone es un Pokémon que lleva un cráneo en su cabeza. Es muy solitario y busca venganza por la pérdida de su madre."
    },
    {
        img: "../ENTREGABLE_ZAMBRANO_LOPEZ_MIGUEL_JOS%C3%89/img/105.png",
        name: "Marowak",
        number: "#105",
        type: "Tierra",
        desc: "Marowak es la forma evolutiva de Cubone. Es más fuerte y usa su hueso como arma."
    },
    {
        img: "../ENTREGABLE_ZAMBRANO_LOPEZ_MIGUEL_JOS%C3%89/img/106.png",
        name: "Hitmonlee",
        number: "#106",
        type: "Lucha",
        desc: "Hitmonlee es un Pokémon luchador especializado en patadas. Sus piernas son extremadamente fuertes."
    },
    {
        img: "../ENTREGABLE_ZAMBRANO_LOPEZ_MIGUEL_JOS%C3%89/img/107.png",
        name: "Hitmonchan",
        number: "#107",
        type: "Lucha",
        desc: "Hitmonchan es un Pokémon luchador especializado en puñetazos. Sus brazos son muy ágiles."
    },
    {
        img: "../ENTREGABLE_ZAMBRANO_LOPEZ_MIGUEL_JOS%C3%89/img/108.png",
        name: "Lickitung",
        number: "#108",
        type: "Normal",
        desc: "Lickitung es un Pokémon con una lengua larga y pegajosa. Puede usar su lengua para atrapar objetos."
    },
    {
        img: "../ENTREGABLE_ZAMBRANO_LOPEZ_MIGUEL_JOS%C3%89/img/109.png",
        name: "Koffing",
        number: "#109",
        type: "Veneno",
        desc: "Koffing es un Pokémon que libera gases tóxicos. Puede explotar si se siente amenazado."
    },
    {
        img: "../ENTREGABLE_ZAMBRANO_LOPEZ_MIGUEL_JOS%C3%89/img/110.png",
        name: "Weezing",
        number: "#110",
        type: "Veneno",
        desc: "Weezing es la forma evolutiva de Koffing. Tiene dos cabezas y puede liberar gases venenosos."
    },
    {
        img: "../ENTREGABLE_ZAMBRANO_LOPEZ_MIGUEL_JOS%C3%89/img/111.png",
        name: "Rhyhorn",
        number: "#111",
        type: "Roca/Tierra",
        desc: "Rhyhorn es un Pokémon rinoceronte que es muy fuerte. Puede correr a gran velocidad."
    },
    {
        img: "../ENTREGABLE_ZAMBRANO_LOPEZ_MIGUEL_JOS%C3%89/img/112.png",
        name: "Rhydon",
        number: "#112",
        type: "Roca/Tierra",
        desc: "Rhydon es la forma evolutiva de Rhyhorn. Es más grande y puede causar terremotos."
    },
    {
        img: "../ENTREGABLE_ZAMBRANO_LOPEZ_MIGUEL_JOS%C3%89/img/113.png",
        name: "Chansey",
        number: "#113",
        type: "Normal",
        desc: "Chansey es un Pokémon que cuida de los enfermos. Es muy amable y puede curar heridas."
    },
    {
        img: "../ENTREGABLE_ZAMBRANO_LOPEZ_MIGUEL_JOS%C3%89/img/114.png",
        name: "Tangela",
        number: "#114",
        type: "Planta",
        desc: "Tangela es un Pokémon cubierto de lianas. Puede lanzar lianas para atrapar a sus oponentes."
    },
    {
        img: "../ENTREGABLE_ZAMBRANO_LOPEZ_MIGUEL_JOS%C3%89/img/115.png",
        name: "Kangaskhan",
        number: "#115",
        type: "Normal",
        desc: "Kangaskhan es un Pokémon madre que cuida de su cría en su bolsa. Es muy fuerte y protector."
    },
    {
        img: "../ENTREGABLE_ZAMBRANO_LOPEZ_MIGUEL_JOS%C3%89/img/116.png",
        name: "Horsea",
        number: "#116",
        type: "Agua",
        desc: "Horsea es un Pokémon caballito de mar que vive en el agua. Puede lanzar chorros de agua para defenderse."
    },
    {
        img: "../ENTREGABLE_ZAMBRANO_LOPEZ_MIGUEL_JOS%C3%89/img/117.png",
        name: "Seadra",
        number: "#117",
        type: "Agua",
        desc: "Seadra es la forma evolutiva de Horsea. Es más rápido y puede lanzar espinas afiladas."
    },
    {
        img: "../ENTREGABLE_ZAMBRANO_LOPEZ_MIGUEL_JOS%C3%89/img/118.png",
        name: "Goldeen",
        number: "#118",
        type: "Agua",
        desc: "Goldeen es un Pokémon pez con una aleta dorsal grande. Puede saltar fuera del agua para atacar."
    },
    {
        img: "../ENTREGABLE_ZAMBRANO_LOPEZ_MIGUEL_JOS%C3%89/img/119.png",
        name: "Seaking",
        number: "#119",
        type: "Agua",
        desc: "Seaking es la forma evolutiva de Goldeen. Es más grande y puede nadar a gran velocidad."
    },
    {
        img: "../ENTREGABLE_ZAMBRANO_LOPEZ_MIGUEL_JOS%C3%89/img/120.png",
        name: "Staryu",
        number: "#120",
        type: "Agua",
        desc: "Staryu es un Pokémon estrella de mar que vive en el agua. Puede regenerar sus extremidades si se dañan."
    },
    {
        img: "../ENTREGABLE_ZAMBRANO_LOPEZ_MIGUEL_JOS%C3%89/img/121.png",
        name: "Starmie",
        number: "#121",
        type: "Agua/Psíquico",
        desc: "Starmie es la forma evolutiva de Staryu. Tiene un núcleo brillante en su centro que puede liberar energía psíquica."
    },
    {
        img: "../ENTREGABLE_ZAMBRANO_LOPEZ_MIGUEL_JOS%C3%89/img/122.png",
        name: "Mr. Mime",
        number: "#122",
        type: "Psíquico/Hada",
        desc: "Mr. Mime es un Pokémon que actúa como un mimo. Puede crear barreras invisibles y es muy ágil."
    },
    {
        img: "../ENTREGABLE_ZAMBRANO_LOPEZ_MIGUEL_JOS%C3%89/img/123.png",
        name: "Scyther",
        number: "#123",
        type: "Bicho/Volador",
        desc: "Scyther es un Pokémon insecto con cuchillas afiladas en sus brazos. Es muy rápido y puede cortar objetos con facilidad."
    },
    {
        img: "../ENTREGABLE_ZAMBRANO_LOPEZ_MIGUEL_JOS%C3%89/img/124.png",
        name: "Jynx",
        number: "#124",
        type: "Hielo/Psíquico",
        desc: "Jynx es un Pokémon que puede hipnotizar a sus oponentes con su canto. Es muy ágil y puede lanzar ataques de hielo."
    },
    {
        img: "../ENTREGABLE_ZAMBRANO_LOPEZ_MIGUEL_JOS%C3%89/img/125.png",
        name: "Electabuzz",
        number: "#125",
        type: "Eléctrico",
        desc: "Electabuzz es un Pokémon eléctrico que puede generar electricidad. Es muy rápido y puede atacar con rayos."
    },
    {
        img: "../ENTREGABLE_ZAMBRANO_LOPEZ_MIGUEL_JOS%C3%89/img/126.png",
        name: "Magmar",
        number: "#126",
        type: "Fuego",
        desc: "Magmar es un Pokémon de fuego que puede lanzar llamas. Es muy resistente y puede soportar altas temperaturas."
    },
    {
        img: "../ENTREGABLE_ZAMBRANO_LOPEZ_MIGUEL_JOS%C3%89/img/127.png",
        name: "Pinsir",
        number: "#127",
        type: "Bicho",
        desc: "Pinsir es un Pokémon insecto con pinzas fuertes. Puede levantar objetos pesados y es muy agresivo."
    },
    {
        img: "../ENTREGABLE_ZAMBRANO_LOPEZ_MIGUEL_JOS%C3%89/img/128.png",
        name: "Tauros",
        number: "#128",
        type: "Normal",
        desc: "Tauros es un Pokémon toro que es muy fuerte. Puede embestir a sus oponentes con gran fuerza."
    },
    {
        img: "../ENTREGABLE_ZAMBRANO_LOPEZ_MIGUEL_JOS%C3%89/img/129.png",
        name: "Magikarp",
        number: "#129",
        type: "Agua",
        desc: "Magikarp es un Pokémon pez que es muy débil. Sin embargo, puede evolucionar en uno de los Pokémon más poderosos."
    },
    {
        img: "../ENTREGABLE_ZAMBRANO_LOPEZ_MIGUEL_JOS%C3%89/img/130.png",
        name: "Gyarados",
        number: "#130",
        type: "Agua/Volador",
        desc: "Gyarados es la forma evolutiva de Magikarp. Es un Pokémon dragón muy poderoso y agresivo."
    },
    {
        img: "../ENTREGABLE_ZAMBRANO_LOPEZ_MIGUEL_JOS%C3%89/img/131.png",
        name: "Lapras",
        number: "#131",
        type: "Agua/Hielo",
        desc: "Lapras es un Pokémon que puede nadar a gran velocidad. Es muy amigable y puede transportar personas en su espalda."
    },
    {
        img: "../ENTREGABLE_ZAMBRANO_LOPEZ_MIGUEL_JOS%C3%89/img/132.png",
        name: "Ditto",
        number: "#132",
        type: "Normal",
        desc: "Ditto puede transformar su cuerpo en una copia exacta de cualquier objeto o ser vivo."
    },
    {
        img: "../ENTREGABLE_ZAMBRANO_LOPEZ_MIGUEL_JOS%C3%89/img/133.png",
        name: "Eevee",
        number: "#133",
        type: "Normal",
        desc: "Eevee es conocido por su capacidad de evolucionar en varias formas diferentes según las condiciones."
    },
    {
        img: "../ENTREGABLE_ZAMBRANO_LOPEZ_MIGUEL_JOS%C3%89/img/134.png",
        name: "Vaporeon",
        number: "#134",
        type: "Agua",
        desc: "Vaporeon puede fundirse con el agua y nadar con gran agilidad."
    },
    {
        img: "../ENTREGABLE_ZAMBRANO_LOPEZ_MIGUEL_JOS%C3%89/img/135.png",
        name: "Jolteon",
        number: "#135",
        type: "Eléctrico",
        desc: "Jolteon genera electricidad a partir de la energía estática acumulada en su pelaje."
    },
    {
        img: "../ENTREGABLE_ZAMBRANO_LOPEZ_MIGUEL_JOS%C3%89/img/136.png",
        name: "Flareon",
        number: "#136",
        type: "Fuego",
        desc: "Flareon tiene una temperatura corporal muy alta y puede lanzar potentes ataques de fuego."
    },
    {
        img: "../ENTREGABLE_ZAMBRANO_LOPEZ_MIGUEL_JOS%C3%89/img/137.png",
        name: "Porygon",
        number: "#137",
        type: "Normal",
        desc: "Porygon es un Pokémon creado artificialmente que puede adaptarse a entornos digitales."
    },
    {
        img: "../ENTREGABLE_ZAMBRANO_LOPEZ_MIGUEL_JOS%C3%89/img/138.png",
        name: "Omanyte",
        number: "#138",
        type: "Roca/Agua",
        desc: "Omanyte es un Pokémon fósil que vivió hace millones de años en el mar."
    },
    {
        img: "../ENTREGABLE_ZAMBRANO_LOPEZ_MIGUEL_JOS%C3%89/img/139.png",
        name: "Omastar",
        number: "#139",
        type: "Roca/Agua",
        desc: "Omastar es la evolución de Omanyte y tiene un caparazón duro que lo protege."
    },
    {
        img: "../ENTREGABLE_ZAMBRANO_LOPEZ_MIGUEL_JOS%C3%89/img/140.png",
        name: "Kabuto",
        number: "#140",
        type: "Roca/Agua",
        desc: "Kabuto es un Pokémon fósil que suele vivir en lagos y ríos."
    },
    {
        img: "../ENTREGABLE_ZAMBRANO_LOPEZ_MIGUEL_JOS%C3%89/img/141.png",
        name: "Kabutops",
        number: "#141",
        type: "Roca/Agua",
        desc: "Kabutops es la evolución de Kabuto, con cuchillas afiladas en sus brazos."
    },
    {
        img: "../ENTREGABLE_ZAMBRANO_LOPEZ_MIGUEL_JOS%C3%89/img/142.png",
        name: "Aerodactyl",
        number: "#142",
        type: "Roca/Volador",
        desc: "Aerodactyl es un Pokémon fósil que se caracteriza por su gran velocidad en vuelo."
    },
    {
        img: "../ENTREGABLE_ZAMBRANO_LOPEZ_MIGUEL_JOS%C3%89/img/143.png",
        name: "Snorlax",
        number: "#143",
        type: "Normal",
        desc: "Snorlax es un Pokémon muy grande y dormilón, pero puede luchar con gran fuerza."
    },
    {
        img: "../ENTREGABLE_ZAMBRANO_LOPEZ_MIGUEL_JOS%C3%89/img/144.png",
        name: "Articuno",
        number: "#144",
        type: "Hielo/Volador",
        desc: "Articuno es uno de los pájaros legendarios, controla el hielo y el frío."
    },
    {
        img: "../ENTREGABLE_ZAMBRANO_LOPEZ_MIGUEL_JOS%C3%89/img/145.png",
        name: "Zapdos",
        number: "#145",
        type: "Eléctrico/Volador",
        desc: "Zapdos es un pájaro legendario que genera potentes descargas eléctricas."
    },
    {
        img: "../ENTREGABLE_ZAMBRANO_LOPEZ_MIGUEL_JOS%C3%89/img/146.png",
        name: "Moltres",
        number: "#146",
        type: "Fuego/Volador",
        desc: "Moltres es un pájaro legendario asociado al fuego y la llama eterna."
    },
    {
        img: "../ENTREGABLE_ZAMBRANO_LOPEZ_MIGUEL_JOS%C3%89/img/147.png",
        name: "Dratini",
        number: "#147",
        type: "Dragón",
        desc: "Dratini es un Pokémon dragón que vive en ríos y lagos, y crece lentamente."
    },
    {
        img: "../ENTREGABLE_ZAMBRANO_LOPEZ_MIGUEL_JOS%C3%89/img/148.png",
        name: "Dragonair",
        number: "#148",
        type: "Dragón",
        desc: "Dragonair es la evolución de Dratini, más elegante y con poderes mágicos."
    },
    {
        img: "../ENTREGABLE_ZAMBRANO_LOPEZ_MIGUEL_JOS%C3%89/img/149.png",
        name: "Dragonite",
        number: "#149",
        type: "Dragón/Volador",
        desc: "Dragonite es un dragón muy poderoso y amistoso que puede volar a gran velocidad."
    },
    {
        img: "../ENTREGABLE_ZAMBRANO_LOPEZ_MIGUEL_JOS%C3%89/img/150.png",
        name: "Mewtwo",
        number: "#150",
        type: "Psíquico",
        desc: "Mewtwo es un Pokémon legendario creado por manipulación genética con gran poder."
    },
    {
        img: "../ENTREGABLE_ZAMBRANO_LOPEZ_MIGUEL_JOS%C3%89/img/151.png",
        name: "Mew",
        number: "#151",
        type: "Psíquico",
        desc: "Mew es un Pokémon legendario que se dice contiene el ADN de todos los Pokémon."
    }
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