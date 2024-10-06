
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
