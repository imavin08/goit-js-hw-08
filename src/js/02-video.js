import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Vimeo.Player(iframe);

player.on('timeupdate', throttle(setTime, 1000));

function setTime(event) {
  const currentTime = event.seconds;
  localStorage.setItem('videoplayer-current-time', currentTime);
}

function itemLocalStorge() {
  const valueLocalStorage = localStorage.getItem('videoplayer-current-time');
  if (valueLocalStorage) {
    player.setCurrentTime(valueLocalStorage);
  }
}
itemLocalStorge();
