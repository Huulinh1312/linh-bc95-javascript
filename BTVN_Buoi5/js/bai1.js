// B1: DOM tới các thẻ trên HTML: input, button
const element = {
    form: document.getElementById('formXetTuyen'),
    inputDiemChuan: document.getElementById('diemChuan'),
    inputDiem1: document.getElementById("diemMon1"),
    inputDiem2: document.getElementById("diemMon2"),
    inputDiem3: document.getElementById("diemMon3"),
    khuVuc: document.getElementById("khuVuc"),
    doiTuong: document.getElementById("doiTuong"),
    btnTinhDiem: document.getElementById("btnTinhDiem"),
    errorDiem1: document.getElementById("errorDiemMon1"),
    errorDiem2: document.getElementById("errorDiemMon2"),
    errorDiem3: document.getElementById("errorDiemMon3"),
    errorDiemChuan: document.getElementById("errorDiemChuan"),
    // Thêm kết quả hiển thị cho đồng bộ html mới
    pResult: document.getElementById("resultTuyenSinh")
}

// tạo object để lưu điểm ưu tiên khu vực và đối tượng 
const DIEM_UU_TIEN_KHU_VUC = {
    A: 2.5,
    B: 1,
    C: 0.5,
    X: 0
}

const DIEM_UU_TIEN_DOI_TUONG = {
    1: 2.5,
    2: 1.5,
    3: 1,
    0: 0
}

// tạo hàm ẩn lỗi
const hideError = (errElement) => {
    if(!errElement) return;
    errElement.innerText = ""
    errElement.classList.add("hidden")
}

// tạo hàm show lỗi
const showError = (errElement, message) => {
    if(!errElement) return;
    errElement.innerText = message
    errElement.classList.remove("hidden")
}

// tách hàm validation ra một hàm riêng để code sạch hơn
const validationInput = (diemChuan, diem1, diem2, diem3) => {
    let isValid = true
    hideError(element.errorDiemChuan)
    hideError(element.errorDiem1)
    hideError(element.errorDiem2)
    hideError(element.errorDiem3)

    if (diemChuan <= 0 || diemChuan > 30 || isNaN(diemChuan)){
        showError(element.errorDiemChuan,"Điểm chuẩn phải từ 0 đến 30")
        isValid = false
    }
    if (diem1 < 0 || diem1 > 10 || isNaN(diem1) ){
        showError(element.errorDiem1, "Điểm môn 1 phải từ 0 đến 10")
        isValid = false
    }
    if (diem2 < 0 || diem2 > 10 || isNaN(diem2)){
        showError(element.errorDiem2, "Điểm môn 2 phải từ 0 đến 10")
        isValid = false
    }
    if (diem3 < 0 || diem3 > 10 || isNaN(diem3)){
        showError(element.errorDiem3, "Điểm môn 3 phải từ 0 đến 10")
        isValid = false
    }
    return isValid
}

element.form.addEventListener('submit', (event) => {
    event.preventDefault()
    const diemChuan = Number(element.inputDiemChuan.value)
    const diem1 = Number(element.inputDiem1.value)
    const diem2 = Number(element.inputDiem2.value)
    const diem3 = Number(element.inputDiem3.value)

    const khuVuc = element.khuVuc.value
    const doiTuong = element.doiTuong.value

    // Validate dữ liệu
    const isValid = validationInput(diemChuan, diem1, diem2, diem3)
    if (!isValid) return

    // B4: Tính điểm ưu tiên [cite: 19]
    const diemUuTienKhuVuc = DIEM_UU_TIEN_KHU_VUC[khuVuc] || 0
    const diemUuTienDoiTuong = DIEM_UU_TIEN_DOI_TUONG[doiTuong] || 0

    // B5: Tính tổng điểm [cite: 18]
    const tongDiem = diem1 + diem2 + diem3 + diemUuTienDoiTuong + diemUuTienKhuVuc

    // B6: Kiểm tra kết quả (Không có môn nào điểm 0) [cite: 17, 21]
    let ketQua = "";
    if (diem1 === 0 || diem2 === 0 || diem3 === 0) {
        ketQua = `Bạn đã rớt do có môn điểm 0. Tổng điểm: ${tongDiem}`
    } else if (tongDiem >= diemChuan) {
        ketQua = `Bạn đã đậu! Tổng điểm: ${tongDiem}`
    } else {
        ketQua = `Bạn đã rớt! Tổng điểm: ${tongDiem}`
    }

    // Hiển thị ra giao diện thay vì alert cho chuyên nghiệp
    element.pResult.innerText = ketQua
    element.pResult.classList.remove("hidden")
})