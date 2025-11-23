
// code 1
const t1 = performance.now();

for(let i =1;i<=20;i++){
    let para = document.createElement("p");
    para.textContent = "This is Para " + i;
    document.body.appendChild(para);
}

const t2 = performance.now();

console.log("total time by code 1 is "+ (t2-t1));

// code 2

let myDiv = document.createElement("div");

const t3 = performance.now();

for(let i=1;i<=20;i++){
    let para = document.createElement("p");
    para.textContent = "This is 2nd code para " + i;
    myDiv.appendChild(para);
}
document.body.appendChild(myDiv);

const t4 = performance.now();
console.log("total time by code 2 is "+ (t4-t3));



// best code

let fragment = document.createDocumentFragment();


for(let i=1;i<=20;i++){
    let para = document.createElement("p");
    para.textContent = "This is best code para " + i;
    // no reflow and repaint for the below line
    fragment.appendChild(para);
}
// below line takes 1 reflow and repaint
document.body.appendChild(fragment);