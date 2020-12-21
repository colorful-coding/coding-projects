var points = []

function setup() {
    createCanvas(1000, 1000);
    pixelDensity(2)
    angleMode(DEGREES);
    noiseDetail(1)

    var density = 100
    
    for (var x = 0; x <= width; x += width / density) {
        for (var y = 0; y <= height; y += width / density) {
            var p = createVector(x + random(-10, 10), y + random(-10, 10))
            points.push(p)
        }
    }
    
    background(10, 20, 30)
}

function draw() {

    if (frameCount < 400) {
        noStroke()

        var mult = 0.01
        
        for (var j = 0; j < 1; j++) {
            for (var i = 0; i < points.length; i++) {
    
                var r = map(points[i].x, 0, width, 50, 255)
                var g = map(points[i].y, 0, height, 255, 50)
                var b = map(points[i].x, 0, width, 255, 50)
        
                fill(r, g, b, 10)
        
                var angle = map(noise(points[i].x * mult, points[i].y * mult), 0, 1, 0, 720)
        
                points[i].add(createVector(cos(angle), sin(angle)))
                ellipse(points[i].x, points[i].y, 1)
            }
        }
    } else {
        noLoop();
    }
}
function mouseClicked() {
    saveCanvas('flowfield', 'png')
}