{/* <script> */}
document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 4,
        spaceBetween: 10,
        loop: true,
        centeredSlides: true,

        // Custom Pagination (Numbered)
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            renderBullet: function (index, className) {
                return `<span class="${className}">${index + 1}</span>`;
            }
        },

        // Responsive Breakpoints
        breakpoints: {
            1024: { slidesPerView: 4 }, 
            768: { slidesPerView: 2 },
            500: { slidesPerView: 1 },  // Ensures 1 slide at 500px and below
            0: { slidesPerView: 1 }     // Forces 1 slide on smaller screens
        }
    });
});



    {/* </script> */}