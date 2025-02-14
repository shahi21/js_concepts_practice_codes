function multiplier(num1){
    return function(num2){
        return num1 * num2;
    };
}

const mul=multiplier(35);
console.log(mul(2));