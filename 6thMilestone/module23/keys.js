const glass = {
    name: 'glass',
    color: 'golden',
    price: 12,
    isCleaned: true
};

const keys = Object.keys(glass);
console.log(keys);

const values = Object.values(glass);
console.log(values);

const entries = Object.entries(glass);
console.log(entries);


// delete glass.isCleaned;

const {isCleaned,...shortGlass}= glass;
console.log(shortGlass);

// Freeze object
// Object.freeze(glass);
// glass.source = 'Bangladesh';
// console.log(glass);

//  Seal object
Object.seal(glass);
glass.source = 'Bangladesh';
glass.price = 5000;
console.log(glass);