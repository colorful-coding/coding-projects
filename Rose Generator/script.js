var noiseMax = 3;
var num = 900

function setup() {
    createCanvas(1000, 1000);
    pixelDensity(1)
    noiseDetail(1)
    angleMode(DEGREES);
    noFill()
    noLoop()
}

function draw() {
    background(30, 0, 0);

    translate(width/2, height/2);

    for (var n = 0; n < num; n++) {

        var r = map(n, 0, num, 255, 170)
        var g = map(n, 0, num, 10, 70)
        var b = map(n, 0, num, 10, 70)

        stroke(r, g, b)
        strokeWeight(0.1)

        var inc = n * 0.02

        var rad = map(n, 0, num, 1, 500)

        beginShape();
        for (let i = 0; i < 360; i++) {
            let xoff = map(cos(i), -1, 1, 0, noiseMax);
            let yoff = map(sin(i), -1, 1, 0, noiseMax);
            radMin = rad
            radMax = map(noise(xoff + inc, yoff + inc), 0, 1, rad - 200, rad + 200);
            radTotal = map(rad, 1, 500, radMin, radMax)
            var x = radTotal * cos(i);
            var y = radTotal * sin(i);
    
            vertex(x, y);
            
        }
        endShape(CLOSE);
    }
}