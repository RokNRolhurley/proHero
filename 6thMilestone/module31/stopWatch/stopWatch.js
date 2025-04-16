
    
    const countStart =  document.getElementById('btn-start').addEventListener('click', function stopWatch(){
        let counter = 0;
        return function count(){
            counter++; 
            return counter;
            console.log(counter);
        }
    })

    const countDisplay =  document.getElementById('clock').innerHTML;
    console.log(countDisplay)


