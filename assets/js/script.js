/**
 * Created by ricardo on 29/07/17.
 */

    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        direction: 'horizontal',
        slidesPerView: 1,
        paginationClickable: true,
        spaceBetween: 30,
        keyboardControl: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',

        grabCursor: true,

    });




    function myFunction() {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
            x.className += " responsive";
        } else {
            x.className = "topnav";
        }
    }

