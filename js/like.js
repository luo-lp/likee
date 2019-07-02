// 这是一个工具集
// 第一个功能是颜色相关           
function RColor() {
    hex = function () {
        var color_list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f']
        var color = '#'
        for (var i = 0; i < 6; i++) {
            var index = Math.floor(Math.random() * color_list.length)
            color += color_list[index]
        }
        return color
    }
}

function hex() {
    // 定义一个数组 存放0-9 a-b这堆数字

}
console.log(hex())

function hexx() {
    var color = '#'
    for (var i = 0; i < 6; i++) {
        var number = Math.floor(Math.random() * 16)
        color += number.toString(16)
    }
    return color
}
console.log(hexx())