// step one
console.log("I love pizza")

// step two
let myFavouritePizza = "margerita"
let priceOfPizza = 15

console.log(`New pizza order: ${myFavouritePizza}. The price of the pizza is:  ${priceOfPizza}`)

// step three
let amountOfPizzas = 4

let isFamilySIze=true

let totalPrice=amountOfPizzas*priceOfPizza

if(isFamilySIze){
    totalPrice *=2
}

console.log(`New pizza order: ${amountOfPizzas} ${isFamilySIze?"famliy size":"regular piza"} $${priceOfPizza}. Total cost for the order is:  $${totalPrice}`)