const BMI = 32;
const underWeight = BMI <= 18.5;
const overWeight = BMI >= 29.9 ;
const normalWeight = BMI >= underWeight && BMI <= overWeight; 

if(BMI >= 18.5 && BMI <= 29.9) {
    console.log('You are Normal')
}

else{
    if(BMI <= 18.5){
        console.log('You are under weight')
    }
    else{
        if(BMI >= 29.9 && BMI <= 33 ){
            console.log('You are over weight') }
        
        else{console.log('You are obese')}
        } 
    
    console.log(BMI)
    
} 
