console.log("Hello world")

// 1. Toán tử số học (+ - * / %(chia lấy dư) **(lũy thừa))
let number1 = 7
let number2 = 3

// Phép Cộng +
// ==> phép gần giá trị 
// Kết quả của tổng của number1 và number2 sẽ được gán vào biến sum
// Cách 1: Sử dụng toán tử gán (=) để gán kết quả của phép cộng vào biến sum
let sum = number1 + number2
// clg
console.log("TổngC1:", sum)
// Cách 2: 
console.log("TổngC2:", number1 + number2)

// Phép Cộng Bằng+=
// Cách 1: Sử dụng toán tử gán cộng (+=) để cộng giá trị của number1 vào biến sum
sum += number1 // sum = sum + number1
sum++ // sum = sum + 1
++sum // sum = sum + 1
console.log("Tổng sau khi sử dụng +=:", sum)

// Phép Trừ-
let number3 = 10
let number4 = 5
let minus = number3 - number4
console.log("Hiệu:", minus)
minus -= number3 // minus = minus - number3
minus-- // minus = minus - 1
--minus // minus = minus - 1

// Phép Nhân *
let number5 = 12
let number6 = 7
let multi = number5 * number6
console.log("Tích:", multi)
multi *= number5 // multi = multi * number5
// không có phép nhân bằng **

// Phép Chia /
let number7 = 17
let number8 = 3
let divive = number7 / number8
console.log("Thương:", divive)
divive /= number7 // divive = divive / number7
// không có phép chia bằng /=

// Phép chia lấy dư %
let number9 = 25
let number10 = 4
let divive1 = number9 % number10
console.log("Chia lấy dư:", divive1)
divive1 %= number9 // divive1 = divive1 % number9
// không có phép chia lấy dư bằng %=

// 2. Các phép toán so sánh, nối các điêu kiện
// Toán tử so sánh: >, <, >=, <=, ==, !=, ===, !==
// ==> Kết quả trả về là một giá trị boolean (true hoặc false)
// LƯU Ý: các phép toán so sánh sẽ đi kèm với if-else, toán tử ba ngôi 
// Toán tử logic: &&, ||, !
// Toán tử nối chuỗi: +
// Toán tử điều kiện: ?:

let a = 5
let b = 8
let ss1 = a > b // false
console.log("So sánh a > b:", ss1)

// != => kiểm tra lỏng lẻo, nghĩa là chỉ kiểm tra giá trị , khong kiểm tra kiểu dữ liệu
let c =7
let d = "7"
let ss2 = (c != d) // false
console.log("So sánh c != d:", ss2)

// !== => kiểm tra nghiêm ngặt, nghĩa là kiểm tra cả giá trị và kiểu dữ liệu
let ss3 = (c !== d) // true
console.log("So sánh c !== d:", ss3)

// Tương đường với ==(Kiểm tra lỏng lẻo) và ===(Kiểm tra nghiêm ngặt)
//  ! Phủ định 
let e = true
console.log("Phủ định của e:", !e)

// Toán tử nối các điều kiện 
// &&
// (a > b ) && (a > c)
// true  && true => true
// true  && false => false
// false && true => false
// false && false => false
//  chỉ cần 1 điều kiện là false thì kết quả là false

//  || => OR
// (a > b) || (a > c)
// true  || true => true
// true  || false => true
// false || true => true
// false || false => false
// chỉ cần 1 điều kiện là true thì kết quả là true

// Bài Tập 1: Tính Lương Nhân Viên
// INPUT: Lương 1 ngày làm việc, số ngày làm việc
// Lương 1 ngày làm việc: 100.000đ
// số ngày làm việc :30 ngày 
// OUTPUT: Tổng lương nhân viên trong số ngày làm việc 
// input
let salaryPerDay = 1000000
let workingDay = 22
// process
let totalSalary = salaryPerDay * workingDay
// output
console.log("Tổng lương nhân viên:", totalSalary)

// Bài Tập 2: Tính Trung Bình Cộng
// INPUT: 5 số thực
// number1 => number5
// OUTPUT: Trung bình cộng của 5 số thực
// input
let num1 = 10
let num2 = 8
let numb3 = 10
let num4 = 9.5
let numb5 = 10
// process
let average = (num1 + num2 + numb3 + num4 + numb5) / 5
// output 
console.log("Tổng số điểm trung bình:", average)

// Bài 3 : Tính chu vi và diện tích hình chữ nhật
// INPUT: Chiều dài, chiều rộng
// OUTPUT: Chu vi và diện tích hình chữ nhật
// input
let length = 5
let width = 3
// process
let per = 2 *(length + width)
let area = length * width
// output
console.log("Chu vi hình chữ nhật:", per)
console.log("Diện tích hình chữ nhật:",area)