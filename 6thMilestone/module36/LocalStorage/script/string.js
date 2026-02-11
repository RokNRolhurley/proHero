const handleAddToStorage = () => {

    const person = {
        name: 'Hero Program', 
        course: 'Web Development',
        topic: 'Local Storage' 
    // localStorage.setItem('name', 'Hero');
    // localStorage.setItem('course', 'Web Development');
    // localStorage.setItem('topic', 'Local Storage');
}
    const personStringified = JSON.stringify(person);
    localStorage.setItem('person', personStringified);
    // const backFromString = JSON.parse(personStringified);
    // console.log(backFromString.name);

}

const data = localStorage.getItem('person');
const dataParsed = JSON.parse(data);
console.log(dataParsed.course);