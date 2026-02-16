const max = Math.max(6,12,24,48,64,128,256)
console.log(max)

// const sorts = Math. (6,12,24,48,64,128,256)
// console.log(sorts)


// power of '...'
const numbers = [6,12,24,48,64,128,256];
const arrayMax = Math.max('array-', ...numbers);
console.log('array#',...numbers);
console.log(arrayMax);

// spread operator to copy
const friends = [4,5,87,88,12]
const bondhu = friends;

// bondhu.push(11);
friends.push(11);
console.log(bondhu);
console.log(friends);

const dosto = [...friends]
console.log(dosto);