var start = 0

function setup() {
  createCanvas(1080, 720)
  angleMode(DEGREES)

  noiseDetail(2, 1)
}

function draw() {
  background(30)
  noStroke()

  translate(width / 2, height / 2)

  var space = 0.1

  for (var i = 0; i < 360; i += space) {

    var xoff = map(cos(i), -1, 1, 0, 3)
    var yoff = map(sin(i), -1, 1, 0, 3)

    var n = noise(xoff + start, yoff + start)

    var h = map(n, 0, 1, -160, 160)

    var r = map(sin(i), -1, 1, 100, 200)
    var g = map(h, -150, 150, 0, 150)
    var b = map(n, 0, 1, 150, 255)

    rotate(space)

    fill(r, g, b)

    rect(200, 0, h, 1)
  }

  start += 0.0035
}