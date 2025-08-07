
// Fetch Category
function loadCategory(){
    const url = 'https://openapi.programming-hero.com/api/phero-tube/categories';
    fetch(url)
      .then(response => response.json())
      .then((data) => displayCategories(data.categories))
      .catch((error) => console.log(error));
}

function loadVideos(){
    const url = 'https://openapi.programming-hero.com/api/phero-tube/videos';
    fetch(url)
      .then(res => res.json())
      .then((data) => displayVideos(data.videos))
      .catch((error) => console.log(error));
}


//Filter videos by category
const loadCategoryVideos = (id) => {
  // alert(id);
    const url = `https://openapi.programming-hero.com/api/phero-tube/category/${id}`;
    fetch(url)
      .then(res => res.json())
      .then((data) => displayVideos(data.category))
      .catch((error) => console.log(error));

}


// Show Categories
const displayCategories = (categories) => {
    //conatiner call
    const categoriesContainer = document.getElementById("categories");
    
    //create a button
    categories.forEach((item) => {
    // console.log(item)
    const buttonContainer= document.createElement("div");
    buttonContainer.innerHTML = `
    <button onClick="loadCategoryVideos(${item.category_id})" class="btn">
      ${item.category}
    </button>
    `;
     
  // add button to container
    categoriesContainer.append(buttonContainer);
});
};
//In video time post
function getTimeString(time){
    // const time = video.others.posted_date;;
    let hour = parseInt(time / 3600);
    let remainingSecond= time % 3600;
    let minute = parseInt (remainingSecond / 60);
    let day = parseInt(hour / 86400);
    let month = parseInt(day / 30);
    let year = parseInt(month / 30);
    return `${year} year ${month} month ${day} day ${hour} hour ${minute} minutes ago`
}
//
//Show Videos+++++++++
const displayVideos = (videos) => {
  const videoContainer = document.getElementById("videos")
  videoContainer.innerHTML = "";
  videos.forEach((video) => {
    //  console.log(video)
    const card= document.createElement("div");
    card.classList = "card card-compact"
    card.innerHTML = 
    `
    <figure class="h-[200px] relative">
      <img 
      src= ${video.thumbnail}
      class="h-full w-full object-cover"
      alt="" />
      
     ${
        video.others.posted_date?.length == 0 
        ? "" 
        : `<span class="absolute right-2 bottom-2 bg-black text-xs text-white rounded p-1">${getTimeString(video.others.posted_date)}</span>`
      }
    </figure>
   
  <div class="card-body px-0 py-2 flex gap-2">
    <div class="flex gap-2">
        <div>
            <img class="w-[40px] h-[40px] rounded-full"  src=${video.authors[0].profile_picture} />
        </div>

        <div class= "gap-2" >
            <div>
              <h2 class="card-title">${video.title}</h2>
            </div>
            <div class="flex gap-2">
                <h3 class="text-grey-400">${video.authors[0].profile_name}</h3>
                ${video.authors[0].verified == true ? '<img src="./img/verified-badge.png" class="w-4 h-4">' : "" }
            </div>
            <div class="py-1">
              <p>${video.others.views}</p>
            </div>
        </div>
    </div>
        
        
    <div></div>
    
    <div class="flex gap-3 "></div>
    
    <p>${"description"}</p>
    <div class="card-actions justify-end">
      
    </div>
  </div>`;
    videoContainer.append(card);
  })
}




loadCategory()
loadVideos()