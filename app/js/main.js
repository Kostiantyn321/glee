$(function() {

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