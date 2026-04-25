// --- KHỞI TẠO BIẾN TOÀN CỤC ---
let arrNum = []; // Mảng chính lưu số nguyên
let arrFloat = []; // Mảng phụ cho câu 9 lưu số thực

// --- DOM ELEMENTS TỐI ƯU ---
const el = {
    inputNum: document.getElementById("inputNum"),
    btnAdd: document.getElementById("btnAdd"),
    txtArray: document.getElementById("txtArray"),
    
    // Câu 9
    inputFloat: document.getElementById("inputFloat"),
    btnAddFloat: document.getElementById("btnAddFloat"),
    txtFloatArray: document.getElementById("txtFloatArray"),
};

// Hàm hiển thị kết quả (Tái sử dụng cho code gọn)
const showResult = (id, text) => {
    let resultEl = document.getElementById(id);
    resultEl.innerText = text;
    resultEl.classList.remove("hidden");
};

// ==========================================
// THÊM SỐ VÀO MẢNG
// ==========================================
el.btnAdd.onclick = function () {
    let num = Number(el.inputNum.value);
    if (el.inputNum.value === "") {
        alert("Vui lòng nhập số!");
        return;
    }
    arrNum.push(num); // Thêm vào mảng
    el.txtArray.innerText = `[ ${arrNum.join(", ")} ]`; // Hiển thị mảng
    el.inputNum.value = ""; // Xóa ô input
    el.inputNum.focus();
};


// 1. TỔNG CÁC SỐ DƯƠNG TRONG MẢNG
// ==========================================
document.getElementById("btnSumPos").onclick = function() {
    let sum = 0;
    for (let i = 0; i < arrNum.length; i++) {
        if (arrNum[i] > 0) sum += arrNum[i];
    }
    showResult("resSumPos", `Tổng các số dương là: ${sum}`);
};


// 2. ĐẾM CÓ BAO NHIÊU SỐ DƯƠNG TRONG MẢNG
// ==========================================
document.getElementById("btnCountPos").onclick = function() {
    let count = 0;
    for (let i = 0; i < arrNum.length; i++) {
        if (arrNum[i] > 0) count++;
    }
    showResult("resCountPos", `Có ${count} số dương trong mảng.`);
};


// 3. TÌM SỐ NHỎ NHẤT TRONG MẢNG
// ==========================================
document.getElementById("btnFindMin").onclick = function() {
    if (arrNum.length === 0) return showResult("resFindMin", "Mảng đang rỗng!");
    
    let min = arrNum[0];
    for (let i = 1; i < arrNum.length; i++) {
        if (arrNum[i] < min) min = arrNum[i];
    }
    showResult("resFindMin", `Số nhỏ nhất là: ${min}`);
};


// 4. TÌM SỐ DƯƠNG NHỎ NHẤT TRONG MẢNG
// ==========================================
document.getElementById("btnFindMinPos").onclick = function() {
    let posArr = [];
    // Lọc ra các số dương
    for (let i = 0; i < arrNum.length; i++) {
        if (arrNum[i] > 0) posArr.push(arrNum[i]);
    }

    if (posArr.length === 0) {
        showResult("resFindMinPos", "Không có số dương trong mảng!");
    } else {
        let minPos = posArr[0];
        for (let i = 1; i < posArr.length; i++) {
            if (posArr[i] < minPos) minPos = posArr[i];
        }
        showResult("resFindMinPos", `Số dương nhỏ nhất là: ${minPos}`);
    }
};

// 5. TÌM SỐ CHẴN CUỐI CÙNG TRONG MẢNG. NẾU MẢNG KHÔNG CÓ GIÁ TRỊ CHẴN THÌ TRẢ VỀ -1
// ==========================================
document.getElementById("btnFindLastEven").onclick = function() {
    let lastEven = -1; // Mặc định trả về -1 nếu không có
    // Chạy vòng lặp từ dưới lên trên sẽ tìm số cuối cùng nhanh hơn
    for (let i = arrNum.length - 1; i >= 0; i--) {
        if (arrNum[i] % 2 === 0) {
            lastEven = arrNum[i];
            break; // Tìm thấy thì dừng luôn
        }
    }
    showResult("resFindLastEven", `Số chẵn cuối cùng là: ${lastEven}`);
};


// 6. ĐỔI CHỖ 2 GIÁ TRỊ TRONG MẢNG THEO VỊ TRÍ VÀ CHO NHẬP VÀO 2 VỊ TRÍ MUỐN ĐỔI CHỖ GIÁ TRỊ (Theo Vị Trí / Index)
// ==========================================
document.getElementById("btnSwap").onclick = function() {
    let idx1 = Number(document.getElementById("idx1").value);
    let idx2 = Number(document.getElementById("idx2").value);

    // Kiểm tra index có hợp lệ không
    if (idx1 < 0 || idx2 < 0 || idx1 >= arrNum.length || idx2 >= arrNum.length) {
        alert("Vị trí không hợp lệ!");
        return;
    }

    // Đổi chỗ bằng biến tạm (temp)
    let temp = arrNum[idx1];
    arrNum[idx1] = arrNum[idx2];
    arrNum[idx2] = temp;

    // Cập nhật lại giao diện mảng
    el.txtArray.innerText = `[ ${arrNum.join(", ")} ]`;
    showResult("resSwap", `Đã đổi chỗ vị trí ${idx1} và ${idx2} thành công!`);
};


// 7. SẮP XẾP MẢNG THEO THỨ TỰ TĂNG DẦN
// ==========================================
document.getElementById("btnSort").onclick = function() {
    // Thuật toán Bubble Sort hoặc dùng hàm sort() của JS
    for (let i = 0; i < arrNum.length - 1; i++) {
        for (let j = i + 1; j < arrNum.length; j++) {
            if (arrNum[i] > arrNum[j]) {
                let temp = arrNum[i];
                arrNum[i] = arrNum[j];
                arrNum[j] = temp;
            }
        }
    }
    el.txtArray.innerText = `[ ${arrNum.join(", ")} ]`;
    showResult("resSort", "Đã sắp xếp mảng tăng dần!");
};

// ==========================================
// 8. TÌM SỐ NGUYÊN TỐ ĐẦU TIÊN TRONG MẢNG . NẾU MẢNG KHÔNG CÓ SỐ NGUYÊN TỐ THÌ TRẢ VỀ -1
// ==========================================
// Hàm kiểm tra số nguyên tố
const isPrime = (n) => {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
};

document.getElementById("btnFirstPrime").onclick = function() {
    let firstPrime = -1;
    for (let i = 0; i < arrNum.length; i++) {
        if (isPrime(arrNum[i])) {
            firstPrime = arrNum[i];
            break;
        }
    }
    showResult("resFirstPrime", `Số nguyên tố đầu tiên là: ${firstPrime}`);
};

// 9.NHẬP THÊM 1 MẢNG SỐ THỰC , TÌM XEM TRONG MẢNG CÓ BAO NHIÊU SỐ NGUYÊN?
//  NHẬP MẢNG SỐ THỰC -> ĐẾM SỐ NGUYÊN
// ==========================================
el.btnAddFloat.onclick = function() {
    let num = Number(el.inputFloat.value);
    arrFloat.push(num);
    el.txtFloatArray.innerText = `[ ${arrFloat.join(", ")} ]`;
    el.inputFloat.value = "";
};

document.getElementById("btnCountInt").onclick = function() {
    let count = 0;
    for (let i = 0; i < arrFloat.length; i++) {
        // Dùng Number.isInteger() để kiểm tra số nguyên
        if (Number.isInteger(arrFloat[i])) count++;
    }
    showResult("resCountInt", `Trong mảng số thực có ${count} số nguyên.`);
};

// ==========================================
// 10. SO SÁNH SỐ ÂM VÀ DƯƠNG SỐ NÀO NHIỀU HƠN
// ==========================================
document.getElementById("btnCompare").onclick = function() {
    let soDuong = 0;
    let soAm = 0;

    for (let i = 0; i < arrNum.length; i++) {
        if (arrNum[i] > 0) soDuong++;
        else if (arrNum[i] < 0) soAm++;
    }

    let msg = "";
    if (soDuong > soAm) msg = "Số lượng Số Dương > Số Âm";
    else if (soAm > soDuong) msg = "Số lượng Số Âm > Số Dương";
    else msg = "Số lượng Số Dương = Số Âm";

    showResult("resCompare", msg);
};