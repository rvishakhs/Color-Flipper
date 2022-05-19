const colors = ["red", "blue", "green", "rgb(218, 196, 1)", "rgb(9, 255, 0)","rgb(255, 255, 255)"];
const colorbtn = document.getElementById("btn");
/* const colorspan = document.getElementById("colorspa") */
const colorspan = document.querySelector("#colorspa")


colorbtn.addEventListener('click', function(){
function mycode(){
    const number = colorfliper();
    document.body.style.backgroundColor = colors[number];
    colorspan.textContent = colors[number];
}
mycode();
})

function colorfliper(){
    return Math.floor(Math.random()*colors.length);
}

