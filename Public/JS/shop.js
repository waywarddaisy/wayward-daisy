

const displayProduct = (product) => {
    let container = document.getElementById("gallery");
    let prodLink = document.createElement("a");
    prodLink.href = "/product-page";
    let prodId = getProdId();
    prodLink.addEventListener("click", () => { saveProdId(product.id) });
    container.appendChild(prodLink);
    let galleryItem = document.createElement("div");
    galleryItem.className = `gallery-item ${product.name}`;
    prodLink.appendChild(galleryItem);
    let image = document.createElement("div");
    image.className = `image ${product.name}`;
    galleryItem.appendChild(image);
    let prodImg = document.createElement("img");
    prodImg.className = `${product.name}`;
    prodImg.src = `${product.imgSrc}`;
    prodImg.setAttribute("loading", "lazy");
    image.appendChild(prodImg);
    let textContainer = document.createElement("div");
    textContainer.className = `text ${product.name}`;
    let h4 = document.createElement("h4");
    h4.innerHTML = `${product.name}`;
    textContainer.appendChild(h4);
    let pricePara = document.createElement("p");
    pricePara.className = `${product.name}`;
    pricePara.innerHTML = `from $${product.price}`;
    textContainer.appendChild(pricePara);
    galleryItem.appendChild(textContainer);
};

products.forEach(product => displayProduct(product));