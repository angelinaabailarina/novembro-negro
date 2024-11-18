// Este script é opcional, caso queira pausar a animação ao passar o mouse

document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel');

    // Pausar a animação ao passar o mouse
    carousel.addEventListener('mouseover', () => {
        carousel.style.animationPlayState = 'paused';
    });

    // Retomar a animação ao remover o mouse
    carousel.addEventListener('mouseout', () => {
        carousel.style.animationPlayState = 'running';
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const options = document.querySelectorAll('.option');
    const resultElement = document.getElementById('quiz-result');
    let score = 0;
    let answeredQuestions = 0;

    options.forEach(option => {
        option.addEventListener('click', () => {
            if (option.dataset.correct === "true") {
                option.classList.add('correct');
                score++;
                  } else {
                option.classList.add('wrong');
                  }
                 answeredQuestions++;
                 const parent = option.parentElement;
                 Array.from(parent.children).forEach(btn => btn.disabled = true);
                 if (answeredQuestions === document.querySelectorAll('.quiz-container').length) {
                resultElement.textContent = `Você acertou ${score} de ${answeredQuestions} questões, parabéns!`;
      }
  });
 });
});

  

