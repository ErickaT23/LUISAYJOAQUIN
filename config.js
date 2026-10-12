const config = {
    event: {
        defaultEventId: "luisa-joaquin-2026",
        eventIdParam: "eventId",
        legacyFallback: {
            read: false,
            write: false,
            subscribe: false
        }
    },

    seo: {
        titulo: "Luisa de León & Joaquín Gómez | Boda 2026",
        descripcion: "Boda de Luisa de León y Joaquín Gómez - 7 de noviembre de 2026",
        autor: "Two Design"
    },

    pareja: {
        nombres: "Luisa & Joaquín",
        nombresCompletos: "Luisa de León & Joaquín Gómez",
        fecha: "07-11-2026",
        fechaVisible: "07 · 11 · 2026"
    },

    musica: {
        titulo: "Nuestra Canción",
        archivo: "audio/nuestra-cancion.mp3?v=20261018-luisa"
    },

    evento: {
        ceremonia: {
            titulo: "Ceremonia",
            lugar: "Oratorio del Señor de Esquipulas",
            hora: "15:30",
            direccion: "km 32.5 Carretera a Antigua Guatemala, San Lucas Sacatepéquez, Rancho Las Julias",
            ubicacionUrl: "https://waze.com/ul/h9fxe100b5"
        },
        recepcion: {
            titulo: "Recepción",
            lugar: "Jardín Casa Azul",
            hora: "18:00",
            direccion: "San Lucas Sacatepéquez",
            ubicacionUrl: "https://waze.com/ul/h9fxe0cysy"
        }
    },

    textos: {
        mensajeInvitado: "Nos hace mucha ilusión contar contigo",
        mensajePases: "Hemos reservado para ti {pases} lugares especiales"
    },

    footer: {
        hashtag: "#LuisaYJoaquin",
        instagramUrl: "",
        facebookUrl: "",
        marcaTexto: "Diseño",
        marcaNombre: "Two Design",
        marcaUrl: "https://twodesign.com"
    }
};

window.config = config;
