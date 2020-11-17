
var particles = []

function setup() {
    createCanvas(400, 400)
    angleMode(DEGREES)
    
}

function draw() {

    if (frameCount === 1) {
        // capturer.start()
    }

    background(30)

    for (var i = 0; i < 50; i++) {
        p = new Particle()
        particles.push(p)
    }
    
    for (var i = 0; i < particles.length; i++) {
        if (particles[i].alpha > 0) {
            particles[i].update()
            particles[i].show()
        } else {
            particles.splice(i, 1)
        }
        
    }

//     if (frameCount < 60 * 30) {
//         capturer.capture(canvas)
//     } else if (frameCount === 60 * 30) {
//         capturer.save()
//         capturer.stop()
//     }
}