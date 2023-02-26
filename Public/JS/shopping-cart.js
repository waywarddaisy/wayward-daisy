
const small = {
    name: "Small Seasonal Arranged Flowers",
    description: "petite seasonal arrangement",
    price: 65,
    quantity: 1,
    thumbnail: document.getElementById("testing")
}

const shoppingCart= [small];



const displayCart = ()=> {
    document.getElementById("thumbnail").innerHTML = shoppingCart[0].thumbnail;
    document.getElementById("title").innerHTML = shoppingCart[0].name;
    document.getElementById("qty").innerHTML = shoppingCart[0].quantity;
    document.getElementById("price").innerHTML = `$${shoppingCart[0].price}`;
};

displayCart();