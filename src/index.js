import './index.html';
import './index.scss';


require('./modules/popup');
require('./modules/scroll');
require('./modules/burger');
require('./modules/streamer-swiper');
require('./modules/testimonial-swiper');
require('./modules/scroll-up');
require('./modules/paralax');

const WOW = require('wowjs');
window.wow = new WOW.WOW({mobile: false});
window.wow.init();
