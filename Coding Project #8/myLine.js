class MyLine {
    constructor(penColor, penWidth, penShape) {
        this.px = pwinMouseX
        this.py = pwinMouseY
        this.x = winMouseX
        this.y = winMouseY

        this.penColor = penColor
        this.penWidth = penWidth
        this.penShape = penShape
    }
    show() {
        if (this.penShape === 'Line') {
            stroke(this.penColor)
            strokeWeight(this.penWidth)
            line(this.px, this.py, this.x, this.y)
        }
        if (this.penShape === 'Circle') {
            fill(this.penColor)
            noStroke()
            ellipse(this.x, this.y, this.penWidth)
        }
        if (this.penShape === 'Rectangle') {
            fill(this.penColor)
            noStroke()
            rect(this.x, this.y, this.penWidth)
        }
        if (this.penShape === 'Triangle') {
            fill(this.penColor)
            noStroke()

            push()

            translate(this.x, this.y)

            beginShape()
            for (var i = 0; i < 360; i += 120) {
                var rad = this.penWidth / 2
                var x = rad * cos(i)
                var y = rad * sin(i)
                vertex(x, y)
            }
            endShape(CLOSE)
            pop()
        }
        if (this.penShape === 'Star') {
            fill(this.penColor)
            noStroke()

            push()

            translate(this.x, this.y)

            beginShape()
            for (var i = 0; i < 720; i += 720 / 5) {
                var rad = this.penWidth / 2
                var x = rad * cos(i)
                var y = rad * sin(i)
                vertex(x, y)
            }
            endShape(CLOSE)
            pop()
        }
    }
}