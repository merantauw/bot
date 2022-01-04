$(function () {
  $('.example__slider').slick({
    prevArrow: '<button class="slick-prev"><svg width="37" height="35" viewBox="0 0 37 35" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="36.0508" y="34.9268" width="35.9492" height="34.5656" rx="17.2828" transform="rotate(-180 36.0508 34.9268)" fill="#BBDBF3"/><path d="M20.4631 24.418L13.6892 17.6439L20.4631 10.87" stroke="#3F92D1" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    nextArrow: '<button class="slick-next"><svg width="36" height="35" viewBox="0 0 36 35" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.0507812" y="0.361084" width="35.9492" height="34.5656" rx="17.2828" fill="#BBDBF3"/><path d="M15.6384 10.8699L22.4124 17.6439L15.6384 24.4178" stroke="#3F92D1" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    fade: true,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          arrows: false,
          dots: true,
          speed: 300,
          
        }
      }
    ]
  });

  $('.faq__item-title').on('click', function () {
    $('.faq__item-title').each(function () {
      $(this).parent().removeClass('faq__item--active');
      $(this).removeClass('faq__item--active');
    });
    $(this).parent().addClass('faq__item--active');
    $(this).addClass('faq__item--active');
  });



});