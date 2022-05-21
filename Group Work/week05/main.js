import Hikes from './hiking-start.js';

const ourHikes = new Hikes('hikes');

window.addEventListener("load", () => {

    ourHikes.showHikeList();
    
});
