document.addEventListener("DOMContentLoaded", function () {
    const swiper = new Swiper('.swiper', {
        spaceBetween: 10,
        slidesPerView: 4,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true, 
        },
        navigation: {
            nextEl: '.swiper-button-next', 
            prevEl: '.swiper-button-prev' 
        }
    });

    const btnDaltonic = document.getElementById("toggleDaltonic");

    function toggleDaltonicMode() {
        document.body.classList.toggle("daltonic-mode");
    }

    btnDaltonic.addEventListener("click", toggleDaltonicMode);

    document.addEventListener("keydown", function (event) {
        if (event.altKey && event.key.toLowerCase() === "d") {
            event.preventDefault(); 
            toggleDaltonicMode();
        }
    });
});
