input.onButtonPressed(Button.A, function () {
    座號 += 1
    最後數 += 1
    if (座號 > 30) {
        最後數 = 最後數 - 31
        座號 = 1
    }
    I2C_LCD1602.ShowNumber(最後數, 5, 0)
})
input.onGesture(Gesture.Shake, function () {
    年級 += 1
    最後數 += 10000
    if (年級 > 9) {
        最後數 = 最後數 - 30000
        年級 = 7
    }
    I2C_LCD1602.ShowNumber(最後數, 5, 0)
})
// 班級座號輸入完畢
input.onButtonPressed(Button.AB, function () {
    I2C_LCD1602.LcdInit(39)
    I2C_LCD1602.clear()
    I2C_LCD1602.ShowString("Put In Your ", 3, 0)
    I2C_LCD1602.ShowString("Homework", 4, 1)
    最後數 = 70100
    if (sonar.ping(
    DigitalPin.P0,
    DigitalPin.P1,
    PingUnit.Centimeters
    ) < 7) {
        I2C_LCD1602.clear()
        I2C_LCD1602.ShowNumber(最後數, 5, 0)
    }
    basic.pause(1000)
    if (sonar.ping(
    DigitalPin.P0,
    DigitalPin.P1,
    PingUnit.Centimeters
    ) < 7) {
        I2C_LCD1602.clear()
        I2C_LCD1602.ShowNumber(最後數, 5, 0)
    }
    basic.pause(1000)
    if (sonar.ping(
    DigitalPin.P0,
    DigitalPin.P1,
    PingUnit.Centimeters
    ) < 7) {
        I2C_LCD1602.clear()
        I2C_LCD1602.ShowNumber(最後數, 5, 0)
    }
    basic.pause(1000)
    if (sonar.ping(
    DigitalPin.P0,
    DigitalPin.P1,
    PingUnit.Centimeters
    ) < 7) {
        I2C_LCD1602.clear()
        I2C_LCD1602.ShowNumber(最後數, 5, 0)
    }
    basic.pause(1000)
    if (sonar.ping(
    DigitalPin.P0,
    DigitalPin.P1,
    PingUnit.Centimeters
    ) < 7) {
        I2C_LCD1602.clear()
        I2C_LCD1602.ShowNumber(最後數, 5, 0)
    }
    basic.pause(1000)
    if (sonar.ping(
    DigitalPin.P0,
    DigitalPin.P1,
    PingUnit.Centimeters
    ) < 7) {
        I2C_LCD1602.clear()
        I2C_LCD1602.ShowNumber(最後數, 5, 0)
    }
    basic.pause(1000)
    if (sonar.ping(
    DigitalPin.P0,
    DigitalPin.P1,
    PingUnit.Centimeters
    ) < 7) {
        I2C_LCD1602.clear()
        I2C_LCD1602.ShowNumber(最後數, 5, 0)
    }
    basic.pause(1000)
    if (sonar.ping(
    DigitalPin.P0,
    DigitalPin.P1,
    PingUnit.Centimeters
    ) < 7) {
        I2C_LCD1602.clear()
        I2C_LCD1602.ShowNumber(最後數, 5, 0)
    }
    basic.pause(1000)
})
input.onButtonPressed(Button.B, function () {
    班級 += 1
    最後數 += 100
    if (班級 > 16) {
        班級 = 1
        最後數 = 最後數 - 1600
    }
    I2C_LCD1602.ShowNumber(最後數, 5, 0)
})
let 最後數 = 0
let 年級 = 0
let 班級 = 0
let 座號 = 0
座號 = 0
班級 = 1
年級 = 7
I2C_LCD1602.LcdInit(39)
最後數 = 70100
I2C_LCD1602.ShowNumber(最後數, 5, 0)
basic.forever(function () {
	
})
