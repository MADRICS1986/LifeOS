import { Howl } from 'howler';

const clickSound = new Howl({
  src: ['/click.mp3'], // Make sure this file is in your public/ folder
  volume: 0.3,
});

export const playClick = () => {
  clickSound.play();
};
