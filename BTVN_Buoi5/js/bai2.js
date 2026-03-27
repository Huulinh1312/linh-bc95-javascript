// B1: DOM tới các thẻ trên HTML
const elementB2 = {
    inputTen: document.getElementById("tenChuHo"),
    inputKw: document.getElementById("soKw"),
    btnTinh: document.getElementById("btnTienDien"),
    pResult: document.getElementById("resultTienDien")
}

// B2: Tạo hàm xử lý sự kiện click
elementB2.btnTinh.onclick = function () {
    // --- INPUT ---
    let ten = elementB2.inputTen.value;
    let kw = Number(elementB2.inputKw.value);
    let tongTien = 0;

    // --- PROCESS (Tính lũy tiến theo từng bậc) ---
    // 50kw đầu : 500đ/kw [cite: 29]
    // 50kw kế : 650đ/kw [cite: 30]
    // 100kw kế: 850đ/kw [cite: 31]
    // 150kw kế: 1100đ/kw [cite: 32]
    // Còn lại : 1300đ/kw [cite: 32]

    if (kw <= 50) {
        tongTien = kw * 500;
    } else if (kw <= 100) {
        tongTien = (50 * 500) + (kw - 50) * 650;
    } else if (kw <= 200) {
        tongTien = (50 * 500) + (50 * 650) + (kw - 100) * 850;
    } else if (kw <= 350) {
        tongTien = (50 * 500) + (50 * 650) + (100 * 850) + (kw - 200) * 1100;
    } else {
        tongTien = (50 * 500) + (50 * 650) + (100 * 850) + (150 * 1100) + (kw - 350) * 1300;
    }

    // --- OUTPUT ---
    elementB2.pResult.innerText = `Chủ hộ: ${ten} - Tổng tiền điện: ${tongTien.toLocaleString()} VND`;
    elementB2.pResult.classList.remove("hidden");
};