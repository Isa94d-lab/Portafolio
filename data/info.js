/* Esta lista nos permitira almacenar la informacion de cada proyecto */

export const proyects = [
    [
        1,
        {
            ID: 1,
            name: 'Formula 1',
            lenguage: 'JavaScript',
            description: `El proyecto "F1 Racing" busca simular una página dedicada a la Fórmula 1, ofreciendo funcionalidades CRUD (Crear, Leer, Actualizar y Eliminar) para la gestión de:

            - Pilotos 🏁
            - Equipos 🏆
            - Vehiculos 🚘
            - Circuitos 🏟️

            De esta manera, los usuarios dependiendo del usuario ingresado podran visualizar o administrar y mantener organizada la información de cada entidad de forma sencilla, intuitiva y eficiente.`,

            img: 'img/imgC/F1-show.png',

            rpg: 'https://github.com/Isa94d-lab/F1-RACING.git',

            /* Se creo un array que permitira redirigir al perfil de los colaboradores */

            collaborators2: [
                'https://github.com/Isa94d-lab',
                'https://github.com/santiagomtello',
                'https://github.com/amdresw'
            ],

            collaborators: [
            'Isa94d-Lab',
            'Santiagomtello',
            'Amdresw'
            ],

        },
    ], 
    [
        2,
        {
            ID: 2,
            name: 'CineWeb',
            lenguage: 'JavaScript',
            description: `El proyecto "CineWeb" busca simular una página dedicada a la visualización de películas, ofreciendo funcionalidades interactivas para la gestión y exploración de:

            - Búsquedas de películas 🔍
            - Selección interactiva 🎬
            - Información detallada en popup 📑

            De esta manera, los usuarios podrán visualizar, explorar y acceder a la información organizada de cada película de forma sencilla, atractiva e intuitiva.`,

            img: 'img/imgC/CineWeb-show.png',

            rpg: 'https://github.com/Isa94d-lab/CineWeb.git',

            /* Se creo un array que permitira redirigir al perfil de los colaboradores */

            collaborators2: ['https://github.com/Isa94d-lab'],

            collaborators: ['Isa94d-Lab'] 

        }
    ],
    [
        3,
        {
            ID: 3,
            name: 'Portafolio',
            lenguage: 'JavaScript',
            description: `Portafolio es un proyecto personal que refleja la personalidad de su desarrolladora, mostrando intereses, conocimientos y habilidades, siempre con disposición de seguir aprendiendo y creciendo.
            Características principales:

            - Pixel arts hechos a mano, con un estilo único 🎨
            - Animaciones dinámicas que enriquecen la experiencia ✨ 
            - Pop Ups interactivos para mostrar proyectos 📂

            Un proyecto que une técnica y creatividad en una interfaz intuitiva y llamativa.`,

            img: 'img/imgC/Portafolio-show.png',

            rpg: 'https://github.com/Isa94d-lab/Portafolio.git',

            /* Se creo un array que permitira redirigir al perfil de los colaboradores */

            collaborators2: 'https://github.com/Isa94d-lab',

            collaborators: ['Isa94d-Lab'] 

        }
    ],
    [
        4,
        {
            ID: 4,
            name: 'CampusLove',
            lenguage: 'C#',
            description: `CampusLove es un programa en consola que simula una app de citas, donde los usuarios pueden registrarse, iniciar sesión e interactuar con perfiles mediante Likes o Dislikes. 
            Si dos usuarios se dan Like mutuamente, se genera automáticamente un Match 💕.

            Características principales:
            - Registro e inicio de sesión 🔑
            - Interacción mediante Likes y Dislikes 👍👎
            - Match automático 💌
            - Experiencia sencilla y intuitiva en consola 💻

            Un proyecto que une programación orientada a objetos y creatividad para reflejar la dinámica de una app de citas.`,

            img: 'img/imgC/CampusLove-show.jpg',

            rpg: 'https://github.com/Isa94d-lab/CampusLove.git',

            /* Se creo un array que permitira redirigir al perfil de los colaboradores */

            collaborators2: ['https://github.com/Isa94d-lab', 'https://github.com/amdresw'],

            collaborators: ['Isa94d-Lab', 'Amdresw'] 

        }
    ],

    [
        5,
        {
            ID: 5,
            name: 'Inventory Managment',
            lenguage: 'C#',
            description: `InventoryManagement es una aplicación de consola en C# para gestionar inventario y flujo de caja, siguiendo arquitectura hexagonal y principios SOLID. 
            Permite administrar productos, ventas, compras, empleados, clientes y proveedores, además de incluir planes promocionales.

            Características principales:
            - Gestión de productos, compras y ventas 📦💰
            - Administración de empleados, clientes y proveedores 👥
            - Control de movimientos de caja 💵
            - Planes promocionales 🎯

            Un proyecto que une buenas prácticas de desarrollo con herramientas clave para la gestión empresarial.`,

            img: 'img/imgC/InventoryManagment-show.jpg',

            rpg: 'https://github.com/Isa94d-lab/InventoryManagement.git',

            /* Se creo un array que permitira redirigir al perfil de los colaboradores */

            collaborators2: ['https://github.com/Isa94d-lab', 'https://github.com/LauraVargas22'],

            collaborators: ['Isa94d-Lab', 'LauraVargas22'] 

        }
    ],

    [
        6,
        {
            ID: 6,
            name: 'Sistema Automotriz',
            lenguage: 'C#',
            description: `SistemaAutomotriz es un backend desarrollado en ASP.NET Core con arquitectura hexagonal, diseñado para automatizar y gestionar las operaciones de un taller automotriz.
            Características principales:

            - Gestión de clientes y vehículos 👥
            - Órdenes de servicio 🛠️
            - Inventario de repuestos 📦
            - Facturación 🧾
            - Acceso por roles (Administrator, Receptionist, Mechanic) con JWT 🔐

            Un sistema que integra eficiencia, seguridad y escalabilidad en la gestión automotriz. 🚗⚙️`,

            img: 'img/imgC/SistemaAutomotriz-show.jpg',

            rpg: 'https://github.com/LauraVargas22/SistemaAutomotriz.git',

            /* Se creo un array que permitira redirigir al perfil de los colaboradores */

            collaborators2: ['https://github.com/Isa94d-lab', 'https://github.com/LauraVargas22', 'https://github.com/hdvalen', 'https://github.com/amdresw'],

            collaborators: ['LauraVargas22', 'Isa94d-lab', 'Hdvalen', 'Amdresw'] 

        }
    ],

    [
        7,
        {
            ID: 7,
            name: 'Piedra papel o tijera',
            lenguage: 'Python',
            description: `Piedra, Papel o Tijera es un proyecto en Python que recrea el clásico juego, permitiendo jugar contra una IA o en modo multijugador. El objetivo es ganar 3 rondas consecutivas para llevarse la partida.
            Características principales:

            - Modos de juego: IA y multijugador 🎮
            - Meta: conseguir 3 victorias seguidas 🏆
            - Mecánica especial: escudo al lograr 2 rondas consecutivas 🛡️

            Un juego clásico con un giro innovador para hacerlo más desafiante y divertido. ✨`,

            img: 'img/imgC/PiedraPapelOTijera-show.png',

            rpg: 'https://github.com/Isa94d-lab/Piedra-papel-o-tijera.git',

            /* Se creo un array que permitira redirigir al perfil de los colaboradores */

            collaborators2: ['https://github.com/Isa94d-lab'],

            collaborators: ['Isa94d-lab'] 

        }
    ],

    [
        8,
        {
            ID: 8,
            name: 'Liga BetPlay',
            lenguage: 'Python',
            description: `Liga BetPlay es un proyecto en Python que gestiona equipos de fútbol, permitiendo crear plantillas de jugadores y llevar un control de partidos y clasificaciones.
            Características principales:

            - Creación de equipos con jugadores (nombre, número y posición) ⚽
            - Programación de partidos entre equipos registrados 📅
            - Registro de resultados y actualización de puntos 📝
            - Tabla de clasificación con toda la información de los equipos 📊

            Un sistema sencillo pero completo para la gestión de ligas de fútbol. 🏆`,

            img: 'img/imgC/LigaBetPlay-show.png',

            rpg: 'https://github.com/Isa94d-lab/LIga-BetPlay.git',

            /* Se creo un array que permitira redirigir al perfil de los colaboradores */

            collaborators2: ['https://github.com/Isa94d-lab'],

            collaborators: ['Isa94d-lab'] 

        }
    ],

    [
        9,
        {
            ID: 9,
            name: 'Work In Progres...',
            lenguage: 'Python',
            description: `Lorem Ipsum est un proyecto ficticio en Lorem Ipsum destinado a Lorem Ipsum dolor sit amet, mostrando cómo se vería un contenido real dentro de un diseño o prototipo.
            Características principales:

            - Lorem ipsum dolor sit amet, consectetur adipiscing elit 📜
            - Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua 🎨
            - Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 🔄

            Sollicitudin fames suspendisse bibendum hac rhoncus laoreet nec mattis ultricies interdum per. ✨`,

            img: 'img/imgC/WorkInProgres-show.jpg',

            rpg: 'https://github.com/Isa94d-lab',

            /* Se creo un array que permitira redirigir al perfil de los colaboradores */

            collaborators2: ['https://github.com/Isa94d-lab', '...'],

            collaborators: ['Isa94d-lab', '...'] 

        }
    ],
];