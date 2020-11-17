class Particle {
    constructor(r, g, b) {

        this.m = random(3, 5)
        this.w = this.m * 2

        this.pos = createVector(random(-50 + this.w, 50 - this.w), 0, random(-50 + this.w, 50 - this.w))
        this.vel = createVector(0, 0, random(-1, 1))

        this.colors = [r, g, b]
        
    }
    applyForce(force) {

        if (this.pos.x < 50 - this.w && this.pos.x > - 50 + this.w) {
            this.vel.x += force.x
        }
        if (this.pos.y < 50 - this.w && this.pos.y > - 50 + this.w) {
            this.vel.y += force.y
        }
        if (this.pos.z < 50 - this.w && this.pos.z > - 50 + this.w) {
            this.vel.z += force.z
        }
    }

    update() {
        this.pos.add(this.vel)
    }

    edges() {
        
        if (this.pos.x > 50 - this.w && this.vel.x / abs(this.vel.x) === 1) {
            this.vel.x *= -1
            var m = new Mark(this.pos.x, this.pos.y, this.pos.z, this.w, 0, this.colors)
            marks.push(m)

        } 
        if (this.pos.x < -50 + this.w && this.vel.x / abs(this.vel.x) === -1) {
            this.vel.x *= -1
            var m = new Mark(this.pos.x, this.pos.y, this.pos.z, this.w, 1, this.colors)
            marks.push(m)
        }

        if (this.pos.y > 50 - this.w && this.vel.y / abs(this.vel.y) === 1) {
            this.vel.y *= -1
            var m = new Mark(this.pos.x, this.pos.y, this.pos.z, this.w, 2, this.colors)
            marks.push(m)
        }
        
        if (this.pos.y < -50 + this.w && this.vel.y / abs(this.vel.y) === -1) {
            this.vel.y *= -1
            var m = new Mark(this.pos.x, this.pos.y, this.pos.z, this.w, 3, this.colors)
            marks.push(m)
        }

        if (this.pos.z > 50 - this.w && this.vel.z / abs(this.vel.z) === 1) {
            this.vel.z *= -1
            var m = new Mark(this.pos.x, this.pos.y, this.pos.z, this.w, 4, this.colors)
            marks.push(m)
        } 
        if (this.pos.z < -50 + this.w && this.vel.z / abs(this.vel.z) === -1) {
            this.vel.z *= -1
            var m = new Mark(this.pos.x, this.pos.y, this.pos.z, this.w, 5, this.colors)
            marks.push(m)
        }
    }

    show() {
        noStroke()
        fill(this.colors[0], this.colors[1], this.colors[2])
        push()
        translate(this.pos.x, this.pos.y, this.pos.z)
        sphere(this.w)
        pop()
    }
}