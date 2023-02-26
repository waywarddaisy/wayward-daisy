const changePhoto =()=> {
document.getElementById("product-photo").src =event.target.src;
};

document.getElementById("photo-1").addEventListener("click", changePhoto);
document.getElementById("photo-2").addEventListener("click", changePhoto);
document.getElementById("photo-3").addEventListener("click", changePhoto);
document.getElementById("photo-4").addEventListener("click", changePhoto);
document.getElementById("photo-5").addEventListener("click", changePhoto);
document.getElementById("photo-6").addEventListener("click", changePhoto);
document.getElementById("photo-7").addEventListener("click", changePhoto);

const smallFlowers ={
    name: "Small Seasonal Arranged Flowers",
    price: 65.00, 
    quantity:0,
    thumbnail: document.getElementById("photo-5")
};

const shoppingCart =[];

const addToCart= () => {
    //document.getElementById("add-button").style.background-color = "black";
    smallFlowers.quantity = document.getElementById("quantity").value;
    console.log(smallFlowers);
    shoppingCart.push(smallFlowers);
    console.log(shoppingCart);
};

document.getElementById("add-button").addEventListener("click", addToCart);



