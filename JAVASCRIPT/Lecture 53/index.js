
function changeText(){
    let head = document.querySelector("h3");
    head.textContent = "ALIEN ";
}

let head = document.querySelector("h3");
head.addEventListener("click",changeText);


// apna collage

let Btn = document.querySelector("#btn");
let mode = "light";
let body = document.querySelector("body");

Btn.addEventListener("click",() => {
    if(mode === "light"){
        mode = "dark";
        // document.querySelector("body").style.backgroundColor = "black";
        body.classList.add("dark");
        body.classList.remove("light");
    }
    else{
        mode = "light";
        // document.querySelector("body").style.backgroundColor = "white";
        body.classList.add("light");
        body.classList.remove("dark");
    }
});
