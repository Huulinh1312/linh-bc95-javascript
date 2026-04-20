//import { API_URL, el, state } from "./core.js"
import { renderGioHang } from "./app/cart-flow.js"
import {API_URL, el, state} from "./app/core.js"
import { bindFilterEvent } from "./app/filter-flow.js"
import { bindPopupEvent } from "./app/popup-flow.js"
import {layDanhSachSP, renderDanhSachSP} from "./app/product-flow.js"

//Phần 1 : add tất cẩ cấc những event cho thẻ input, select, button,..
//add các event : popup , filter
bindFilterEvent()
bindPopupEvent()

// add event hiển thị giỏ hàng khi click vào nút giỏ hàng ở header
el.btnGioHang.addEventListener("click", renderGioHang)

// Phần 2: gọi hàm hiển thị danh sách sản phẩm khi load trang 
// list phone
layDanhSachSP()

