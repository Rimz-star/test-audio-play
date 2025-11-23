const audio = document.getElementById('myAudio');
const playBtn = document.getElementById('play-btn');
const pauseBtn = document.getElementById('pause-btn');
const progressBar = document.getElementById('progress-bar');
const timeSpan = document.getElementById('time');

playBtn.addEventListener('click', () => {
  audio.play();
  playBtn.style.display = 'none';
  pauseBtn.style.display = 'inline-block';
});

pauseBtn.addEventListener('click', () => {
  audio.pause();
  playBtn.style.display = 'inline-block';
  pauseBtn.style.display = 'none';
});

audio.addEventListener('timeupdate', () => {
  const progress = (audio.currentTime / audio.duration) * 100;
  progressBar.value = progress;
  const minutes = Math.floor(audio.currentTime / 60);
  const seconds = Math.floor(audio.currentTime % 60);
  timeSpan.innerHTML = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')} / ${Math.floor(audio.duration / 60).toString().padStart(2, '0')}:${Math.floor(audio.duration % 60).toString().padStart(2, '0')}`;
});