

//create a class Product with id,name,brand,price ,category--enum
enum Category{
    books='books',
    food='food'
}
class Product{
    id: number;
    name: string;
    brand: string;
    price: number;
    category: Category;
    constructor(id, name, brand, price, category){
        this.id=id;
        this.name=name;
        this.brand=brand;
        this.price=price;
        this.category=category;
}
}
//create a class ShoppingCart which has map of product as key and number of items as value

class ShoppingCart{
    cart=new Map();
    constructor(cart:Map<Product, number>){
        this.cart=cart;
    }

    calculate(){
        let total=0;
        this.cart.forEach((value: number, key: Product)=>{
           let price=key.price;
           total+=(price*value);
        });
        return total;
    }
//write a method to calculate the cart's total price
}

let prod1=new Product(1, 'book1', 'aaa', 500, 'Category.books');
let prod2=new Product(2, 'food1', 'bbb', 600, 'Category.food');

let cart:Map<Product, number>=new Map();
cart.set(prod1,8);
cart.set(prod2,2);

let shop=new ShoppingCart(cart);
console.log(shop.calculate());