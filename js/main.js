$(document).ready(function(){
  $('.multiple-items').slick({
    appendArrows: $('.slide'),
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1140,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
  });

  $('.partners-list').slick({
    appendArrows: $('.partners-btn'),
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
  });
  $('.reviews-wrap').slick({
    appendArrows: $('.reviews-btn'),
    speed: 400,
    fade: true,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
  });
  
  $('.fade').slick({
    accessibility: true,
    infinite: true,
    speed: 500,
    fade: true,
    appendArrows: $('.btn-fade'),
    autoplay: true,
    autoplaySpeed: 4000,
  });

  $('.slider').slick({
    speed: 400,
    fade: true,
    appendArrows: $('.description-btn'),
  });
  
});

$('.js-tab-trigger').click(function(){
  let tabName = $(this).data('tab');
   tab = $('.js-tab-content[data-tab="'+tabName+'"]');

  $('.js-tab-trigger.active').removeClass('active');
  $(this).addClass('active'); 

  $('.js-tab-content.active').removeClass('active');
  tab.addClass('active');
});

$('.btn').click(function(){
  $('.modal-wrapper').fadeIn();
  $('.modal').fadeIn();
});

$('.modal-wrapper').click(function(){
  $('.modal-wrapper').fadeOut();
  $('.modal').fadeOut();
})

$("#form").submit(function () {
	$.ajax({
		type: "POST",
		url: "mail.php",
		data: $(this).serialize()
	}).done(function () {
		$(this).find("input").val("");
		alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
		$("#form").trigger("reset");
	});
	return true;
});

$('.icon-menu').click(function(){
  $('.list-menu').fadeIn();
  $('.menu-wrap').fadeIn();
});
$('#menu,.menu-wrap').click(function(){
  $('.list-menu').fadeOut();
  $('.menu-wrap').fadeOut();
});

var slider = $("#calculatorSlider");
var developerBtn = $("#developerBtn");
var corporateBtn = $("#corporateBtn");
var privateBtn = $("#privateBtn");
var reseller = $("#resellerEarnings");
var client = $("#clientPrice");
var percentageBonus = 0; 
var license = {
corpo: {
active: true,
price: 5,
},
dev: {
active: false,
price: 100,
},
priv: {
active: false,
price: 100,
}
}

function calculate(price, value) {
client.text((Math.round((price + (value / 100* price)))) + 'м2');
reseller.text((Math.round(((percentageBonus + value * 3000) /   price))) + 'грн')
}

function reset(price) {
slider.val(100);
client.text(price + '$');
// reseller.text((Math.round((percentageBonus / 1 * price))) + '$');
}
developerBtn.on('click', function(e) {
license.dev.active = true;
license.corpo.active = false;
license.priv.active = false;
reset(license.dev.price)
});
privateBtn.on('click', function(e) {
license.dev.active = false;
license.corpo.active = false;
license.priv.active = true;
reset(license.priv.price);
});
corporateBtn.on('click', function(e) {
license.dev.active = false;
license.corpo.active = true;
license.priv.active = false;
reset(license.corpo.price);
});
slider.on("input change", function(e) {
if (license.priv.active) {
calculate(license.priv.price, $(this).val());
} else if (license.corpo.active) {
calculate(license.corpo.price, $(this).val());
} else if (license.dev.active) {
calculate(license.dev.price, $(this).val());
}
})



