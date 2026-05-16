// Lab 24 — Tự viết hàm duyệt mảng bằng callback
function loopArray(array, callback) {
 for (let i = 0; i < array.length; i++) {
 callback(array[i])
 }
}
loopArray([1, 2, 3], function(item) {
 console.log(item)
})
