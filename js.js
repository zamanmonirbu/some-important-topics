// we jhave to write return when we write in another function
// we need no return if we write the code in one line
// it will not work because it is an object map only works on array

let products=[{id:1,name:"Laptop",price:1},{id:2,name:"Mobile",price:2}];
let p1={id:2,name:"Mobile",price:2500};
let p2=["monir","ghoni","hobi"];

let newArry=p2.map(number=>{
 return number;
})
// console.log(newArry);
let  newFilter=products.filter(price=>price.price<2)
console.log(newFilter);
