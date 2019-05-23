require('ie11-scroll-into-view');
require('nodelist-foreach-polyfill');
require('formdata-polyfill');

window.addEventListener('DOMContentLoaded', function () {
  'use strict';

  let mainSlider = require('./modules/mainSlider.js'),
      playVideo = require('./modules/playVideo.js');

  mainSlider('.sidecontrol a', '.sidecontrol__controls a');
  mainSlider('.sidecontrol a', 'div.next', '.prev');
  playVideo();


});
