let slides = document.getElementsByClassName("mySlides");
let prev = document.querySelector(".prev");
let next = document.querySelector(".next");

if (!slides.length == 0) {
    let slideIndex = 1;
    showSlides(slideIndex);

    function plusSlides(n) {
        showSlides((slideIndex += n));
    }

    let currentSlide = function (n) {
        showSlides((slideIndex = n));
    };

    function showSlides(n) {
        if (n > slides.length) {
            slideIndex = 1;
        }

        if (n < 1) {
            slideIndex = slides.length;
        }

        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        slides[slideIndex - 1].style.display = "block";
    }
}

prev.addEventListener("click", () => {
    plusSlides(-1);
});

next.addEventListener("click", () => {
    plusSlides(1);
});
