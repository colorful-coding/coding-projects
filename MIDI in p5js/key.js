class Key {
    constructor(x, y, bounds, note) {
        this.x = x
        this.y = y

        this.note = note

        this.bounds = bounds

        this.height = height

        this.alpha = 1

        this.r = map(sin(x / 2), -1, 1, 255, 0)
        this.g = map(x, 0, width, 200, 100)
        this.b = map(x, 0, width, 100, 200)
    }

    fadeIn() {
        if (this.alpha < 25) {
            this.alpha += 10
        } 

    }

    fadeOut() {
        this.alpha -= 1
    }

    show() {
        fill(this.r, this.g, this.b, this.alpha)
        noStroke()

        rect(this.x, this.y - this.height / 2, this.bounds, this.height)
    }
}