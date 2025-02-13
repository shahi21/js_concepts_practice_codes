function numberGenerator(){
    var num=9;
    function checkNumber(){
        console.log(num);
    }
    num++;
    return checkNumber;
}
var number=numberGenerator();
number();