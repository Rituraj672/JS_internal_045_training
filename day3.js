// function run(n){
//     return n*2;
// }
// console.log(run(3))

////    ARRAY//______________________________________________________________________


// let arr=["Apple",1,2,3,4];
// console.log(arr)

//     ______________________________________________________________________

// let fruit=["apple","orange","banana","guava","strawberry"];
// fruit.push("Papaya");
// fruit.shift();
// fruit.unshift("Kiwi");
// console.log(fruit.includes("Mango"));
// console.log(fruit.indexOf("banana"));
// console.log(fruit)

//______________________________________________________________________


// for(let i=0;i<fruit.length;i++){
//     console.log(fruit[i]);
// }

//______________________________________________________________________

// let num=[1,2,3];
// let double=num.map(n=>n*2);
// console.log(double)


//______________________________________________________________________


// let num=[10,20,14,50,33];
// let result=num.filter(n=>n>20);
// console.log(result)

//______________________________________________________________________


////    Reduce(),  Syntax___
//
//array.reduce(accumulator, currentValue)=>{...}, initialValue

//Terminology____
//accumulator (acc) = stores the result as the loop continues
//currentvalue (val) = currrent element in loop.


// let num=[10,20,30,40,11,33];
// let result=num.reduce((acc,val)=>acc+val,0);
// console.log(result)


//_______________________________________________________________________________________________________

//  //OBJECT

let student={name:"Rituraj", age:22, course:"Javascript"};
let key=student.name;
console.log(key)