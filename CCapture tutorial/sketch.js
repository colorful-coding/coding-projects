function setup() {
    createCanvas(400, 400, WEBGL)
    angleMode(DEGREES)
}

function draw() {

    if (frameCount === 1) {
        capturer.start()
    }

    background(30)
    noStroke()
    translate(0, 0, sin(frameCount) * 400 - 800)

    rotateX(frameCount)
    rotateY(frameCount)
    rotateZ(frameCount)

    var w = 20
    
    randomSeed(1)
    for (var x = -width / 2; x <= width / 2; x += w) {
        for (var y = -width / 2; y <= width / 2; y += w) {
            for (var z = -width / 2; z <= width / 2; z += w) {
                var r = random(255)
                var g = random(255)
                var b = random(255)

                fill(r, g, b)

                push()
                translate(x, y, z)
                box(w)
                pop()
            }
        }
    }
    // console.log(frameRate());

    if (frameCount < 60) {
        capturer.capture(canvas)
    } else if (frameCount === 60) {
        capturer.save()
        capturer.stop()
    }

}