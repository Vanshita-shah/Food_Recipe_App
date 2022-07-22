form = document.querySelector('form')
search=document.querySelector("ion-icon");

console.log(search);

search.addEventListener('click', function(e) {
  
  e.preventDefault();
  inpValue = document.getElementById("my_input").value
 
  fetchDataAPI(inpValue)
})
form.addEventListener('submit', function(e) {
    e.preventDefault();
    inpValue = e.target.querySelector('input').value
    // console.log(inpValue);
    fetchDataAPI(inpValue)
})

async function fetchDataAPI(inpVal) {
    app_id = 'd8feb9b1';
    app_key = 'cd9cb2390f98fe12e951f5df71d0b41e';
    baseURl = `https://api.edamam.com/search?q=${inpVal}&app_id=${app_id}&app_key=${app_key}&to=20`;
    result = await fetch(baseURl);
    data = await result.json()
    console.log(data)
    generateHTML(data.hits);
}

function generateHTML(results) {
    showINHTML = '';
    results.map(result => {
        showINHTML +=`<div class="item">
        <img src="${result.recipe.image}" alt="img">
        <div class="flex-container">
          <h1 class="title">${result.recipe.label}</h1>
          <a class="view-btn" target="" href="${
            result.recipe.url
          }">View Recipe</a>
        </div>
        <p class="item-data">Calories: ${result.recipe.calories.toFixed(2)}</p>
      </div>
    `



    //      `
    //     <div class="col-3 my-3">
    //     <div class="card">
    //         <div class="card-body">
    //             <img src="${result.recipe.image}" alt="" class='img-fluid'>
    //             <h6 class=' text-center my-2 text-truncate'>${result.recipe.label}</h6>
    //             <div class="d-flex justify-content-between align-items-center">
    //                 <h6 class=' align-self-stretch mx-auto my-auto'>Calories: ${result.recipe.calories.toFixed(2)}</h6>
    //                 <a  target="_blank" href='${result.recipe.url}' class='btn btn-link align-self-stretch'>View Recipe</a>
    //             </div>
    //         </div>
    //     </div>
    // </div> 
    //     `
        document.querySelector('#search-result').innerHTML = showINHTML;

    })
}