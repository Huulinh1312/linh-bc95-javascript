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