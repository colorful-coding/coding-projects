var start = 0;

function setup() {
    
    createCanvas(1000, 1000, WEBGL);
    pixelDensity(1)
    angleMode(DEGREES)
    rectMode(CENTER)

    noiseDetail(1)
   
}

function draw() {

    background(30)
    noFill()
    stroke(255)
    strokeWeight(3)

    translate(0, -100, -800)
    
    rotateX(50)

    for (var n = 0; n < 50; n++) {
        push()
        beginShape()
        for (var i = 0; i < 360; i += 3) {

            var rad = n * 16
            var x = rad * cos(i);
            var y = rad * sin(i);
            var z = map(cos(frameCount * 3 + n * 10), 0, 1, -50, 50)

            var g = map(z, -100, 100, 150, 200) + sin(frameCount * 2) * 50
            var b = map(n, 0, 500, 100, 150) + cos(frameCount / 2) * 100
            var r = map(n, 0, 500, 200, 150) - sin(frameCount / 4) * 50

            stroke(r, g, b)

            vertex(x, y, z)
            
        }
        endShape(CLOSE)
        pop()
    }

    start += 0.05
    
}

