require('ie11-scroll-into-view');
require('nodelist-foreach-polyfill');
require('formdata-polyfill');

window.addEventListener('DOMContentLoaded', function () {
  'use strict';

  let mainSlider = require('./modules/mainSlider.js'),
      playVideo = require('./modules/playVideo.js');
      
  mainSlider('.sidecontrol a', '.sidecontrol__controls a'); 
  playVideo();
 
  if (/modules/.test(location.pathname)) {
    mainSlider('.sidecontrol a', 'div.next', '.prev');
  } else {
    let showUpSlider = require('./modules/showUpSlider.js'),
        linkSlide = require('./modules/linkSlide.js'),
        clickToShow = require('./modules/clickToShow.js'),
        hayHanson = require('./modules/hayHanson.js');

    showUpSlider('.showup__content-card', '.slick-prev.showup__btn', '.slick-next.showup__btn', 'card-active');
    showUpSlider('.modules__content-card', '.modules__info .slick-prev', '.modules__info .slick-next', 'card-active');
    showUpSlider('.feed__slider-cards', '.feed__info-btns .slick-prev', '.feed__info-btns .slick-next', 'feed__item-active');
    linkSlide();
    clickToShow();
    hayHanson();

  }
  

});
