
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

const populatePage = ()=>{
    if (event.target.className.includes(products[0].name))
    {showProduct(products[0])}
    else if (event.target.className.includes(products[1].name))
    {showProduct(products[1])}
    else if (event.target.className.includes(products[2].name))
    {showProduct(products[2])}
    else if (event.target.className.includes(products[3].name))
    {showProduct(products[3])}
    else if (event.target.className.includes(products[4].name))
    {showProduct(products[4])}
   
};

const takeToProdPage =()=>{
    let link = event.target;
    console.log(link);
    console.log(link.className);
    document.getElementById("gallery").style.display= "none";
    populatePage();
  
};

const displayProduct =(product)=> {
    let container = document.getElementById("gallery");
    let galleryItem = document.createElement("div");
    galleryItem.className=`gallery-item ${product.name}`;
    galleryItem.addEventListener("click", takeToProdPage);
    container.appendChild(galleryItem);
    let image = document.createElement("div");
    image.className = `image ${product.name}`;
    galleryItem.appendChild(image);
    let prodImg = document.createElement("img");
    prodImg.className=`${product.name}`;
    prodImg.src = `${product.imgSrc}`;
    image.appendChild(prodImg);
    let textContainer = document.createElement("div");
    textContainer.className= `text ${product.name}`;
    let h4 = document.createElement("h4");
    h4.className=`${product.name}`;
    h4.innerHTML =`${product.name}`;
    textContainer.appendChild(h4);
    let pricePara = document.createElement("p");
    pricePara.className=`${product.name}`;
    pricePara.innerHTML = `from $${product.price}`;
    textContainer.appendChild(pricePara);
    galleryItem.appendChild(textContainer);
};


products.forEach(product =>displayProduct(product));

///here is product page stuff--------------------------------------------



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
    qty =Number(qty);
  //console.log(qty, typeof qty);
  //copying item to cart with the ... and then adding a key value for quantity
    let cartItem = {...prod, quantity: qty};
    save();
    shoppingCart.push(cartItem);
    localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
    //not sure if this is right, test_______________________________________________________________________________
    //reset
    document.getElementById("quantity").value=1;
    console.log(shoppingCart,"addtocart")
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
    //showProduct(products[4]);


    ///---------------------use this
    


   
    