fetch("https://openapi.programming-hero.com/api/peddy/categories")
 .then((res) => res.json())
.then((data) => petBtn(data.categories));

const petBtn = (data) => {
  const petBtn = document.getElementById("pet-button");
  data.forEach((pet) => {
    const createBtn = document.createElement("div");

    createBtn.innerHTML = `
   <button onclick="petFindByName('${pet.category}')" class="flex items-center btn"><img class="h-8" src="${pet.category_icon}"/><p>${pet.category}</p></button>
   `;
    petBtn.append(createBtn);
  });
};

function petFindByName(name) {
  fetch(`https://openapi.programming-hero.com/api/peddy/category/${name}`)
    .then(res => res.json())
  .then(data =>showPetName(data.data))
}

function showPetName(data) {
  const getPets = document.getElementById("all-pets-div");
  const loaderDiv = document.getElementById("loaderDiv");

  getPets.innerHTML = ""; 
  loaderDiv.innerHTML = `<span class="loading loading-bars loading-lg"></span>`;

  setTimeout(function () {
  
    if (data.length === 0) {
      getPets.classList.remove("lg:grid-cols-3");
      getPets.classList.remove("lg:grid");

      const createDiv = document.createElement("div");
      createDiv.innerHTML = `
        <div class="flex flex-col justify-center items-center border w-full h-96">
          <div>
            <img src="./images/error.webp" alt="Error"/>
          </div>
          <h1 class="text-2xl font-semibold">No Information Available</h1>
          <p class="p-3">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
            The point of using Lorem Ipsum is that it has a.
          </p>
        </div>
      `;
      getPets.append(createDiv);
    }

    else {
      
      getPets.classList.add("grid");
      getPets.classList.add("lg:grid-cols-3");

      data.forEach((pet) => {
        const createDiv = document.createElement("div");

        const breed = pet.breed ? pet.breed : "Not Available";
        const dateOfBirth = pet.date_of_birth ? pet.date_of_birth : "Not Available";
        const gender = pet.gender ? pet.gender : "Not Available";
        const price = pet.price ? pet.price : "Not Available";

        createDiv.innerHTML = `
          <div class="card card-compact bg-base-100 shadow-xl">
           <figure>
             <img src="${pet.image}" alt="pets" />
           </figure>
           <div class="card-body">
            <h2 class="card-title">${pet.pet_name}</h2>
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
              <i class="fa-solid fa-dollar-sign"></i>
              <h1>Price : ${price} $</h1>
            </div>
            <div class="divider"></div>
            <div class="flex justify-between">
              <button onclick="myFunction('${pet.image}')" class="border p-3 rounded-md font-semibold btn">
                <i class="fa-regular fa-thumbs-up"></i>
              </button>
              <button class="border p-3 rounded-md font-semibold btn">Adopt</button>
              <button class="btn" onclick="my_modal_5.showModal()">Details</button>
            </div>
           </div>
          </div>
        `;

        getPets.append(createDiv);
      });
    }

    loaderDiv.innerHTML = ""; 
  }, 2000);
}
