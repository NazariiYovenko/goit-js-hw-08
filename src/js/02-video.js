import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const savedData = localStorage.getItem('player-time');

if (savedData) {
  player.setCurrentTime(savedData);
}

player.on('timeupdate', throttle(saveTimeData, 1000));
function saveTimeData(data) {
  localStorage.setItem('player-time', data.seconds);
}
