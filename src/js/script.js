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
        clickToShow = require('./modules/clickToShow.js');

    showUpSlider();
    linkSlide();
    clickToShow();
  } 
  

});
