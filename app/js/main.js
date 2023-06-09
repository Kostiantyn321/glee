$(function() {

  $('.menu__btn').on('click', function() {
    $('.menu__btn').toggleClass('menu__btn--active');
    $('.menu__list').toggleClass('menu__list--active');
  });

  $('.menu__list-link').on('click', function() {
      $('.menu__btn').removeClass('menu__btn--active');
      $('.menu__list').removeClass('menu__list--active');
  });

  $('.product__tabs-link').on('click', function(e){
    e.preventDefault();
    $('.product__tabs-link').removeClass('product__tabs-link--active');
    $(this).addClass('product__tabs-link--active');

    $('.product__tabs-content').removeClass('product__tabs-content--active');
    $($(this).attr('href')).addClass('product__tabs-content--active');
  });

  $('.design__tabs-link').on('click', function(e){
    e.preventDefault();
    $('.design__tabs-link').removeClass('design__tabs-link--active');
    $(this).addClass('design__tabs-link--active');

    $('.design__tabs-items').removeClass('design__tabs-items--active');
    $($(this).attr('href')).addClass('design__tabs-items--active');
  });

  $('.product-tabs__top-item').on('click', function(e){
    e.preventDefault();
    $('.product-tabs__top-item').removeClass('product-tabs__top-item--active');
    $(this).addClass('product-tabs__top-item--active');

    $('.product-tabs__content-item').removeClass('product-tabs__content-item--active');
    $($(this).attr('href')).addClass('product-tabs__content-item--active');
  });

  $('.product-list__filters-btn').on('click', function(){
    $('.product-list__filters').slideToggle();
  });

  $('.product-slide__thumb').slick({
    asNavFor: '.product-slide__big',
    focusOnSelect: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    draggable: false
  });
  $('.product-slide__big').slick({
    asNavFor: '.product-slide__thumb',
    draggable: false,
    arrows: false,
    fade: true,
    responsive:[
      {
        breakpoint: 1051,
        settings: {
          draggable: true,
        }
      },
    ]
  });

  $('.select-style, .product-one__num').styler();

  $('.product-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: false,
    prevArrow: '<button type="button" class="slick-prev"><svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 9" width="22" height="9"><path fill="#a3bbc8" d="m21.7 3.5h-16.9l0.1-2.8q0-0.1 0-0.2 0-0.2 0-0.2l-0.2-0.2q-0.1-0.1-0.2-0.1-0.1 0-0.2 0.1l-4.2 4.2q-0.1 0.1-0.1 0.2 0 0.1 0.1 0.2l4.2 4.2q0.1 0.1 0.2 0.1 0.1 0 0.2-0.1l0.2-0.2q0 0 0-0.2 0-0.1 0-0.2l-0.2-2.8h17c0.2 0 0.3-0.2 0.3-0.3v-1.4c0-0.1-0.1-0.3-0.3-0.3z"/></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 9" width="22" height="9"><path fill="#a3bbc8" d="m0.3 5.5h16.9l-0.1 2.8q0 0.1 0 0.2 0 0.2 0 0.2l0.2 0.2q0.1 0.1 0.2 0.1 0.1 0 0.2-0.1l4.2-4.2q0.1-0.1 0.1-0.2 0-0.1-0.1-0.2l-4.2-4.2q-0.1-0.1-0.2-0.1-0.1 0-0.2 0.1l-0.2 0.2q0 0 0 0.2 0 0.1 0 0.2l0.2 2.8h-17c-0.2 0-0.3 0.2-0.3 0.3v1.4c0 0.1 0.1 0.3 0.3 0.3z"/></svg></button>',
    responsive:[
      {
        breakpoint: 1150,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 890,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 660,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  });

  $('.top-slider__items').slick({
      dots: true,
      arrows: false,
      fade: true,
      autoplay: true,
      autoplaySpeed: 3000
  });
  
  $('.filter-price__input').ionRangeSlider({
      type: "double",
      prefix: "$",
      onStart: function (data) {
        $('.filter-price__from').text(data.from);
        $('.filter-price__to').text(data.to);
      },
      onChange: function (data) {
        $('.filter-price__from').text(data.from);
        $('.filter-price__to').text(data.to);
      },
  });
  $(".star").rateYo({
    starWidth: "18px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    spacing: "13px",
    readOnly: true
  });
  $(".star-small").rateYo({
    starWidth: "10px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    spacing: "8px",
    readOnly: true
  });

});