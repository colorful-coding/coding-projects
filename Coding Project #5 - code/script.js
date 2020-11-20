
function setup() {
    createCanvas(700, 700)
    angleMode(DEGREES)
    s1 = createSlider(1, 10, 5, 1).position(20, 735)
    p1 = createP('Number of elements').position(20, 700)
    s2 = createSlider(2, 8, 5, 1).position(200, 735)
    p2 = createP('Number of parts').position(200, 700)
    s3 = createSlider(3, 30, 3, 1).position(380, 735)
    p3 = createP('Amount of fragments').position(380, 700)
    s4 = createSlider(50, 300, 100, 10).position(20, 795)
    p4 = createP('Minimum radius').position(20, 760)
    s5 = createSlider(50, 300, 200, 10).position(200, 795)
    p5 = createP('Maximum radius').position(200, 760)
    s6 = createSlider(0.1, 1, 0.1, 0.05).position(380, 795)
    p6 = createP('Rotation speed').position(380, 760)
}

function draw() {
    background(150, 50, 20, 80)

    translate(width / 2, height / 2)

    noFill()

    strokeWeight(8)

    for (var n = 0; n < s1.value(); n++) {
        stroke(150 + n * 20, 100 + n * 5, 50)
        beginShape()
        for (var i = 0; i < 360; i += s3.value()) {
            var rad = map(sin(i * s2.value() + frameCount), -1, 1, s4.value(), s5.value())
            var x = rad * cos(i)
            var y = rad * sin(i)
            vertex(x, y)
        }
        endShape(CLOSE)
        rotate(frameCount * s6.value())
    }
}   