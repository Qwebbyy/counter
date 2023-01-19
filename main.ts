input.onButtonPressed(Button.AB, function () {
    Counter += 1
})
input.onButtonPressed(Button.B, function () {
    Counter += 1
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("A A M")
})
let Counter = 0
basic.showNumber(Counter)
if (input.buttonIsPressed(Button.A)) {
    Counter += 1
}
