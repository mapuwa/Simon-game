var SimonGame = function () {
    var count = 0;
    var line = [];
    var userLine = [];
    var listening = false;

    function nextOne () {
        line.push(Math.floor(Math.random()*4));
    }
    function playLine () {
        for (var i = 0; i < line.length; i++)
            console.log(line[i])
    }
    function click(n) {
        userLine.push(n);
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
    }
    function nextRound() {
        nextOne();
        playLine();
        listening = true;

    }
    init();

    return {

    };
};


document.getElementById("startButton").addEventListener("click", function () {
    var game = SimonGame();
});