fetch("https://openapi.programming-hero.com/api/peddy/categories")
  .then((res) => res.json())
  .then((data) => petBtn(data.categories));

const petBtn = (data) => {
  const petBtn = document.getElementById("pet-button");
  data.forEach((pet) => {
    const createBtn = document.createElement("div");

    createBtn.innerHTML = `
   <button class="flex items-center btn"><img class="h-8" src="${pet.category_icon}"/><p>${pet.category}</p></button>
   `;
  

    
  /* cat clickFunction*/
    createBtn.querySelector("button").addEventListener("click", function () {
      const getPets = document.getElementById("all-pets-div");
      getPets.innerHTML = "";
       const loader = document.createElement("div");
       const loaderDiv = document.getElementById("loaderDiv");
       loader.innerHTML = `<span class="loading loading-bars loading-lg"></span>`;
       loaderDiv.append(loader);

      
      setTimeout(function () {
        if (pet.id === 1) {
          fetch("https://openapi.programming-hero.com/api/peddy/category/cat")
            .then((res) => res.json())
            .then((data) => getDogs(data.data));

          getPets.classList.add("grid");
          const getDogs = (dogs) => {
            dogs.forEach((dog) => {
              const getPets = document.getElementById("all-pets-div");
              const createDiv = document.createElement("div");
              createDiv.innerHTML = `
    <div class="card card-compact bg-base-100 shadow-xl">
     <figure>
       <img src="${dog.image}" alt="pets" />
     </figure>
     <div class="card-body">
      <h2 class="card-title">${dog.pet_name}</h2>
      <div class="flex items-center gap-2">
     <i class="fa-solid fa-grip"></i>
     <h1>Breed : ${dog.breed}</h1> 
     </div>
     <div class="flex items-center gap-2">
     <i class="fa-regular fa-calendar"></i>
     <h1>Birth : ${dog.date_of_birth}</h1>
     </div>
     <div class="flex items-center gap-2">
     <i class="fa-solid fa-transgender"></i>
     <h1>Gender : ${dog.gender}</h1>
     </div>
     <div class="flex items-center gap-2">
      <i class="fa-solid fa-dollar-sign"></i>
      <h1>Price : ${dog.price} $</h1>
     </div>
     <div class="divider"></div>
     <div class="flex justify-between">
      <button class=" border p-3 rounded-md font-semibold btn"><i class="fa-regular fa-thumbs-up"></i></button>
      <button class=" border p-3 rounded-md font-semibold btn">Adopt</button>
      <button class=" border p-3 rounded-md font-semibold btn">Details</button>
     </div>
      </div>
      </div>
     </div>
     `;
              getPets.append(createDiv);
            });
          };
        }
        loader.innerHTML=""
      }, 2000);
    });

  /* Rabbit clickFunction*/ 
  createBtn.querySelector("button").addEventListener("click", function () {
    const getPets = document.getElementById("all-pets-div");
    getPets.innerHTML = "";
    const loader = document.createElement("div");
    const loaderDiv = document.getElementById("loaderDiv");
    loader.innerHTML = `<span class="loading loading-bars loading-lg"></span>`;
    loaderDiv.append(loader);

    setTimeout(function () {
      if (pet.id === 3) {
        fetch("https://openapi.programming-hero.com/api/peddy/category/rabbit")
          .then((res) => res.json())
          .then((data) => getRabbit(data.data));

        getPets.classList.add("grid");
        const getRabbit = (rabbits) => {
          rabbits.forEach((rabbit) => {
            const getPets = document.getElementById("all-pets-div");
            const createDiv = document.createElement("div");
            createDiv.innerHTML = `
    <div class="card card-compact bg-base-100 shadow-xl">
     <figure>
       <img src="${rabbit.image}" alt="pets" />
     </figure>
     <div class="card-body">
      <h2 class="card-title">${rabbit.pet_name}</h2>
      <div class="flex items-center gap-2">
     <i class="fa-solid fa-grip"></i>
     <h1>Breed : ${rabbit.breed}</h1> 
     </div>
     <div class="flex items-center gap-2">
     <i class="fa-regular fa-calendar"></i>
     <h1>Birth : ${rabbit.date_of_birth}</h1>
     </div>
     <div class="flex items-center gap-2">
     <i class="fa-solid fa-transgender"></i>
     <h1>Gender : ${rabbit.gender}</h1>
     </div>
     <div class="flex items-center gap-2">
      <i class="fa-solid fa-dollar-sign"></i>
      <h1>Price : ${rabbit.price} $</h1>
     </div>
     <div class="divider"></div>
     <div class="flex justify-between">
      <button class=" border p-3 rounded-md font-semibold btn"><i class="fa-regular fa-thumbs-up"></i></button>
      <button class=" border p-3 rounded-md font-semibold btn">Adopt</button>
      <button class=" border p-3 rounded-md font-semibold btn">Details</button>
     </div>
      </div>
      </div>
     </div>
     `;
            getPets.append(createDiv);
          });
        };
      }
      loader.innerHTML=""
    }, 2000);
  });

  /*dogs clickFunction*/ 
  createBtn.querySelector("button").addEventListener("click", function () {
      const getPets = document.getElementById("all-pets-div");
     getPets.innerHTML = "";
     const loader = document.createElement("div");
     const loaderDiv = document.getElementById("loaderDiv");
     loader.innerHTML = `<span class="loading loading-bars loading-lg"></span>`;
     loaderDiv.append(loader);

    
    setTimeout(function () {
      if (pet.id === 2) {
        fetch("https://openapi.programming-hero.com/api/peddy/category/dog")
          .then((res) => res.json())
          .then((data) => getDogs(data.data));

        getPets.classList.add("grid");
        const getDogs = (dogs) => {
          dogs.forEach((dog) => {
            const getPets = document.getElementById("all-pets-div");
            const createDiv = document.createElement("div");
            createDiv.innerHTML = `
    <div class="card card-compact bg-base-100 shadow-xl">
     <figure>
       <img src="${dog.image}" alt="pets" />
     </figure>
     <div class="card-body">
      <h2 class="card-title">${dog.pet_name}</h2>
      <div class="flex items-center gap-2">
     <i class="fa-solid fa-grip"></i>
     <h1>Breed : ${dog.breed}</h1> 
     </div>
     <div class="flex items-center gap-2">
     <i class="fa-regular fa-calendar"></i>
     <h1>Birth : ${dog.date_of_birth}</h1>
     </div>
     <div class="flex items-center gap-2">
     <i class="fa-solid fa-transgender"></i>
     <h1>Gender : ${dog.gender}</h1>
     </div>
     <div class="flex items-center gap-2">
      <i class="fa-solid fa-dollar-sign"></i>
      <h1>Price : ${dog.price} $</h1>
     </div>
     <div class="divider"></div>
     <div class="flex justify-between">
      <button class=" border p-3 rounded-md font-semibold btn"><i class="fa-regular fa-thumbs-up"></i></button>
      <button class=" border p-3 rounded-md font-semibold btn">Adopt</button>
      <button class=" border p-3 rounded-md font-semibold btn">Details</button>
     </div>
      </div>
      </div>
     </div>
     `;
            getPets.append(createDiv);
          });
        };
      }
      loader.innerHTML=""
    }, 2000);
  });
    
    
  /* Birds clickFunction*/ 
  createBtn.querySelector('button').addEventListener('click', function () {
    const getPets = document.getElementById("all-pets-div");
    const createDiv = document.createElement("div");
    getPets.innerHTML = "";
    const loader = document.createElement('div');
    const loaderDiv = document.getElementById("loaderDiv");
    loader.innerHTML = `<span class="loading loading-bars loading-lg"></span>`;
    loaderDiv.append(loader);
     
      setTimeout(function () {
        if (pet.id === 4) {
          getPets.classList.remove("grid");
          createDiv.innerHTML = `
      <div class="flex flex-col justify-center items-center border h-80">
       <div><img src="./images/error.webp"/></div>
       <h1>No Information Available</h1>
       <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at <br> <span class="ml-40">its layout. The point of using Lorem Ipsum is that it has a.</span> </p>
      </div>
      `;
          getPets.append(createDiv);
        }
        loader.innerHTML=""
      }, 2000);
  }); 
    
  petBtn.append(createBtn);
  });
};


