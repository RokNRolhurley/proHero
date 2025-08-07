// const isVerified = "";

// if(isVerified === true){
//     console.log("user is verified");
// }
// else{
//     console.log("user is not verified");
// }

// console.log("`${}`");

 
function getTimeString(time){
    // const time = video.others.posted_date;;
    const hour = parseInt(time / 3600);
    let remainingSecond= time % 3600;
    let minute = parseInt (remainingSecond / 60);
    return `${hour} hour ${minute} minutes ago`
}

console.log(getTimeString(5686));


