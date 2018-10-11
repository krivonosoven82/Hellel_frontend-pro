<?php
add_action('wp_enqueue_scripts', 'okkama_media');

function okkama_media(){
//    add style
    wp_enqueue_style('okamma-animate', get_template_directory_uri() . '/animate.css');
    wp_enqueue_style('okamma-font', get_template_directory_uri() . '/font-awesome.css');

    wp_enqueue_style('okamma-style', get_template_directory_uri() . '/style.css');
//    add_script
    wp_enqueue_script('okkama-jquery', get_template_directory_uri() . '/assets/js/jquery-3.3.1.min.js');
    wp_enqueue_script('okkama-wow', get_template_directory_uri() . '/assets/js/wow.min.js');
    wp_enqueue_script('okkama-main', get_template_directory_uri() . '/assets/js/main.js');
}