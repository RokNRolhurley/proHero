// Get ⚡ All Levels
// https://openapi.programming-hero.com/api/levels/all
// Get ⚡ Words by Levels
// https:// openapi.programming-hero.com/api/level/{id}
// https://openapi.programming-hero.com/api/level/5
// Get ⚡ Words Detail
// https:// openapi.programming-hero.com/api/word/{id}
// https://openapi.programming-hero.com/api/word/5
// Get ⚡ All Words
// https://openapi.programming-hero.com/api/words/all

const imgBase = '../img/'

function loadAllLessons(){
     const url = 'https://openapi.programming-hero.com/api/levels/all';
    // const url = 'https://openapi.programming-hero.com/api/level/{id}';    
    fetch(url)
    //   .then(response => console.log(response))
      .then(response => response.json())
      .then(json => {
        console.log(json) 
       displayLessons(json.data)
      })
      .catch((error) => console.log('Error:',error));
}

function loadWordsByLvl(){
    const url = 'https://openapi.programming-hero.com/api/level/{id}';
    fetch(url)
      .then(response => response.json())
      .then(json => console.log(json))
      .catch((error) => console.log(error));
}

function getWordsDetails(){
    const url = 'https:// openapi.programming-hero.com/api/word/{id}';
    fetch(url)
      .then(response => response.json())
      .then(json => console.log(json))
      .catch((error) => console.log(error));
}

function getAllWords(){
    const url = 'https://openapi.programming-hero.com/api/words/all';
    fetch(url)
      .then(response => response.json())
      .then(json => console.log(json))
      .catch((error) => console.log(error));
}


function displayLessons(lessons){

    const lessonContainer = document.getElementById("lessonsContainer")

    lessonContainer.innerHTML = "";
    
    lessons.forEach(lesson => {
        const card = document.createElement('div');
        card.classList.add('lessonCard')
        card.classList = "card card-compact"
        card.innerHTML = `

        <div class=" border-s-violet-800 card-body px-0 py-2 flex flex-row  gap-2rounded"> 
            <div>
                <img w-[2px] h-[2px] src=${imgBase}${fa-book-open.png}> 
            </div>
            <div>
                <p><strong>Level No:</strong> ${lesson.level_no|| 'No description available.'}</p>
            </div>
        </div>

            
        `;

    //<p><strong>ID:</strong> ${lesson.id}</p>
    // <p><strong>${lesson.lessonName || 'Untitled Lesson'}</strong></p>

        lessonContainer.appendChild(card);

    });



        
    };




loadAllLessons();