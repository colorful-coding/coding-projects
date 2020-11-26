class Bubble {
    constructor(x, y, bounds) {
        this.w = random(5, bounds / 2)

        this.pos = createVector(x + random(-bounds / 2 + this.w / 2, bounds / 2 - this.w / 2), y - this.w)
        this.vel = createVector(0, -1.5)
        this.acc = createVector(random(-0.006, 0.006), -0.05)
        
        this.r = map(sin(x / 2), -1, 1, 255, 0) + random(-20, 20)
        this.g = map(x, 0, width, 200, 100) + random(-20, 20)
        this.b = map(x, 0, width, 100, 200) + random(-20, 20)

        this.alpha = 255
    }

    update() {
        this.vel.add(this.acc)
        this.pos.add(this.vel)
        
        this.alpha -= 1.75

        this.w += 0.03
    }

    show() {
        fill(this.r, this.g, this.b, this.alpha)
        noStroke()
        
        ellipse(this.pos.x, this.pos.y, this.w)
    }
}
