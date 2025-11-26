document.addEventListener('DOMContentLoaded', () => {
    // Inicjalizacja AOS (Animate On Scroll)
    AOS.init({ once: true, duration: 800 });

    // --- Tło "Kosmiczna Mgławica" ---
    const canvas = document.getElementById('nebula-canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const mouse = {
        x: window.innerWidth / 2,
        y: window.innerHeight / 2
    };

    window.addEventListener('mousemove', (event) => {
        mouse.x = event.x;
        mouse.y = event.y;
    });

    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });

    class Particle {
        constructor(x, y, radius, color) {
            this.x = x;
            this.y = y;
            this.radius = radius;
            this.color = color;
            this.baseX = this.x;
            this.baseY = this.y;
            this.density = (Math.random() * 30) + 1;
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.closePath();
            ctx.fillStyle = this.color;
            ctx.fill();
        }

        update() {
            let dx = mouse.x - this.x;
            let dy = mouse.y - this.y;
            let distance = Math.sqrt(dx * dx + dy * dy);
            let forceDirectionX = dx / distance;
            let forceDirectionY = dy / distance;
            let maxDistance = 150;
            let force = (maxDistance - distance) / maxDistance;

            if (distance < maxDistance) {
                this.x -= forceDirectionX * force * this.density * 0.6;
                this.y -= forceDirectionY * force * this.density * 0.6;
            } else {
                if (this.x !== this.baseX) {
                    let dx = this.x - this.baseX;
                    this.x -= dx / 10;
                }
                if (this.y !== this.baseY) {
                    let dy = this.y - this.baseY;
                    this.y -= dy / 10;
                }
            }
            this.draw();
        }
    }

    let particlesArray = [];
    const colors = ['#6a11cb', '#2575fc', '#a239ca', '#4c1a57'];
    const numberOfParticles = 200;

    function init() {
        particlesArray = [];
        for (let i = 0; i < numberOfParticles; i++) {
            const radius = Math.random() * 2 + 1;
            const x = Math.random() * (canvas.width - radius * 2) + radius;
            const y = Math.random() * (canvas.height - radius * 2) + radius;
            const color = colors[Math.floor(Math.random() * colors.length)];
            particlesArray.push(new Particle(x, y, radius, color));
        }
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particlesArray.forEach(p => p.update());
        requestAnimationFrame(animate);
    }

    init();
    animate();
});
