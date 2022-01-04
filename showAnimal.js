console.log("Show Animal");

function showAnimal(){

    let animals= JSON.parse(localStorage.getItem('animal'));
// console.log(animals[0].image)
    let html="";
    if (animals != null){
        animals.forEach((element, index) => {
            console.log(element);
            html +=`
            <div class="card mx-2 my-2" style="width: 13rem;">
        <img class="card-img-top" src="${element.image}" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">${element.name}</h5>
          <p class="card-text">${element.description}</p>
          <button id="${index}" onclick="deleteAnimal(this.id)" class="btn btn-primary">Delete</button>
        </div>
      </div>`;
        });
        let cardElement = document.getElementById("showCards");
        if (animals != null){
            cardElement.innerHTML += html;
        }
        
    }
    else{
        cardElement.innerHTML = "Your card is Empty";
    }
    
    
}


//function for delete Note
function deleteAnimal(index){

    //get data from localstorage
    let animals = JSON.parse(localStorage.getItem('animal'));
    animals.splice(index, 1);
    localStorage.setItem('animal', JSON.stringify(animals));
    showAnimal();

}


showAnimal();