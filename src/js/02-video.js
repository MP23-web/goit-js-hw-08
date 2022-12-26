import Player from '@vimeo/player';
import throttle from 'lodash.throttle';


const saveTime = JSON.parse(localStorage.getItem("videoplayer-current-time")) || 0;
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeUpdate', showSeconds);
function onPlay({ seconds }) {
    localStorage.setItem("videoplayer-current-time", seconds);
}

player.setCurrentItem(saveTime);


