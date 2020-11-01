class Spiro {

    constructor(x, y) {
        this.x = x
        this.y = y

        this.x1
        this.y1

        this.x2
        this.y2

        this.r1 = random(30, 50)
        this.r2 = random(30, 50)

        this.a1 = 0
        this.a2 = 0

        this.a1Inc = random(0.1, 5)
        this.a2Inc = random(0.1, 5)

        this.prevX
        this.prevY

        this.rStart = random(255)
        this.rEnd = random(255)
        this.gStart = random(255)
        this.gEnd = random(255)
        this.bStart = random(255)
        this.bEnd = random(255)

        this.alpha = 0

        this.fading = false

        

    }

    update() {
        for (var t = 0; t < 5; t++) {
            push()
            translate(this.x, this.y)
            this.x1 = this.r1 * cos(this.a1)
            this.y1 = this.r1 * sin(this.a1)
        
            this.x2 = this.x1 + this.r2 * cos(this.a2)
            this.y2 = this.y1 + this.r2 * sin(this.a2)
    
            this.r = map(sin(frameCount / 4), -1, 1, this.rStart, this.rEnd)
            this.g = map(cos(frameCount), -1, 1, this.gStart, this.gEnd)
            this.b = map(sin(frameCount / 2), -1, 1, this.bStart, this.bEnd)
    
            stroke(this.r, this.g, this.b)
            // strokeWeight(0.2)
    
            if (frameCount > 1) {
                line(this.prevX, this.prevY, this.x2, this.y2)
            }
    
            
    
            this.prevX = this.x2
            this.prevY = this.y2
    
            this.a1 += this.a1Inc
            this.a2 += this.a2Inc
    
            pop()

            
        }
    }
    fade() {
        
        fill(30, this.alpha)
        noStroke()
        ellipse(this.x, this.y, this.r1 * 2 + this.r2 * 2 + 1)

        this.alpha += 2

        this.fading = true
    }
    
}