var s
var spiros = []

function setup() {
  createCanvas(1280, 720)
  angleMode(DEGREES)
  background(30)



  
  

}

function draw() {

  if (frameCount % 20 === 0) {
    s = new Spiro(random(120, width - 120), random(120, height - 120))

    if (spiros.length > 0) {
      for (var j = 0; j < spiros.length; j++) {
        if (dist(spiros[j].x, spiros[j].y, s.x, s.y) > spiros[j].r1 + spiros[j].r2 + s.r1 + s.r2) {
          if (j === spiros.length - 1) {
            spiros.push(s)
          }
          
        } else {
          break
        }
      }
    } else {
      spiros.push(s)
    }
  }

  if (spiros.length > 7) {
    spiros[0].fade()
  }

  


  for (var i = 0; i < spiros.length; i++) {

    if (!spiros[i].fading) {
      spiros[i].update()
    } else if (spiros[i].alpha > 255) {
      spiros.splice(i, 1)
    }
    
    
  }
  

}

