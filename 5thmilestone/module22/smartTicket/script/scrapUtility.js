document.addEventListener('click', clickColor);

function clickColor(){

    const seatsId = document.querySelectorAll("#container");
    const seat = document.querySelector('[id^="seat"]');

    function setBackGroundColor(id){
        seat.textContent = "seat";
    }

    try{
        const element = seatsId.querySelector('#${id}');
        const greenColor = 'rgb(${green})';
        element.style.setBackGroundColor = greenColor;
    } catch (e){
        // seat.textContent = e;
    }


}