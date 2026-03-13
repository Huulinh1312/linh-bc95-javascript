document.getElementById("btn-tinh").addEventListener("click", function(){
    let chieuDai = Number(document.getElementById("input-length").value)
    let chieuRong = Number(document.getElementById("input-width").value)

    let Chuvi = (chieuDai + chieuRong) * 2
    let dienTich = chieuDai * chieuRong

    let result = document.getElementById("result-hcn")
    result.innerText = `
    Chu Vi: ${Chuvi}
    Diện tích: ${dienTich}`
})