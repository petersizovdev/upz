const cards = document.querySelector(".cards");
const images = document.querySelectorAll(".card__img");
const backgrounds = document.querySelectorAll(".card__bg");
const range = 40;

// const calcValue = (a, b) => (((a * 100) / b) * (range / 100) -(range / 2)).toFixed(1);
const calcValue = (a, b) => (a / b * range - range / 2).toFixed(1); // thanks @alice-mx

let timeout;
document.addEventListener('mousemove', ({ x, y }) => {
  if (timeout) {
    window.cancelAnimationFrame(timeout);
  }

  timeout = window.requestAnimationFrame(() => {
    const yValue = calcValue(y, window.innerHeight);
    const xValue = calcValue(x, window.innerWidth);

    cards.style.transform = `rotateX(${yValue}deg) rotateY(${xValue}deg)`;

    [].forEach.call(images, image => {
      image.style.transform = `translateX(${-xValue}px) translateY(${yValue}px)`;
    });

    [].forEach.call(backgrounds, background => {
      background.style.backgroundPosition = `${xValue * .45}px ${-yValue * .45}px`;
    });
  });
}, false);

document.addEventListener("DOMContentLoaded", function() {
  const numArrows = 20; // Количество стрелочек

  for (let i = 0; i < numArrows; i++) {
    const arrow = document.createElement('div');
    arrow.classList.add('arrow');
    arrow.style.left = `${Math.random() * 100}vw`; // Распределение по всей ширине экрана
    arrow.style.animationDuration = `${Math.random() * 2 + 3}s`; // Случайная длительность анимации
    arrow.style.animationDelay = `${Math.random() * 2}s`; // Случайная задержка начала анимации
    document.body.appendChild(arrow); // Добавляем стрелочки в body, чтобы они были на всю ширину экрана
  }
});