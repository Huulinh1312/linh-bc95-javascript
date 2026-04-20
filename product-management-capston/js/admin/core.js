export const API_URL = "https://69ca679fba5984c44bf31927.mockapi.io/api/v1/phone"

export const dom = {
    //form
    productForm: document.getElementById("productForm"),
    name: document.getElementById("name"),
    price: document.getElementById("price"),
    img: document.getElementById("img"),
    screen: document.getElementById("screen"),
    backCamera: document.getElementById("backCamera"),
    frontCamera: document.getElementById("frontCamera"),
    desc: document.getElementById("desc"),
    type: document.getElementById("type"),
    btnSave: document.getElementById("btnSave"),
    btnUpdate: document.getElementById("btnUpdate"),
    btnReset: document.getElementById("btnReset"),

    //filter
    btnSearch: document.getElementById("btnSearch"),
    inputKeyword: document.getElementById("keyword"),

    //render list sản phẩm 
    productTableBody: document.getElementById("productTableBody"),
}

export const state ={
    danhSachSP: [], // lưu trữ danh sách sản phẩm lấy từ API về
    //vì trang admin liên quan tới chức năng là sửa dữ liệu nên cần có biến object cần sửa 
    editingProduct: null, 
}