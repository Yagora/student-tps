let a = 1;

console.log(a)

a = 'toto'
a = false
console.log(a)

let array = [1,2,3,4,5];
let arr = [];
let arrayS = [1,2,3,4,'streing'];

let objects = {
    toto : 'tata',
    fou: {
        t: 2
    }
}
const FIRST_KEY = 'toto';

console.log(objects[FIRST_KEY]);
console.log(objects.toto);

let map = new Map();

map.set('time', 60);

console.log(map.get('time'))

let set = new Set([1,2,3,4,5,5,5,5,6])

console.log(set.has(7))

console.log(Array.from(set))

console.log(objects.fou.t)
console.log(array[2])

let i = 0;
while (i < 10) {
    i++
    console.log(i)
}

for(let i=0; i<=10;i++) {
    console.log(i)
}

let patate = {
    toto : 'tata',
    fou: 'buzz',
    tutu : 2
}


for(let key of arrayS) {
    console.log(key)
}

const newarray = arrayS.map(function (a) {
    console.log(a)
    if (a > 2) {
        return a;
    }
    return 'is not >2'
})

console.log(newarray)
// Comparateur



function toto() {
    throw 'Error'
}
toto()
try {
    toto()
} catch (e) {
    console.log(e)
}