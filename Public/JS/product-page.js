
const thumbnailDisplay = (url, thumbnailsDiv, prodImg) => {

    let thumbnail = document.createElement("div");
    thumbnail.className = "thumbnail";
    let thumbnailImg = document.createElement("img");
    thumbnailImg.className = "thumbnail-img";
    thumbnailImg.src = url;
    thumbnailImg.addEventListener("click", ()=>{changePhoto(prodImg)});
    thumbnailsDiv.appendChild(thumbnailImg);

};

//changes large photo when thumbnails are clicked- this is not currently working
const changePhoto =(prodImg)=>{
    prodImg.src = `${event.target.src}`;  
};

const qtyDropDown = (prod, select) => {
    for (let i = 1; i <= prod.instock; i++) {
        select.options.add(new Option(`${i}`, `${i}`));
    }
};

//add to cart
const addToCart=(prod) => {
    let qty= document.getElementById("quantity").value;
    //changed qty to integer instead of string
    Number(qty);
  //copying item to cart with the ... and then adding a key value for quantity
    let cartItem = {...prod, quantity: qty};
    shoppingCart.push(cartItem);
    //reset
    document.getElementById("quantity").value=1;
    console.log(shoppingCart)
};


    const showProduct = (prod) => {

        //adding main photo
        let main = document.getElementById("main");
        let photoDiv = document.createElement("div");
        main.appendChild(photoDiv);
        photoDiv.className = "photo";
        let imgContainer = document.createElement("div");
        imgContainer.className = "prod-img-container";
        photoDiv.appendChild(imgContainer);
        let prodImg = document.createElement("img");
        prodImg.src = `${prod.imgSrc}`;
        prodImg.id = "product-photo";
        imgContainer.appendChild(prodImg);
        //adding thumbnails
        let thumbnailsDiv = document.createElement("div");
        thumbnailsDiv.className = "thumbnails";
        photoDiv.appendChild(thumbnailsDiv);
        prod.thumbnailUrls.forEach(url => thumbnailDisplay(url, thumbnailsDiv, prodImg));
        let textDiv = document.createElement("div");
        textDiv.className = "text";
        main.appendChild(textDiv);
        let title = document.createElement("h2");
        title.innerHTML = `${prod.name}`;
        textDiv.appendChild(title);
        let price = document.createElement("span");
        price.id = "price";
        price.innerHTML = `from $${prod.price}`;
        textDiv.appendChild(price);
        //paragraphs
        let prodInfoHTML = document.createElement("div");
        prodInfoHTML.class= "para";
        prodInfoHTML.innerHTML = prod.productInfoHTML;
        textDiv.appendChild(prodInfoHTML);
        //qty dropdown
        let label = document.createElement("label");
        label.for = "quantity";
        label.innerHTML = "Qty";
        textDiv.appendChild(label);
        let select = document.createElement("select");
        select.name = "quantity";
        select.id = "quantity";
        qtyDropDown(prod, select);
        textDiv.appendChild(select);
        //add to cart button
        let breakHtml = document.createElement("br");
        textDiv.appendChild(breakHtml);
        let addButton = document.createElement("button");
        addButton.id = "add-button";
        addButton.innerHTML = "Add to Cart";
        addButton.addEventListener('click', ()=>{addToCart(prod)});
        textDiv.appendChild(addButton);

    };

    //takes in product 
    showProduct(products[4]);

    /*const populatePage = ()=>{
        if (event.target.className.includes(products[0].name))
        {showProduct[0]}
        else if (event.target.className.includes(products[1].name))
        {showProduct[1]}
        else if (event.target.className.includes(products[2].name))
        {showProduct[2]}
        else if (event.target.className.includes(products[3].name))
        {showProduct[3]}
        else if (event.target.className.includes(products[4].name))
        {showProduct[4]}
    };

    populatePage();*/

