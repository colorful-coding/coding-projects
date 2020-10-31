var r1
var r2

var a1 = 0
var a2 = 0

var a1Inc
var a2Inc


var prevX
var prevY

function setup() {
  createCanvas(400, 400)
  angleMode(DEGREES)
  background(30)

  r1 = random(50, 100)
  r2 = random(50, 100)

  a1Inc = random(1, 10)
  a2Inc = random(1, 10)
}

function draw() {

  translate(width / 2, height / 2)
  stroke(255)

  for (var i = 0; i < 100; i++) {
    var x1 = r1 * cos(a1)
    var y1 = r1 * sin(a1)
  
    var x2 = x1 + r2 * cos(a2)
    var y2 = y1 + r2 * sin(a2)

    var r = map(sin(frameCount / 4), -1, 1, 50, 200)
    var g = map(cos(frameCount), -1, 1, 50, 200)
    var b = map(sin(frameCount / 2), -1, 1, 50, 200)


    stroke(r, g, b)
  
    line(prevX, prevY, x2, y2)
  
    
    prevX = x2
    prevY = y2
  
    a1 += a1Inc
    a2 += a2Inc
  }
}

