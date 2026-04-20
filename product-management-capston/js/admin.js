import { createProduct, fetchDanhSachSP, updateProduct } from "./admin/crud-flow.js";
import { dom } from "./admin/core.js";
import { resetForm } from "./admin/ui-flow.js";

//OPTIONAL:liên quan tới admin thì cần có flow reset form

//Phần 1: thêm các event
//thêm event SUBMIT cho button "tạo mới"sản phẩm
dom.productForm.addEventListener("submit", (event) => {
    event.preventDefault();// ngăn form submit theo cách truyền thống

    //hàm xử lý tạo mới sản phẩm
    // => viết hàm tạo mới sản phẩm trong crud-flow.js
    createProduct();
});
//Phần 2: Thêm event click cho nút cập nhật sản phẩm 
dom.btnUpdate.addEventListener("click", () =>{
    //Viết hàm cập nhật sản phảm trong crud-flow.js
    updateProduct()
})

//Phần 3: thêm event click cho nút reset
dom.btnReset.addEventListener("click",() => {
    //khi click vào nút reset => sẽ reset form về trạng thái ban đầu
    resetForm()
})

//Phần 4: thêm event click cho nút xóa sản phẩm


//Phần 2: hiển thị list sản phẩm khi load trang
fetchDanhSachSP()