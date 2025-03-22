console.log("welcome to our menu price")

let foodType = "shiro"
let pricOfTheFood = 20

let quantity = 3
let totalPrice = pricOfTheFood * quantity
let isTheFoodtypeTibs = false

if (isTheFoodtypeTibs) {
   totalPrice *= 3
}

console.log(`new food order: ${quantity} ${isTheFoodtypeTibs ? "Tibs" : "Normal food"} the price is $${pricOfTheFood} and the tottal price is $${totalPrice}`)

// simple calculator

let a = 12
let b = 13
let command = "*"
let c;
if (command === "+") {
   c = a + b
} else if (command === "-") {
   c = a - b
} else if (command === "*") {
   c = a * b
} else if (command === "/") {
   c = a / b
} else {
   console.log("invalid command")
}

console.log(`the result is ${c}`)