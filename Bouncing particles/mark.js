class Mark {
    constructor(x, y, z, w, a, colors) {
        this.pos = createVector(x, y, z)
        this.w = w
        this.d = w
        this.angle = a
        this.colors = colors

        this.noise = frameCount / 10

    }
    createMark() {
        beginShape()
        for(var i = 0; i < 360; i++) {
            var xoff = map(cos(i), -1, 1, 0, 3)
            var yoff = map(sin(i), -1, 1, 0, 3)
            var r = map(noise(xoff + this.noise, yoff + this.noise), 0, 1, this.w, this.w + 1)
            var x = r * cos(i)
            var y = r * sin(i)
            vertex(x, y)
        }
        endShape(CLOSE)
    }

    update() {
        this.w -= 0.05
    }

    show() {
        noStroke()
        fill(this.colors[0] + 20, this.colors[1] + 20, this.colors[2] + 20)
        push()

        if (this.angle === 0) {
            translate(this.pos.x + this.d, this.pos.y, this.pos.z)
            rotateY(90)

            this.createMark()
        }
        if (this.angle === 1) {
            translate(this.pos.x - this.d, this.pos.y, this.pos.z)
            rotateY(90)

            this.createMark()
        }
        if (this.angle === 2) {
            translate(this.pos.x, this.pos.y + this.d, this.pos.z)
            rotateX(90)
            
            this.createMark()
        }
        if (this.angle === 3) {
            translate(this.pos.x, this.pos.y - this.d, this.pos.z)
            rotateX(90)
            
            this.createMark()
        }
        if (this.angle === 4) {
            translate(this.pos.x, this.pos.y, this.pos.z + this.d)
            
            this.createMark()
        }
        if (this.angle === 5) {
            translate(this.pos.x, this.pos.y, this.pos.z - this.d)
            
            this.createMark()
        }
        
        pop()
    }
}