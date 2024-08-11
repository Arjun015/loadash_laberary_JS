var _ = require('lodash');

/* var users = [
    {'user':'barney' , 'age' : 35 , 'active':true},
    {'user':'fred' , 'age' : 44 , 'active':false}
]

// if using condition then call back function is used. 

//------------ _.filter()

// Program 1
ft1 = _.filter(users,function(el){
    return el.active               // true vala element milto
})
console.log(ft1)

ft2 = _.filter(users,function(el){
    return !el.active               // false vala element milto
})
console.log(ft2)   */

// Program 2

/*
var infn = [
    { 'user': "barney2", 'age': 36, 'active': true },
    { 'user': '', 'age': 40, 'active': false },
    { 'user': 'fred2', 'age': 40, 'active': true },
    { 'user': '', 'age': 40, 'active': false }
];

//passing object
let obj1 = _.filter(infn,{active:true , user:"barney2"})
console.log(obj1)

let obj2 = _.filter(infn,{active:true})
console.log(obj2)

// passing Array
let arr = _.filter(infn,['active',true])
console.log(arr)

//passing properties
let pro = _.filter(infn,'user')
console.log(pro)
*/


//------ _.sum() &  _.sunBy


/*
// Program 3

let gg = [22,33,45,64,533,430]  // 1127
let ans = _.sum(gg)
console.log(ans)




let invoice = [
    {
        product:"audi",
        price:3000,
        skills:2
    },

    {
        product:"bmw",
        price:2000,
        skills:8
    },
    {
        product:"mercedes",
        price:2000,
        skills:2
    }

]

let ad1 = _.sumBy(invoice,'price')
console.log(ad1)

let ad2 = _.sumBy(invoice,"skills")
console.log(ad2)

let filt = _.sumBy(invoice,function(el){
    if(el.price > 1000){
        return el.price
    }
})
console.log(filt)

*/



//----------_.pick()

let object = {'a':1 , 'b':2 , 'c':3}

let anss = _.pick(object,['a','c'])
console.log(anss)  // { a: 1, c: 3 }

let student = {
    firstName : 'Deepali',
    lastName : 'kulkarni',
    age : '23',
    skills : "JavaScript"
}

let aws = _.pick(student,['firstName','lastName'])
console.log(aws)


var objj = { 'a': 1, 'b': true, 'c': 3 };
 
let hp = _.pickBy(objj, _.isNumber);    // => { 'a': 1, 'c': 3 }
console.log(hp)

let io = _.pickBy(objj, _.isBoolean);    // => { 'a': 1, 'c': 3 }
console.log(io)