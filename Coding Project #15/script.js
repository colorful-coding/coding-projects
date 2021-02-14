var sqr

function setup() {
    createCanvas(windowWidth, windowHeight)
    rectMode(CENTER)

    sqr = new Sqr(width, width, 0, 0, [random(100), random(100), random(100)], 0)

    noLoop()
}

function draw() {
    background(sqr.color)

    translate(width / 2, height / 2)

    sqr.createChildren()
    sqr.show()
}

class Sqr {
    constructor(w, wParent, xParent, yParent, color, layer) {
        this.layer = layer
        this.w = w
        this.xParent = xParent
        this.yParent = yParent
        if (layer == 1) {
            this.x = random(-width / 2 + w / 2, width / 2 - w / 2)
            this.y = random(-height / 2 + w / 2, height / 2 - w / 2)
        } else {
            this.x = random(-wParent / 2 + w / 2, wParent / 2 - w / 2)
            this.y = random(-wParent / 2 + w / 2, wParent / 2 - w / 2)
        }
        

        this.color = color

        this.children = []
    }
    createChildren() {
        if (this.w > 20) {
            for (var i = 0; i < 1000; i++) {
                
                var color = [this.color[0] + random(100), this.color[1] + random(100), this.color[2] + random(100)]
                var sqr = new Sqr(this.w * random(0.05, 0.5), this.w, this.x, this.y, color, this.layer + 1)
            
                if (i === 0) {
                    this.children.push(sqr)
                } else {
                    for (var j = 0; j < this.children.length; j++) {
                        if (abs(sqr.x - this.children[j].x) < sqr.w / 2 + this.children[j].w / 2 && abs(sqr.y - this.children[j].y) < sqr.w / 2 + this.children[j].w / 2) {
                            break
                        } else if (j === this.children.length - 1) {
                            this.children.push(sqr)
                        }
                    }
                }
            }
        }
    }
    show() {
        noStroke()
        fill(this.color)
        translate(this.xParent, this.yParent)
        rect(this.x, this.y, this.w, this.w, this.w / 20)

        for (var i = 0; i < this.children.length; i++) {
            push()

            this.children[i].createChildren()
            this.children[i].show()

            pop()
        }
    }
}