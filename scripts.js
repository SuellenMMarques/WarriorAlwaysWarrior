document.addEventListener("DOMContentLoaded", function () {

    let currentSlide = 0
    const slides = document.querySelectorAll('.slide')
    const balls = document.querySelectorAll('.ball')

    function showSlide(index) {

        slides.forEach(slide => slide.classList.remove('ativo'))
        balls.forEach(ball => ball.classList.remove('ativa'));

        slides[index].classList.add('ativo');
        balls[index].classList.add('ativa');
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    setInterval(nextSlide, 5000);

    balls.forEach((ball, index) => {
        ball.addEventListener('click', () => {
            currentSlide = index;

            showSlide(currentSlide);

        });
    });
});