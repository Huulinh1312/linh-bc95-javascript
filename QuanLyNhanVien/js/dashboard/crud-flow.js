import { elements, state, NhanVien } from "./core.js"
import { renderDanhSachNV } from "./ui-flow.js"

const getFormData = () => {
    return new NhanVien(
        elements.taiKhoan.value.trim(),
        elements.hoTen.value.trim(),
        elements.email.value.trim(),
        elements.matKhau.value.trim(),
        elements.ngayLam.value.trim(),
        elements.luongCB.value.trim(),
        elements.chucVu.value,
        elements.gioLam.value.trim()
    );
}

// Helpers áp dụng inline-style trực tiếp
const hienThiLoi = (element, message) => {
    if (element) {
        element.innerHTML = message;
        element.style.display = "block";
        element.style.color = "red";
    }
}
const anLoi = (element) => {
    if (element) { element.innerHTML = ""; element.style.display = "none"; }
}

export const xoaForm = () => {
    // Vì form trong HTML không có id, ta tìm form thông qua thẻ cha
    elements.taiKhoan.closest('form').reset();
    const errorSpans = document.querySelectorAll(".sp-thongbao");
    errorSpans.forEach(span => span.style.display = "none");
    elements.taiKhoan.disabled = false;
}

const checkValidation = (nv) => {
    let isValid = true;
    
    // 1. Tài khoản (4-6 ký số)
    if (!nv.taiKhoan || !/^[0-9]{4,6}$/.test(nv.taiKhoan)) {
        hienThiLoi(elements.tbTKNV, "Tài khoản từ 4-6 ký số");
        isValid = false;
    } else anLoi(elements.tbTKNV);

    // 2. Họ tên
    const regexTen = /^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỮỰỲỴÝỶỸửữựỳỵỷỹ\s]+$/;
    if (!nv.hoTen || !regexTen.test(nv.hoTen)) {
        hienThiLoi(elements.tbTen, "Tên phải là chữ");
        isValid = false;
    } else anLoi(elements.tbTen);

    // 3. Email
    if (!nv.email || !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(nv.email)) {
        hienThiLoi(elements.tbEmail, "Email không hợp lệ");
        isValid = false;
    } else anLoi(elements.tbEmail);

    // 4. Mật khẩu
    if (!nv.matKhau || !/^(?=.*\d)(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,10}$/.test(nv.matKhau)) {
        hienThiLoi(elements.tbMatKhau, "Mật khẩu 6-10 ký tự (1 số, 1 in hoa, 1 đặc biệt)");
        isValid = false;
    } else anLoi(elements.tbMatKhau);

    // 5. Ngày làm
    if (!nv.ngayLamViec || !/^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/.test(nv.ngayLamViec)) {
        hienThiLoi(elements.tbNgay, "Định dạng mm/dd/yyyy");
        isValid = false;
    } else anLoi(elements.tbNgay);

    // 6. Lương CB
    if (!nv.luongCB || nv.luongCB < 1000000 || nv.luongCB > 20000000) {
        hienThiLoi(elements.tbLuongCB, "Lương 1.000.000 - 20.000.000");
        isValid = false;
    } else anLoi(elements.tbLuongCB);

    // 7. Chức vụ (Khớp với <option> trong HTML)
    if (nv.chucVu !== "Sếp" && nv.chucVu !== "Trưởng phòng" && nv.chucVu !== "Nhân viên") {
        hienThiLoi(elements.tbChucVu, "Vui lòng chọn chức vụ");
        isValid = false;
    } else anLoi(elements.tbChucVu);

    // 8. Giờ làm
    if (!nv.gioLam || nv.gioLam < 80 || nv.gioLam > 200) {
        hienThiLoi(elements.tbGiolam, "Giờ làm từ 80 - 200");
        isValid = false;
    } else anLoi(elements.tbGiolam);

    return isValid;
}

export const themNV = () => {
    const newNV = getFormData();
    if (checkValidation(newNV)) {
        if (state.danhSachNV.some(nv => nv.taiKhoan === newNV.taiKhoan)) {
            hienThiLoi(elements.tbTKNV, "Tài khoản đã tồn tại");
            return;
        }
        state.danhSachNV.push(newNV);
        renderDanhSachNV();
        $('#myModal').modal('hide');
    }
}

export const xoaNV = (taiKhoan) => {
    state.danhSachNV = state.danhSachNV.filter(nv => nv.taiKhoan !== taiKhoan);
    renderDanhSachNV();
}

export const layThongTinNV = (taiKhoan) => {
    const nv = state.danhSachNV.find(item => item.taiKhoan === taiKhoan);
    if (nv) {
        xoaForm();
        elements.taiKhoan.value = nv.taiKhoan;
        elements.taiKhoan.disabled = true; 
        elements.hoTen.value = nv.hoTen;
        elements.email.value = nv.email;
        elements.matKhau.value = nv.matKhau;
        elements.ngayLam.value = nv.ngayLamViec;
        elements.luongCB.value = nv.luongCB;
        elements.chucVu.value = nv.chucVu;
        elements.gioLam.value = nv.gioLam;

        state.editingNV = taiKhoan;
        elements.titleModel.innerText = "Cập nhật nhân viên";
        elements.btnSubmitThem.style.display = "none";
        elements.btnSubmitCapNhat.style.display = "block";
        $('#myModal').modal('show');
    }
}

export const capNhatNV = () => {
    const updatedNV = getFormData();
    if (checkValidation(updatedNV)) {
        const index = state.danhSachNV.findIndex(nv => nv.taiKhoan === state.editingNV);
        if (index !== -1) {
            state.danhSachNV[index] = updatedNV;
            renderDanhSachNV();
            $('#myModal').modal('hide');
        }
    }
}

export const timKiemNV = (keyword) => {
    const result = state.danhSachNV.filter(nv => 
        (nv.loaiNV && nv.loaiNV.toLowerCase().includes(keyword.toLowerCase().trim()))
    );
    renderDanhSachNV(result);
}