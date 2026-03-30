// destructuring: cú pháp phân rã , giải nén  , bóc tách

// destructuring array
const array1 = [1, 2, 3, 4, 5]
// Cách thông thường để lấy giá trị từ mảng
// const a = array1[0]
// const b = array1[1]
// const c = array1[2]

// destructuring array
console.log("destructuring array")
const [num1, num2, num3] = array1
console.log(num1, num2, num3)

// destructuring object
const object1 ={
    name: "Nguyễn Văn A",
    age: 20,
    city: "HCM"
}

console.log("destructuring object")
// lấy key age, city từ object1
const {age, city} = object1
console.log(age, city)