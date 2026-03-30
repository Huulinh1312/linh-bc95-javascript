const sinhVien = [
    {name: "Nguyen Van A", age: 22, diem:9.0},
    {name: "Nguyen Van B", age: 23, diem:8.5},
    {name: "Nguyen Van C", age: 21, diem:7.0},
    {name: "Nguyen Van D", age: 25, diem:4.5},
]

// forEach: duyệt qua từng phần tử của mảng
// Viết tắt của for....of
// KHI NÀO DÙNG:
// - in ra thông tin của từng phàn tử trong mảng 
// - tính toán , xử lý dữ liệu của từng mảng phần tử trong mảng 
// - render giao diện (tạo thẻ html) cho từng phần tử trong mảng

//TH1: in ra tên của từng sinh viên
sinhVien.forEach((sv, index) => {
    console.log(`Tên sinh viên thú ${index + 1} là ${sv.name}`)
})
//TH2: Tính điểm trung bình của tất cả sinh viên 
let dtb = 0
sinhVien.forEach((sv)=>{
    dtb += sv.diem
})
dtb = dtb / sinhVien.length
//TH3: render giao diện cho từng sinh viên //
// hiển thị  danh sách sinh viên 
let htmlContent = ""
sinhVien.forEach((sv)=>{
    htmlContent += `<li> ${sv.name} - ${sv.diem}</li>`
})
//forEach: không trả về mảng mới

//map(): duyệt qua từng phần tử của mảng 
// kêt quả trả về là một mảng mới 
// Sẽ được dùng diều trong REACT để render giao diện 
const newSinhVien = sinhVien.map((sv)=>{
    let xeploai = ""
    if (sv.diem >= 8){
        xeploai = "Giỏi"
    }else if (6.5 <= sv.diem && sv.diem <8){
        xeploai = "Khá"
    }else if (5 <= sv.diem && sv.diem<6.5){
        xeploai = "Trung bình"
    }else {
        xeploai = "Yếu"
    }
    // {
    //     name,age,diem
    // }
    // spread operator:
    // {
    //     name, age, diem, xeploai
    // }
    return {
        ...sv,// giữ nguyên các thuộc tính cũa đối tượng
        xeploai,// thêm thuộc tính XepLoai vào đối tượng mới 
    }
})
console.dir(newSinhVien)

//Hiển thị danh sách sinh viên kèm xếp loại

//filter(): duyệt qua từng phần tử của mảng
// để lọc ra những phần tử thỏa yêu cầu nào đó
//function bên trong filter() phải trả về true hoặc false
const filterSinhVienGioi = sinhVien.filter((sv)=> sv.diem >= 8)
console.dir(filterSinhVienGioi)

const dsPhim = [
    {name: "Deadpool", genre: "Action", rating: 8.5},
    {name: "Avengers", genre: "Action", rating: 8.0},
    {name: "Avengers", genre: "Action 123", rating: 8.0},
    {name: "The NoteBook", genre: "Romance", rating: 7.5},
    {name: "Titanic", genre: "Romance", rating: 9.0}
]

//case 1: lọc ra những phim có rating >= 8
const filterPhimRate8 = dsPhim.filter((phim)=> phim.rating >= 8)
console.dir(filterPhimRate8)

//case 2: tìm tên phim bất kỳ 
const keyword = "a"
const forrmatKeyword = keyword.toLocaleLowerCase()
const findPhim = dsPhim.filter((phim) => phim.name.toLocaleLowerCase().includes(keyword.toLocaleLowerCase()))
console.dir(findPhim)

//find(), findIndex(), some(), every(), reduce(), sort()  
// find() : Tìm phần tử đầu tiên để thỏa mản yêu cầu nào đó , trả về phần tử đó
// kết quả trả về là 1 đối tượng , không phải mảng 
const findPhimAvengers = dsPhim.find((phim)=> phim.name === "Avengers")
console.dir(findPhimAvengers)
// KHI NÀO DÙNG:
// -lấy thông tin chi tiết của một đối tượng theo tên , id , mã số nào đó

//fineIndex(): tìm phần tử đầu tiên để thỏa yêu cầu nào đó , trả về vị trí (index) của phần tử đó trong mảng
const findIndexPhimAvengers = dsPhim.findIndex((phim)=> phim.name ==="Avengers")
console.dir(findIndexPhimAvengers)

//case - 1:
const findIndexPhimNotFound = dsPhim.findIndex((phim)=> phim.name ==="abcdeef")
console.dir(findIndexPhimNotFound) 

// some(): kiểm tra xem có phân tử nào thỏa yêu cầu nào đó hay không , trả về true hoặc false 
// kết quả trả về là booLean
console.log("Some:")
const isSomePhimAction = dsPhim.some((phim)=> phim.genre ==="Action")
console.dir(isSomePhimAction)

// every(): kiểm trả xem tất cả phần tử có thỏa yêu cầu nào đó hay không, trả về true hoặc false
// kết quả trả về là booLean
console.log("Every:")
const isEveryPhimAction = dsPhim.every((phim)=> phim.genre ==="Action")
console.dir(isEveryPhimAction)

//reduce(): duyệt qua từng phần tử của mảng để tính toán ra một giá trị cuối cùng nếu có 
// KHI NÀO DÙNG:
// - tính tổng , tích , trung bình cộng của một mảng số
// - tính tổng tiền các mặt hàng trong giỏ hàng (quản lý sản phẩm , quản lý đơn hàng)
const listNumber = [1,2,3,4,5]
// 0: tạo gái trị khởi tạo cho biến tổng
const sum = listNumber.reduce((num, tong)=>{tong + num},0)
console.log("Tổng: ", sum)