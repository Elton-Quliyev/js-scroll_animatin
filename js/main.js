
var square = document.querySelector(".square");

document.addEventListener("scroll", function(){
    square.style.transform = `rotate(` + (window.scrollY) + `deg)` ; 

});

window.location.pathname