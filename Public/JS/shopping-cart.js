
const calculateShipping = () => {
    let shoppingCart = getShoppingCart();
    //console.log(shoppingCart, "shipping");
    let delSearch = shoppingCart.filter(prod => prod.id === 0 || prod.id === 1 || prod.id === 2);
    console.log(delSearch, "delSearch");
    //console.log(delSearch.length, "length");
    let mailSearch = shoppingCart.filter(prod => prod.id === 4);
    //console.log(mailSearch, "mailSearch", mailSearch.length);
    let shipping = 0;

    if (delSearch.length > 0) {
        shipping = Delivery
    } else if (mailSearch.length > 0 && delSearch.length == 0) {
        for (let i = 0; i < shoppingCart.length; i++) {
            if (shoppingCart[i].id === 4) {
                shipping += Mail * shoppingCart[i].quantity
            }
        }
    };
    return Number(shipping);
};
console.log(calculateShipping(), "shipping");

const displayShipping = () => {
    document.getElementById("shipping").innerHTML = `$${calculateShipping()}`;
};



//finds subtotal
const findSubTotal = () => {
    let shoppingCart = getShoppingCart();
    let subTotal = 0;
    for (let i = 0; i < shoppingCart.length; i++) { subTotal += shoppingCart[i].price * shoppingCart[i].quantity }
    return Number(subTotal);
};

//displays subTotal

const displaySubTotal = ()=> {
    document.getElementById("subtotal").innerHTML = `$${findSubTotal()}`;
};

//gets sales tax

const getSalesTax = () => {

    let shoppingCart = getShoppingCart();
    let sub = findSubTotal();
    console.log(sub, "getSalesTax sub cl1");
    let taxTimeQty = "";
    for (let i = 0; i < shoppingCart.length; i++) {
        if (shoppingCart[i].taxable === "no") {
            taxTimeQty += shoppingCart[i].price * shoppingCart[i].quantity;
            console.log(taxTimeQty, "getSalesTax taxTimeQty");
            sub -= taxTimeQty;
            console.log(sub, "getSalesTax sub c2");
        }
    }
    salesTax = sub * vistaSalesAndUseTax;
    console.log(salesTax, "getSalesTax");
    salesTax = salesTax.toFixed(2);
    console.log(salesTax, "getSalesTax");
    return salesTax;
    //document.getElementById("tax").innerHTML = `$${salesTax}`;
};

const displaySalesTax = () => {
    document.getElementById("tax").innerHTML = `$${getSalesTax()}`;
};

//get total and display
const getTotal = () => {
    let total = Number(findSubTotal()) + Number(getSalesTax()) + Number(calculateShipping());
    total= Number(total);
    return total = total.toFixed(2);
    
};

const displayTotal =()=> {
    document.getElementById("total").innerHTML = `$${getTotal()}`;
};

//recalculates and displays, subtotal, tax, shipping and total
const displaySubTaxShipTotal= ()=>{
    
    displaySubTotal();
    displaySalesTax();
    displayShipping();
    displayTotal();
    
};

//remove from cart
const removeFromCart = () => {
    let shoppingCart = getShoppingCart();
    console.log(shoppingCart, "before for loop");
    let targetId = Number(event.target.id);
    for (let i = 0; i < shoppingCart.length; i++) {
        if (shoppingCart[i].id == targetId) {
            console.log(shoppingCart[i].id, targetId);
            console.log(shoppingCart, "before splice");
            shoppingCart.splice(i, 1);
            console.log(shoppingCart, "after splice");
        }
    };
    saveToCart(shoppingCart);
    let parent = event.target.parentElement;
    console.log(parent);
    let grandparent = parent.parentElement;
    console.log(grandparent);
    grandparent.remove();
    displaySubTaxShipTotal();

};


const changeQtyMinus = () => {
    let shoppingCart = getShoppingCart();
    for (let i = 0; i < shoppingCart.length; i++) {
        if (event.target.className.includes(shoppingCart[i].name) && shoppingCart[i].quantity - 1 > 0) {
            shoppingCart[i].quantity--;
            saveToCart(shoppingCart);
            let newQty = shoppingCart[i].quantity;
            event.target.nextElementSibling.innerHTML = `<span>${newQty}</span>`;
            let newPrice = shoppingCart[i].price * shoppingCart[i].quantity;
            event.target.parentElement.nextElementSibling.innerHTML = `${newPrice}`;
        }
    };

    displaySubTaxShipTotal();
};

const changeQtyPlus = () => {
    let shoppingCart = getShoppingCart();
    for (let i = 0; i < shoppingCart.length; i++) {
        if (event.target.className.includes(shoppingCart[i].name) && shoppingCart[i].quantity + 1 <= shoppingCart[i].instock) {
            shoppingCart[i].quantity++;
            saveToCart(shoppingCart);
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
    displaySubTaxShipTotal();

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
    divFour.innerHTML = `$${product.price * product.quantity}`;
    let divFive = document.createElement("div");
    let xIcon = divFive.innerHTML = `<i class="fa-solid fa-x" id=${prodID} onclick="removeFromCart()" ></i>`;
    itemContainer.appendChild(divFive);
};

const emptyCartOption = () => {
    let emptyCart = document.createElement("div");
    emptyCart.className = "empty-cart";
    document.getElementById("cart-container").appendChild(emptyCart);
    let emptyCartText = document.createElement("p");
    emptyCart.appendChild(emptyCartText);
    emptyCartText.innerHTML = "Your Shopping Cart is Empty";
    document.getElementById("checkout-button").disabled = true;
    displaySubTaxShipTotal();

};

const displayCart = () => {
    let shoppingCart = getShoppingCart();
    if (shoppingCart.length > 0) {
        shoppingCart.forEach(product => { formatCart(product) });
    } else if (shoppingCart.length == 0) {
        emptyCartOption()

    }
    displaySubTaxShipTotal();

};

displayCart();

//subtotal
// document.getElementById("subtotal").innerHTML = `$${findSubTotal()}`;



displaySalesTax();

const handleCheckout = async () => {
    try {
        const response = await fetch("http://localhost:3000/create-checkout-session", {
            method: "POST",
            cache: "no-cache",
            headers: {
                "Content-Type": "application/json",
            },
            body: localStorage.getItem("shoppingCart")
        });

    } catch (error) {
        console.log(error)
    }

};

