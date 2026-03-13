// B1: DOM tới nút Login và adđ event (function) click vào nút Login
document.getElementById("btn-login").addEventListener("click", function(){
    // B2: DOM tới các ô input và lấy giá trị của chúng
    // B2.1: DOM tới input username và password
    let username = document.getElementById("input-username")
    console.log(`Username: ${console.dir(username)}`)
    console.dir(username)
    // B2.2: Lấy Value từ input username
    let usernameValue = username.value
    
    // C2: gom line code 6 và 10 thành 1 line code 
    // let username = document.getElementById("input-username").value
    
    // Làm tương tự với password
    let password = document.getElementById("input-password").value

    // xử lý username và password
    // Sau này : call API để kiểm tra 
    // Bây giờ: giả lập nhập đúng username và password
    // Show username , password ra ngoài thẻ p có id là result

    //tạo biến chứa code html của username và password
    let result = `
        Username: ${usernameValue}\n
        Password: ${password}`
    
    // DOM tới thẻ p có id là result
    let pResult = document.getElementById("result")
    // Gán giá trị result vào trong thẻ p
    pResult.innerText = result
})