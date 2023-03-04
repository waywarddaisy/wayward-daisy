// document.getElementById("menu-bar").style.display = "none";
// console.log(document.getElementById("menu-bar").style.display);
// document.getElementById("menu").style.display = "block";
// console.log(document.getElementById("menu").style.display);

// const showMenu = () => {  

//     //document.getElementById("menu-bar").style.display = "none";
//     document.getElementById("menu").style.visibility = "visible";

// };

// const hideMenu = () => {
//     document.getElementById("menu").style.visibility = "hidden";
//      //document.getElementById("menu-bar").style.display = "block";
//  };
//  //question for ingrid- why couldnt i use display-absolute-or just look it up myself

// document.getElementById("menu-bar").addEventListener("click", showMenu);
// document.getElementById("menu-x").addEventListener("click", hideMenu);

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

//switching testimonials

const changeTestimonial= (test1, test2)=> {
    
    test1.style.display= "none";
    test2.style.display="block";
};

let testOne = document.getElementById("testimonialOne");
let testTwo = document.getElementById("testimonialTwo");
let testThree = document.getElementById("testimonialThree");

let arrowOne = document.getElementById("arrow-1");
let arrowTwo = document.getElementById("arrow-2");
let arrowThree = document.getElementById("arrow-3");

arrowOne.addEventListener('click', ()=>{changeTestimonial(testOne,testTwo)});
arrowTwo.addEventListener('click', ()=>{changeTestimonial(testTwo,testThree)});
arrowThree.addEventListener('click', ()=>{changeTestimonial(testThree,testOne)});