export const state = {
    danhSachNV: [], 
    editingNV: null
}

export const elements = {
    taiKhoan: document.getElementById("tknv"),
    hoTen: document.getElementById("name"),
    email: document.getElementById("email"),
    matKhau: document.getElementById("password"),
    ngayLam: document.getElementById("datepicker"),
    luongCB: document.getElementById("luongCB"),
    chucVu: document.getElementById("chucvu"),
    gioLam: document.getElementById("gioLam"),
    
    // Nút chức năng (Đã map lại theo đúng HTML)
    btnMoModal: document.getElementById("btnThem"),        // Nút mở Modal
    btnSubmitThem: document.getElementById("btnThemNV"),   // Nút Thêm trong Modal
    btnSubmitCapNhat: document.getElementById("btnCapNhat"), // Nút Cập nhật trong Modal
    
    searchName: document.getElementById("searchName"),
    btnTimNV: document.getElementById("btnTimNV"),
    tableDanhSachNV: document.getElementById("tableDanhSach"),

    modal: document.getElementById("myModal"),
    titleModel: document.getElementById("header-title"),

    // Các thẻ span hiển thị lỗi
    tbTKNV: document.getElementById("tbTKNV"),
    tbTen: document.getElementById("tbTen"),
    tbEmail: document.getElementById("tbEmail"),
    tbMatKhau: document.getElementById("tbMatKhau"),
    tbNgay: document.getElementById("tbNgay"),
    tbLuongCB: document.getElementById("tbLuongCB"),
    tbChucVu: document.getElementById("tbChucVu"),
    tbGiolam: document.getElementById("tbGiolam")
}

export class NhanVien {
    constructor(taiKhoan, hoTen, email, matKhau, ngayLamViec, luongCB, chucVu, gioLam) {
        this.taiKhoan = taiKhoan;
        this.hoTen = hoTen;
        this.email = email;
        this.matKhau = matKhau;
        this.ngayLamViec = ngayLamViec;
        this.luongCB = Number(luongCB);
        this.chucVu = chucVu;
        this.gioLam = Number(gioLam);
        this.tongLuong = this.tinhTongLuong();
        this.loaiNV = this.xepLoai();
    }

    tinhTongLuong() {
        // Cập nhật để khớp với <option>Sếp</option> trong HTML
        if (this.chucVu === "Sếp" || this.chucVu === "Giám đốc") return this.luongCB * 3;
        if (this.chucVu === "Trưởng phòng") return this.luongCB * 2;
        return this.luongCB; // Nhân viên
    }

    xepLoai() {
        if (this.gioLam >= 192) return "Xuất sắc";
        if (this.gioLam >= 176) return "Giỏi";
        if (this.gioLam >= 160) return "Khá";
        return "Trung bình";
    }
}