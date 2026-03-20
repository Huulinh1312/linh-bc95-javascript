//Khai báo mãng số nguyên
let numbers = [1, 2, 3, 4, 5, 6]
let fruits = ["cam","nho","man","tao","le"]

console.log(`numbers: ${numbers}`)
console.log(`fruits: ${fruits}`)
console.log(numbers[2])
console.log(fruits[4])
//1. Đếm số lượng phần tử của mảng
console.log(`Số lượng phần tử trong mảng là: ${numbers.length}`)
//2. Lấy phần tử cuối cùng của mảng 
// Chỉ số phần tử cuối cùng của mảng: length - 1
console.log(`Phần tử cuối cùng của mảng là: ${numbers[numbers.length-1]}`)

// unshift() => [Đầu mảng][1, 2, 3, 4, 5, 6][Cuối mảng] <= push()
// shift()   <= [Đầu mảng][1, 2, 3, 4, 5, 6][Cuối mảng] => pop()

// push(): thêm phần tử vào cuối mảng
numbers.push(7)
console.log(`mảng số nguyên mới là: ${numbers}`) // [1, 2, 3, 4, 5, 6, 7]

// unshift(): thêm phần tử vào đầu mảng
numbers.unshift(0)
console.log(`Mảng số nguyên mới sau khi thêm vào đầu mảng là: ${numbers}`)

//pop(): xóa phần tử cuối cùng của mảng
let removeItem = numbers.pop()
console.log(`Phần tử bị xóa là: ${removeItem}. Mảng mới là: ${numbers}`)

// shift(): xóa phần tử đầu tiên của mảng
let removeFirst = numbers.shift()
console.log(`Phần tử bị xóa là: ${removeFirst}. Mảng mới là: ${numbers} `)

//splice: có thể xóa, sửa, thêm
//splice( vị trí bắt đầu, số lượng xóa, phần tử thêm vào (xóa) )
//LƯU Ý: HÀM NÀY LÀM THAY ĐỔI MẢNG GỐC

// XÓA -splice( Vị trí bắt đàu xóa, số lượng phần tử cần xóa)
let food = ["Phở", "Cơm", "Mì", "Gỏi cuốn", "Bún bò"]
//Th1: Xóa cơm
food.splice(1, 1)
console.log(` Mảng mới là: ${food}`)
//TH2: Xóa hết
food.splice(0)
console.log(` Mảng sau khi xóa hết: ${food}`)

// THÊM - splice(vị trí bắt đầu thêm, 0, những item cần thêm)
let langs = ["HTML", "CSS", "javascript"]
// Thêm python và java ở giữa HTML và CSS
langs.splice(1, 0, "python", "java" )
console.log(` Mảng sau khi thêm là: ${langs}`)

// THAY THẾ - splice(vị trí thay thể, số lượng cần xóa, những item cần thêm)
let team = ["An", "Bình", "Cường", "Dũng", "Em"]
// Xóa Bình thay thế là Trinh và Thúy
team.splice(1, 1, "Trinh", "Thúy")
console.log(` Mảng mới sau khi thay thể là: ${team}`)






//ES6:
// 1. arrow function: () => {}
// 2. let, const
// let: dùng cho những biến mà có thể thay đổi giá trị đc
// const: dùng cho những biến mà k thể thay đổi đc
// 3.template string: `${variable hoặc function}`

// 4. default parameter
const add10 = (number1=1, number2=2, number3=10) => {
    //code mới thêm
    if (number3) {
        return number1 + number2 + number3
    }
    /// -------------
    //code cũ
    return number1 + number2
}
console.log("default parameter")
console.log(add10(3, 4))
console.log(add10(5))
console.log(add10())
console.log(add10(1, 2, 3))

// 5. spread operator
// spread - trải ra
// Dùng trong: Copy mảng/object, nối mảng/merge object, truyền vào hàm
// Ý nghĩa: giảm thiểu code thủ công: copy mảng, nối mảng, truyền vào hàm
//TH1 : Copy mảng
const original = [1, 2, 3]
//Dùng const và ... để copy mảng
const copyOriginal = [...original]
copyOriginal.push(4)
console.log(` Mảng cũ: ${original}`)
console.log(` Mảng mới: ${copyOriginal}`)

// TH2: Nối mảng
const frontend = ["html", "css", "javascript"]
const backend = ["expressJS", "nestJS"]
const fullstack = [...frontend, ...backend]
console.log(` Fullstack: ${fullstack}`)

// JS buổi 3: Bài Tập 
// loop - for 
// + tìm điều kiện bắt đầu vào loop in các số từ 1->50
// in ra các phần tử của mảng
// + Tìm điểu kiện dừng loop
// + logic để tiến tới điều kiện dừng 
// VD1: in các số tù 1->50
// - Tìm điều kiện bắt đầu vòng lặp 
// Tạo 1 biến chạy (con trỏ)
// i(iterator) : i = 1
// - Tìm điều kiện dừng : i<=50
// - Logic để tiến tới điều kiện dừng 
// i = i + 1 => i++
// for (Điều kiện bắt đầu loop , điều kiện dừng ; logic tiến tới điều kiện dừng){
//code }
// for(let i = 1 ; i <= 50; i++){console.log(i)}

// Bài 1: in các sô từ 1 đén n với n nhập từ bằng phím 
const printnumbers = (n) => {
    // kiểm tra giá trị n có hợp lệ không
    // TH1: n < 0 => lỗi
    // TH2: n không phải là số => lõi
    if (n < 0 || isNaN(n)){
        console.log("Giá trị n không hợp lệ")
        return
    }

    for (let i = 1; i <= n; i++){
        console.log(i)
    }
}
printnumbers(5)
printnumbers(-3)
printnumbers("abc")

// Bài 2: in các số chẳn từ 1 => n
const printEvenNumbers = (n) => {
    if (n < 0 || isNaN(n)) {
        console.log("Giá trị n không hợp lệ")
        return
    }
    for (let i = 2; i <= n; i += 2) {
        console.log(i)
    }
}

printEvenNumbers(10)  
printEvenNumbers(7)   
printEvenNumbers(-2)  

// Bài 3: đếm xem có bao nhiêu só chẵn , só lẻ từ 1 -> n
const countEvenOdd = (n) => {
    // tạo 2 biến đếm chẳn và lẻ
    if (n < 0 || isNaN(n)) {
        console.log("Giá trị n không hợp lệ")
        return
    }

    let countchan = 0
    let countle = 0

    for (let i = 1; i <= n; i++) {
        if (i % 2 === 0) {
            countchan++
        } else {
            countle++
        }
    }
    console.log(countchan, countle)
}

countEvenOdd(11)  
countEvenOdd(7)   
countEvenOdd(-2)

// Loop qua mảng 
const numbers2 = [1, 2, 3, 4, 5]
// điều kiện vòng lặp: duyệt từ item đầu tiên của mảng thông 
// qua index (chỉ số) -> let i = 0

// điều kiện kết thúc vòng lặp : duyệt tới cuối mảng 
// i < số lượng phân tử của mảng (numbers2.length)

// bước nhảy : tăng i lên 1 đơn vị -> i++
const printArray = (arr) => {
    for(let i = 0; i < arr.length; i++){
        console.log(arr[i])
    }
}
// WHILE
const printArrayWithWhile =(arr) =>{
    let i = 0
    while(i < arr.length){
        console.log(arr[i])
        i++
    }
}
console.log("in mảng số nguyên")
//LƯU: arr và numbers2 phải cùng kiểu dữ liệu (mảng)
printArray(numbers2)



// tìm số lớn nhất trong mảng
const numbers3 = [4, 3, 7, 1, 9, 10, -4, -5]

const findMax = (arr) => {

    let max = arr[0]
    // for (let i = 1; i < arr.length; i++) {
    //     if (arr[i] > max) {
    //         max = arr[i]
    //     }
    // }
    // return max
    let i = 1
    while(i < arr.length){
        if(arr[i]> max){
            max = arr[i]
        }
        i++
    }
}

const maxNumber = findMax(numbers3)
console.log(`Số lớn nhất trong mảng là: ${maxNumber}`) 

// duyệt từ cuối mảng đến đầu mảng 
// for(let i = length -1; i>=0; i--)
// mảng mới push -> thêm phần tử mới vào cuối mảng
// đảo ngược mảng 
// trước khi đảo 4,3,6,8,1 
// Sau khi đảo 1,8,6,3,4

const numbers4 = [4,3,6,8,1]
const reverse = (arr) => {
    let reverse = []
    for(let i = arr.length -1; i>=0; i--){
        reverse.push(arr[i])
    }
    return reverse
}
console.log(`Mảng trước khi đảo ngược: ${numbers4}`)
console.log(`Mảng sau khi đảo ngược: ${reverse(numbers4)}`)

// LÀM BÀI TẬP MẢNG CÁC ĐỐI TƯỢNG (OBJECT)
// DANH SÁCH SINH VIÊN: tên, tuổi , điểm trung bình

const students = [
    {name: "Linh",  age:21, gpa: 9},
    {name: "Nguyên",  age:21, gpa: 8.5},
    {name: "Tú",  age:21, gpa: 8},
    {name: "Phúc",  age:21, gpa: 7}
]
// in ra sinh viên có điểm trung bình cao nhất lớp
const finetopstudent = (students) => {
    let topstudent = students[0]
    for(let i = 1; i < students.length; i++){
        if(students[i].gpa > topstudent.gpa){
            topstudent = students[i]
        }
    }
    console.log(`Sinh viên có diểm trung bình cao nhất là: ${topstudent.name} với điểm trung bình là: ${topstudent.gpa.toFixed(1)}`)
}
finetopstudent(students)

// hãy sắp xếp sinh viên theo điểm trung bình từ cao đến thấp (thấp -> cao)
// sort có sẵn của javascript để hổ trợ sắp xếp mảng
// LƯU Ý: hàm sort sẽ làm thay đổi mãng gốc => NÊN COPY MẢNG TRƯỚC KHI SẮP XẾP  

const sortstudentsbygpa = (students) => {
    // copy mảng gốc => dùng spread operator
    const copystudents = [...students]
    copystudents.sort((a,b)=> b.gpa - a.gpa)
    console.log(`Danh sách sinh viên sau khi sắp xếp theo diểm trung bình từ cao đến thấp: `)
    console.dir(copystudents)
}
sortstudentsbygpa(students)

// sort((a,b)=> b.gpa - a.gpa)
// 4,7,1,8,3
// < 0 => a đứng trước b
// =0 => giữ nguyên
// > 0 => b đứng trước a

// tự build hàm sắp xếp
// loop lồng nhau
// for(){
// for(){
// }}
// => độ phức tạp là 0(n^2)

// o(nlogn) => đệ quy

// DÙNG FOR OF ĐỂ LOOP QUA MẢNG
// KHÔNG DÙNG CHỈ SỐ NHƯ FOR THƯỜNG
const colors = ["đỏ", "xanh", "vàng", "tím"]
for(let color of colors) {
    console.log(color)
}
// FOR DÀNH CHO OBJECT
const student1 = {
    name: "Linh",
    age: 20 ,
    gpa: 9
}
for(let key in student1){
    console.log(`Key: ${key}, value: ${student1[key]}`)
}
// map(), filter(), reduce(), some(), every(), ......


// for ( điều kiện bắt đầu; điều kiện dừng; bước nhảy)
// while -> khi ko biết trước số lần lặp 
// nhập menu.user nhập sai => bắt user nhập lại
// nhập các số từ bàn phím . kết thúc khi user gõ dấu
// điều kiện bắt đầu
// while(điều kiện dừng){
//code
//bước nhảy}
// loop:
// -loop lồng nhau 
// -map(), filter(), reduce(), some(), every(), ......
// import/export ES6
// bắt đồng bộ trong ES6, call API - axios

// 6. rest parameter

// 7. import, export

// 8. destructuring

// 9. async/await , promise , callback - bắt đồng bộ trong JS
// dừng dể chờ kết quả trả về từ sever rồi mới chạy tiếp