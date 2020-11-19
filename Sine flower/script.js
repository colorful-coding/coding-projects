
function setup() {
    createCanvas(400, 400)
    angleMode(DEGREES)


}

function draw() {

    if (frameCount === 180) {
        // capturer.start()
    }

    background(30, 60, 80, 100)
    noStroke()

    translate(width / 2, height / 2)


    for (var n = 0; n < 10; n++) {

        for (var i = 0; i < 360; i += 4) {
            var rad = map(sin(i * 2 + frameCount), -1, 1, 50, 150)
            var x = rad * cos(i)
            var y = rad * sin(i)

            var r = map(n, 0, 9, 0, 50)
            var g = map(x, -150, 150, 150, 255)
            var b = map(y, -150, 150, 150, 255)

            fill(r, g, b)


            ellipse(x, y, 5)
        }
        rotate(frameCount / 10)
    }
        
    


    // if (frameCount < 60 * 40) {
    //     capturer.capture(canvas)
    // } else if (frameCount === 60 * 40) {
    //     capturer.save()
    //     capturer.stop()
    // }
}