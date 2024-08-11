
var _ = require('lodash');


//----------  _.find()   -----------------//  it gives first Occurence 


var users = [
    {'user' :'' , 'age' : 1 , 'active' : true},
    {'user' :'fred' , 'age' : 40 , 'active' :false},
    {'user' :'' , 'age' : 26 , 'active' : true},
]



let fn = _.find(users , function(el){
    return el.age < 40
})
console.log(fn)
  


let fnn = _.find(users,{'age':1 , 'active':true})
console.log(fnn)


let dh = _.find(users , ['active',false])
console.log(dh)

let fv = _.find(users , 'user')
console.log(fv)


//------------   _map()      ----------------------


function square(n){
    return n * n * n
}

/*let arrr = [2,4,6,7,8]
console.log(square(4))    */


let arr = [2,4,6,8,10,999]
let arrSq = _.map(arr ,square)
console.log(arrSq)


console.log(_.map([4,8,999] , square))
console.log(_.map({'a':4 , 'b':999} , square))
//console.log(_.map({'a':4 , 'b':999} , cube))


var users1 = [
    {'user':'barney' , age : 24},
    {'user':'fred' , age : 34},
    {'user':'cred' ,age : 45}
]
// The `_.property` iteratee shorthand 

console.log(_.map(users1 , 'user')) // [ 'barney', 'fred', 'cred' ]
console.log(_.map(users1 , 'age'))




//---------------  _.pick()  &&  groupBy()  --------------


let student  = {
    firstName : 'Arjun',
    lastName : "Jadhav",
    age : 23 , 
    RollNo : 33 , 
    skills :['python','java','javascript']
}

console.log(_.pick(student,"firstName",'skills'))    

// _.groupBy()

console.log(_.groupBy([4.3,3.1,6.1],Math.floor)) // { '3': [ 3.1 ], '4': [ 4.3 ], '6': [ 6.1 ] }
console.log(_.groupBy([4.3,3.1,6.1],Math.ceil)) // { '4': [ 3.1 ], '5': [ 4.3 ], '7': [ 6.1 ] }

console.log(_.groupBy(['three','eight','supreem']),'length')



