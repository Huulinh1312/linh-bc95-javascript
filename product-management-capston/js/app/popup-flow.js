import {el}from "./core.js"

window.closePopupGioHang = () => {
    el.popupGioHang.classList.add("hidden")
}

// el.overlayGioHang.addEventListener("click", closePopupGioHang)

window.closePopupChiTiet = () => {
    el.popup.classList.add("hidden")
}

// cách cũ: addEventListener cho nút đóng popup
// el.btnClosePopup.addEventListener("click", () => {
//     el.popup.classList.add("hidden")
// })

// close popup khi click ra ngoài nội dung popup - overlay
// khi thêm event click cho overlay -> nơi nào có id overlay sẽ có thể đóng popup khi click vào đó
el.overlay.addEventListener("click", closePopupChiTiet)

//hàm combine các event close popup
export const bindPopupEvent = () => {
    el.overlayGioHang.addEventListener("click", closePopupGioHang)
    el.overlay.addEventListener("click", closePopupChiTiet)
    el.btnClosePopup.addEventListener("click", closePopupChiTiet)
    el.btnGioHang.addEventListener("click", closePopupGioHang)

}