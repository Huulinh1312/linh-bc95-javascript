// B1: DOM tới các thẻ trên HTML : input , button 
// dùng object documnet để hạn chế tạo nhiều biến , đẹp code 
const element = {
    form: document.getElementById('formXetTuyen'),
    inputdiemchuan: document.getElementById('diemchuan'),
    inputDiem1: document.getElementById('diemMon1'),
    inputDiem2: document.getElementById('diemMon2'),
    inputDiem3: document.getElementById('diemMon3'),
    khuVuc: document.getElementById('khuVuc'),
    doiTuong: document.getElementById('doiTuong'),
    btnTinhDiem: document.getElementById('btnTinhDiem')
}

//tạo object để lưu điểm ưu tiên khu vực và đối tượng 
const DIEM_UU_TIEN_KHU_VUC ={
    A: 2,
    B: 1,
    C: 0.5
}

const DIEM_UU_TIEN_DOI_TUONG ={
    1: 2.5,
    2: 1.5,
    3: 1
}

// tách hàm validation ra một hàm riêng để code sạch hơn
const validationInput = (diemChuan,diem1,diem2,diem3) => {
    if(isNaN(diemChuan) || isNaN(diem1) || isNaN(diem2) || isNaN(diem3)){
        alert("Vui lòng nhập số vào tất cả các trường điểm")
        return
    }
    // range điểm chuẩn và điểm từng môn phải từ 0 đến 30
    if (diemChuan < 0 || diemChuan > 30){
        // alert("Điểm phải từ 0 đến 30")
        element.errordiemChuan.innerText = ("Diểm phải từ 0 đến 30")
        // Do thẻ p đang có class là hidden nên remove class hidden đo để hiển thị lỗi
        element.errordiemChuan.classList.remove("hidden")
        return
    }
    // Điểm 1
     if (diem1 < 0 || diem1 > 10){
        // alert("Điểm 1 phải từ 0 đến 10")
        element.errordiem1.innerText = ("Điểm 1 phải từ 0 đến 10")
        element.errordiem1.classList.remove("hidden")
        return
    }
    // Điểm 2
     if (diem2 < 0 || diem2 > 10){
        // alert("Điểm 2 phải từ 0 đến 10")
        element.errordiem2.innerText =("Điểm 2 phải từ 0 đến 10")
        element.errordiem2.classList.remove("hidden")
        return
    }
    // Điểm 3
     if (diem3 < 0 || diem3 > 10){
        // alert("Điểm 3 phải từ 0 đến 10")
        element.errordiem3.innerText =("Điểm 3 phải từ 0 đến 10")
        element.errordiem3.classList.remove("hidden")
        return
    }
}

//B2: Tạo hàm xử ký sự kiện click vào button
element.form.addEventListener('submit', (event) =>{
    // event này được lấy khi user click vào button có type là submit
    // B3: Lấy dữ liệu người dùng nhập vào
    // QUAN TRỌNG : khi dùng với thẻ form
    // thì phải dùng even.prevenDefault() để ngăn form submit đi đâu cả
    event.preventDefault()
    const diemChuan = Number(element.inputdiemchuan.value)
    const diem1 = Number(element.inputDiem1.value)
    const diem2 = Number(element.inputDiem2.value)
    const diem3 = Number(element.inputDiem3.value)

    const khuVuc = element.khuVuc.value
    const doiTuong = element.doiTuong.value

    // B4: Tính điểm ưu tiên
    const diemUuTienKhuVuc = DIEM_UU_TIEN_KHU_VUC[khuVuc]
    const diemuuTienDoiTuong = DIEM_UU_TIEN_DOI_TUONG[doiTuong]

    console.log("Điểm Chuẩn:",diemChuan)
    console.log("Điểm 1-2-3:",diem1, diem2, diem3)
    console.log("Khu Vực:",khuVuc,"Đối Tượng:", doiTuong)
    console.log("Điểm Ưu Tiên Khu Vực:",diemUuTienKhuVuc,"Điểm Ưu Tiên Đối Tượng:",diemuuTienDoiTuong)

    //B4.1: Validate dữ liệu người dùng nhập vào
    validationInput(diemChuan, diem1,diem2,diem3)
    //LƯU Ý : code chạy được trước => clean code sau
    // if(isNaN(diemChuan) || isNaN(diem1) || isNaN(diem2) || isNaN(diem3)){
    //     alert("Vui lòng nhập số vào tất cả các trường điểm")
    //     return
    // }
    // // range điểm chuẩn và điểm từng môn phải từ 0 đến 30
    // if (diemChuan < 0 || diemChuan > 30){
    //     alert("Diểm phải từ 0 đến 30")
    //     return
    // }
    // // Điểm 1
    //  if (diem1 < 0 || diem1 > 10){
    //     alert("Điểm 1 phải từ 0 đến 10")
    //     return
    // }
    // // Điểm 2
    //  if (diem2 < 0 || diem2 > 10){
    //     alert("Điểm 2 phải từ 0 đến 10")
    //     return
    // }
    // // Điểm 3
    //  if (diem3 < 0 || diem3 > 10){
    //     alert("Điểm 3 phải từ 0 đến 10")
    //     return
    // }
    // B5: Tính tổng điểm
    const tongDiem = diem1 + diem2 + diem3 + diemUuTienKhuVuc + diemuuTienDoiTuong
    //B6: So sánh tổng điểm với điểm chuẩn và hiển thị kết quả
    if (tongDiem >= diemChuan){
        alert(`Bạn đã đậu! Tổng điểm của bạn là: ${tongDiem}`)
    } else {
        alert(`Bạn đã rớt! Tổng điểm của bạn là: ${tongDiem}`)
    }
})