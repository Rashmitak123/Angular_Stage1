var Size;
(function (Size) {
    Size["small"] = "small";
    Size["medium"] = "medium";
    Size["large"] = "large";
})(Size || (Size = {}));
var Topping;
(function (Topping) {
    Topping["cheese"] = "cheese";
    Topping["veges"] = "veges";
    Topping["paneer"] = "paneer";
    Topping["chicken"] = "chicken";
})(Topping || (Topping = {}));
var pizza1;
pizza1 = {
    id: 309,
    size: Size.medium,
    base: 'thin crust',
    topping: Topping.paneer,
    amount: 690
};
console.log(pizza1);
var pizza2;
pizza2 = {
    id: 408,
    size: Size.small,
    base: 'cheese',
    topping: Topping.veges,
    amount: 450
};
console.log(pizza2);
var pizza3;
pizza3 = {
    id: 356,
    size: Size.medium,
    base: 'thin crust',
    topping: Topping.chicken,
    amount: 690
};
console.log(pizza3);
var pizzas = [pizza1, pizza2, pizza3];
function outForDelivery(pizza) {
    for (var i = 0; i < pizzas.length; i++) {
        pizza = pizzas[i];
        switch (pizza.topping) {
            case (Topping.cheese):
                console.log('cheese for 3');
                break;
            case (Topping.veges):
                console.log("veges for cutomer who paid amount of $".concat(pizza.amount));
                break;
            case (Topping.paneer):
                console.log("paneer for customer with id ".concat(pizza.id));
                break;
            default:
                console.log("".concat(pizza.id, " nothing for you"));
        }
    }
}
outForDelivery(pizza1);
