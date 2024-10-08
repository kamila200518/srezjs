document.addEventListener("DOMContentLoaded", function() {
    const menuBtn = document.querySelector('.menu-btn');
    const dropdownContent = document.querySelector('.dropdown-content');

    menuBtn.addEventListener('click', function() {
        dropdownContent.classList.toggle('show');
    });

    window.addEventListener('click', function(event) {
        if (!event.target.matches('.menu-btn')) {
            if (dropdownContent.classList.contains('show')) {
                dropdownContent.classList.remove('show');
            }
        }
    });
});



document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll('.slide');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            if (i === index) {
                slide.classList.add('active');
            }
        });
    }

    prevButton.addEventListener('click', function() {
        currentSlide = (currentSlide === 0) ? slides.length - 1 : currentSlide - 1;
        showSlide(currentSlide);
    });

    nextButton.addEventListener('click', function() {
        currentSlide = (currentSlide === slides.length - 1) ? 0 : currentSlide + 1;
        showSlide(currentSlide);
    });

    showSlide(currentSlide); 
});

let click = 0;
let clicks = 0;
let clickt = 0;

function click1(){
    if(click == 0) {
        document.getElementById('otvet1').classList.add('accard-otvet--active');
        click++;
    }
    else if (click == 1) {
        document.getElementById('otvet1').classList.remove('accard-otvet--active');
        click--;
    }
}
function click2(){
    if(clicks == 0) {
        document.getElementById('otvet2').classList.add('accard-otvet--active');
        clicks++;
    }
    else if (clicks == 1) {
        document.getElementById('otvet2').classList.remove('accard-otvet--active');
        clicks--;
    }
}
function click3(){
    if(clickt == 0) {
        document.getElementById('otvet3').classList.add('accard-otvet--active');
        clickt++;
    }
    else if (clickt == 1) {
        document.getElementById('otvet3').classList.remove('accard-otvet--active');
        clickt--;
    }
}
document.addEventListener('DOMContentLoaded', function () {
    var tabButtons = document.querySelectorAll('.tab-btn');
    var tabPanes = document.querySelectorAll('.tab-pane');
tabButtons.forEach(function (button, index) {
        button.addEventListener('click', function () {

            tabButtons.forEach(function (btn) {
                btn.classList.remove('active');
            });
            tabPanes.forEach(function (pane) {
                pane.classList.remove('active');
            });

            this.classList.add('active');
            tabPanes[index].classList.add('active');
        });
    });
});


function showModal() {
    modal.style.display = "block";
}
span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}


    window.addEventListener('scroll', function() {
        const targetBlock = document.querySelector('.faq');
        const phoneNumber = document.querySelector('.phone-number');
        
        const blockPosition = targetBlock.getBoundingClientRect().top;

        // Проверяем, если блок достиг верхней части окна
        if (blockPosition <= window.innerHeight) {
            phoneNumber.style.display = 'block'; // Показываем номер телефона
        }
    });
