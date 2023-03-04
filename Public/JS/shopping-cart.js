//header

const showMenu = () => {  

    document.getElementById("menu").style.visibility = "visible";

};

const hideMenu = () => {
    document.getElementById("menu").style.visibility = "hidden";
     //document.getElementById("menu-bar").style.display = "block";
 };

document.getElementById("menu-bar").addEventListener("click", showMenu);
document.getElementById("menu-x").addEventListener("click", hideMenu);

let bottomMenu =document.getElementById("bottom-menu");

const showBottomMenu= ()=> {
    document.getElementById("bottom-menu-icon").style.display="none";
    bottomMenu.style.display="block";
    document.getElementById("bottom-menu-x").style.display="block";
};

const hideBottomMenu=()=> {
   document.getElementById("bottom-menu-x").style.display="none";
    bottomMenu.style.display="none";
    document.getElementById("bottom-menu-icon").style.display="block";
};

console.log(document.getElementById("bottom-menu-icon"));
document.getElementById("bottom-menu-icon").addEventListener('click', showBottomMenu);
document.getElementById("bottom-menu-x").addEventListener('click', hideBottomMenu);
//end header 
console.log(shoppingCart);
const findSubTotal = () => {
    save();
    let subTotal = 0;
    for (let i = 0; i < shoppingCart.length; i++) { subTotal += shoppingCart[i].price * shoppingCart[i].quantity }
    return subTotal
};

//remove from cart
const removeFromCart = () => {
    save();
    let targetId = event.target.id;
    for (let i = 0; i < shoppingCart.length; i++) {
        if (shoppingCart[i].id == targetId) {
            shoppingCart.splice(shoppingCart[i], 1);
            localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
        }
    };
    let parent = event.target.parentElement;
    let grandparent = parent.parentElement;
    grandparent.remove();
    findSubTotal();
    document.getElementById("subtotal").innerHTML = `$${findSubTotal()}`;
    if (shoppingCart.length < 1) { displayCart() }
    //displayCart();
};

const changeQtyMinus = () => {
    save();
    for (let i = 0; i < shoppingCart.length; i++) {
        if (event.target.className.includes(shoppingCart[i].name) && shoppingCart[i].quantity - 1 > 0) {
            shoppingCart[i].quantity--;
            localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
            let newQty = shoppingCart[i].quantity;
            event.target.nextElementSibling.innerHTML = `<span>${newQty}</span>`;
            let newPrice = shoppingCart[i].price * shoppingCart[i].quantity;
            event.target.parentElement.nextElementSibling.innerHTML = `${newPrice}`;
        }
    };

    findSubTotal();
    document.getElementById("subtotal").innerHTML = `$${findSubTotal()}`;
    console.log(shoppingCart);
};

const changeQtyPlus = () => {
    save();
    for (let i = 0; i < shoppingCart.length; i++) {
        if (event.target.className.includes(shoppingCart[i].name) && shoppingCart[i].quantity + 1 <= shoppingCart[i].instock) {
            shoppingCart[i].quantity++;
            localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
            let newQty = shoppingCart[i].quantity;
            event.target.previousElementSibling.innerHTML = `<span>${newQty}</span>`;
            //right here
            let newPrice = shoppingCart[i].price * shoppingCart[i].quantity;
            event.target.parentElement.nextElementSibling.innerHTML = `${newPrice}`
        }

        else if (event.target.className.includes(shoppingCart[i].name) && shoppingCart[i].quantity + 1 > shoppingCart[i].instock) {
            alert(`only ${shoppingCart[i].instock} in stock`)

        }
    };
    findSubTotal();
    document.getElementById("subtotal").innerHTML = `$${findSubTotal()}`;
    console.log(shoppingCart);
};



const formatCart = (product) => {
    let prodID = product.id;
    let itemContainer = document.createElement("div");
    itemContainer.className = "item-container";
    document.getElementById("cart-container").appendChild(itemContainer)
    let divOne = document.createElement("div");
    itemContainer.appendChild(divOne);
    divOne.className = "thumbnail";
    let imgTag = document.createElement("img")
    divOne.appendChild(imgTag);
    imgTag.className = "thumbnail-image";
    imgTag.src = product.imgSrc;
    let divTwo = document.createElement("div");
    itemContainer.appendChild(divTwo);
    divTwo.className = "title";
    let titleText = document.createElement("h4");
    divTwo.appendChild(titleText);
    titleText.className = "title";
    titleText.innerHTML = product.name;
    let divThree = document.createElement("div");
    itemContainer.appendChild(divThree);
    //quantity
    divThree.className = "quantity";
    divThree.innerHTML = `<i class="fa-solid fa-minus ${product.name}" onclick= "changeQtyMinus()"></i><span>${product.quantity}</span><i class="fa-solid fa-plus ${product.name}" onclick="changeQtyPlus()"></i>`;
    let divFour = document.createElement("div");
    itemContainer.appendChild(divFour);
    divFour.className = "price";
    //in-line total
    divFour.innerHTML = product.price * product.quantity;
    let divFive = document.createElement("div");
    let xIcon = divFive.innerHTML = `<i class="fa-solid fa-x" id=${prodID} onclick="removeFromCart()" ></i>`;
    itemContainer.appendChild(divFive);
};

const emptyCartOption = () => {
    let emptyCart = document.createElement("div");
    document.getElementById("cart-container").appendChild(emptyCart);
    let emptyCartText = document.createElement("p");
    emptyCart.appendChild(emptyCartText);
    emptyCartText.innerHTML = "Your Shopping Cart is Empty";
    document.getElementById("checkout-button").disabled = true;
};

const displayCart = () => {
    save();
    if (shoppingCart.length > 0) {
        shoppingCart.forEach(product => { formatCart(product) });
    } else if (shoppingCart.length ==0) {
        emptyCartOption()

    }
};

displayCart();

//subtotal
document.getElementById("subtotal").innerHTML = `$${findSubTotal()}`;

