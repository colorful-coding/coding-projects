var particles = []

function setup() {
    createCanvas(900, 900)
    angleMode(DEGREES)

    var p = new Particle()
    particles.push(p)

    for (var i = 0; i < 1000; i++) {
        
        var p = new Particle()
        for (var j = 0; j < particles.length; j++) {
            if (dist(p.pos.x, p.pos.y, particles[j].pos.x, particles[j].pos.y) > p.w / 2 + particles[j].w / 2) {
                if (j === particles.length - 1) {
                    particles.push(p)
                }
            } else {
                break
            }
        }   
    }
    noLoop()
}

function draw() {


    background(0, 0, 30)
    noFill()

    for (var i = particles.length - 1; i >= 0; i--) {
    
        particles[i].update()
        particles[i].show()
        
        
    }

}