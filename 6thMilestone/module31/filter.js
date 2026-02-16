const numbers = [4,5,2,8,10]
const playerHeight =  [69, 75, 66, 60, 62, 66, 72, 71]
// const showHeight = playerHeight.filter(p => p < 66)
// const showHeight = playerHeight.filter(p => p > 66)
const showHeight = playerHeight.filter(p => p > 72)
console.log(showHeight);