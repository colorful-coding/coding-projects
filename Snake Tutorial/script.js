var gridSize
var space

var snake
var food

var dir
var img 

var score

document.addEventListener('keydown', function(k) {
    dir = k.code
})

function preload() {
    img = loadImage('game_over.png')
}

function setup() {
    createCanvas(1000, 1000)
    rectMode(CENTER)
    imageMode(CENTER)
    frameRate(10)

    gridSize = 20
    space = width / gridSize

    snake = new Snake()

    food = new Food()

    score = createP('Score:').position(80, 0).style('font-size: 80px; opacity: 0.3')
}

function draw() {
    background(40, 60, 80)

    if (!snake.dead) {
        snake.move()
        snake.edges()
        snake.eat()
        snake.tail()
        snake.show()

        food.show()
    } else {
        image(img, width / 2, height / 2)
    }

    noFill()
    stroke(10, 20, 30)
    strokeWeight(space)

    rect(width / 2, height / 2, width, height)

    score.html('Score: ' + snake.length)
}

class Snake {
    constructor() {
        this.pos = createVector(500, 500)

        this.length = 1

        this.posHistory = [this.pos]

        this.dead = false
    }
    move() {
        if (dir === 'ArrowRight') {
            this.pos.x += space
        } else if (dir === 'ArrowLeft') {
            this.pos.x -= space
        } else if (dir === 'ArrowUp') {
            this.pos.y -= space
        } else if (dir === 'ArrowDown') {
            this.pos.y += space
        }
    }
    edges() {
        if (this.pos.x === 0 || this.pos.x === width || this.pos.y === 0 || this.pos.y === height) {
            this.dead = true
        }

        for (var i = 0; i < this.posHistory.length - 1; i++) {
            if (this.pos.x === this.posHistory[i].x && this.pos.y === this.posHistory[i].y) {
                this.dead = true
            }
        }

    }
    eat() {
        if (this.pos.x === food.x && this.pos.y === food.y) {
            food.newPos()

            this.length += 1
        }
    }
    tail() {
        this.posHistory.push(this.pos.copy())

        if (this.posHistory.length > this.length) {
            this.posHistory.splice(0, 1)
        }
    }
    show() {
        noStroke()
        fill(255)
        
        for (var i = 0; i < this.posHistory.length; i++) {
            rect(this.posHistory[i].x, this.posHistory[i].y, space - 5)
        }
    }
}

class Food {
    constructor() {
        this.x = floor(random(1, gridSize)) * space
        this.y = floor(random(1, gridSize)) * space

        this.moved = false
    }
    newPos() {

        this.moved = false

        while(!this.moved) {
            var newX = floor(random(1, gridSize)) * space
            var newY = floor(random(1, gridSize)) * space

            for (var i = 0; i < snake.posHistory.length; i++) {
                if (newX === snake.posHistory[i].x && newY === snake.posHistory[i].y) {
                    break
                } else {
                    if (i === snake.posHistory.length - 1) {
                        this.x = newX
                        this.y = newY

                        this.moved = true
                    }
                }
            }
        }
    }
    show() {
        noStroke()
        fill(255, 50, 50)

        rect(this.x, this.y, space / 2)
    }
}
function mouseClicked() {
    noLoop()
}
