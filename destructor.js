const fish = {
    name: 'King Hilsa',
    address: 'Chandpur',
    color: 'silver',
    phone: '0182324334',
    price: 4000
};

// const phone = fish.phone;
// console.log(phone);
// const color = fish.color;
// const price = fish.price;

const {address, phone} = fish;
// console.log(address);

const {age} = {name: 'Almas', age: 56, profession: 'makeup artist'};
// console.log(age);

// array destructuring
const [first, another] = [44, 99];
// console.log(first,another);

const nayoks = ['sakib', 'bappi', 'raj'];
const [king, lost, notun] = nayoks;
// console.log(notun);

function getNames(){
    return ['Alim', 'Halim'];
}

const [baba, chaca] = getNames();
console.log(baba);