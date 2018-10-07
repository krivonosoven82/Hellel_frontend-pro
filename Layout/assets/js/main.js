$(document).ready(function(){
    //----------Боковое меню
    $('.open').on('click', function(){
        $('.content__nav').addClass('openNav').removeClass('closeNav');
        $(this).hide();

    });
    $('.content__nav-close').on('click', function(){
        $('.open').show().css('z-index', '1');
        $('.content__nav').addClass('closeNav').removeClass('openNav');
    });
    //----------Переключаем табы
    $('ul.content__nav-list').on('click', 'li:not(.active)', function() {
        $(this)
            .addClass('active').siblings().removeClass('active')
            .closest('section.content').find('div.content__body div.content__body-item')
            .removeClass('active').eq($(this).index()).addClass('active');
    });
});