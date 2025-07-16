const nubes = document.querySelectorAll('.nube');

nubes.forEach(nube => {
    nube.classList.add('lento'); // Comienza lenta

    nube.addEventListener('animationiteration', () => {
        nube.classList.remove('lento');
        nube.classList.add('rapido');
    }, { once: true }); // Solo lo hace 1 vez
});
