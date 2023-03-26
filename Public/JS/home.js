
//switching testimonials

const changeTestimonial= (test1, test2)=> {
    
    test1.style.display= "none";
    test2.style.display="inline-block";
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