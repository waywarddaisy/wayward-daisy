// document.getElementById("menu-bar").style.display = "none";
// console.log(document.getElementById("menu-bar").style.display);
// document.getElementById("menu").style.display = "block";
// console.log(document.getElementById("menu").style.display);

const showMenu = () => {  

    document.getElementById("menu-bar").style.display = "none";
    document.getElementById("menu").style.display = "block";

};

const hideMenu = () => {
    document.getElementById("menu").style.display = "none";
     document.getElementById("menu-bar").style.display = "block";
 };
 //question for ingrid- why couldnt i use display-absolute-or just look it up myself

document.getElementById("menu-bar").addEventListener("click", showMenu);
document.getElementById("menu-x").addEventListener("click", hideMenu);