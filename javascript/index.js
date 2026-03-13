const { createElement } = require("react");

// Lệnh xuất ra màn hình hoặc xuất vào dev tool
console.log("Hello World");
console.error("Lỗi rồi");
console.warn("Cảnh báo");
console.info("Thông tin");

// Biến : chứa giá trị , có thển thay đổi được và có thể tái sử dụng

// Cách khai bao biến : var, let, const
// let : có thể thay đổi được giá trị bên trong nó
// let: khai báo biến có thể thay đổi được giá trị bên trong nó
let tenBien = " Giá trị của biến";
// + Giá trị là chữ: ""
// + Giá trị là số: 123
// + Giá trị là boolean: true/false
// + Giá trị là mảng: []
// + Giá trị là đối tượng: {}
let name = "Hữu Linh";
let age = 22;
let Student = true;
let diachi = ["Hà Nội", "Hải Phòng", "Đà Nẵng"];

name = "Nguyễn Hữu Linh";
console.log(name);

// const: constant: hằng số, không thể thay đổi được giá trị bên trong nó

const fullname = "Nguyễn Hữu Linh";
// fullname = "Hữu Linh"; // Lỗi vì không thể gán lại giá trị cho biến const
console.log(fullname);

// snipet: đoạn code mẫu, có thể tái sử dụng được