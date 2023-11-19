// let btn = document.querySelectorAll("button");
// console.dir(btn);

// for(likes of btn) {
//     // likes.onclick = say;
//     // likes.onmouseenter = say2;

//     // likes.addEventListener("click", say);
//     // likes.addEventListener("click", say2);
//     likes.addEventListener("mouseenter", function () {
//         console.log("you double clicked");
//     });
// };
// function say() {
//     alert("button was clicked");
// };

// function say2() {
//     console.log("onmauseenter worked");
// }


//ACTIVITY

let btn = document.querySelector("button");
let h1 = document.querySelector("h1");
let div = document.querySelector("div");

btn.addEventListener("click", function () {
    h1.innerHTML = randomColor();
    div.style.backgroundColor = randomColor();
});

function randomColor() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    let color = (`rgb(${red}, ${green}, ${blue})`);
    return color;
}