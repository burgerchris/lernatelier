let strip: neopixel.Strip = null
basic.forever(function () {
    strip = neopixel.create(DigitalPin.P2, 24, NeoPixelMode.RGB)
    strip.clear()
    for (let index = 0; index < 3; index++) {
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
        basic.pause(500)
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
        basic.pause(500)
        strip.showColor(neopixel.colors(NeoPixelColors.Blue))
        basic.pause(500)
        strip.showColor(neopixel.colors(NeoPixelColors.Indigo))
        basic.pause(500)
    }
    strip.showRainbow(1, 360)
    while (true) {
        strip.rotate(1)
        strip.show()
        basic.pause(100)
    }
})
