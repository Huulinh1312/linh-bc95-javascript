import { elements } from "./dashboard/core.js"
import { themNV, xoaNV, layThongTinNV, capNhatNV, timKiemNV, xoaForm } from "./dashboard/crud-flow.js"
import { renderDanhSachNV } from "./dashboard/ui-flow.js"

document.addEventListener("DOMContentLoaded", () => {
    
    // Nút mở Modal bên ngoài giao diện
    elements.btnMoModal?.addEventListener("click", () => {
        elements.titleModel.innerText = "Thêm nhân viên";
        elements.btnSubmitThem.style.display = "block";
        elements.btnSubmitCapNhat.style.display = "none";
        
        // Reset sạch form
        xoaForm();
        
        // Mở modal thông qua jQuery do xài Bootstrap 4
        $('#myModal').modal('show');
    });

    // Nút submit Thêm trong Modal
    elements.btnSubmitThem?.addEventListener("click", () => {
        themNV();
    });

    // Nút submit Cập Nhật trong Modal
    elements.btnSubmitCapNhat?.addEventListener("click", () => {
        capNhatNV();
    });

    // Xóa/Sửa thông qua Event Delegation trên Table
    elements.tableDanhSachNV?.addEventListener("click", (e) => {
        // Tìm button cha gần nhất (tránh trường hợp click trúng thẻ icon <i>)
        const btn = e.target.closest('button');
        if (!btn) return;

        if (btn.classList.contains("btn-delete")) {
            const tk = btn.getAttribute("data-id");
            xoaNV(tk);
        }
        
        if (btn.classList.contains("btn-edit")) {
            const tk = btn.getAttribute("data-id");
            layThongTinNV(tk);
        }
    });

    // Tìm kiếm realtime
    elements.searchName?.addEventListener("keyup", (e) => {
        timKiemNV(e.target.value);
    });

    // Render bảng ban đầu
    renderDanhSachNV();
});