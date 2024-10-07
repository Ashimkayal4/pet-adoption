fetch("https://openapi.programming-hero.com/api/peddy/pets")
  .then((res) => res.json())
.then((data) => allPetFunction(data.pets));

const allPetFunction = (data) => {

  data.forEach((eachPet) => {
    const getPets = document.getElementById("all-pets-div");
    const createDiv = document.createElement("div");
    createDiv.innerHTML = `
    <div class="card card-compact bg-base-100 shadow-xl border max-sm:mb-5">
     <figure>
      <img
      src="${eachPet.image}"
      alt="pets" class=" rounded-lg" />
     </figure>
     <div class="card-body">
     <h2 class="card-title">${eachPet.pet_name}</h2>
     <div class="flex items-center gap-2">
       <i class="fa-solid fa-grip"></i>
       <h1>Breed : ${eachPet.breed}</h1> 
     </div>
     <div class="flex items-center gap-2">
       <i class="fa-regular fa-calendar"></i>
       <h1>Birth : ${eachPet.date_of_birth}</h1>
     </div>
      <div class="flex items-center gap-2">
       <i class="fa-solid fa-transgender"></i>
       <h1>Gender : ${eachPet.gender}</h1>
      </div>
      <div class="flex items-center gap-2">
        <i class="fa-solid fa-dollar-sign"></i>
        <h1>Price : ${eachPet.price} $</h1>
      </div>
      <div class="divider"></div>
      <div  class="flex justify-between">
        <button onclick="myFunction('${eachPet.image}')" class=" border p-4 rounded-md font-semibold btn"><i class="fa-regular fa-thumbs-up"></i></button>
        <button class="btn">Adopt</button>
        <button onclick="getId('${eachPet.petId}')" class="btn" >Details</button>
      </div>
     
     </div>
     </div>
   </div>
   `;
   
    getPets.append(createDiv);
  });

};

