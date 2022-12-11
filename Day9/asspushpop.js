class Car{
    constructor(id,model,dealer,price){
        this.id=id;
        this.model=model;
        this.dealer=dealer;
        this.price=price;
    }
    get id(){
        return this._id;
    }
    set id(val){
     this._id =val;
    }
    get brand(){
      return this._brand;
    }
    set brand(val){

     this._brand =val;
    }
    disp(){
        console.log(`${this.id} ${this.price}`);
    }
}
class ElectricVehicle extends Car{
   constructor(id, brand,dealer,price,batteryLife){
    super(id,brand,dealer,price);
    this.batteryLife =batteryLife;
   }
}

let evs=[];
let tataNexon = new ElectricVehicle(111,'nexon','tata',1500000,400);
evs.push(tataNexon);
let tata = new ElectricVehicle(222,'tatan','tata',4300000,600);
evs.push(tata);
let mahindra = new ElectricVehicle(333,'mahi','mahindra',2300000,100);
evs.push(mahindra);
console.log(evs);

console.log("after pop operation");
evs.pop();
console.log(evs);

console.log("after unshift operation");
evs.unshift(new ElectricVehicle(444,'abc','xyz',4300000,600));
console.log(evs);

console.log("after shift operation");
evs.shift();
console.log(evs);

console.log("after splice operation");
evs.splice(1,1);
console.log(evs);

