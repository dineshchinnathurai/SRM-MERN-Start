// async and await
// waiting for 2 seconds
// await waits for promise completion 
// this is cleaner than then() 
// used in modern node.js 
function fetchData(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Data received");
        },2000);
    });
}
async function getData(){
    let result = await fetchData();
    console.log(result);
}
getData();