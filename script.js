const botonTema = document.getElementById("botonTema");
const selectorIdioma = document.getElementById("selectorIdioma");

const traducciones = {
    es: {
        pageTitle: "Historia de la programación",
        themeButton: "Cambiar tema",
        languageLabel: "Idioma",
        mainTitle: "La historia de la programación",
        intro: "Un recorrido desde las primeras tarjetas perforadas hasta los lenguajes que usamos hoy.",
        mainImageAlt: "Imagen sobre ordenadores y programación",
        section1Title: "1. Los primeros pasos",
        adaImageAlt: "Retrato de Ada Lovelace",
        section1Text1: "En 1801, Joseph Marie Jacquard creó un telar que usaba tarjetas perforadas para controlar los diseños de las telas. Las tarjetas daban instrucciones a la máquina, una idea parecida a la programación.",
        section1Text2: "Más adelante, Charles Babbage diseñó la máquina analítica. En 1843, Ada Lovelace escribió instrucciones para que esta máquina hiciera cálculos. Por eso muchas personas la consideran la primera programadora.",
        jacquardSource: "Fuente sobre el telar de Jacquard",
        adaSource: "Fuente sobre Ada Lovelace",
        section2Title: "2. Los primeros ordenadores",
        section2Text1: "En el siglo XX aparecieron los primeros ordenadores electrónicos. Uno de ellos fue ENIAC, presentado en 1946. Era muy grande y las personas tenían que conectar cables para programarlo.",
        section2Text2: "En los años siguientes se crearon lenguajes como FORTRAN y COBOL. Estos ayudaron a escribir instrucciones de forma más sencilla para resolver problemas científicos y comerciales.",
        earlyComputerAlt: "Personas trabajando junto a un ordenador antiguo",
        eniacAlt: "El ordenador ENIAC",
        eniacSource: "Fuente sobre ENIAC y los primeros ordenadores",
        section3Title: "3. La programación en la actualidad",
        codeImageAlt: "Código en la pantalla de un ordenador",
        section3Text1: "Con el paso del tiempo se crearon muchos lenguajes. C se usó para crear sistemas y programas. Después llegaron otros como Java, JavaScript y Python, que hoy se usan para páginas web, aplicaciones y análisis de datos.",
        section3Text2: "La programación forma parte de muchas actividades cotidianas. Sirve para crear herramientas y resolver problemas, y continúa cambiando con las nuevas tecnologías.",
        languagesSource: "Fuente sobre la historia de los lenguajes de programación",
        section4Title: "4. Previsiones para el futuro",
        section4Text: "La programación sigue evolucionando. Se están desarrollando lenguajes más fáciles de usar y herramientas que permiten crear programas sin necesidad de escribir código. Además, la inteligencia artificial está cambiando la forma en que se desarrolla software, haciendo que la programación sea más accesible para todos, aunque también plantea nuevos desafíos y preguntas sobre el futuro de los trabajos relacionados con la programación y la tecnología.",
        bibliographyTitle: "Bibliografía",
        bibliographyJacquard: "Science and Industry Museum: telar de Jacquard",
        bibliographyAda: "Britannica: Ada Lovelace",
        bibliographyEniac: "Computer History Museum: ENIAC",
        bibliographyLanguages: "Computer History Museum: lenguajes",
        bibliographyAquae: "Fundación Aquae: Ada Lovelace y los inicios de la programación"
    },
    en: {
        pageTitle: "History of Programming",
        themeButton: "Change theme",
        languageLabel: "Language",
        mainTitle: "The History of Programming",
        intro: "A journey from the first punched cards to the languages we use today.",
        mainImageAlt: "Image about computers and programming",
        section1Title: "1. The Early Beginnings",
        adaImageAlt: "Portrait of Ada Lovelace",
        section1Text1: "In 1801, Joseph Marie Jacquard created a loom that used punched cards to control fabric patterns. The cards gave instructions to the machine, an idea similar to programming.",
        section1Text2: "Later, Charles Babbage designed the Analytical Engine. In 1843, Ada Lovelace wrote instructions for the machine to perform calculations. For this reason, many people consider her the first programmer.",
        jacquardSource: "Source about the Jacquard loom",
        adaSource: "Source about Ada Lovelace",
        section2Title: "2. The First Computers",
        section2Text1: "The first electronic computers appeared in the 20th century. One of them was ENIAC, introduced in 1946. It was very large, and people had to connect cables to program it.",
        section2Text2: "In the following years, languages such as FORTRAN and COBOL were created. They made it easier to write instructions for solving scientific and business problems.",
        earlyComputerAlt: "People working beside an early computer",
        eniacAlt: "The ENIAC computer",
        eniacSource: "Source about ENIAC and the first computers",
        section3Title: "3. Programming Today",
        codeImageAlt: "Code on a computer screen",
        section3Text1: "Over time, many programming languages were created. C was used to build systems and programs. Later came languages such as Java, JavaScript, and Python, which are now used for websites, applications, and data analysis.",
        section3Text2: "Programming is part of many everyday activities. It is used to create tools and solve problems, and it continues to change with new technologies.",
        languagesSource: "Source about the history of programming languages",
        section4Title: "4. Looking to the Future",
        section4Text: "Programming continues to evolve. Easier-to-use languages and tools that let people create programs without writing code are being developed. Artificial intelligence is also changing how software is developed, making programming more accessible to everyone while raising new challenges and questions about the future of jobs related to programming and technology.",
        bibliographyTitle: "Bibliography",
        bibliographyJacquard: "Science and Industry Museum: Jacquard loom",
        bibliographyAda: "Britannica: Ada Lovelace",
        bibliographyEniac: "Computer History Museum: ENIAC",
        bibliographyLanguages: "Computer History Museum: programming languages",
        bibliographyAquae: "Fundación Aquae: Ada Lovelace and the beginnings of programming"
    }
};

function cambiarIdioma(idioma) {
    const traduccion = traducciones[idioma];

    document.documentElement.lang = idioma;
    document.querySelectorAll("[data-i18n]").forEach((elemento) => {
        elemento.textContent = traduccion[elemento.dataset.i18n];
    });
    document.querySelectorAll("[data-i18n-alt]").forEach((imagen) => {
        imagen.alt = traduccion[imagen.dataset.i18nAlt];
    });
}

botonTema.addEventListener("click", () => {
    document.body.classList.toggle("tema-oscuro");
});

selectorIdioma.addEventListener("change", () => {
    cambiarIdioma(selectorIdioma.value);
});
