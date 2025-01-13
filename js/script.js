// DOM ELM
const cardContainerElm = document.getElementById("card-container");
const overlayElm = document.getElementById("overlay");
const imgOvElm = document.getElementById("img-ov");
const btnCloseElm = document.getElementById("btn-close");

axios.get("https://picsum.photos/v2/list?page=1&limit=6")
  .then((res) => {
    const photos = res.data;
    photos.forEach((photo) => {
      cardContainerElm.innerHTML += `
        <div class="col-sm-6 col-md-4 mb-5">
          <div class="card p-3 position-relative">
            <img src="../img/pin.svg" alt="pin" class="position-absolute top-0 start-50 translate-middle">
            <img src="${photo.download_url}" class="card-img" alt="Card image">
            <div class="card-body">
              <p class="card-text">${photo.author}</p>
            </div>
          </div>
        </div>
      `;
    });

    const photoImgs = document.querySelectorAll(".card-img");

    // CLICK ON IMG
    photoImgs.forEach((photoImg) => {
      photoImg.addEventListener("click", () => {
        imgOvElm.src = photoImg.src; 
        overlayElm.classList.remove("hidden"); 
      });
    });
  });

// CLICK ON BTN
btnCloseElm.addEventListener("click", () => {
  overlayElm.classList.add("hidden");
});