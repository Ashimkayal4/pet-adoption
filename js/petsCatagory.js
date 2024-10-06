fetch("https://openapi.programming-hero.com/api/peddy/category/dog")
    .then(res => res.json())
.then(data => console.log(data.data));


