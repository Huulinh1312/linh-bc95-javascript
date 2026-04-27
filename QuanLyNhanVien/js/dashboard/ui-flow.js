import { elements, state } from "./core.js"

export const renderDanhSachNV = (mangNV = state.danhSachNV) => {
    elements.tableDanhSachNV.innerHTML = "";
    
    const rows = mangNV.map((nv) => (
        `
            <tr>
                <td>${nv.taiKhoan}</td>
                <td>${nv.hoTen}</td>
                <td>${nv.email}</td>
                <td>${nv.ngayLamViec}</td>
                <td>${nv.chucVu}</td>
                <td>${new Intl.NumberFormat('vn-VN').format(nv.tongLuong)}</td>
                <td>${nv.loaiNV}</td>
                <td class="text-center">
                    <button class="btn btn-info btn-sm btn-edit mb-1" data-id="${nv.taiKhoan}">
                        <i class="fa fa-cog"></i>
                    </button>
                    <button class="btn btn-danger btn-sm btn-delete mb-1" data-id="${nv.taiKhoan}">
                        <i class="fa fa-trash"></i>
                    </button>
                </td>
            </tr>
        `
    ));
    elements.tableDanhSachNV.innerHTML = rows.join("");
}