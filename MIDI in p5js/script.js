
var pressedNotes = []
var releasedNotes = []
var bubbles = []
var keys = []

navigator.requestMIDIAccess().then(function(midiAccess) {
    for (var input of midiAccess.inputs.values()) {
        input.onmidimessage = getMIDIMessage;
    }
});

function getMIDIMessage(midiMessage) {
    if (midiMessage.data[0] === 144) {
        for (var i = 0; i < releasedNotes.length; i++) {
            if (releasedNotes[i] === midiMessage.data[1]) {
                releasedNotes.splice(i, 1)
            }
        }
        var note = midiMessage.data[1]
        var isPressed = false
        pressedNotes.push([note, isPressed])
        
    }
    if (midiMessage.data[0] === 128) {
        for (var i = 0; i < pressedNotes.length; i++) {
            if (pressedNotes[i][0] === midiMessage.data[1]) {
                pressedNotes.splice(i, 1)
            }
        }
        var note = midiMessage.data[1]
        releasedNotes.push(note)
    }
}

function setup() {
    createCanvas(900, 900)
    angleMode(DEGREES)
    rectMode(CENTER)
}

function draw() {

    background(0)

    var firstNote = 36
    var lastNote = 86

    var bounds = width / (lastNote - firstNote)
    
    for (var i = firstNote; i <= lastNote; i++) {

        var x = map(i, firstNote, lastNote, 0, width)
        var y = height
    
        for (var note of pressedNotes) {
            if (note[0] === i && frameCount % 2 === 0) {
                var b = new Bubble(x, y, bounds)
                bubbles.push(b)
                
                
            }
            if (note[0] === i && !note[1]) {
                for (var j = 0; j < keys.length; j++) {
                    if (keys[j].note === note[0]) {
                        keys.splice(j, 1)
                    }
                }
                var k = new Key(x, y, bounds, i)
                keys.push(k)
                note[1] = true
            }
        }
    }

    for (var i = keys.length - 1; i >= 0; i--) {

        for (var j = 0; j < pressedNotes.length; j++) {
            if (keys[i].note === pressedNotes[j][0]) {
                keys[i].fadeIn()
            }
        }
        for (var j = 0; j < releasedNotes.length; j++) {
            if (keys[i].note === releasedNotes[j]) {
                keys[i].fadeOut()
            }
        }
        keys[i].show()
        
        if (keys[i].alpha < 0) {
            keys.splice(i, 1)
        }        
    }
    for (var i = bubbles.length - 1; i >= 0; i--) {
        if (bubbles[i].alpha > 0) {
            bubbles[i].update()
            bubbles[i].show()
        } else {
            bubbles.splice(i, 1)
        }
    }
}