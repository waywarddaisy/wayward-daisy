
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