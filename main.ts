radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        basic.showIcon(IconNames.Skull)
        Modtaget = 1
    } else {
        if (receivedNumber == 0) {
            basic.showIcon(IconNames.Square)
            Modtaget = 0
        } else {
            if (receivedNumber == 3) {
                basic.showIcon(IconNames.StickFigure)
                if (skift == 0) {
                    skift = 1
                    lock = 0
                } else {
                    if (skift == 1) {
                        skift = 0
                        lock = 1
                    } else {
                    	
                    }
                }
            }
        }
    }
})
function lys () {
    if (lock == 0) {
        for (let index = 0; index <= 4; index++) {
            let b = 0
            flicker = randint(0, 200)
            r1 = r - flicker
            g1 = g - flicker
            b1 = b - 0
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
    } else {
        strip.setPixelColor(0, neopixel.rgb(0, 0, 255))
        strip.setPixelColor(1, neopixel.rgb(0, 0, 255))
        strip.setPixelColor(2, neopixel.rgb(0, 0, 255))
        strip.setPixelColor(3, neopixel.rgb(0, 0, 255))
    }
}
input.onButtonPressed(Button.A, function () {
    Modtaget = 1
})
input.onButtonPressed(Button.B, function () {
    Modtaget = 0
})
let b1 = 0
let g1 = 0
let r1 = 0
let flicker = 0
let skift = 0
let Modtaget = 0
let lock = 0
let g = 0
let r = 0
let strip: neopixel.Strip = null
radio.setGroup(17)
strip = neopixel.create(DigitalPin.P2, 4, NeoPixelMode.RGB)
strip.clear()
strip.show()
r = 200
g = r - 40
g = 80
lock = 1
basic.forever(function () {
    if (Modtaget == 1) {
        lys()
    } else if (Modtaget == 0) {
        strip.clear()
        strip.show()
    } else {
    	
    }
})
