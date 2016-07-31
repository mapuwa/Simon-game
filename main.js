var SimonGame = function () {
    var count = 0;
    var line = [];
    var userLine = [];
    var listening = false;
    var context;

    function nextOne () {
        line.push(Math.floor(Math.random()*4));
    }
    function playLine () {
        for (var i = 0; i < line.length; i++)
            console.log(line[i])
    }
    function click(n) {
        userLine.push(n);
        playNote(n);
        console.log("click " + n)
    }
    function init() {
        for (var i = 0; i < 4; i++) {
            var x = function (a) {
                document.getElementById("controlButton"+(a+1)).addEventListener("click", function () {
                    if (listening) click(a);
                });
            }(i);
        }
        try {
            window.AudioContext = window.AudioContext||window.webkitAudioContext;
            context = new AudioContext();
        }
        catch(e) {
            alert('Web Audio API is not supported in this browser');
        }
        nextRound();
    }
    function nextRound() {
        nextOne();
        playLine();
        listening = true;

    }
    function playNote(i) {
        var notes = [440,554.365,659.255,783.991];
        var oscillator = context.createOscillator();
        oscillator.frequency.value = notes[i];
        oscillator.connect(context.destination);
        oscillator.start(0);
        setTimeout(function () {
            oscillator.stop();
        },500);
    }
    init();
    return {

    };
};


document.getElementById("startButton").addEventListener("click", function () {
    var game = SimonGame();
});