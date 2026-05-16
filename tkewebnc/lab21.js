// Lab 21 — Callback Function cơ bản
function calculate(a, b, callback) {
 return callback(a, b)
}
function sum(x, y) {
 return x + y
}
let result = calculate(3, 5, sum)
console.log(result)
