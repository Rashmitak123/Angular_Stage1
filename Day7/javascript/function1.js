const cart={
    addToCart: function(id){
        console.log(`Item with id ${id} added successfully`);
    },

    deleteFromCart: function(){
        console.log('deleting an item');
    },
    CheckOut: function(){
        console.log('checking out');
    }
}

cart.addToCart(56);
cart.deleteFromCart();
cart.CheckOut();