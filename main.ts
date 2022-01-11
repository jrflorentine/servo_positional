input.onButtonPressed(Button.A, function () {
    if (angle >= 180) {
        angle = 0
    } else {
        angle += 30
    }
    servos.P0.setAngle(angle)
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 5; index++) {
        servos.P0.setAngle(0)
        basic.pause(500)
        servos.P0.setAngle(180)
        basic.pause(500)
    }
})
let angle = 0
angle = 0
servos.P0.setAngle(angle)
basic.forever(function () {
	
})
