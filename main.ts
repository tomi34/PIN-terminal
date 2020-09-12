let omárv = 0
let omár = 0
let PINb = 0
let PIN = ""
input.onPinPressed(TouchPin.P0, function () {
    if (0 == omárv) {
        if (pins.analogReadPin(AnalogPin.P1) < 341) {
            omár2()
        } else if (pins.analogReadPin(AnalogPin.P1) > 682) {
            omár2()
        } else {
            if (734 < input.magneticForce(Dimension.Strength)) {
                basic.showNumber(omár)
            }
        }
    }
})
function fizetes2 () {
    while (pins.analogReadPin(AnalogPin.P0) < 340) {
        if (input.buttonIsPressed(Button.A)) {
            if (PINb < 9) {
                omárv += 1
                PIN = "" + PIN + PINb
                basic.showString(PIN)
            }
        }
        if (input.buttonIsPressed(Button.B)) {
            if (omárv > 0) {
                PINb += -1
                PIN = "" + PIN + PINb
                basic.showString(PIN)
            }
        }
    }
    if (PIN == "3794") {
        if (pins.analogReadPin(AnalogPin.P1) < 341) {
            omár += omárv - 2 * omárv
        } else if (pins.analogReadPin(AnalogPin.P1) > 682) {
            omár += omárv
        }
        omárv = 0
    } else {
        if (PIN.length < 4) {
            fizetes2()
        }
    }
}
function omár2 () {
    basic.pause(100)
    while (pins.analogReadPin(AnalogPin.P0) < 340) {
        if (input.buttonIsPressed(Button.A)) {
            if (omárv < 9) {
                omárv += 1
                basic.showNumber(omárv)
            }
        }
        if (input.buttonIsPressed(Button.B)) {
            if (omárv > 0) {
                omárv += -1
                basic.showNumber(omárv)
            }
        }
    }
    while (pins.analogReadPin(AnalogPin.P0) < 340) {
        if (input.buttonIsPressed(Button.A)) {
            if (omárv <= 90) {
                omárv += 10
                basic.showNumber(omárv)
            }
        }
        if (input.buttonIsPressed(Button.B)) {
            if (omárv >= 10) {
                omárv += -10
                basic.showNumber(omárv)
            }
        }
    }
    while (pins.analogReadPin(AnalogPin.P0) < 340) {
        if (input.buttonIsPressed(Button.A)) {
            if (omárv <= 900) {
                omárv += 100
                basic.showNumber(omárv)
            }
        }
        if (input.buttonIsPressed(Button.B)) {
            if (omárv >= 100) {
                omárv += -100
                basic.showNumber(omárv)
            }
        }
    }
    while (pins.analogReadPin(AnalogPin.P0) < 340) {
        if (input.buttonIsPressed(Button.A)) {
            if (omárv <= 9000) {
                omárv += 1000
                basic.showNumber(omárv)
            }
        }
        if (input.buttonIsPressed(Button.B)) {
            if (omárv >= 1000) {
                omárv += -1000
                basic.showNumber(omárv)
            }
        }
    }
}
function fizetes () {
    if (734 < input.magneticForce(Dimension.Strength)) {
        fizetes2()
    } else {
        fizetes()
    }
}
