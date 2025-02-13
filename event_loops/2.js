console.log("first");
setTimeout(()=>{
    console.log("second");
},0);
Promise.resolve().then(()=>{
    console.log("third");
});
console.log("fourth")