enum Size{
    small='small',
    medium='medium',
    large='large'
}
enum Topping{
    cheese='cheese',
    veges='veges',
    paneer='paneer',
    chicken='chicken'
}
interface Pizza{
    id:number,
    size: Size,
    base:string,
    topping: Topping
    amount: number
}

let pizza1: Pizza;
pizza1={
    id:309,
    size:Size.medium,
    base: 'thin crust',
    topping: Topping.paneer,
    amount: 690
}
console.log(pizza1);

let pizza2: Pizza;
pizza2={
    id:408,
    size:Size.small,
    base: 'cheese',
    topping: Topping.veges,
    amount: 450
}
console.log(pizza2);

let pizza3: Pizza;
pizza3={
    id:356,
    size:Size.medium,
    base: 'thin crust',
    topping: Topping.chicken,
    amount: 690
}
console.log(pizza3);
let pizzas=[pizza1, pizza2, pizza3]; 

function outForDelivery(pizza:Pizza){
for(let i=0;i<pizzas.length;i++){
    pizza= pizzas[i];
    switch(pizza.topping){
        case (Topping.cheese):
            console.log('cheese for 3');
            break;

        case (Topping.veges):
            console.log(`veges for cutomer who paid amount of $${pizza.amount}`);
            break;
        
        case (Topping.paneer):
            console.log(`paneer for customer with id ${pizza.id}`);
            break;

        default:
            console.log(`${pizza.id} nothing for you`);
    }
}
}
outForDelivery(pizza1);
    
