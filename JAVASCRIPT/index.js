// let obj = {
//     name : "Taimoor Tahir",
//     age : 19,
//     weight : 45,
//     height : "5ft 5inch"
// };

// console.log(obj);

// for(let key in obj){
//     console.log(key , ":" ,obj[key]);
// }



// let arr = new Array('Alien',1,null,true);

// let arr = [1,'Alien',true,null,6,19];
// arr.push('Taimoor');
// arr.pop();
// arr.shift();
// arr.unshift(1);
// console.log(arr.slice(1,4));
// arr.splice(1,0,'Abc');



// let arr = [10,20,30];

// let ans = arr.map((num)=>{
//     return num*num;
// })
// console.log(ans);


// let arr=[1,2,3,4,5,6,7,8,9,10];

// let ans = arr.filter((num)=>{
//     return num%2===0;
// })
// console.log(ans);

// let arr = [1,2,'abc',3,'def',5,'xyz'];
// let ans = arr.filter((num)=>{
//     if(typeof(num) ==='string'){
//         return true;
//     }
//     else{
//         return false;
//     }
// })
// console.log(ans);

// let arr = [1,2,3,4,5];

// let ans = arr.reduce((acc,curr)=>{
//     return acc+curr;
// },0);

// console.log(ans);


// let arr = [2,1,4,3,5,7,5,6,9,8];
// arr.sort();
// arr.reverse();

// let ans = arr.find((num)=>{
//     return num > 8;
// })
// console.log(ans);

// console.log(arr);


// let arr = [1,2,3,4,5,6];

// arr.forEach((value,index)=>{
//     console.log(value , index);
// })


// for(let value of arr){
//     console.log(value);
// }



let btn = document.querySelector("button");
let body = document.querySelector("body");

let check = false; // white
btn.addEventListener("click", ()=>{
    if(check){
        body.style.backgroundColor = "red";
        btn.innerText = "black";
        check = false;
    }
    else{ // dark
        body.style.backgroundColor = "black";
        btn.innerText = "white";
        check = true;
    }
});
