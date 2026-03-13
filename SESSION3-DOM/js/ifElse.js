//Khai báo , Tạo Hàm
const kiemTraChanLe = () => {
    let number = 10
    //dùng if-else khi biết rõ chỉ có 1 trong 2 kết quả
    if (number % 2 == 0){ // if(number % 2)
        console.log(`Số ${number} là số chẳn`)
    } else {
        console.log(`Số ${number} là số lẻ`)
    }
}
//Bài 2 : Nhập vào điểm học sinh 
//xuất ra học lực của học sinh đó

const xepLoai = () => {
    let diem = 9

    // if-else if-..-else 
    if (9 <= diem && diem <=10){
        console.log("XUẤT SẮC")
    } else if (8 <= diem && diem < 9){
        console.log("GIỎI")
    } else if (7 <= diem && diem < 8){
        console.log("KHÁ")
    } else if (6 <= diem && diem < 7){
        console.log("TRUNG BÌNH")
    } else {
        console.log("YẾU")
    }

    //các if() độc lập
     if (9 <= diem && diem <=10){
        console.log("XUẤT SẮC")
    } 

    if (8 <= diem && diem < 9){
        console.log("GIỎI")
    }
    
    if (7 <= diem && diem < 8){
        console.log("KHÁ")
    }
    if (6 <= diem && diem < 7){
        console.log("TRUNG BÌNH")
    }
    if (diem < 5){
        console.log("YẾU")
    }
    
}

//gọi hàm ra sử dụng
kiemTraChanLe()
console.log(kiemTraChanLe())

xepLoai()

// tính tiền taxi
// 1 km đầu: 15.000đ (giá mở cửa)
// từ km thứ 2 - km thứ 5 12.000đ/km
// trên 5km --> 11.000đ
// trên 30km : giảm 10% tổng bill

//case 1: 1km -> 15.000
//case 2: 5km -> 15.000 + (5-1)*12000
// case 3: 10km -> 15.000 + (5-1)*12000 + 5*11.000
//case 4: 35km -> 15.000 + 4*12000 + 30*11000
// (15.000 + 4*12000 + 30*11000)*0.9

const tinhtientaxi = (soKm) =>{
    if (soKm < 0){
        console.log("Số km phải lớn hơn không")
        return "Số km phải lớn hơn 0"
    }
    let tongtien = 0
    if (soKm <= 1){
        tongtien = 15000
    } else if (soKm <= 5) {
        tongtien = 15000 + (soKm - 1) *12000
    } else{
        tongtien = 15000 + 4 * 12000 + (soKm - 5)* 11000
    }

    if (soKm > 30){
        tongtien = tongtien * 0.9
    }

    return `Quảng đường ${soKm}km -> tổng tiền : ${tongtien}VND`
}
console.log(tinhtientaxi(0))
console.log(tinhtientaxi(5))
console.log(tinhtientaxi(10))
console.log(tinhtientaxi(35))

// switch-case
// Nhập số trong khoảng 1 -> 7
//  1 -> chủ nhật 
// 2 -> thứ 2
// ...
// 7 -> thứ 7
// không nằm trong 1 -> 7
const ngaytrongtuan = (thu) =>{
    switch (thu) {
        case 1:
            console.log("Chủ nhật")
            break;
        case 2:
            console.log("Thứ hai")
            break
        case 3:
            console.log("Thứ ba")
            break
        case 4:
            console.log("Thứ tư")
            break
        case 5:
            console.log("Thứ năm")
            break
        case 6:
            console.log("Thứ sáu")
            break
        case 7:
            console.log("Thứ bảy")
            break
        default:
            console.log("Không hợp lệ (nhập 1-7)")
            break;
    }
}

ngaytrongtuan(8)
ngaytrongtuan(5)
ngaytrongtuan(1)
// code chia 2 trường hợp
// best case 
// worst case
// độ phức tạp thuật toán : (best case + worst case) / 2

// Kiểm tra mùa
// nhập vào 1 tháng bất kì trong năm (1->12)
// mùa nào( mùa hè , mùa đông , mùa xuân , mùa thu)

const kiemtramua = (thang) => {
    switch(thang){
        case 1: case 2: case 3: case "mot":
            console.log("Mùa Xuân")
            break
        case 4: case 5: case 6:
            console.log("Mùa Hè")
            break
        case 7: case 8: case 9:
            console.log("Mùa Thu")
            break
        case 10: case 11: case 12:
            console.log("Mua Đông")
            break
        default:
            console.log("Tháng không hợp lệ (Nhập 1 => 12)")
    }
}
kiemtramua("mot")
kiemtramua(1)
kiemtramua(4)
kiemtramua(8)
kiemtramua(10)
kiemtramua(20)
