
const displayProduct =(product)=> {
    const newProduct = document.getElementById("gallery");
newProduct.innerHTML +=
`<a href="${product.productPageUrl}"><div class="gallery-item">
<div class="image">
<img src=${product.imgSrc}>
</div>
<div class="text">
    <h4>${product.name}</h4>
    <p>from $${product.price}</p>
</div>
</div></a>`;
};

products.forEach(product =>displayProduct(product));