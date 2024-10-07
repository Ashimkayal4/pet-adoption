
function myFunction(data) {
  const value = data;
  const setPic = document.getElementById("set-picture");
  const createPic = document.createElement("div");
  createPic.innerHTML = `
  <div class="card">
    <img src="${value}" class="rounded-xl w-30 h-20" />
  </div>  

    `;
  setPic.append(createPic);
}


/* Details function dynamically */

function getId(id) {
  fetch(`https://openapi.programming-hero.com/api/peddy/pet/${id}`)
    .then((res) => res.json())
    .then((data) => getPets(data.petData));
}

function getPets(data) {
  my_modal_5.showModal();
  
  const section = document.getElementById("modal");
  createSection = document.createElement('div')
  section.innerHTML=""
    createSection.innerHTML = `
    <div class="card card-compact bg-base-100 shadow-xl ">
     <figure>
      <img
      src="${data.image}"
      alt="pets" class="h-30 w-full" />
     </figure> 
     <div class="card-body">
     <h2 class="card-title">${data.pet_name}</h2>
     <div class="flex items-center gap-2">
       <i class="fa-solid fa-grip"></i>
       <h1>Breed : ${data.breed}</h1> 
     </div>
     <div class="flex items-center gap-2">
       <i class="fa-regular fa-calendar"></i>
       <h1>Birth : ${data.date_of_birth}</h1>
     </div>
      <div class="flex items-center gap-2">
       <i class="fa-solid fa-transgender"></i>
       <h1>Gender : ${data.gender}</h1>
      </div>
      <div class="flex items-center gap-2">
       <i class="fa-solid fa-transgender"></i>
       <h1>Vaccinated Status : ${data.vaccinated_status}</h1>
      </div>

      <div class="flex items-center gap-2">
        <i class="fa-solid fa-dollar-sign"></i>
        <h1>Price : ${data.price} $</h1>
      </div>
      <div>${data.pet_details}</div>
     </div>
     </div>
   </div>
   `;
    
  section.append(createSection);
  
}


