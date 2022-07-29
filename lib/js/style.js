// $(window).scroll(function() {
//     // var headerHeight = $(".header").outerHeight();
//     // kiểm tra điều kiện > header thì mới addClass 
//     if ($(window).scrollTop() > 400) {
//         $('.header-main').addClass('fixed');
//     } else {
//         $('.header-main').removeClass('fixed');
//     }
// });
/* back to top */
// var btn = $('#backtotop');

// $(window).scroll(function() {
//     if ($(window).scrollTop() > 300) {
//         btn.addClass('show');
//     } else {
//         btn.removeClass('show');
//     }
// });

// btn.on('click', function(e) {
//     e.preventDefault();
//     $('html, body').animate({
//         scrollTop: 0
//     }, '1000');
// });
$('.has-sub-mb').each(function() {
    var $this = $(this);
    $('i', this).on('click', function() {
            $('.submenu', $this).slideToggle();
            $($this).toggleClass('show')
        })
        // $('.submenu',this).slideToggle();
        // $(this).toggleClass('show')
})

$.fn.extend({
    toggleText: function(a, b) {
        if (this.html() == a) { this.html(b) } else { this.html(a) }
    }
});
$('.explore-content').each(function() {
    $('.load-more', this).on('click', function() {
        $('.explore-content p').toggleClass('show-full')
        $(this).toggleText('View Less', 'View More');
        $('html, body').animate({
            scrollTop: $('.explore-content').offset().top - 100
        }, 500);
    })
})
$('.collap-head').each(function() {
    $('.load-more', this).on('click', function() {
        $('.collap-head p').toggleClass('show-full')
        $('.collap-head div').toggleClass('show-full')
        $(this).toggleText("View Less", "View More");
        $('html, body').animate({
            scrollTop: $('.collap-head').offset().top - 100
        }, 500);

    })
});
$(window).on('load', function() {
    setTimeout(function() {
        $('#myModal').modal();
    }, 2300);
})


function smoke() {
    var wow = new WOW({
        boxClass: 'smoke-animation',
        animateClass: 'smoke-animated',
        offset: 100,
        mobile: !0,
        live: !0,
    });
    wow.init()
}

function smokeA() {
    var wow = new WOW({
        boxClass: 'smoke-animation-1',
        animateClass: 'smoke-animated',
        offset: 200,
        mobile: !0,
        live: !0,
    });
    wow.init()
}

function animated() {
    var wow = new WOW({
        boxClass: 'animation',
        animateClass: 'animate__animated',
        offset: 100,
        mobile: !0,
        live: !0,
    });
    wow.init()
}
animated();

$('.banner-home').ready(function() {
        smoke();
        smokeA();
    })
    // smoke();

$(document).ready(function() {

    $('.lang').on('click', function() {
        $('ul', this).slideToggle();
    })
    $('.lang-mb').on('click', function() {
        // console.log('aaa')
        $('ul', this).slideToggle();
    })
    $(document).on('click', function(e) {
        if ($(e.target).closest('.lang-mb').length === 0) {
            // $("#CONTAINER").hide();
            $('.lang-mb ul').slideUp();
        }
        if ($(e.target).closest('.lang').length === 0) {
            // $("#CONTAINER").hide();
            $('.lang ul').slideUp();
        }
    })

    $('.card .card-header h5 .btn-link').on('click', function() {
        $(this).toggleClass('collapsed');
        $(this).parents('.card').toggleClass('show');
        $(this).parents('.card').children('.collapse').toggleClass('show');

        $('.card').not($(this).parents()).removeClass('show');
        $('.card').not($(this).parents()).find('.btn-link').removeClass('collapsed');
        $('.card').not($(this).parents()).children('.collapse').removeClass('show');
    })

    $('.menu-toggle').on('click', function() {
        $('.nav-main').toggleClass('show-menu');
        $('body').toggleClass('ov-hidden');
    })



    $("#date1").datepicker();
    $("#date2").datepicker();


    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        effect: 'fade',
        loop: true,
        speed: 1500,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        navigation: {
            prevEl: '.btn-prev',
            nextEl: '.btn-next'
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'progressbar',
            currentClass: 'current-slide',
            totalClass: 'total-slide',
        },
    });



    var galleryThumbs = new Swiper(".thumd-image-spa", {
        spaceBetween: 10,
        slidesPerView: 2,
        speed: 1500,
        grabCursor: true,
        // loop: true,
        // autoplay: {
        //     delay: 5000,
        //     disableOnInteraction: false
        //   }, 
        // freeMode: true,
        loopedSlides: 5,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
    });
    var galleryTop = new Swiper(".image-spa", {
        allowTouchMove: false,
        speed: 1500,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        // preventInteractionOnTransition: true,    
        // grabCursor: false,
        // loop: true,
        effect: 'fade',
        loopedSlides: 5,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        thumbs: {
            swiper: galleryThumbs,
        },
    });


    var swiperWedding = new Swiper('.swiper-wedding', {
        slidesPerView: 1,
        speed: 1500,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        effect: 'fade',
    })

    var swiperAward = new Swiper('.swiper-award', {
        slidesPerView: 2,
        spaceBetween: 10,
        allowTouchMove: false,
        speed: 1500,
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 3,
                spaceBetween: 20
            },
            // when window width is >= 480px
            768: {
                slidesPerView: 5,
                spaceBetween: 20
            },
            // when window width is >= 640px
            992: {
                slidesPerView: 6,
                spaceBetween: 30
            }
        }
    });


    var swiperSubpage = new Swiper('.swiper-subpage', {
        slidesPerView: 1,
        effect: "fade",
        speed: 1000,
        autoplay: {
            delay: 7000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.sub-next',
            prevEl: '.sub-prev',
        },
    });


    var swiperSubpage = new Swiper('.swiper-other-room', {
        slidesPerView: 1,
        spaceBetween: 30,
        speed: 1500,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.sub-next',
            prevEl: '.sub-prev',
        },
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            576: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            // when window width is >= 480px
            768: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            // when window width is >= 640px
            992: {
                slidesPerView: 3,
                spaceBetween: 30
            }
        }
    })

    $('.swiper-offer').each(function(index) {
        var swiperOffer = new Swiper($(this)[0], {
            spaceBetween: 0,
            slidesPerView: 1,
            navigation: {
                nextEl: '.sub-next',
                prevEl: '.sub-prev',
            },
            breakpoints: {
                // when window width is >= 320px
                320: {
                    slidesPerView: 1,
                    spaceBetween: 0
                },
                // when window width is >= 480px
                768: {
                    slidesPerView: 2,
                    spaceBetween: 0
                },
                992: {
                    slidesPerView: 3,
                    spaceBetween: 0
                }
            },
            // on: {
            //     init: function init() {
            //         var _this = this;
            //         setTimeout(function () {
            //             _this.update();
            //         }, 300);
            //     }
            // }
        })
    });

    var swiperSubpage1 = new Swiper('.swiper-press-room', {
        slidesPerView: 1,
        spaceBetween: 30,
        speed: 1500,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.sub-next',
            prevEl: '.sub-prev',
        },
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            576: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            // when window width is >= 480px
            768: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            // when window width is >= 640px
            992: {
                slidesPerView: 3,
                spaceBetween: 30
            }
        }
    });
});