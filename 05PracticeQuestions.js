// Chapter 1  Question 1

let a ="String"
let b = 1
console.log(a+b)  // Concatenated
// Chapter 1  Question 2

console.log(typeof(a+b))

// Chapter 1  Question 3

const obj = {
    name : " Zen",
    salary : "4500"
}

// obj = "harry"
// print(obj)  can't change the value

// Chapter 1  Question 4
obj['friend'] = "ArkMaster" // added another  property
obj['name'] = "Heimdal"  // updates the object value . obj is only the reference so doesnt show error
console.log(obj)

const dictionary = {
    apple: "fruit",
    bus : "transportation media",
    cat: "pet animal"

}

console.log(dictionary.apple)
console.log(dictionary['bus'])