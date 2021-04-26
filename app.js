const slides = document.querySelectorAll(".slide");
const carousel = document.querySelector("#carousel");
const left = document.querySelector(".left-arrow");
const right = document.querySelector(".right-arrow");
const body = document.body;
const slides_count = slides.length;

let current_slide = 0;

left.addEventListener("click", function() {
    current_slide--;
    if(current_slide < 0) {
        current_slide = slides_count -1;
    }

    updateCarousel();
});

right.addEventListener("click", function() {
    current_slide++;
    if(current_slide > slides_count - 1) {
        current_slide = 0;
    }

    updateCarousel();
});

// right.addEventListener("click", function() {
//     current_slide++;
//     if(current_slide > slides_count -1) {
//         current_slide = 0;
//     }

//     updateCarousel();
// });

function updateCarousel() {
    carousel.style.transform = `translateX(${-current_slide * slides[0].offsetWidth}px)`
    body.style.backgroundColor = `#${slides[current_slide].dataset["bg"]}`
}