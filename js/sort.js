fetch("https://openapi.programming-hero.com/api/peddy/pets")
  .then((res) => res.json())
.then((data) => sortFunction(data.pets));
function sortFunction(data) {
    
    data.forEach(pet => {
       
    });
}