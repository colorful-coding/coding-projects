
var particles = []
var marks = []

function setup() {
    createCanvas(400, 400, WEBGL)
    angleMode(DEGREES)

    noiseDetail(8)
    frameRate(60)


    for (var i = 0; i < 3; i++) {

        var r = random(150, 255)
        var g = random(150, 255)
        var b = random(150, 255)

        p = new Particle(r, g, b)
        particles.push(p)
    }
}

function draw() {

    if (frameCount === 1) {
        // capturer.start()
    }

    background(20, 50, 80)

    randomSeed(1)

    fill(255)
    
    translate(0, 0, 170)

    rotateZ(frameCount / 2)
    
    push()
    directionalLight([255], createVector(0, 0, -1))
    directionalLight([255], createVector(0, 2, -1))
    
    for (var i = 0; i < particles.length; i++) {

        var x = map(sin(frameCount / 2), -1, 1, -0.02, 0.02)
        var y = map(cos(frameCount / 2), -1, 1, -0.02, 0.02)

        var gravity = createVector(x, y, 0).mult(particles[i].m)

        particles[i].applyForce(gravity)

        particles[i].update()

        particles[i].edges()

        particles[i].show()
    }
    pop()

    for (var i = marks.length - 1; i >= 0; i--) {
        push()
        if (marks[i].w > 0) {
            marks[i].update()
            marks[i].show()
        } else {
            marks.splice(i, 1)
        }
        
        pop()
    }

    noFill()
    strokeWeight(0.5)
    stroke(255)
    box(100, 100, 100)

    // if (frameCount < 60 * 30) {
    //     capturer.capture(canvas)
    // } else if (frameCount === 60 * 30) {
    //     capturer.save()
    //     capturer.stop()
    // }
}