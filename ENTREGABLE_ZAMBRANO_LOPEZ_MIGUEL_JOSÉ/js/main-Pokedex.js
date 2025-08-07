const pokemonData = [
    {
        img: "../img/001.png",
        name: "Bulbasaur",
        number: "#001",
        type: "Planta/Veneno",
        desc: "Bulbasaur es un Pokémon que crece con la luz del sol. Su planta en la espalda florece a medida que evoluciona."
    },
    {
        img: "../img/002.png",
        name: "Ivysaur",
        number: "#002",
        type: "Planta/Veneno",
        desc: "Ivysaur es más fuerte que Bulbasaur y su planta ha crecido. Le gusta estar al sol para absorber energía."
    },
    {
        img: "../img/003.png",
        name: "Venusaur",
        number: "#003",
        type: "Planta/Veneno",
        desc: "Venusaur tiene una gran flor en su espalda que libera polen. Es muy poderoso y puede causar terremotos."
    },
    {
        img: "../img/004.png",
        name: "Charmander",
        number: "#004",
        type: "Fuego",
        desc: "Charmander es un Pokémon de fuego con una llama en su cola. Si la llama se apaga, Charmander se debilita."
    },
    {
        img: "../img/005.png",
        name: "Charmeleon",
        number: "#005",
        type: "Fuego",
        desc: "Charmeleon es feroz y territorial. Su cola arde intensamente cuando está enfadado."
    },
    {
        img: "../img/006.png",
        name: "Charizard",
        number: "#006",
        type: "Fuego/Volador",
        desc: "Charizard puede volar alto y lanzar llamas desde su boca. Es uno de los Pokémon más poderosos."
    },
    {
        img: "../img/007.png",
        name: "Squirtle",
        number: "#007",
        type: "Agua",
        desc: "Squirtle es un Pokémon tortuga que puede lanzar chorros de agua para defenderse."
    },
    {
        img: "../img/008.png",
        name: "Wartortle",
        number: "#008",
        type: "Agua",
        desc: "Wartortle tiene orejas largas y una cola esponjosa. Es ágil y puede nadar rápidamente."
    },
    {
        img: "../img/009.png",
        name: "Blastoise",
        number: "#009",
        type: "Agua",
        desc: "Blastoise es un Pokémon tortuga gigante con cañones de agua en sus hombros. Puede lanzar potentes chorros de agua."
    },
    {
        img: "../img/010.png",
        name: "Caterpie",
        number: "#010",
        type: "Bicho",
        desc: "Caterpie es un Pokémon oruga que se camufla entre las hojas. Se convierte en Metapod al evolucionar."
    },
    {
        img: "../img/011.png",
        name: "Metapod",
        number: "#011",
        type: "Bicho",
        desc: "Metapod es una crisálida dura y resistente. Está en reposo mientras se prepara para convertirse en Butterfree."
    },
    {
        img: "../img/012.png",
        name: "Butterfree",
        number: "#012",
        type: "Bicho/Volador",
        desc: "Butterfree tiene alas grandes y coloridas. Puede liberar polen para dormir a sus enemigos."
    },
    {
        img: "../img/013.png",
        name: "Weedle",
        number: "#013",
        type: "Bicho/Veneno",
        desc: "Weedle tiene un aguijón venenoso en su cabeza. Es pequeño pero peligroso si se siente amenazado."
    },
    {
        img: "../img/014.png",
        name: "Kakuna",
        number: "#014",
        type: "Bicho/Veneno",
        desc: "Kakuna es una crisálida que está en reposo. Se prepara para evolucionar a Beedrill."
    },
    {
        img: "../img/015.png",
        name: "Beedrill",
        number: "#015",
        type: "Bicho/Veneno",
        desc: "Beedrill es un Pokémon abeja agresivo. Tiene aguijones afilados y puede atacar en enjambre."
    },
    {
        img: "../img/016.png",
        name: "Pidgey",
        number: "#016",
        type: "Normal/Volador",
        desc: "Pidgey es un Pokémon ave muy común que prefiere evitar el combate, pero si lo atacan, lanza arena para escapar."
    },
    {
        img: "../img/017.png",
        name: "Pidgeotto",
        number: "#017",
        type: "Normal/Volador",
        desc: "Pidgeotto tiene un gran sentido territorial. Vuela con velocidad para cazar a su presa desde el aire."
    },
    {
        img: "../img/018.png",
        name: "Pidgeot",
        number: "#018",
        type: "Normal/Volador",
        desc: "Pidgeot es majestuoso y rápido. Puede volar a velocidades supersónicas para atrapar a sus presas."
    },
    {
        img: "../img/019.png",
        name: "Rattata",
        number: "#019",
        type: "Normal",
        desc: "Rattata es rápido y siempre alerta. Tiene incisivos que no dejan de crecer, así que los usa constantemente."
    },
    {
        img: "../img/020.png",
        name: "Raticate",
        number: "#020",
        type: "Normal",
        desc: "Raticate es feroz. Sus colmillos duros como el acero le permiten roer casi cualquier cosa."
    },
    {
        img: "../img/021.png",
        name: "Spearow",
        number: "#021",
        type: "Normal/Volador",
        desc: "Spearow tiene un chillido agudo y un carácter agresivo. Es territorial y vuela bajo buscando comida."
    },
    {
        img: "../img/022.png",
        name: "Fearow",
        number: "#022",
        type: "Normal/Volador",
        desc: "Fearow puede volar largas distancias sin descanso. Tiene un pico largo con el que caza en vuelo."
    },
    {
        img: "../img/023.png",
        name: "Ekans",
        number: "#023",
        type: "Veneno",
        desc: "Ekans es una serpiente que se enrosca para dormir. Puede deslizarse silenciosamente para atrapar presas."
    },
    {
        img: "../img/024.png",
        name: "Arbok",
        number: "#024",
        type: "Veneno",
        desc: "Arbok intimida a sus enemigos con los aterradores patrones de su capucha. Es muy fuerte físicamente."
    },
    {
        img: "../img/025.png",
        name: "Pikachu",
        number: "#025",
        type: "Eléctrico",
        desc: "Pikachu es el Pokémon emblema. Acumula electricidad en sus mejillas y la libera en forma de rayos."
    }
    , {
        img: "../img/026.png",
        name: "Raichu",
        number: "#026",
        type: "Eléctrico",
        desc: "Raichu es la evolución de Pikachu. Puede generar electricidad más potente y es muy ágil."
    },
    {
        img: "../img/027.png",
        name: "Sandshrew",
        number: "#027",
        type: "Tierra",
        desc: "Sandshrew es un Pokémon topo que se entierra en la arena para protegerse del calor."
    },
    {
        img: "../img/028.png",
        name: "Sandslash",
        number: "#028",
        type: "Tierra",
        desc: "Sandslash tiene garras afiladas que usa para excavar y defenderse. Es muy resistente."
    },
    {
        img: "../img/029.png",
        name: "Nidoran♀",
        number: "#029",
        type: "Veneno",
        desc: "Nidoran♀ es un Pokémon pequeño y tímido. Tiene un cuerno en la frente que usa para defenderse."
    },
    {
        img: "../img/030.png",
        name: "Nidorina",
        number: "#030",
        type: "Veneno",
        desc: "Nidorina es más fuerte que Nidoran♀. Su cuerno se ha vuelto más afilado y puede atacar con fuerza."
    },
    {
        img: "../img/031.png",
        name: "Nidoqueen",
        number: "#031",
        type: "Veneno/Tierra",
        desc: "Nidoqueen es una poderosa Pokémon que protege a sus crías. Puede lanzar ataques de tierra y veneno."
    },
    {
        img: "../img/032.png",
        name: "Nidoran♂",
        number: "#032",
        type: "Veneno",
        desc: "Nidoran♂ es un Pokémon pequeño con un cuerno en la frente. Es territorial y defiende su espacio."
    },
    {
        img: "../img/033.png",
        name: "Nidorino",
        number: "#033",
        type: "Veneno",
        desc: "Nidorino es más agresivo que Nidoran♂. Su cuerno se ha vuelto más afilado y puede atacar con fuerza."
    },
    {
        img: "../img/034.png",
        name: "Nidoking",
        number: "#034",
        type: "Veneno/Tierra",
        desc: "Nidoking es un Pokémon fuerte y territorial. Su cuerno puede perforar rocas y su fuerza es temida."
    },
    {
        img: "../img/035.png",
        name: "Clefairy",
        number: "#035",
        type: "Hada",
        desc: "Clefairy es un Pokémon mágico que se dice que viene de la luna. Es amistoso y le gusta bailar."
    },
    {
        img: "../img/036.png",
        name: "Clefable",
        number: "#036",
        type: "Hada",
        desc: "Clefable es la evolución de Clefairy. Tiene alas pequeñas y puede volar cortas distancias."
    },
    {
        img: "../img/037.png",
        name: "Vulpix",
        number: "#037",
        type: "Fuego",
        desc: "Vulpix es un Pokémon zorro con seis colas. Puede controlar el fuego y es muy ágil."
    },
    {
        img: "../img/038.png",
        name: "Ninetales",
        number: "#038",
        type: "Fuego",
        desc: "Ninetales tiene nueve colas que representan su longevidad. Es muy sabio y poderoso."
    },
    {
        img: "../img/039.png",
        name: "Jigglypuff",
        number: "#039",
        type: "Normal/Hada",
        desc: "Jigglypuff canta para dormir a sus enemigos. Su voz suave y melodiosa es irresistible."
    },
    {
        img: "../img/040.png",
        name: "Wigglytuff",
        number: "#040",
        type: "Normal/Hada",
        desc: "Wigglytuff es la evolución de Jigglypuff. Tiene un cuerpo blando y puede inflarse para defenderse."
    },
    {
        img: "../img/041.png",
        name: "Zubat",
        number: "#041",
        type: "Veneno/Volador",
        desc: "Zubat es un Pokémon murciélago que vive en cuevas. Usa ecolocalización para navegar en la oscuridad."
    },
    {
        img: "../img/042.png",
        name: "Golbat",
        number: "#042",
        type: "Veneno/Volador",
        desc: "Golbat es más grande que Zubat y tiene colmillos afilados. Se alimenta de la sangre de sus presas."
    },
    {
        img: "../img/043.png",
        name: "Oddish",
        number: "#043",
        type: "Planta/Veneno",
        desc: "Oddish es un Pokémon planta que se entierra en la tierra durante el día. Florece por la noche."
    },
    {
        img: "../img/044.png",
        name: "Gloom",
        number: "#044",
        type: "Planta/Veneno",
        desc: "Gloom tiene un olor desagradable que usa para defenderse. Su flor se abre cuando está feliz."
    },
    {
        img: "../img/045.png",
        name: "Vileplume",
        number: "#045",
        type: "Planta/Veneno",
        desc: "Vileplume tiene una gran flor que libera esporas. Es muy poderoso y puede causar somnolencia."
    },
    {
        img: "../img/046.png",
        name: "Paras",
        number: "#046",
        type: "Bicho/Planta",
        desc: "Paras es un Pokémon hongo que crece en los árboles. Sus hongos le dan fuerza y lo protegen."
    },
    {
        img: "../img/047.png",
        name: "Parasect",
        number: "#047",
        type: "Bicho/Planta",
        desc: "Parasect es la evolución de Paras. Sus hongos han crecido tanto que controlan su mente."
    },
    {
        img: "../img/048.png",
        name: "Venonat",
        number: "#048",
        type: "Bicho/Veneno",
        desc: "Venonat tiene ojos grandes y peludos. Puede liberar polvo venenoso para cegar a sus enemigos."
    },
    {
        img: "../img/049.png",
        name: "Venomoth",
        number: "#049",
        type: "Bicho/Veneno",
        desc: "Venomoth tiene alas grandes y polvorientas. Puede volar alto y liberar veneno en el aire."
    },
    {
        img: "../img/050.png",
        name: "Diglett",
        number: "#050",
        type: "Tierra",
        desc: "Diglett es un Pokémon topo que vive bajo tierra. Solo se ve su cabeza y puede excavar rápidamente."
    },
    {
        img: "../img/051.png",
        name: "Dugtrio",
        number: "#051",
        type: "Tierra",
        desc: "Dugtrio es la evolución de Diglett. Tiene tres cabezas y puede excavar túneles profundos."
    },
    {
        img: "../img/052.png",
        name: "Meowth",
        number: "#052",
        type: "Normal",
        desc: "Meowth es un Pokémon gato que puede hablar. Es astuto y le gusta coleccionar monedas."
    },
    {
        img: "../img/053.png",
        name: "Persian",
        number: "#053",
        type: "Normal",
        desc: "Persian es elegante y ágil. Es muy territorial y protege su territorio con ferocidad."
    },
    {
        img: "../img/054.png",
        name: "Psyduck",
        number: "#054",
        type: "Agua",
        desc: "Psyduck tiene constantes dolores de cabeza. Cuando se calma, libera poderosos ataques psíquicos."
    },
    {
        img: "../img/055.png",
        name: "Golduck",
        number: "#055",
        type: "Agua",
        desc: "Golduck es rápido y fuerte. Puede nadar a gran velocidad y lanzar ataques de agua."
    },
    {
        img: "../img/056.png",
        name: "Mankey",
        number: "#056",
        type: "Lucha",
        desc: "Mankey es un Pokémon mono muy agresivo. Se enfada fácilmente y ataca sin pensarlo dos veces."
    },
    {
        img: "../img/057.png",
        name: "Primeape",
        number: "#057",
        type: "Lucha",
        desc: "Primeape es aún más agresivo que Mankey. Su furia lo hace muy peligroso en combate."
    },
    {
        img: "../img/058.png",
        name: "Growlithe",
        number: "#058",
        type: "Fuego",
        desc: "Growlithe es un Pokémon perro leal. Puede lanzar llamas desde su boca para defenderse."
    },
    {
        img: "../img/059.png",
        name: "Arcanine",
        number: "#059",
        type: "Fuego",
        desc: "Arcanine es un Pokémon majestuoso y rápido. Es conocido como el Pokémon legendario por su velocidad y fuerza."
    },
    {
        img: "../img/060.png",
        name: "Poliwag",
        number: "#060",
        type: "Agua",
        desc: "Poliwag es un Pokémon rana con una cola larga. Puede nadar rápidamente y saltar alto."
    },
    {
        img: "../img/061.png",
        name: "Poliwhirl",
        number: "#061",
        type: "Agua",
        desc: "Poliwhirl tiene un cuerpo más fuerte y puede lanzar chorros de agua con precisión."
    },
    {
        img: "../img/062.png",
        name: "Poliwrath",
        number: "#062",
        type: "Agua/Lucha",
        desc: "Poliwrath es muy fuerte y puede luchar con gran habilidad. Sus puños son duros como el acero."
    },
    {
        img: "../img/063.png",
        name: "Abra",
        number: "#063",
        type: "Psíquico",
        desc: "Abra duerme la mayor parte del tiempo. Cuando está despierto, usa sus poderes psíquicos para teletransportarse."
    },
    {
        img: "../img/064.png",
        name: "Kadabra",
        number: "#064",
        type: "Psíquico",
        desc: "Kadabra es más poderoso que Abra. Puede lanzar ataques psíquicos y telequinesis."
    },
    {
        img: "../img/065.png",
        name: "Alakazam",
        number: "#065",
        type: "Psíquico",
        desc: "Alakazam es extremadamente inteligente y rápido. Su mente es su arma más poderosa."
    },
    {
        img: "../img/066.png",
        name: "Machop",
        number: "#066",
        type: "Lucha",
        desc: "Machop es un Pokémon musculoso que entrena constantemente para volverse más fuerte."
    },
    {
        img: "../img/067.png",
        name: "Machoke",
        number: "#067",
        type: "Lucha",
        desc: "Machoke es aún más fuerte que Machop. Lleva una cinta en su cintura para controlar su fuerza."
    },
    {
        img: "../img/068.png",
        name: "Machamp",
        number: "#068",
        type: "Lucha",
    },
    {
        img: "../img/069.png",
        name: "Bellsprout",
        number: "#069",
        type: "Planta/Veneno",
        desc: "Bellsprout es un Pokémon planta que se mueve como una planta carnívora. Puede lanzar lianas para atrapar a sus presas."
    },
    {
        img: "../img/070.png",
        name: "Weepinbell",
        number: "#070",
        type: "Planta/Veneno",
        desc: "Weepinbell tiene una boca grande y puede lanzar ácido para disolver a sus enemigos."
    },
    {
        img: "../img/071.png",
        name: "Victreebel",
        number: "#071",
        type: "Planta/Veneno",
        desc: "Victreebel es un Pokémon planta carnívora que atrapa a sus presas con su boca pegajosa."
    },
    {
        img: "../img/072.png",
        name: "Tentacool",
        number: "#072",
        type: "Agua/Veneno",
        desc: "Tentacool es un Pokémon medusa que flota en el agua. Sus tentáculos pueden causar dolor con su veneno."
    },
    {
        img: "../img/073.png",
        name: "Tentacruel",
        number: "#073",
        type: "Agua/Veneno",
        desc: "Tentacruel es más grande y peligroso que Tentacool. Sus tentáculos son largos y venenosos."
    },
    {
        img: "../img/074.png",
        name: "Geodude",
        number: "#074",
        type: "Roca/Tierra",
        desc: "Geodude es un Pokémon roca que vive en cuevas. Es muy resistente y puede rodar para atacar."
    },
    {
        img: "../img/075.png",
        name: "Graveler",
        number: "#075",
        type: "Roca/Tierra",
        desc: "Graveler es más fuerte que Geodude. Puede lanzar rocas pesadas a sus enemigos."
    },
    {
        img: "../img/076.png",
        name: "Golem",
        number: "#076",
        type: "Roca/Tierra",
        desc: "Golem es un Pokémon roca gigante. Su cuerpo es tan duro que puede resistir explosiones. Es muy territorial y feroz."
    },
    {
        img: "../img/077.png",
        name: "Ponyta",
        number: "#077",
        type: "Fuego",
        desc: "Ponyta es un Pokémon caballo con una melena de fuego. Es rápido y puede correr a gran velocidad."
    },
    {
        img: "../img/078.png",
        name: "Rapidash",
        number: "#078",
        type: "Fuego",
        desc: "Rapidash es la evolución de Ponyta. Su velocidad es legendaria y su fuego nunca se apaga."
    },
    {
        img: "../img/079.png",
        name: "Slowpoke",
        number: "#079",
        type: "Agua/Psíquico",
        desc: "Slowpoke es un Pokémon lento y relajado. Puede usar sus poderes psíquicos cuando está tranquilo."
    },
    {
        img: "../img/080.png",
        name: "Slowbro",
        number: "#080",
        type: "Agua/Psíquico",
        desc: "Slowbro es la evolución de Slowpoke. Tiene un caparazón en su cola que le da fuerza y protección."
    },
    {
        img: "../img/081.png",
        name: "Magnemite",
        number: "#081",
        type: "Eléctrico/Acero",
        desc: "Magnemite es un Pokémon magnético que flota en el aire. Puede atraer objetos metálicos."
    },
    {
        img: "../img/082.png",
        name: "Magneton",
        number: "#082",
        type: "Eléctrico/Acero",
        desc: "Magneton es la evolución de Magnemite. Tiene tres unidades que trabajan juntas para generar electricidad."
    },
    {
        img: "../img/083.png",
        name: "Farfetch'd",
        number: "#083",
        type: "Normal/Volador",
        desc: "Farfetch'd es un Pokémon pato que lleva un puerro como arma. Es conocido por su habilidad para luchar."
    },
    {
        img: "../img/084.png",
        name: "Doduo",
        number: "#084",
        type: "Normal/Volador",
        desc: "Doduo es un Pokémon ave con dos cabezas. Puede correr rápidamente y saltar alto."
    },
    {
        img: "../img/085.png",
        name: "Dodrio",
        number: "#085",
        type: "Normal/Volador",
        desc: "Dodrio es la evolución de Doduo. Tiene tres cabezas y es extremadamente rápido."
    },
    {
        img: "../img/086.png",
        name: "Seel",
        number: "#086",
        type: "Agua",
        desc: "Seel es un Pokémon foca que vive en el agua. Puede nadar rápidamente y tiene una piel resbaladiza."
    },
    {
        img: "../img/087.png",
        name: "Dewgong",
        number: "#087",
        type: "Agua/Hielo",
        desc: "Dewgong es la evolución de Seel. Puede nadar bajo el hielo y tiene colmillos afilados."
    },
    {
        img: "../img/088.png",
        name: "Grimer",
        number: "#088",
        type: "Veneno",
        desc: "Grimer es un Pokémon de lodo que se alimenta de basura. Su cuerpo es tóxico y puede causar enfermedades."
    },
    {
        img: "../img/089.png",
        name: "Muk",
        number: "#089",
        type: "Veneno",
        desc: "Muk es la evolución de Grimer. Es más grande y su cuerpo está compuesto por lodo tóxico."
    },
    {
        img: "../img/090.png",
        name: "Shellder",
        number: "#090",
        type: "Agua",
        desc: "Shellder es un Pokémon almeja que se cierra para protegerse. Su concha es dura y resistente."
    },
    {
        img: "../img/091.png",
        name: "Cloyster",
        number: "#091",
        type: "Agua/Hielo",
        desc: "Cloyster es la evolución de Shellder. Tiene una concha dura y puede lanzar chorros de agua helada."
    },
    {
        img: "../img/092.png",
        name: "Gastly",
        number: "#092",
        type: "Fantasma/Veneno",
        desc: "Gastly es un Pokémon fantasma hecho de gas. Puede atravesar paredes y asustar a sus enemigos."
    },
    {
        img: "../img/093.png",
        name: "Haunter",
        number: "#093",
        type: "Fantasma/Veneno",
        desc: "Haunter es más sólido que Gastly. Puede lanzar ataques fantasmales y asustar a sus enemigos."
    },
    {
        img: "../img/094.png",
        name: "Gengar",
        number: "#094",
        type: "Fantasma/Veneno",
        desc: "Gengar es un Pokémon fantasma que se esconde en las sombras. Puede absorber la energía de sus enemigos."
    },
    {
        img: "../img/095.png",
        name: "Onix",
        number: "#095",
        type: "Roca/Tierra",
        desc: "Onix es un Pokémon roca gigante hecho de rocas y metal. Puede excavar túneles y causar terremotos."
    },
    {
        img: "../img/096.png",
        name: "Drowzee",
        number: "#096",
        type: "Psíquico",
        desc: "Drowzee es un Pokémon hipnotizador que puede controlar los sueños de sus enemigos."
    },
    {
        img: "../img/097.png",
        name: "Hypno",
        number: "#097",
        type: "Psíquico",
        desc: "Hypno es la evolución de Drowzee. Usa su poder psíquico para hipnotizar a sus enemigos."
    },
    {
        img: "../img/098.png",
        name: "Krabby",
        number: "#098",
        type: "Agua",
        desc: "Krabby es un Pokémon cangrejo que vive en la playa. Tiene pinzas fuertes y puede atacar con ellas."
    },
    {
        img: "../img/099.png",
        name: "Kingler",
        number: "#099",
        type: "Agua",
        desc: "Kingler es la evolución de Krabby. Tiene una pinza gigante que puede aplastar rocas."
    },
    {
        img: "../img/100.png",
        name: "Voltorb",
        number: "#100",
        type: "Eléctrico",
        desc: "Voltorb es un Pokémon bola que se asemeja a una Poké Ball. Puede explotar si se siente amenazado."
    },
    {
        img: "../img/101.png",
        name: "Electrode",
        number: "#101",
        type: "Eléctrico",
        desc: "Electrode es la evolución de Voltorb. Es más grande y puede generar electricidad más potente."
    },
    {
        img: "../img/102.png",
        name: "Exeggcute",
        number: "#102",
        type: "Planta/Psíquico",
        desc: "Exeggcute es un grupo de huevos que pueden comunicarse telepáticamente. Se convierten en Exeggutor al evolucionar."
    },
    {
        img: "../img/103.png",
        name: "Exeggutor",
        number: "#103",
        type: "Planta/Psíquico",
        desc: "Exeggutor es un Pokémon planta con tres cabezas. Puede lanzar ataques psíquicos y controlar la naturaleza."
    },
    {
        img: "../img/104.png",
        name: "Cubone",
        number: "#104",
        type: "Tierra",
        desc: "Cubone es un Pokémon huérfano que lleva el cráneo de su madre como casco. Es muy solitario."
    },
    {
        img: "../img/105.png",
        name: "Marowak",
        number: "#105",
        type: "Tierra",
        desc: "Marowak es la evolución de Cubone. Es más fuerte y usa su hueso como arma para defenderse."
    },
    {
        img: "../img/106.png",
        name: "Hitmonlee",
        number: "#106",
        type: "Lucha",
        desc: "Hitmonlee es un Pokémon luchador especializado en patadas. Sus piernas son extremadamente flexibles."
    },
    {
        img: "../img/107.png",
        name: "Hitmonchan",
        number: "#107",
        type: "Lucha",
        desc: "Hitmonchan es un Pokémon luchador especializado en puñetazos. Sus brazos son rápidos y fuertes."
    },
    {
        img: "../img/108.png",
        name: "Lickitung",
        number: "#108",
        type: "Normal",
        desc: "Lickitung tiene una lengua larga y pegajosa que usa para atrapar a sus presas. Es amistoso pero curioso."
    },
    {
        img: "../img/109.png",
        name: "Koffing",
        number: "#109",
        type: "Veneno",
        desc: "Koffing es un Pokémon globo que libera gases tóxicos. Puede explotar si se siente amenazado."
    },
    {
        img: "../img/110.png",
        name: "Weezing",
        number: "#110",
        type: "Veneno",
        desc: "Weezing es la evolución de Koffing. Tiene dos cabezas y puede liberar gases venenosos más potentes."
    },
    {
        img: "../img/111.png",
        name: "Rhyhorn",
        number: "#111",
        type: "Roca/Tierra",
        desc: "Rhyhorn es un Pokémon rinoceronte que puede correr a gran velocidad. Su piel es dura como el acero."
    },
    {
        img: "../img/112.png",
        name: "Rhydon",
        number: "#112",
        type: "Roca/Tierra",
        desc: "Rhydon es la evolución de Rhyhorn. Es más fuerte y puede causar terremotos con su carga."
    },
    {
        img: "../img/113.png",
        name: "Chansey",
        number: "#113",
        type: "Normal",
        desc: "Chansey es un Pokémon enfermera que cuida a otros Pokémon heridos. Es muy amable y cariñosa."
    },
    {
        img: "../img/114.png",
        name: "Tangela",
        number: "#114",
        type: "Planta",
        desc: "Tangela tiene una masa de lianas en su cuerpo. Puede lanzar lianas para atrapar a sus enemigos."
    },
    {
        img: "../img/115.png",
        name: "Kangaskhan",
        number: "#115",
        type: "Normal",
        desc: "Kangaskhan es un Pokémon madre que protege a su cría en su bolsa. Es feroz y territorial."
    },
    {
        img: "../img/116.png",
        name: "Horsea",
        number: "#116",
        type: "Agua",
        desc: "Horsea es un pequeño Pokémon caballito de mar que nada con gracia en el agua."
    },
    {
        img: "../img/117.png",
        name: "Seadra",
        number: "#117",
        type: "Agua",
        desc: "Seadra es la evolución de Horsea. Tiene una cola larga y puede lanzar chorros de agua."
    },
    {
        img: "../img/118.png",
        name: "Goldeen",
        number: "#118",
        type: "Agua",
        desc: "Goldeen es un Pokémon pez con aletas elegantes. Puede saltar alto fuera del agua."
    },
    {
        img: "../img/119.png",
        name: "Seaking",
        number: "#119",
        type: "Agua",
        desc: "Seaking es la evolución de Goldeen. Es más grande y puede nadar a gran velocidad."
    },
    {
        img: "../img/120.png",
        name: "Staryu",
        number: "#120",
        type: "Agua",
        desc: "Staryu es un Pokémon estrella de mar que brilla en el agua. Puede regenerar sus extremidades."
    },
    {
        img: "../img/121.png",
        name: "Starmie",
        number: "#121",
        type: "Agua/Psíquico",
        desc: "Starmie es la evolución de Staryu. Tiene un núcleo que brilla intensamente y puede lanzar ataques psíquicos."
    },
    {
        img: "../img/122.png",
        name: "Mr. Mime",
        number: "#122",
        type: "Psíquico/Hada",
        desc: "Mr. Mime es un Pokémon que crea barreras invisibles. Es conocido por su habilidad para realizar trucos de magia."
    },
    {
        img: "../img/123.png",
        name: "Scyther",
        number: "#123",
        type: "Bicho/Volador",
        desc: "Scyther es un Pokémon insecto con cuchillas afiladas en sus brazos. Es rápido y ágil en combate."
    },
    {
        img: "../img/124.png",
        name: "Jynx",
        number: "#124",
        type: "Hielo/Psíquico",
        desc: "Jynx tiene un cuerpo cubierto de hielo y puede lanzar ataques psíquicos. Es conocida por su baile hipnótico."
    },
    {
        img: "../img/125.png",
        name: "Electabuzz",
        number: "#125",
        type: "Eléctrico",
        desc: "Electabuzz es un Pokémon eléctrico que puede generar electricidad con su cuerpo. Es muy energético."
    },
    {
        img: "../img/126.png",
        name: "Magmar",
        number: "#126",
        type: "Fuego",
        desc: "Magmar es un Pokémon fuego que vive en zonas volcánicas. Puede lanzar llamas intensas."
    },
    {
        img: "../img/127.png",
        name: "Pinsir",
        number: "#127",
        type: "Bicho",
        desc: "Pinsir es un Pokémon insecto con pinzas fuertes. Es territorial y lucha ferozmente por su territorio."
    },
    {
        img: "../img/128.png",
        name: "Tauros",
        number: "#128",
        type: "Normal",
        desc: "Tauros es un Pokémon toro agresivo. Puede embestir a gran velocidad y es muy territorial."
    },
    {
        img: "../img/129.png",
        name: "Magikarp",
        number: "#129",
        type: "Agua",
        desc: "Magikarp es un Pokémon débil que apenas puede saltar fuera del agua. Sin embargo, evoluciona en Gyarados, un Pokémon poderoso."
    },
    {
        img: "../img/130.png",
        name: "Gyarados",
        number: "#130",
        type: "Agua/Volador",
        desc: "Gyarados es la evolución de Magikarp. Es un Pokémon feroz y destructivo, capaz de causar tormentas con su rugido."
    },
    {
        img: "../img/131.png",
        name: "Lapras",
        number: "#131",
        type: "Agua/Hielo",
        desc: "Lapras es un Pokémon amistoso que transporta a las personas a través del agua. Es muy inteligente."
    },
    {
        img: "../img/132.png",
        name: "Ditto",
        number: "#132",
        type: "Normal",
        desc: "Ditto puede transformarse en cualquier Pokémon que vea. Es muy versátil y adaptable."
    },
    {
        img: "../img/133.png",
        name: "Eevee",
        number: "#133",
        type: "Normal",
        desc: "Eevee es un Pokémon con múltiples evoluciones. Puede adaptarse a diferentes entornos."
    },
    {
        img: "../img/134.png",
        name: "Vaporeon",
        number: "#134",
        type: "Agua",
        desc: "Vaporeon es una de las evoluciones de Eevee. Tiene la capacidad de nadar y respirar bajo el agua."
    },
    {
        img: "../img/135.png",
        name: "Jolteon",
        number: "#135",
        type: "Eléctrico",
        desc: "Jolteon es otra evolución de Eevee. Puede generar electricidad y es muy rápido."
    },
    {
        img: "../img/136.png",
        name: "Flareon",
        number: "#136",
        type: "Fuego",
        desc: "Flareon es la tercera evolución de Eevee. Su cuerpo está cubierto de llamas y es muy cálido."
    },
    {
        img: "../img/137.png",
        name: "Porygon",
        number: "#137",
        type: "Normal",
        desc: "Porygon es un Pokémon digital creado por humanos. Puede adaptarse a diferentes entornos virtuales."
    },
    {
        img: "../img/138.png",
        name: "Omanyte",
        number: "#138",
        type: "Roca/Agua",
        desc: "Omanyte es un Pokémon fósil que revive del pasado. Tiene una concha dura y puede nadar."
    },
    {
        img: "../img/139.png",
        name: "Omastar",
        number: "#139",
        type: "Roca/Agua",
        desc: "Omastar es la evolución de Omanyte. Tiene tentáculos que usa para atrapar a sus presas."
    },
    {
        img: "../img/140.png",
        name: "Kabuto",
        number: "#140",
        type: "Roca/Agua",
        desc: "Kabuto es otro Pokémon fósil que revive del pasado. Tiene una concha dura y es muy ágil."
    },
    {
        img: "../img/141.png",
        name: "Kabutops",
        number: "#141",
        type: "Roca/Agua",
        desc: "Kabutops es la evolución de Kabuto. Tiene cuchillas afiladas en sus brazos y es un cazador experto."
    },
    {
        img: "../img/142.png",
        name: "Aerodactyl",
        number: "#142",
        type: "Roca/Volador",
        desc: "Aerodactyl es un Pokémon dragón fósil que vuela a gran velocidad. Es feroz y territorial."
    },
    {
        img: "../img/143.png",
        name: "Snorlax",
        number: "#143",
        type: "Normal",
        desc: "Snorlax es un Pokémon gigante que duerme todo el día. Es muy fuerte cuando se despierta."
    },
    {
        img: "../img/144.png",
        name: "Articuno",
        number: "#144",
        type: "Hielo/Volador",
        desc: "Articuno es un Pokémon legendario de hielo. Puede controlar el frío y crear tormentas de nieve."
    },
    {
        img: "../img/145.png",
        name: "Zapdos",
        number: "#145",
        type: "Eléctrico/Volador",
        desc: "Zapdos es un Pokémon legendario eléctrico. Puede generar rayos y es muy rápido."
    },
    {
        img: "../img/146.png",
        name: "Moltres",
        number: "#146",
        type: "Fuego/Volador",
        desc: "Moltres es un Pokémon legendario de fuego. Su cuerpo arde intensamente y puede causar incendios."
    },
    {
        img: "../img/147.png",
        name: "Dratini",
        number: "#147",
        type: "Dragón",
        desc: "Dratini es un Pokémon dragón pequeño y amistoso. Puede nadar en el agua y es muy ágil."
    },
    {
        img: "../img/148.png",
        name: "Dragonair",
        number: "#148",
        type: "Dragón",
        desc: "Dragonair es la evolución de Dratini. Es más grande y tiene un poder dragón más fuerte."
    },
    {
        img: "../img/149.png",
        name: "Dragonite",
        number: "#149",
        type: "Dragón/Volador",
        desc: "Dragonite es la evolución final de Dratini. Es muy poderoso y puede volar a gran velocidad."
    },
    {
        img: "../img/150.png",
        name: "Mewtwo",
        number: "#150",
        type: "Psíquico",
        desc: "Mewtwo es un Pokémon legendario creado por humanos. Tiene un gran poder psíquico y es muy inteligente."
    },
    {
        img: "../img/151.png",
        name: "Mew",
        number: "#151",
        type: "Psíquico",
        desc: "Mew es un Pokémon mítico que se dice que tiene el ADN de todos los Pokémon. Es muy raro y poderoso."
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