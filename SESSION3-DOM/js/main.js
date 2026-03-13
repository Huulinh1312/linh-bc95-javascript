// Bài 1: getElementById + innerText
// đối tượng để tương tác với HTML => documnet
let btn = document.getElementById("btn-result");
console.log("btn:", btn)
console.dir(btn) // xem chi tiết đối tượng btn
document.getElementById("btn-result").addEventListener("click", function(){
    // Show dữ liệu lên thẻ p
    // B1: truy cặp tới thẻ p trên HTML
    let text = document.getElementById("text-result");
    // B2: gán giá trị vào trong thẻ p
    text.innerText = "Nội dung sau khi click"
})

let btn1 = document.getElementsByClassName("font-bold")
console.log("btn1:",btn1)

// ES6: Arow function

// ES5:
function add(a,b){
    return a + b
}

const add1 = (a , b) => {
    //logic code here
    return a + b
}

// Trường hợp 1: Nếu chỉ có 1 dòng code => lược bớt dòng{} và return
const add2 = (a,b) => a + b

// Trường hợp 2: Nếu chỉ có 1 tham số => lược bớt ndaaus ()
const binhPhuong = a => a * a

//teamplate string 
//phím gần với phím 1
let result =`Function ES5: ${add(3,4)}`

let result1 =`
zxczxc ${binhPhuong(3)}
zcxzxc ${add(3,4)}
zxczxc
zxczxc ${add1(3,4)}`

console.log(result)
console.log("Function ES5:",add(3,4))
console.log("Function ES6:",add1(3,4))
console.log("Function 1 line code ES6:",add2(3,4))
console.log("Function 2 parameter and 1 line code:",binhPhuong(3))

