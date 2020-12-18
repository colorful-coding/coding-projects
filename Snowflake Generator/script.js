var snowflakes = []

function setup() {
    createCanvas(1000, 1000);
    pixelDensity(1)
    angleMode(DEGREES);
    noFill()
    // noLoop()

    var length = random(10, 100)
    var x = random(length, width - length)
    var y = random(length, height - length)
    
    var b = new Snowflake(x, y, length)
    snowflakes.push(b)


    while (snowflakes.length < 250) {
        var length = random(10, 100)
        var x = random(length, width - length)
        var y = random(length, height - length)

        for (var j = 0; j < snowflakes.length; j++) {
            if (dist(x, y, snowflakes[j].x, snowflakes[j].y) > length + snowflakes[j].length + 10) {
                if (j === snowflakes.length - 1) {
                    var b = new Snowflake(x, y, length)
                    snowflakes.push(b)
                }
            } else {
                break
            }
        }
    }
}

function draw() {
    background(0, 0, 30);

    for (var i = 0; i < snowflakes.length; i++) {

        push()
        snowflakes[i].show()
        pop()
    }
}