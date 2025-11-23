
// async function getData() {
//     setTimeout(function(){
//         console.log("i am inside set Time out block");
//     },3000);
// }

// let output = getData();



// Fetch Api

async function getData() {
    // get request - async
    let response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    // parse json -  async
    let data = await response.json();
    console.log(data);
}

getData();