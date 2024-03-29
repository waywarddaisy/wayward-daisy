
//largescreen header

let altContainer = document.getElementById("alt-logo-container");
let altHeader = document.createElement("a");
altHeader.href = "/";
let altLogoImg = document.createElement("img");
altLogoImg.src = "/Images/logo.jpg";
altLogoImg.id = "alt-logo";
altHeader.appendChild(altLogoImg);
let body = document.getElementById("body");
altContainer.appendChild(altHeader);
let header = document.createElement("div");
header.className = "header";
body.appendChild(header);
let menu = document.createElement("div");
menu.id = "menu";
header.appendChild(menu);
let xIcon = document.createElement("i");
xIcon.className = "fa-solid fa-x";
xIcon.id = "menu-x";
menu.appendChild(xIcon);
let headerUl = document.createElement("ul");
//home links
let headerHomeLI = document.createElement("li");
let headerHomeLink = document.createElement("a");
headerHomeLink.href = "/";
headerHomeLink.innerHTML = "Home";
headerHomeLI.appendChild(headerHomeLink);
headerUl.appendChild(headerHomeLI);
//about links
let headerAboutLI = document.createElement("li");
let headerAboutLink = document.createElement("a");
headerAboutLink.href = "/about";
headerAboutLink.innerHTML = "About";
headerAboutLI.appendChild(headerAboutLink);
headerUl.appendChild(headerAboutLI);
//shop links
let headerShopLI = document.createElement("li");
let headerShopLink = document.createElement("a");
headerShopLink.href = "/shop";
headerShopLink.innerHTML = "Shop";
headerShopLI.appendChild(headerShopLink);
headerUl.appendChild(headerShopLI);
//garden links
let headerGardenLI = document.createElement("li");
let headerGardenLink = document.createElement("a");
headerGardenLink.href = "/garden";
headerGardenLink.innerHTML = "The Garden";
headerGardenLI.appendChild(headerGardenLink);
headerUl.appendChild(headerGardenLI);
//contact links
let headerContactLI = document.createElement("li");
let headerContactLink = document.createElement("a");
headerContactLink.href = "/contact";
headerContactLink.innerHTML = "Contact Us";
headerContactLI.appendChild(headerContactLink);
headerUl.appendChild(headerContactLI);

menu.appendChild(headerUl);
let menuBars = document.createElement("i");
menuBars.className = "fa-solid fa-bars menu-bar";
menuBars.id = "menu-bar";
header.appendChild(menuBars);
let regularLogo = document.createElement("a");
regularLogo.href = "/";
let logoImg = document.createElement("img");
logoImg.src = "/Images/logo.jpg";
logoImg.id = "logo";
logoImg.setAttribute("loading", "lazy");
regularLogo.appendChild(logoImg);
header.appendChild(regularLogo);
let headerIcons = document.createElement("div");
headerIcons.className = "icons";
header.appendChild(headerIcons);
//insta icon
let instaLink = document.createElement("a");
instaLink.href = "https://www.instagram.com/waywarddaisy/?hl=en";
let instaIcon = document.createElement("i");
instaIcon.className = "fa-brands fa-instagram";
instaLink.appendChild(instaIcon);
headerIcons.appendChild(instaLink);
//pinterest icon
let pinterestLink = document.createElement("a");
pinterestLink.href = "https://www.pinterest.com/waywarddaisy/";
let pinterestIcon = document.createElement("i");
pinterestIcon.className = "fa-brands fa-pinterest";
pinterestLink.appendChild(pinterestIcon);
headerIcons.appendChild(pinterestLink);
//search icon
let searchIcon = document.createElement("i");
searchIcon.className = "fas fa-search";
headerIcons.appendChild(searchIcon);
//testing search-----------------------------------------------------------**
let searchBar = document.createElement("div");
searchBar.id = "search-bar";
let searchEntry = document.createElement("div");
searchEntry.id = "searchEntry";
let searchInput = document.createElement("input");
searchInput.id = "searchInput";
let smallSearchIcon = document.createElement("i");
smallSearchIcon.className = "fas fa-search";
smallSearchIcon.id = "small-search-icon";
searchEntry.appendChild(searchInput);
searchEntry.appendChild(smallSearchIcon);
searchBar.appendChild(searchEntry);
header.appendChild(searchBar);
//cart icon
let cartLink = document.createElement("a");
cartLink.href = "/shopping-cart";
let cartIcon = document.createElement("i");
cartIcon.className = "fa-solid fa-cart-shopping";
cartLink.appendChild(cartIcon);
headerIcons.appendChild(cartLink);



//search bar

//activating search-bar onclick
const onSearchType = () => {
    let prodId = getProdId();
    let searchTerm = searchInput.value.toLowerCase();
    console.log(searchTerm);
    let results = document.getElementById("results");
    results.innerHTML = "";
    let resultsNum = [];
    console.log(products[0].name.toLowerCase().includes(searchTerm));
    for (let i = 0; i < products.length; i++) {
        let infoParas = products[i].productInfoHTML.filter(para => para.toLowerCase().includes(searchTerm));
        if (products[i].name.toLowerCase().includes(searchTerm) || infoParas.length > 0) {
            console.log(products[i].name.toLowerCase().includes(searchTerm), infoParas.length > 0, "line 131", products[i].name)
            let resultsLink = document.createElement("a");
            resultsLink.href = "/product-page";
            resultsLink.innerHTML = products[i].name;
            resultsLink.className = "resultslink";
            let searchResults = document.getElementById("results");
            searchResults.appendChild(resultsLink);
            resultsLink.addEventListener("click", () => { saveProdId(products[i].id) });

            resultsNum.push("1");

        }
    }
    if (resultsNum.length === 0) {
        results.innerHTML = "no results"
    };
    //searchTerm = "";
    let searchBar = document.getElementById("search-bar");
    console.log(searchBar, "line 151");
    let resultsDiv = document.getElementById("results");
    searchBar.addEventListener("mouseleave", () => { searchBar.style.visibility = "hidden" });

};
//displaying search results
const onSearch = () => {

    searchInput.value = "";
    if (document.getElementById("results")) {
        let resultsDiv = document.getElementById("results"); resultsDiv.remove()
    }
    document.getElementById("search-bar").style.visibility = "visible";
    let searchResults = document.createElement("div");
    searchResults.id = "results";
    searchInput.id = "searchResults";
    searchBar.appendChild(searchResults);
    smallSearchIcon.addEventListener("click", onSearchType);
    searchInput.addEventListener("keydown", () => { if (event.keyCode === 13) { onSearchType() } });
};

searchIcon.addEventListener("click", onSearch);


const showMenu = () => {
    let menu = document.getElementById("menu");
    menu.style.visibility = "visible";
    menu.addEventListener("mouseleave", () => { menu.style.visibility = "hidden" });

};

const hideMenu = () => {
    document.getElementById("menu").style.visibility = "hidden";
};

document.getElementById("menu-bar").addEventListener("click", showMenu);
document.getElementById("menu-x").addEventListener("click", hideMenu);


//small screen header

let bottomMenu = document.getElementById("small-screen-header");

let smallMenuHeader = document.createElement("div");
smallMenuHeader.className = "bottom-menu";
smallMenuHeader.id = "bottom-menu";
bottomMenu.appendChild(smallMenuHeader);
let smallX = document.createElement("i");
smallX.className = "fa-solid fa-x menu-x";
smallX.id = "bottom-menu-x";
smallMenuHeader.appendChild(smallX);
let smallHeaderUl = document.createElement("ul");
smallMenuHeader.appendChild(smallHeaderUl);
//home links
let smallHeaderHomeLI = document.createElement("li");
let smallHeaderHomeLink = document.createElement("a");
smallHeaderHomeLink.href = "/";
smallHeaderHomeLink.innerHTML = "Home";
smallHeaderHomeLI.appendChild(smallHeaderHomeLink);
smallHeaderUl.appendChild(smallHeaderHomeLI);
//about links
let smallHeaderAboutLI = document.createElement("li");
let smallHeaderAboutLink = document.createElement("a");
smallHeaderAboutLink.href = "/about";
smallHeaderAboutLink.innerHTML = "About";
smallHeaderAboutLI.appendChild(smallHeaderAboutLink);
smallHeaderUl.appendChild(smallHeaderAboutLI);
//shop links
let smallHeaderShopLI = document.createElement("li");
let smallHeaderShopLink = document.createElement("a");
smallHeaderShopLink.href = "/shop";
smallHeaderShopLink.innerHTML = "Shop";
smallHeaderShopLI.appendChild(smallHeaderShopLink);
smallHeaderUl.appendChild(smallHeaderShopLI);
//garden links
let smallHeaderGardenLI = document.createElement("li");
let smallHeaderGardenLink = document.createElement("a");
smallHeaderGardenLink.href = "/garden";
smallHeaderGardenLink.innerHTML = "Garden";
smallHeaderGardenLI.appendChild(smallHeaderGardenLink);
smallHeaderUl.appendChild(smallHeaderGardenLI);
//contact links
let smallHeaderContactLI = document.createElement("li");
let smallHeaderContactLink = document.createElement("a");
smallHeaderContactLink.href = "/contact";
smallHeaderContactLink.innerHTML = "Contact";
smallHeaderContactLI.appendChild(smallHeaderContactLink);
smallHeaderUl.appendChild(smallHeaderContactLI);
//icons
smallMenuHeader.appendChild(smallHeaderUl);
let smallMenuBars = document.createElement("i");
smallMenuBars.className = "fa-solid fa-bars menu-bar";
smallMenuBars.id = "bottom-menu-icon";
bottomMenu.appendChild(smallMenuBars);

let smallHeaderIcons = document.createElement("div");
smallHeaderIcons.className = "icons";
smallHeaderIcons.id = "bottom-xtra-icons";
bottomMenu.appendChild(smallHeaderIcons);
//insta icon
let smallInstaLink = document.createElement("a");
smallInstaLink.href = "https://www.instagram.com/waywarddaisy/?hl=en";
let smallInstaIcon = document.createElement("i");
smallInstaIcon.className = "fa-brands fa-instagram";
smallInstaLink.appendChild(smallInstaIcon);
smallHeaderIcons.appendChild(smallInstaLink);
//cart icon
let smallCartLink = document.createElement("a");
smallCartLink.href = "/shopping-cart";
let smallCartIcon = document.createElement("i");
smallCartIcon.className = "fa-solid fa-cart-shopping";
smallCartLink.appendChild(smallCartIcon);
smallHeaderIcons.appendChild(smallCartLink);



const showBottomMenu = () => {
    document.getElementById("bottom-menu-icon").style.display = "none";
    smallMenuHeader.style.display = "block";
    document.getElementById("bottom-menu-x").style.display = "block";
};

const hideBottomMenu = () => {
    document.getElementById("bottom-menu-x").style.display = "none";
    smallMenuHeader.style.display = "none";
    document.getElementById("bottom-menu-icon").style.display = "block";
};

console.log(document.getElementById("bottom-menu-icon"));
document.getElementById("bottom-menu-icon").addEventListener('click', showBottomMenu);
document.getElementById("bottom-menu-x").addEventListener('click', hideBottomMenu);



