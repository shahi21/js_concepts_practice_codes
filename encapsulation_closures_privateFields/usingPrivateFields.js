class Counter{
    #count=0;
    increment(){
        this.#count++;
    }
    decrement(){
        this.#count--;
    }
    getCount(){
        return this.#count;
    }
}
const counternew=new Counter();
counternew.increment();
counternew.increment();
counternew.decrement();
console.log(counternew.getCount());
