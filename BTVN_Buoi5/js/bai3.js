// B1: DOM tới các thẻ trên HTML
const elementB3 = {
    inputHoTen: document.getElementById("hoTen"),
    inputThuNhap: document.getElementById("tongThuNhap"),
    inputPhuThuoc: document.getElementById("soNguoiPhuThuoc"),
    btnTinh: document.getElementById("btnThue"),
    pResult: document.getElementById("resultThue")
}

// B2: Tạo hàm xử lý sự kiện click
elementB3.btnTinh.onclick = function () {
    // --- INPUT ---
    let hoTen = elementB3.inputHoTen.value;
    let thuNhap = Number(elementB3.inputThuNhap.value); // Đơn vị: triệu
    let phuThuoc = Number(elementB3.inputPhuThuoc.value);

    // --- PROCESS ---
    // Công thức: Thu nhập chịu thuế = Tổng thu nhập năm - 4tr - Số người phụ thuộc * 1.6tr [cite: 38]
    let thuNhapChiuThue = thuNhap - 4 - (phuThuoc * 1.6);
    let tienThue = 0;

    if (thuNhapChiuThue > 0) {
        // Áp dụng bảng thuế suất [cite: 39]
        if (thuNhapChiuThue <= 60) {
            tienThue = thuNhapChiuThue * 0.05;
        } else if (thuNhapChiuThue <= 120) {
            tienThue = thuNhapChiuThue * 0.1;
        } else if (thuNhapChiuThue <= 210) {
            tienThue = thuNhapChiuThue * 0.15;
        } else if (thuNhapChiuThue <= 384) {
            tienThue = thuNhapChiuThue * 0.2;
        } else if (thuNhapChiuThue <= 624) {
            tienThue = thuNhapChiuThue * 0.25;
        } else if (thuNhapChiuThue <= 960) {
            tienThue = thuNhapChiuThue * 0.3;
        } else {
            tienThue = thuNhapChiuThue * 0.35;
        }
    } else {
        alert("Thu nhập của bạn chưa đến mức phải đóng thuế!");
        thuNhapChiuThue = 0;
    }

    // --- OUTPUT ---
    // Hiển thị kết quả (làm tròn 2 chữ số thập phân cho đẹp)
    elementB3.pResult.innerText = `Họ tên: ${hoTen} - Tiền thuế TNCN: ${tienThue.toFixed(2)} Triệu VND`;
    elementB3.pResult.classList.remove("hidden");
};