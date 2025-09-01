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
];