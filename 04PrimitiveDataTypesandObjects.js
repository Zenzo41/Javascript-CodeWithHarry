// NNSSBBU (null ,number , symbol , string, bigint, boolean , undefined) and Non primitive - Object
let a = null
let b = 3434
let c = Symbol("I am a nice symbol")
let d = "Zen"
let e = BigInt(232424235235) + BigInt(20)
let f = true //can be false too
let g = undefined
let h

console.log(a,b,c,d,e,f,g)
console.log(typeof(c))
console.log(typeof(h)) // default

// Objects
const items = {
    name : "Sonam",
    value : 3454,
    is_true : false,
    lrg_val : 13131,
    has_wife : null,
    symbolval : Symbol("Noob"),
    money_wasted : undefined

}
console.log("Name: "+ items.name,
            "Value: "+ items.value,
            "Male: " +items.is_true,
            "Phone Number: "+items.lrg_val,
            "Has Wife: "+items.has_wife,
            items.symbolval,
            "Money Wasted: "+items.money_wasted
            )
