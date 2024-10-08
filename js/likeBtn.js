
const myFunction = (data) => {
  const value = data;
  const setPic = document.getElementById("set-picture");
  const createPic = document.createElement("div");
  createPic.innerHTML = `
  <div class="card p-2">
    <img src="${value}" class="rounded-xl   gap-2" />
  </div>  

    `;
  setPic.appendChild(createPic);
}


/* Details function dynamically */

const getId = (id) => {
  fetch(`https://openapi.programming-hero.com/api/peddy/pet/${id}`)
    .then((res) => res.json())
   .then((data) => getPets(data.petData));
}

const getPets = (data) => {
  my_modal_5.showModal();
  
  const section = document.getElementById("modalId");
  createSection = document.createElement('div')
  section.innerHTML = ""
  
    const breed = data.breed ? data.breed : "Not Available";
    const dateOfBirth = data.date_of_birth ? data.date_of_birth : "Not Available";
    const gender = data.gender ? data.gender : "Not Available";
    const price = data.price ? data.price : "Not Available";
    createSection.innerHTML = `
    <div class="card card-compact bg-base-100  ">
     <figure>
      <img
      src="${data.image}"
      alt="pets" class="rounded-md w-full border" />
     </figure> 
     <div class="card-body">
     <h2 class="card-title">${data.pet_name}</h2>
     <div class="flex items-center gap-2">
       <i class="fa-solid fa-grip"></i>
       <h1>Breed : ${breed}</h1> 
     </div>
     <div class="flex items-center gap-2">
       <i class="fa-regular fa-calendar"></i>
       <h1>Birth : ${dateOfBirth}</h1>
     </div>
      <div class="flex items-center gap-2">
       <i class="fa-solid fa-transgender"></i>
       <h1>Gender : ${gender}</h1>
      </div>
      <div class="flex items-center gap-2">
       <i class="fa-solid fa-transgender"></i>
       <h1>Vaccinated Status : ${data.vaccinated_status}</h1>
      </div>

      <div class="flex items-center gap-2">
        <i class="fa-solid fa-dollar-sign"></i>
        <h1>Price : ${price} $</h1>
      </div>
      <div>${data.pet_details}</div>
     </div>
     </div>
   </div>
   `;
    
  section.append(createSection);
  
}


