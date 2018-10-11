$(document).ready(function(){

 //========== form.js ==========
//----------input------
    $('input').change(function() {
        if($(this).val())
            $(this).addClass('up');
        else
            $(this).removeClass('up');
    });
//----------textarea------
    $('textarea').change(function() {
        if($(this).val())
            $(this).addClass('up');
        else
            $(this).removeClass('up');
    });
 //========== contact.js ==========
    //----------contact-form----------
    $("#form").submit(function() {
        $.ajax({
            type: "POST",
            url: "../index.php",
            data: $(this).serialize()
        }).done(function() {
            alert('Thank you!');
        });
        return false;
    });
//========== mobail.js ==========
    //----------show - header__nav-mobail------
    $('.header__nav-mobail').hide();
    $('#mobail').click(function(){
        $('.header__nav-mobail').slideToggle(300);
    });

    //----------navigate - to web page------
    $(".mobail__item").on("click", function (event) {
        event.preventDefault();
        let id = $(this).attr('href'),
            top = $(id).offset().top;

        $('body,html').animate({ scrollTop: top }, 800);
    });

    //----------add class active for mobail-item
    $('.mobail__item').click(function(e) {
        e.preventDefault();
        $('.header__nav-mobail a').removeClass('mobail__item--active');
        $(this).addClass('mobail__item--active');
    });

    // //----------scroll mobail------
    if ($('#mobail-scroll').length) {
        let scrollTrigger = -1, // px
            backToTop = function () {
                let scrollTop = $(window).scrollTop();
                if (scrollTop > scrollTrigger) {
                    $('#mobail-scroll').addClass('is-visible');
                } else {
                    $('#mobail-scroll').removeClass('is-visible');
                }
            };
        backToTop();
        $(window).on('scroll', function () {
            backToTop();
        });
    }
    //========== navigation.js ==========
    //----------nav-scroll--------------------------------------------------------
    $(".header__nav-item").on("click", function (event) {
        event.preventDefault();
        let id = $(this).attr('href'),
            top = $(id).offset().top;

        $('body,html').animate({ scrollTop: top }, 800);
    });

// Set active class header__nav-item--active
    $('.header__nav-item').click(function(e) {
        e.preventDefault();
        $('.header__nav a').removeClass('header__nav-item--active');
        $(this).addClass('header__nav-item--active');
    });

//----------header__scroll------------------------------------------------------
    $(".header__scroll").on("click", function (event) {
        event.preventDefault();
        let id = $(this).attr('href'),
            top = $(id).offset().top;

        $('body,html').animate({ scrollTop: top }, 800);
    });


//----------addClass-is-visible
    if ($('#nav-scroll').length) {
        let scrollTrigger = 100, // px
            backToTop = function () {
                let scrollTop = $(window).scrollTop();
                if (scrollTop > scrollTrigger) {
                    $('#nav-scroll').addClass('is-visible');
                } else {
                    $('#nav-scroll').removeClass('is-visible');
                }
            };
        backToTop();
        $(window).on('scroll', function () {
            backToTop();
        });
    }

//----------buttunUp------------------------------------------------------------
    if ($('#button-up').length) {
        let scrollTrigger = 300, // px
            backToTop = function () {
                let scrollTop = $(window).scrollTop();
                if (scrollTop > scrollTrigger) {
                    $('#button-up').addClass('is-visible');
                } else {
                    $('#button-up').removeClass('is-visible');
                }
            };
        backToTop();
        $(window).on('scroll', function () {
            backToTop();
        });
        $('#button-up').on('click', function (e) {
            e.preventDefault();
            $('html,body').animate({
                scrollTop: 0
            }, 1000);
        });
    }
    //========== wow.min.js ==========
    new WOW().init();
});