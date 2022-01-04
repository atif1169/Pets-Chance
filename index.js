
showAnimal();

//get id
let name = document.getElementById("name");
let description = document.getElementById("description");
let image = document.getElementById("image");
let path="";
let selectPic = document.getElementById("selectPic");

//Function get id make Path
image.addEventListener("change", function(event) {
       const reader = new FileReader();
       reader.onload  = (e)=>{
           path = e.target.result
           console.log(path);
        //    selectPic.setAttribute('src', path);
        selectPic.innerHTML=`<img src="${path}" width="170" height="120">`;
       }


   reader.readAsDataURL(this.files[0]);

}, false);

//btn ID
let btnSubmit = document.getElementById("btnSubmit");

//initialize variables
let animalName;
let animalDescription;
let animalImage;


//btn listner
btnSubmit.addEventListener('click' , (e) =>{

    // e.preventDefault();
    animalName = name.value;
    animalDescription = description.value;
    animalImage = path;
    

    //get data from localStorage
    let animals= JSON.parse(localStorage.getItem('animal'));
    let animalArray=animals;
    if (!animals){
        animalArray =[];
    }

    // console.log(animalDescription,animalName,animalImage);

    if ((animalName) && (animalDescription) && (animalImage)){
        //Make Object
        let animal={
            name: animalName,
            description: animalDescription,
            image: animalImage
        };
        animalArray.push(animal);   //Push Data in Array

        //set Animal array LocalStorage
        localStorage.setItem("animal", JSON.stringify(animalArray));

    }
    else{
        alert("Required all fields");
        e.preventDefault();
    }

    //Show Animal Function
    showAnimal();
});


//show Animal Function
function showAnimal(){

    //set data LocalStorage
    let animals= JSON.parse(localStorage.getItem('animal'));

    //set Animal to Card
    let html="";
    if (animals != null){
        animals.forEach((element, index) => {
            html +=`
            <div class="card mx-2 my-2" style="width: 13rem;">
        <img class="card-img-top" src="${element.image}" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">${element.name}</h5>
          <p class="card-text">${element.description}</p>
          <button id="${index}" onclick="deleteAnimal(this.id)" class="btn btn-outline-primary">Delete</button>
        </div>
      </div>`;
        });

        //get ID which Show animal
        let cardElement = document.getElementById("showCards");
        if (animals.length != 0){
            cardElement.innerHTML = html;
        }
        else{
            cardElement.innerHTML = "<b>Your cart is Empty</b>";
        }
    }
}


//function for delete Animal
function deleteAnimal(index){

    let yesNo = confirm('Your delete this file.')
    if(yesNo ==true){
    //get data from localstorage
    let animals = JSON.parse(localStorage.getItem('animal'));
    animals.splice(index, 1);
    localStorage.setItem('animal', JSON.stringify(animals));
    showAnimal();
    }
}

//call Function for show animal 
showAnimal();



