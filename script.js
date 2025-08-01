<script>
window.addEventListener('load', () => {
    // Script del canvas (onda)
    const canvas = document.getElementById('osciloscopio');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        function simulateWave() {
            ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.lineWidth = 2;
            ctx.strokeStyle = '#51d1f6';
            ctx.beginPath();
            for (let x = 0; x < canvas.width; x++) {
                const time = Date.now() * 0.002;
                const y = canvas.height / 2 +
                          Math.sin(x * 0.02 + time) * 50 +
                          Math.sin(x * 0.05 + time * 1.3) * 20;
                if (x === 0) ctx.moveTo(x, y);
                else ctx.lineTo(x, y);
            }
            ctx.stroke();
            requestAnimationFrame(simulateWave);
        }
        simulateWave();
        window.addEventListener('resize', () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        });
    }
    
    // Script del cursor personalizado
    const cursor = document.getElementById('custom-cursor');
    if (cursor) {
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        });
        document.querySelectorAll('a, button').forEach(el => {
            el.addEventListener('mouseenter', () => cursor.classList.add('active'));
            el.addEventListener('mouseleave', () => cursor.classList.remove('active'));
        });
    }
});
</script>