const factorial= memoize(n=>(n<=1 ? 1 : n*factorial(n-1)));
console.log(factorial(6));



function memoize(fn){
    let cache={};
    return function(n){
        if(cache[n] !==undefined){
            return cache[n];
        }
        cache[n]=fn(n);
        return cache[n];
    }
}