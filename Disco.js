const gradient = ["linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12)", 
"linear-gradient(to left bottom, #051937, #004d7a, #008793, #00bf72, #a8eb12)",
"radial-gradient(circle, #051937, #004d7a, #008793, #00bf72, #a8eb12)",
"radial-gradient(circle, #e35c56, #ea2d6f, #df0098, #b300cc, #0a40ff)",
"linear-gradient(to right bottom, #cef806, #aafc45, #84ff6a, #59ff8b, #0affa9)",
"linear-gradient(to top, #cef806, #aafc45, #84ff6a, #59f    f8b, #0affa9)",
"linear-gradient(to right top, #c4d16b, #e4aa4a, #f97d53, #f74e78, #d03ba9, #c435b1, #b532ba, #a332c3, #d500a1, #f30076, #fe0048, #f82c0e)",
"radial-gradient(circle, #00ff21, #00ff70, #00ffa1, #00ffc7, #00ffe3, #00ffdf, #00ffdc, #00ffd8, #4bffb3, #80ff88, #b2ff57, #e4f80e)",
"radial-gradient(circle, #ff1600, #ff5b00, #ff8400, #ffa800, #ffc800, #f8ba13, #f0ab1e, #e79e25, #bc6933, #833f32, #432124, #000000)",
"linear-gradient(to right top, #000000, #3b3b3b, #777777, #b9b9b9, #ffffff)",
"40c9ff","red", "blue", "green", "rgb(218, 196, 1)", "rgb(9, 255, 0)","rgb(255, 255, 255)"
]
const btn = document.getElementById("btn");
const color = document.querySelector(".color")


btn.addEventListener("click", function(){

setInterval(discotimer, 80);

function discotimer(){
    const number = RandumNum();
    document.body.style.background = gradient[number];
}

discotimer();
}); 

function RandumNum(){
    return Math.floor(Math.random()*gradient.length);
}
