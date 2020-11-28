class Particle {
    constructor() {
        this.pos = createVector(random(width), random(height))
        
        this.w = (random(1) < 0.9) ? random(10, 30) : random(30, 150)

        this.leaves = floor(random(5, 10))

        this.r = random(130, 255)
        this.g = random(130, 255)
        this.b = random(130, 255)

        this.alpha = map(this.w, 10, 150, 80, 255)

        this.rot = random(360)
    }
    
    update() {
        
    }

    show() {

        push()
        
        translate(this.pos.x, this.pos.y)

        rotate(this.rot)
        noFill()
        strokeWeight(1)
        stroke(this.r, this.g, this.b, this.alpha)

        for (var n = 0; n < 5; n++) {
            beginShape()
            for(var i = 0; i < 360; i++) {
                var rad = map(sin(i * this.leaves), -1, 1, this.w / 4 + n * 3, this.w / 2 - n * 3)
                var x = rad * cos(i)
                var y = rad * sin(i)
    
                vertex(x, y)
            }
            endShape(CLOSE)
        }
        
        pop()

        noStroke()
        fill(this.r, this.g, this.b, this.alpha)
        ellipse(this.pos.x, this.pos.y, this.w / 4)
    }
}