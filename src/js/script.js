import logger from './log';
import favicon from './favicon';
import VanillaTilt from 'vanilla-tilt';

logger();
favicon();
VanillaTilt.init(document.querySelector(`.content`), {
    max: 3,
});
