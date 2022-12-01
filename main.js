// console.log('hello world');
var a = 10;
// console.log(a);
const name = 5;
let c = 4;
// console.log(c++);

b = 10;
// console.log(b++);
c = 100
// console.log(c++);


//  const number = 10;
//  console.log(typeof number);
//  const string = 'hello'
//  console.log(typeof string);
//  const boolTrue = true;
//  console.log(typeof boolTrue);
//  const boolFalse = false;
//  console.log(typeof boolFalse);

//  const obj = {name: 'bro'}
//  console.log(typeof obj);
//  const array = [1, 2, 3, {name: 'alex'}]
//  console.log( array);

// rr

// c
const obj = {
    name: 'Alex',
    age: 18
}

console.log(obj.name, obj.age);

const user = {
    login: 'Alex',
    passworld: '123',
    username: 'alex_01',
    followers: [
        {
            username: 'irina',
            age: 20
        },
         {  username: 'alex',
            age: 28
        } 
    ],
    follows: [
        {
            username: 'irina',
            age: 20
        },
         {  username: 'alex',
            age: 28
        } 
    ],
    avatar: 'image'
}
// console.log(user);
// console.log("username:" + user.username);
// console.log("followers:" + user.followers);
// console.log("follow:" + user.follows);


const mass = [1,2,3,4,5 ]
console.log(mass[4]);

const arr = [{username: 'alex'}, [1,2,3,4,5], 'string']
console.log(arr[1]);



// const num1 = 25;
// const num2 = 30;
// console.log(num1 + num2);

// let message = 'hello, '+' dear '+'Alex'  
// console.log(message);
// let message1 = 'hello, dear ${ alex }'
// console.log(message1);


// let size = 'm';
// let eusize = 0;

// if(size === '5'){
//     euSize = 36;
// }else if (size === 'm'){
//     euSize = 40;
// }else if (size === 'l'){
//     euSize = 48;
// }

let size = 'S'

switch (size) {
    case 'S':
        console.log('Small');
        break;
        case 'M':
        console.log('Medium');   
        break; 
        case 'L':
            console.log('Largge');
            break

    default:
        break;
        console.log('unknown size');
}

