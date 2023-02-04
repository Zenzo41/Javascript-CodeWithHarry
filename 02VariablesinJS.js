//Dynamically typed variable because it can be changed in runtime . NO need for static declaration of variables like C

let a = 67 // locally scoped
console.log(a)
// let a =  "Zenzo"  Can't
//but can be updated like a = "Zen"



var s = 65   //globally scoped , can be updated and redeclared 
console.log(s)
var s = "Sama"  // or s = "Sama" both works
console.log(s)

const x = 5
 // cant update x = 6
console.log(x)