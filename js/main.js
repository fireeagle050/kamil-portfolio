// Inicjalizacja AOS (Animate On Scroll)
AOS.init({
    duration: 1000, // Czas trwania animacji
    once: true,     // Animacja uruchamia się tylko raz
});

// Inicjalizacja Typed.js (efekt pisania)
const typed = new Typed('#typed-text', {
    strings: [
        'Projektantem UI/UX',
        'Full-Stack Developerem',
        'Entuzjastą AI',
        'Problem Solverem'
    ],
    typeSpeed: 70,   // Prędkość pisania
    backSpeed: 50,   // Prędkość usuwania
    loop: true,      // Pętla
    backDelay: 2000, // Opóźnienie przed usunięciem tekstu
});

// Inicjalizacja Particles.js (efekt cząsteczek w tle)
particlesJS('particles-js', {
    "particles": {
        "number": {
            "value": 80, // Ilość cząsteczek
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#ffffff" // Kolor cząsteczek
        },
        "shape": {
            "type": "circle"
        },
        "opacity": {
            "value": 0.5,
            "random": false
        },
        "size": {
            "value": 3,
            "random": true
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 4, // Prędkość poruszania się cząsteczek
            "direction": "none",
            "out_mode": "out"
        }
    },
    "interactivity": {
        "events": {
            "onhover": {
                "enable": true,
                "mode": "repulse" // Odepchnięcie cząsteczek przy najechaniu myszką
            }
        }
    }
});