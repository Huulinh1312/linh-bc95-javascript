const elementBai4 = {
    form: document.getElementById("formHoaDon"),
    maKH: document.getElementById("maKH"),
    loaiKH: document.getElementById("loaiKH"),
    wrapKetNoi: document.getElementById("wrapKetNoi"),
    soKetNoi: document.getElementById("soKetNoi"),
    soKenh: document.getElementById("soKenhCaoCap"),
    ketQua: document.getElementById("resultHoaDon"),

    // error element
    errorMaKH: document.getElementById("errorMaKH"),
    errorLoaiKH: document.getElementById("errorLoaiKH"),
    errorSoketNoi: document.getElementById("errorSoKetNoi"),
    errorSoKenh: document.getElementById("errorSoKenhCaoCap") // Sửa ID cho khớp
}

const BANG_GIA = {
    nhaDan: {
        phiXuLy: 4.5,
        phiDichVu: 20.5,
        phiKenhCaoCap: 7.5
    },
    doanhNghiep: {
        phiXuLy: 15,
        phiDichVu10Dau: 75,
        phiKetNoiThem: 5,
        phiKenhCaoCap: 50
    }
}

// Xử lý ẩn hiện ô nhập số kết nối [cite: 55]
elementBai4.loaiKH.addEventListener("change", () => {
    const loai = elementBai4.loaiKH.value
    if(loai === "doanhNghiep") {
        elementBai4.wrapKetNoi.classList.remove("hidden")
    } else {
        elementBai4.wrapKetNoi.classList.add("hidden")
    }
})

const hideErrorBai4 = (errElement) => {
    if(!errElement) return
    errElement.innerText = ""
    errElement.classList.add("hidden")
}

const showErrorBai4 = (errElement, message) => {
    if(!errElement) return
    errElement.innerText = message
    errElement.classList.remove("hidden")
}

const validationInputBai4 = (maKH, loaiKH, soKetNoi, soKenh) => {
    let isValid = true
    hideErrorBai4(elementBai4.errorMaKH)
    hideErrorBai4(elementBai4.errorLoaiKH)
    hideErrorBai4(elementBai4.errorSoketNoi)

    if (maKH === "") {
        isValid = false
        alert("Vui lòng nhập Mã khách hàng")
    }
    if (loaiKH === "") {
        isValid = false
        alert("Vui lòng chọn Loại khách hàng")
    }
    return isValid
}

const tinhHoaDonNhaDan = (soKenh) => {
    const gia = BANG_GIA.nhaDan
    return gia.phiXuLy + gia.phiDichVu + (soKenh * gia.phiKenhCaoCap)
}

const tinhHoaDonDoanhNghiep = (soKetNoi, soKenh) => {
    const gia = BANG_GIA.doanhNghiep
    let phiDichVu = gia.phiDichVu10Dau 
    if (soKetNoi > 10) {
        phiDichVu = gia.phiDichVu10Dau + ((soKetNoi - 10) * gia.phiKetNoiThem)
    }
    return gia.phiXuLy + phiDichVu + (soKenh * gia.phiKenhCaoCap)
}

elementBai4.form.addEventListener("submit", (event) => {
    event.preventDefault()

    const maKH = elementBai4.maKH.value
    const loaiKH = elementBai4.loaiKH.value
    const soKetNoi = Number(elementBai4.soKetNoi.value)
    const soKenh = Number(elementBai4.soKenh.value)

    const isValid = validationInputBai4(maKH, loaiKH, soKetNoi, soKenh)
    if (!isValid) return

    let tongTien = 0
    if (loaiKH === "nhaDan") {
        tongTien = tinhHoaDonNhaDan(soKenh)
    } else {
        tongTien = tinhHoaDonDoanhNghiep(soKetNoi, soKenh)
    }

    // Hiển thị kết quả ra màn hình [cite: 4]
    elementBai4.ketQua.innerText = `Mã khách hàng: ${maKH} - Tổng tiền cáp: $${tongTien.toFixed(2)}`
    elementBai4.ketQua.classList.remove("hidden")
})