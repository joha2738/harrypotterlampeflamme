radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        basic.showIcon(IconNames.Heart)
        Modtaget = 1
    }
})
function lys () {
    for (let index = 0; index <= 4; index++) {
        let b = 0
        flicker = randint(0, 200)
        r1 = r - flicker
        g1 = g - flicker
        b1 = b - flicker
        if (b1 < 0) {
            b1 = 0
        }
        if (r1 < 0) {
            r1 = 0
        }
        if (g1 < 0) {
            g1 = 0
        }
        strip.setPixelColor(index, neopixel.rgb(r1, g1, b1))
        strip.show()
        basic.pause(randint(0, 100))
    }
}
input.onButtonPressed(Button.A, function () {
    Modtaget = 0
})
input.onButtonPressed(Button.B, function () {
    Modtaget = 1
})
let b1 = 0
let g1 = 0
let r1 = 0
let flicker = 0
let Modtaget = 0
let g = 0
let r = 0
let strip: neopixel.Strip = null
radio.setGroup(17)
strip = neopixel.create(DigitalPin.P2, 4, NeoPixelMode.RGB)
strip.clear()
strip.show()
r = 255
g = r - 40
g = 40
basic.forever(function () {
    if (Modtaget == 1) {
        lys()
    } else if (Modtaget == 0) {
        strip.clear()
        strip.show()
    } else {
    	
    }
})
