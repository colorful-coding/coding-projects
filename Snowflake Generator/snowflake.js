class Snowflake {
    constructor(x, y, length) {

        this.x = x
        this.y = y

        this.length = length
        this.sub = floor(random(3, 10))
        this.subLengths = []

        this.sw = map(this.length, 10, 100, 1, 3)

        for (var i = 0; i < this.sub; i++) {
            var subLength = random(0, this.length / 3)
            this.subLengths.push(subLength)
        }

        this.r = map(this.x, 0, width, 50, 255)
        this.g = map(this.y, 0, height, 50, 255)
        this.b = random(255)
        this.alpha = map(this.length, 10, 100, 40, 255)

        this.rot = random(-0.4, 0.4)
        this.rotStart = random(90)
    }

    show() {

        translate(this.x, this.y)

        rotate(frameCount * this.rot + this.rotStart)

        strokeWeight(this.sw)
        stroke(this.r, this.g, this.b, this.alpha)

        for (var i = 0; i < 6; i++) {
            rotate(60)

            line(0, 0, 0, -this.length)

            for (var j = 1; j < this.sub; j++) {
    
                push()
                translate(0, -this.length + this.length / this.sub * j)
        
                rotate(45)
                line(0, 0, 0, -this.subLengths[j - 1])
            
                rotate(-90)
                line(0, 0, 0, -this.subLengths[j - 1])
                pop()
            }
        }


        
    }
}