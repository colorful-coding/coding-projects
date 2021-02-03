
function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL)
  angleMode(DEGREES)

  noLoop()
}

function draw() {

  background(180, 190, 160)

  // randomSeed(20)

  translate(0, 150, 0)

  rotateY(frameCount / 2)

  branch(100)
}

function branch(len) {
  strokeWeight(map(len, 10, 100, 0.5, 10))
  stroke(70, 40, 20)

  line(0, 0, 0, 0, -len - 4, 0)

  translate(0, -len, 0)

  if (len > 10) {
    for (var i = 0; i < 3; i++) {
      rotateY(random(100, 140))

      push()

      rotateZ(random(20, 50))
      branch(len * 0.72)

      pop()
    }
  } else {

    var r = 70 + random(-20, 20)
    var g = 110 + random(-20, 20)
    var b = 30 + random(-20, 20)

    fill(r, g, b, 240)
    noStroke()

    translate(5, 0, 0)

    rotateZ(90)

    beginShape()
    for (var i = 45; i < 135; i++) {
      var rad = 7
      var x = rad * cos(i)
      var y = rad * sin(i)
      vertex(x, y)
    }
    for (var i = 135; i > 45; i--) {
      var rad = 7
      var x = rad * cos(i)
      var y = rad * sin(-i) + 10
      vertex(x, y)
    }
    endShape(CLOSE)
  }
}