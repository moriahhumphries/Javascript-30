window.addEventListener('keydown', function(ele){
    const audio = document.querySelector(`audio[data-key="${ele.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${ele.keyCode}"]`);
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
});