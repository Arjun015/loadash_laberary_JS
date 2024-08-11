const { round } = require('lodash');
var _ = require('lodash');


// Program 1

//---------   _.clone()   -----------

//===>  In this _.clone() method having same memory but different reference


// let obj = {
//     firstName : "Laallsingh",
//     lastName : 'Chadda'
// }

// let nm = obj
// nm.firstName = "Laallsingh"
// console.log(nm)

var  ar = [
    {'a':1},
    {'b':2}
]
var aa = _.clone(ar)
console.log(aa[0] == ar[0])  // true

//-----------  _.cloneBy()  ---------------


//===>  In this _.clone() method having different  memory && different reference


// Program 2 


var  gd = [
    {'a':1},
    {'b':2}
]
var cl = _.cloneDeep(ar)
console.log(cl[0] == gd[0])  // false



//---------------   .groupBy()   ----------------

let  arrY = [6.2 , 5.3, 6.1 , 5.4]
let ans = _.groupBy(arrY,Math.floor)    //=>  { '5': [ 5.3, 5.4 ], '6': [ 6.2, 6.1 ] }
console.log(ans)

//--------

console.log(_.groupBy(['one','two','three','seven','six'],'length')) 
//{ '3': [ 'one', 'two', 'six' ], '5': [ 'three', 'seven' ] }



//---------

let users = [
        {name:"Ajay",age:33,skill:"python"},
        {name:"amol",age:25,skill:"javascript"},
        {name:"krishna",age:33,skill:"javascript"},
        {name:"poorva",age:25,skill:"python"},
        {name:"shivani",age:27,skill:"python"}
    
    ]

   let jj =  _.groupBy(users,function(el){
        return el.age
    })
    console.log(jj)


    let jj1 =  _.groupBy(users,function(el){
        return el.skill
    })
    console.log(jj1)



//--------------   _.round    -------------   

//console.log(_.round(4.006))  // 4
//console.log(_.round(4.006 ,1));  // 4
// console.log(_.round(4.003, 2));  // 4
// console.log(_.round(4.007, 2));  // 4.01
//console.log(_.round(4.0037, 3));  // 4.004
//console.log(_.round(4.0034, 3));  // 4.004
console.log(_.round(4100, -2));
console.log(_.round(40600, -3)); // 41000
console.log(_.round(404743563845, -4))
