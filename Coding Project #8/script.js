var lines = []
var penColor
var bgColor
var penWidth
var clearBut
var penShape
var penRandom

function setup() {
    createCanvas(windowWidth, windowHeight - 200)
    angleMode(DEGREES)
    noiseDetail(4)
    rectMode(CENTER)

    var options = createDiv().style('display: flex; margin-left: 10px')

    var optionsTitles = createDiv().parent(options)
    createP('Background Color').parent(optionsTitles)
    createP('Pen Color').parent(optionsTitles)
    createP('Pen Width').parent(optionsTitles)
    createP('Pen Shape').parent(optionsTitles)

    var optionsValues = createDiv().parent(options).style('margin: 10px 40px; width: 70px')
    bgColor = createColorPicker('#1e1e1e').parent(optionsValues)
    penColor = createColorPicker('#ffffff').parent(optionsValues).style('margin-top: 10px')
    penRandom = createCheckbox("", false).parent(optionsValues).style('display: inline')
    penWidth = createSelect(false).parent(optionsValues).style('margin-top: 10px; width: 50px; height: 25px')
    penWidth.option('2')
    penWidth.option('4')
    penWidth.option('8')
    penWidth.option('16')
    penWidth.option('32')

    penShape = createSelect(false).parent(optionsValues).style('margin-top: 10px; width: 50px; height: 25px')
    penShape.option('Line')
    penShape.option('Circle')
    penShape.option('Rectangle')
    penShape.option('Triangle')
    penShape.option('Star')

    clearBut = createButton('Clear').parent(options).style('margin: 10px; width: 100px; height: 100px')
}

function draw() {
    background(bgColor.value())

    if (penRandom.checked()) {
        var r = hex(floor(map(noise(frameCount / 100), 0, 1, 0, 255)), 2)
        var g = hex(floor(map(noise(frameCount / 100 + 1000), 0, 1, 0, 255)), 2)
        var b = hex(floor(map(noise(frameCount / 100 + 2000), 0, 1, 0, 255)), 2)
    
        penColor.value('#' + r + g + b)
    }

    

    clearBut.mousePressed(function() {
        lines = []
    })

    if (mouseIsPressed) {
        var line = new MyLine(penColor.value(), penWidth.value(), penShape.value())
        lines.push(line)
    }

    for (var line of lines) {
        line.show()
    }
}