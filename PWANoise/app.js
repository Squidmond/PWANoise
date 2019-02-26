var SoundOn = false;
document.addEventListener("click", function () {
    var audioCtx = new (window.AudioContext || window.webkitAudioContext)();

    var oscillator = audioCtx.createOscillator();


    if (SoundOn === false) {
        oscillator.start();
        oscillator.connect(audioCtx.destination);
        SoundOn = true;
    }
    else {
        oscillator.stop(audioCtx.currentTime);
        oscillator.connect(audioCtx.destination);
        SoundOn = false;
    }
});