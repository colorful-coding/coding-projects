
function setup() {
  createCanvas(400, 400, WEBGL)
  angleMode(DEGREES)
}

  

function draw() {
  background(30)

  noFill()
  stroke(255)

  var x = sin(frameCount * 2) * 50
  var y = cos(frameCount) * 50
  var z = sin(frameCount * 4) * 50

  translate(x, y, z)

  rotateX(frameCount)
  rotateY(frameCount / 2)
  rotateZ(frameCount / 4)

  for (var i = 0; i < 360; i++) {
    push()

    var r = map(sin(i + frameCount), -1, 1, 200, 50)
    var g = map(sin(i + frameCount / 3), -1, 1, 50, 200)
    var b = map(cos(i + frameCount / 7), -1, 1, 50, 200)

    stroke(r, g, b)

    rotateY(i / 2)

    ellipse(0, 0, 200, 200, 50)

    pop()
  }
}



