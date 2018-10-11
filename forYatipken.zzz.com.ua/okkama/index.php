<?php get_header(); ?>
<header id="head" class="header">
    <div class="header__background">
        <img class="img" src="<?php echo get_stylesheet_directory_uri(); ?>/assets/img/bg1.JPG" alt=""/>
    </div>
    <div class="header__container">
        <div class="header__head">
            <p class="wow fadeInLeft header__title" data-wow-duration="1.5s">professional recording studio</p>
            <p class="wow fadeInLeft header__logo" data-wow-delay="0.5s" data-wow-duration="1.5s">okkama studio</p>
            <p class="wow fadeInLeft header__slogan" data-wow-delay="1s" data-wow-duration="1.5s">your desires are our priorities</p>
        </div>
    </div>
    <div id="nav-scroll" class="header__navbar-scroll">
        <div class="header__navbar-wrap">
            <p class="header__navbar-logo">okkama studio</p>
            <div id="mobail" class="header__navbar-mobail">
                <span class="header__line-mobail"></span>
                <span class="header__line-mobail"></span>
                <span class="header__line-mobail"></span>
            </div>
            <nav class="header__nav"><a href="#head" class="header__nav-item header__nav-item--active">Home</a>
                <a href="#parice-list" class="header__nav-item">Price-list</a>
                <a href="#about-us" class="header__nav-item">About us</a>
                <a href="#gallery" class="header__nav-item">Gallery</a>
                <a href="#contact" class="header__nav-item">Contact</a>
            </nav>
        </div>
    </div>
    <nav id="mobail-scroll" class="header__nav-mobail mobail">
        <a href="#head" class="mobail__item mobail__item--active">Home</a>
        <a href="#parice-list" class="mobail__item">Price-list</a>
        <a href="#about-us" class="mobail__item">About us</a>
        <a href="#gallery" class="mobail__item">Gallery</a>
        <a href="#contact" class="mobail__item">Contact</a>
    </nav>
</header>
<section id="parice-list" class="service">
    <div class="service__wrap wrap">
        <p class="wow zoomIn title" data-wow-offset="50" data-wow-duration="1.5s">price-list</p>
        <div class="service__price-list">
            <div class="wow zoomIn service__container" data-wow-offset="20">
                <p class="service__paragraph">studio time</p>
                <p class="service__description">
                    <span class="service__subparagraph">tracking</span>
                    <span class="service__subparagraph">6 $/hour</span>
                </p>
            </div>
            <div class="wow zoomIn service__container" data-wow-offset="20" data-wow-delay="0.2s" data-wow-duration="1.5s">
                <p class="service__paragraph">mixing & mastering</p>
                <p class="service__description">
                    <span class="service__subparagraph">without editing</span>
                    <span class="service__subparagraph">70 $/song</span>
                </p>
                <p class="service__description">
                    <span class="service__subparagraph">including editing</span>
                    <span class="service__subparagraph">100 $/song</span>
                </p>
            </div>
            <div class="wow zoomIn service__container" data-wow-offset="20" data-wow-delay="0.4s" data-wow-duration="1.5s">
                <p class="service__paragraph">reamping</p>
                <p class="service__description">
                    <span class="service__subparagraph">song</span>
                    <span class="service__subparagraph">contact us</span>
                </p>
            </div>
            <div class="wow zoomIn service__container" data-wow-offset="20" data-wow-delay="0.6s" data-wow-duration="1.5s">
                <p class="service__paragraph">arranging</p>
                <p class="service__description">
                    <span class="service__subparagraph">song</span>
                    <span class="service__subparagraph">contact us</span>
                </p>
            </div>
            <div class="wow zoomIn service__container" data-wow-offset="20" data-wow-delay="0.8s" data-wow-duration="1.5s">
                <p class="service__paragraph">session musician (including tracking and studio time)</p>
                <p class="service__description">
                    <span class="service__subparagraph">guitar</span>
                    <span class="service__subparagraph">20-60 $/song</span>
                </p>
                <p class="service__description">
                    <span class="service__subparagraph">bass</span>
                    <span class="service__subparagraph">20-60 $/song</span>
                </p>
                <p class="service__description">
                    <span class="service__subparagraph">drums</span>
                    <span class="service__subparagraph">50-100 $/song</span>
                </p>
            </div>
            <div class="wow zoomIn service__container" data-wow-offset="20" data-wow-delay="1s" data-wow-duration="1.5s">
                <p class="service__paragraph">live performance mixing (multitrack)</p>
                <p class="service__description">
                    <span class="service__subparagraph">song</span>
                    <span class="service__subparagraph">15-100 $</span>
                </p>
            </div>
        </div>
    </div>
</section>
<section id="about-us" class="about">
    <div class="about__wrap wrap" data-wow-duration="1.5s">
        <p class="wow zoomIn title">reason to choose us</p>
        <div class="about__container">
            <div class="wow zoomIn about__item item" data-wow-duration="1.5s">
                <div class="item__logo">
                    <img class="img" src="<?php echo get_stylesheet_directory_uri(); ?>/assets/img/medal.svg" alt="">
                </div>
                <p class="item__description">We know and love our work</p>
            </div>
            <div class="wow zoomIn about__item item" data-wow-duration="1.5s" data-wow-delay="0.5s">
                <div class="item__logo">
                    <img class="img" src="<?php echo get_stylesheet_directory_uri(); ?>/assets/img/clock.svg" alt="">
                </div>
                <p class="item__description">Our team have a lot of experience</p>
            </div>
            <div class="wow zoomIn about__item item" data-wow-duration="1.5s">
                <div class="item__logo">
                    <img class="img" src="<?php echo get_stylesheet_directory_uri(); ?>/assets/img/mortarboard.svg" alt="">
                </div>
                <p class="item__description">We are a team of professionals</p>
            </div>
            <div class="wow zoomIn about__item item" data-wow-duration="1.5s">
                <div class="item__logo">
                    <img class="img" src="<?php echo get_stylesheet_directory_uri(); ?>/assets/img/voice-recorder.svg" alt="">
                </div>
                <p class="item__description">Recording on studio equipment</p>
            </div>
            <div class="wow zoomIn about__item item" data-wow-duration="1.5s" data-wow-delay="0.5s">
                <div class="item__logo">
                    <img class="img" src="<?php echo get_stylesheet_directory_uri(); ?>/assets/img/test.svg" alt="">
                </div>
                <p class="item__description">Acceptable prices</p>
            </div>
            <div class="wow zoomIn about__item item" data-wow-duration="1.5s" data-wow-delay="1s">
                <div class="item__logo">
                    <img class="img" src="<?php echo get_stylesheet_directory_uri(); ?>/assets/img/headset.svg" alt="">
                </div>
                <p class="item__description">Full technical support of the project</p>
            </div>
        </div>
    </div>
</section>
<section id="gallery" class="gallery">
    <div class="gallery__wrap">
        <img class="img" src="<?php echo get_stylesheet_directory_uri(); ?>/assets/img/studio7.jpg" alt=""/>
    </div>
</section>
<section id="contact" class="contact">
    <div class="contact__wrap">
        <p class="wow zoomIn title" data-wow-offset="20" data-wow-duration="1.5s">contact</p>
        <div class="contact__form">
            <div class="contact__address">
                <p class="contact__title">contact info</p>
                <div class="contact__links">
                    <p class="contact__link">+38 (099) 635 73 85</p>
                    <p class="contact__link">besaevaleksandr@gmail.com</p>
                </div>
                <p class="contact__title">office address</p>
                <div class="contact__links">
                    <p class="contact__link">Energodar, Zaporozhye region, Ukraine</p>
                </div>
            </div>
            <form id="form" class="form">
                <div class="form__container form__container--left">
                    <label class="wow fadeInUp form__label" data-wow-offset="20" data-wow-duration="1.5s">
                        <input class="form__input" type="text" name="name" required value="">
                        <span class="form__span">name</span>
                    </label>
                    <label class="wow fadeInUp form__label" data-wow-offset="20" data-wow-delay="0.2s" data-wow-duration="1.5s">
                        <input class="form__input" type="email" name="email" required value="">
                        <span class="form__span">e-mail</span>
                    </label>
                    <label class="wow fadeInUp form__label" data-wow-offset="20" data-wow-delay="0.4s" data-wow-duration="1.5s">
                        <textarea class="form__textarea" name="message" value=""></textarea>
                        <span class="form__span">message</span>
                    </label>
                    <button class="form__btn">send</button>
                </div>
            </form>
        </div>
        <div class="contact__container">
            <div class="contact__map">
    <iframe class="contact__iframe"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d673.865469180193!2d34.660332129236544!3d47.50039560472907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dcbf0d266878c9%3A0x45fbaf71fcbcc9c1!2z0YPQuy4g0KbQtdC90YLRgNCw0LvRjNC90LDRjywgNiwg0K3QvdC10YDQs9C-0LTQsNGALCDQl9Cw0L_QvtGA0L7QttGB0LrQsNGPINC-0LHQu9Cw0YHRgtGMLCA3MTUwMA!5e0!3m2!1sru!2sua!4v1510655414718"
            frameborder="0"
            style="border:0"
            allowfullscreen>
    </iframe>
            </div>
        </div>
    </div>
</section>
<?php get_footer(); ?>