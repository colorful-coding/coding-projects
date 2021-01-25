var balls = []

function setup() {
  createCanvas(windowWidth, windowHeight)

  for (var i = 0; i < 40; i++) {
    var b = new Ball(i)
    balls.push(b)
  }
}

function draw() {
  background(30)

  for (var i = 0; i < balls.length; i++) {
    balls[i].collide()
    balls[i].edges()
    balls[i].move()
    balls[i].show()
  }
}


class Ball {
  constructor(index) {
    this.index = index
    this.radius = 30
    this.pos = createVector(random(this.radius, width - this.radius), random(this.radius, height - this.radius))
    this.vel = p5.Vector.random2D().mult(2)
  }
  collide() {
    for (var i = 0; i < balls.length; i++) {
      var d = dist(this.pos.x, this.pos.y, balls[i].pos.x, balls[i].pos.y)

      if (d < this.radius + balls[i].radius && this.index !== i) {
        fill(255, 0, 0)
        break
      } else {
        fill(255)
      }
    }
  }
  edges() {
    if (this.pos.x < this.radius || this.pos.x > width - this.radius) {
      this.vel.x *= -1
    }
    if (this.pos.y < this.radius || this.pos.y > height - this.radius) {
      this.vel.y *= -1
    }
  }
  move() {
    this.pos.add(this.vel)
  }
  show() {
    noStroke()
    ellipse(this.pos.x, this.pos.y, this.radius * 2)
  }
}