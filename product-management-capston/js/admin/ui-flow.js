import { dom, state } from "./core.js";
export const renderDanhSachSP = (danhSachSP) => {
    // xóa nội dung cũ 
    dom.productTableBody.innerHTML = '';
    //nếu danh sách sản phẩm rỗng thì hiển thị thông báo 
    if(danhSachSP.length === 0){
        dom.productTableBody.innerHTML = `
            <tr>
                <td colspan="8" class="text-center">Không có sản phẩm nào</td>
            </tr>
        `;
    }

    //data api -> map -> list html -> join("") -> string html -> innerHTML
    const content = danhSachSP.map((phone)=> (
        `
            <tr class="border-b">
                <td class="py-2 pr-2">${phone.id}</td>
                <td class="py-2 pr-2 font-medium">${phone.name}</td>
                <td class="py-2 pr-2">${Number(phone.price).toLocaleString()} VNĐ</td>
                <td class="py-2 pr-2">${phone.type}</td>
                <td>
                    <div class="flex gap-2">
                        <button class="px-3 py-1 rounded bg-blue-400 text-white" onclick="editProduct(${phone.id})">Sửa</button>
                        <button class="px-3 py-1 rounded bg-red-500 text-white" onclick="deleteProduct(${phone.id})">Xóa</button>
                    </div>
                </td>
            </tr>
        `
    )).join("");
    dom.productTableBody.innerHTML = content
}

// viết hàm lấy dữ liệu từ form để các hàm create/update có thể tái sử dụng
export const getProductDataFormForm = () => {
    return {
        name: dom.name.value.trim(),
        price: dom.price.value.trim(),
        img: dom.img.value.trim(),
        screen: dom.screen.value.trim(),
        backCamera: dom.backCamera.value.trim(),
        frontCamera: dom.frontCamera.value.trim(),
        desc: dom.desc.value.trim(),
        type: dom.type.value.trim()
    }
}

//hàm này sẽ dùng ở các hàm create/update để reset form sau khi thao tác thành công
export const resetForm = () => {
    dom.productForm.reset()
    state.editingProduct = null

    //Mở lại nút tạo mới và ẩn nút cập nhật 
    dom.btnSave.classList.remove("hidden")
    dom.btnUpdate.classList.add("hidden")
}