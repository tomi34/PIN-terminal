let omárv = 0
let omár = 0
let kalibrltrtk = 0
let PINb = 0
let PIN = ""
input.onPinPressed(TouchPin.P0, function () {
    if (0 == omárv) {
        if (pins.analogReadPin(AnalogPin.P1) < 341) {
            omr()
        } else if (pins.analogReadPin(AnalogPin.P1) > 682) {
            omr()
        } else if (pins.analogReadPin(AnalogPin.P1) < 682 && pins.analogReadPin(AnalogPin.P1) > 341) {
            basic.showNumber(omár)
        }
    }
})
function omr () {
    omárv = 0
    basic.pause(5000)
    while (!(input.pinIsPressed(TouchPin.P0))) {
        if (input.buttonIsPressed(Button.A)) {
            if (omárv < 10) {
                omárv += 1
            } else if (omárv < 100) {
                omárv += 10
            } else if (omárv < 1000) {
                omárv += 100
            }
            basic.showNumber(omárv)
            basic.pause(100)
            basic.clearScreen()
        } else if (input.buttonIsPressed(Button.B)) {
            if (omárv < 11) {
                omárv += -1
            } else if (omárv < 101) {
                omárv += -10
            } else if (omárv < 1001) {
                omárv += -100
            }
            basic.showNumber(omárv)
            basic.pause(100)
            basic.clearScreen()
        }
    }
    fizets()
}
function fizets () {
    while (!(pins.analogReadPin(AnalogPin.P2) < kalibrltrtk - 10)) {
        basic.pause(100)
    }
    for (let index = 0; index < 4; index++) {
        while (!(input.pinIsPressed(TouchPin.P0))) {
            if (input.buttonIsPressed(Button.A)) {
                PINb += 1
            } else if (input.buttonIsPressed(Button.B)) {
                PINb += -1
            }
        }
        PIN = "" + PIN + PINb
    }
    if (PIN.includes("3794")) {
        if (pins.analogReadPin(AnalogPin.P1) < 341) {
            omár += omárv - omárv * 2
        } else if (pins.analogReadPin(AnalogPin.P1) > 682) {
            omár += omárv
        }
    }
}
basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P2) > 1020) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # # # # #
            . # # # .
            . . # . .
            `)
        basic.pause(1000)
        basic.clearScreen()
        kalibrltrtk = pins.analogReadPin(AnalogPin.P2)
    }
})
