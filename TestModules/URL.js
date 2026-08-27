// const getTeamsData = () =>{
// fetch('https://raw.githubusercontent.com/openfootball/worldcup.json/master/2026/worldcup.teams.json', {

// })
// .then(res => {
    
//     if(!res.ok) {
//         console.log('Error')
//         }
    
//     return res.json();
// })
//     .then(data => console.log(data))
  
fetchData();

async function fetchData() {
    
    try {
        
        const teamName = document.getElementById("teamname").value.toLowerCase(); 

        const response = await fetch('https://raw.githubusercontent.com/openfootball/worldcup.json/master/2026/worldcup.teams.json')
        
        if(!response.ok) {
           throw new Error('Could not fetch data')
        }
        
        const data =await response.json();
        const teamData = data.find( team => team.name.toLowerCase() === `${teamName}`)
        // console.log(teamData);
        // console.log(data[0]);
        const name = teamData.name; 
        const teamDetails  = document.getElementById('teamDetails');
        
        console.log(name);

    


    } catch (error) {
        console.log(error)
    }   
}