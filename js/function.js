fetch("https://openapi.programming-hero.com/api/peddy/categories")
  .then((res) => res.json())
.then((data) => petBtn(data.categories));
  
const petBtn = (data) => {
    const petBtn = document.getElementById('pet-button');
   data.forEach(pet => {
       const createBtn = document.createElement('div');
       createBtn.classList.add('border')
       createBtn.innerHTML = `
        <button class="flex items-center btn"><img class="h-8" src="${pet.category_icon}"/><p>${pet.category}</p></button>
       `;
       petBtn.append(createBtn);

   });
}

