function createTaxCalculator(taxRate){
    return function (price){
        return price+ price*taxRate;

    };

}
const USATax= createTaxCalculator(0.07);
const UKTax= createTaxCalculator(0.2);

console.log(USATax(100));
console.log(UKTax(100));