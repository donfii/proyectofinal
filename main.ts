let LecturA = 0
radio.setGroup(1)
basic.forever(function () {
    LecturA = 0
    led.plotBarGraph(
    0,
    1023
    )
    if (input.buttonIsPressed(Button.A)) {
        basic.clearScreen()
        basic.pause(100)
        basic.showNumber(LecturA)
        basic.showNumber(8)
    } else if (input.buttonIsPressed(Button.A)) {
        basic.showNumber(input.temperature() + 273)
        basic.showString("K")
    } else if (input.buttonIsPressed(Button.B)) {
        basic.showNumber(input.temperature() + 32)
        basic.showString("ºF")
    } else {
        basic.showString("" + (input.temperature()))
        basic.showString("ºC")
    }
})
