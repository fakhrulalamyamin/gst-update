jQuery(window).scroll(function() {
    const scroll = jQuery(window).scrollTop();

    if (scroll >= 150) {
        jQuery('.sticky-header').addClass('sticky-header-active');
    } else {
        jQuery('.sticky-header').removeClass('sticky-header-active');
    }
});