//DOM ELM
const cardContainerElm = document.getElementById("card-container")

axios.get("https://jsonplaceholder.typicode.com/photos?_limit=6")
  .then((res) => {
    const photos = res.data;
    photos.forEach((photo) => {
    cardContainerElm.innerHTML += `
        <div class="col-md-4 mb-5">
                    <div class="card p-3 position-relative">
                        <img src="../img/pin.svg" alt="pin" class="position-absolute top-0 start-50 translate-middle">
                        <img src="${photo.url}" class="card-img" alt="Card image">
                        <div class="card-body">
                            <p class="card-text">${photo.title}</p>
                        </div>
                    </div>
                </div>
      `;
    });
  })