tsParticles.load("particles", {
  fullScreen: {
    enable: false
  },

  background: {
    color: "transparent"
  },

  particles: {
    number: {
      value: 80
    },

    color: {
      value: [
        "#ffffff",
        "#d896ff",
        "#b84dff"
      ]
    },

    shape: {
      type: "circle"
    },

    opacity: {
      value: 0.8
    },

    size: {
      value: {
        min: 1,
        max: 4
      }
    },

    move: {
      enable: true,
      speed: 1,
      direction: "none",
      random: true,
      outModes: {
        default: "out"
      }
    }
  }
});
/* ==========================================
   EFECTO 3D
========================================== */

/* ==========================================
   PARTE 10: EFECTO 3D SUAVE
========================================== */

const card = document.querySelector(".card");

if (card) {
    document.addEventListener("mousemove", (event) => {

        /* No usar el efecto en teléfonos */
        if (window.innerWidth <= 500) {
            card.style.transform = "none";
            return;
        }

        const rect = card.getBoundingClientRect();

        const centroX = rect.left + rect.width / 2;
        const centroY = rect.top + rect.height / 2;

        const distanciaX =
            (event.clientX - centroX) / window.innerWidth;

        const distanciaY =
            (event.clientY - centroY) / window.innerHeight;

        const rotacionY = distanciaX * 10;
        const rotacionX = distanciaY * -10;

        card.style.transform =
            `rotateX(${rotacionX}deg)
             rotateY(${rotacionY}deg)`;
    });

    document.addEventListener("mouseleave", () => {
        card.style.transform =
            "rotateX(0deg) rotateY(0deg)";
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth <= 500) {
            card.style.transform = "none";
        }
    });
}



card.style.transform=

"rotateX(0deg) rotateY(0deg)";


/* ==========================================
   PARTE 8: ESTRELLAS FUGACES Y CORAZONES
========================================== */

const shootingStarsContainer =
    document.getElementById("shootingStars");

const floatingHeartsContainer =
    document.getElementById("floatingHearts");

/* Crear una estrella fugaz */

function crearEstrellaFugaz() {
    if (!shootingStarsContainer) {
        return;
    }

    const estrella = document.createElement("span");

    estrella.className = "shooting-star";

    /* Aparece desde la zona superior derecha */
    estrella.style.top =
        `${Math.random() * 45}%`;

    estrella.style.left =
        `${65 + Math.random() * 40}%`;

    const escala =
        0.7 + Math.random() * 0.8;

    estrella.style.scale = escala;

    shootingStarsContainer.appendChild(estrella);

    setTimeout(() => {
        estrella.remove();
    }, 1700);
}

/* Crear un corazón flotante */

function crearCorazonFlotante() {
    if (!floatingHeartsContainer) {
        return;
    }

    const corazon = document.createElement("span");

    corazon.className = "floating-heart";

    const corazones = ["♡", "♥", "୨୧"];

    corazon.textContent =
        corazones[Math.floor(Math.random() * corazones.length)];

    corazon.style.left =
        `${Math.random() * 100}%`;

    corazon.style.fontSize =
        `${14 + Math.random() * 20}px`;

    corazon.style.animationDuration =
        `${7 + Math.random() * 6}s`;

    corazon.style.setProperty(
        "--heart-move",
        `${-70 + Math.random() * 140}px`
    );

    floatingHeartsContainer.appendChild(corazon);

    setTimeout(() => {
        corazon.remove();
    }, 14000);
}

/* Crear efectos de manera automática */

setInterval(() => {
    crearEstrellaFugaz();
}, 4200);

setInterval(() => {
    crearCorazonFlotante();
}, 1800);

/* Crear algunos efectos al cargar la página */

setTimeout(crearEstrellaFugaz, 900);
setTimeout(crearCorazonFlotante, 600);
setTimeout(crearCorazonFlotante, 1500);