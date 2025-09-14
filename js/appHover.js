
document.addEventListener('DOMContentLoaded', () => {
  const imagenes = document.querySelectorAll('img[data-hover]');

  imagenes.forEach(img => {
    const original = img.src;
    const hover = img.getAttribute('data-hover');

    img.addEventListener('mouseover', () => {
      img.src = hover;
    });

    img.addEventListener('mouseout', () => {
      img.src = original;
    });
  });
});
