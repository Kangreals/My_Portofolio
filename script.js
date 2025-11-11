function revealOnScroll() {
    const reveals = document.querySelectorAll('.reveal')

    reveals.forEach(reveals => {
        const windowHeight = window.innerHeight;
        const revealTop = reveals.getBoundingClientRect().top;
        const reveralPoint = 120; //jarak sebelum muncul

        if (revealTop < windowHeight - reveralPoint) {
            reveals.classList.add('active')
        } else {
            reveals.classList.remove('active')
        }
    })
}

window.addEventListener('scroll', revealOnScroll)

function animationBar() {
    const skillSection = document.querySelector('#skills');
    const bars = document.querySelectorAll('.bar span');
    const window_height = window.innerHeight;
    const sectionTop = skillSection.getBoundingClientRect().top;

    //saat bagian skill muncul dilayar
    if (sectionTop < window_height - 150) {
        bars.forEach(bar => {
            const targetWidth = bar.getAttribute('data-width');
            if (!bar.classList.contains('filled')) {
                bar.style.width = targetWidth;
                bar.classList.add('filled')
            }
        })
    } else {
        bars.forEach(bar => {
            bar.style.width = 0;
            bar.classList.remove('filled')
        })
    }
}

window.addEventListener('scroll', animationBar);