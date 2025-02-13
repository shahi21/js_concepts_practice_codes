function sayHello(){
    var say=function(){
        console.log(hello);
    }
    var hello="Hello,World!!!!"
    return say;
}
var sayHelloclosure=sayHello();
sayHelloclosure();