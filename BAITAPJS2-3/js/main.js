// Bài 1: Tính tiền lương nhân viên
// Input: Lương 1 ngày (100.000), Số ngày làm (người dùng nhập).

// Process: Tổng lương = Lương 1 ngày * Số ngày làm.

// Output: Hiển thị tổng lương ra web.
document.getElementById("btn-salary").addEventListener("click", function() {
    // 1. Input
    let salaryPerDay = 100000;
    let workingDays = Number(document.getElementById("input-days").value);

    // 2. Process
    let totalSalary = salaryPerDay * workingDays;

    // 3. Output
    document.getElementById("result-salary").innerText = 
        "Tổng lương là: " + totalSalary.toLocaleString() + " VND";
});
// Bài 2: Tính giá trị trung bình
// Input: 5 số thực (người dùng nhập).

// Process: Trung bình = (Số 1 + Số 2 + Số 3 + Số 4 + Số 5) / 5.

// Output: Xuất giá trị trung bình ra màn hình.
document.getElementById("btn-average").addEventListener("click", function() {
    // 1. Input (Lưu ý dùng Number để tránh bị nối chuỗi)
    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);
    let n3 = Number(document.getElementById("num3").value);
    let n4 = Number(document.getElementById("num4").value);
    let n5 = Number(document.getElementById("num5").value);

    // 2. Process
    let average = (n1 + n2 + n3 + n4 + n5) / 5;

    // 3. Output
    document.getElementById("result-average").innerText = "Trung bình cộng: " + average;
});
// Bài 3: Quy đổi tiền (USD -> VND)
// Input: Số tiền USD, Tỷ giá (23.500).

// Process: Tiền VND = USD * 23.500.

// Output: Xuất số tiền sau quy đổi.
document.getElementById("btn-convert").addEventListener("click", function() {
    // 1. Input
    let usdAmount = Number(document.getElementById("input-usd").value);
    const rate = 23500;

    // 2. Process
    let vndAmount = usdAmount * rate;

    // 3. Output
    document.getElementById("result-convert").innerText = 
        "Số tiền quy đổi: " + vndAmount.toLocaleString() + " VND";
});
// Bài 4: Tính diện tích, chu vi hình chữ nhật
// Input: Chiều dài, chiều rộng.

// Process: * Diện tích = dài * rộng

// Chu vi = (dài + rộng) * 2

// Output: Hiển thị kết quả ra web.
document.getElementById("btn-rect").addEventListener("click", function() {
    // 1. Input
    let length = Number(document.getElementById("rect-length").value);
    let width = Number(document.getElementById("rect-width").value);

    // 2. Process
    let area = length * width;
    let perimeter = (length + width) * 2;

    // 3. Output
    document.getElementById("result-rect").innerText = 
        `Diện tích: ${area} - Chu vi: ${perimeter}`;
});
// Bài 5: Tính tổng 2 ký số
// Input: Một số có 2 chữ số (VD: 12, 44, 83).

// Process:

// Hàng chục = Math.floor(số / 10)

// Hàng đơn vị = số % 10

// Tổng = Hàng chục + Hàng đơn vị

// Output: Hiển thị tổng 2 chữ số.
document.getElementById("btn-sum-digits").addEventListener("click", function() {
    // 1. Input
    let number = Number(document.getElementById("input-number").value);

    // 2. Process
    let tens = Math.floor(number / 10); // Lấy số hàng chục
    let units = number % 10;            // Lấy số hàng đơn vị
    let sum = tens + units;

    // 3. Output
    document.getElementById("result-sum-digits").innerText = "Tổng 2 ký số là: " + sum;
});