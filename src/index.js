const dogId = data[0].id;
const dogName = data[0].name;
const dogImage = data[0].image;
const dogBio = data[0].bio;

const dogList = document.querySelector(".dogs-list");
//section
const dogCard = document.querySelector(".main__dog-section");

const addCard = document.querySelector(".dogs-list__button--add");

// WRITE YOUR CODE BELOW!

// function createBtnsList(data) {
//   data.forEach((dog) => {
//     dogList.insertAdjacentHTML(
//       "beforeend",
//       `<li class="dogs-list__button" data-id=${dog.id}>${dog.name}</li> `
//     );
//   });
//   getDogId();
// }

// function getDogId() {
//   const dogBtns = document.querySelectorAll(".dogs-list__button");
//   dogBtns.forEach((dog) => {
//     dog.addEventListener("click", (event) => {
//       let dogId = +dog.dataset.id;

//       createCardDog(dogId);
//     });
//   });
// }

// function createCardDog(dogId) {
//   data.forEach((dog) => {
//     if (dog.id === dogId) {
//       dogCard.textContent = "";
//       dogCard.insertAdjacentHTML(
//         "beforeend",
//         `<h2>${dog.name}</h2>
//         <img
//           src= ${dog.image}
//           alt="${dog.name} dog"
//           />
//         <div class="main__dog-section__desc">
//         <h3>Bio</h3>
//         <p>${dog.bio}</p>
//       </div>
//       <p><em>Is naughty?</em> <span>yes!</span></p>
//       <button class="toggle">Good dog!</button>`
//       );
//     }
//   });
// }

// createBtnsList(data);

// addCard.addEventListener("click", (event) => {
//   dogCard.innerHTML = "";

//   dogCard.insertAdjacentHTML(
//     "beforeend",
//     `<h2>Add a new Dog</h2>
//      <form class="form">
//         <label for="name">Dog's ID</label>
//         <input type="text" id="id" name="name">

//         <label for="name">Dog's name</label>
//         <input type="text" id="name" name="name">

//         <label for="image">Dog's picture</label>
//         <input type="url" id="image" name="image">

//         <label for="bio">Dog's bio</label>
//         <textarea rows="5" id="bio" name="bio"></textarea>

//         <input type="submit" id="submit" name="submit" value="Let's add a dog!" class="form__button">
//     </form>`
//   );
// });

// const form = document.querySelector("form");
// const idInput = document.querySelector("#id");
// const nameInput = document.querySelector("#name");
// const imageInput = document.querySelector("#image");
// const bioInput = document.querySelector("#bio");

// form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   let id = idInput.value.toLowerCase();
//   let name = nameInput.value.toLowerCase();
//   let image = imageInput.value;
//   let bio = bioInput.value.toLowerCase();

//   addNewDogToList(id, name, image, bio);
//   console.log(data);
// });

// function addNewDogToList(id, name, image, bio) {
//   data.unshift({
//     id: id,
//     name: name,
//     image: image,
//     bio: bio,
//   });

//   dogList.textContent = "";
//   createBtnsList(data);
// }

//---------------------------------------------------------

function createDogCard(data) {
  for (let i = 0; i < data.length; i++) {
    dogCard.innerHTML = "";

    const li = document.createElement("li");
    li.classList.add("dogs-list__button");
    li.innerText = data[i].name;
    dogList.append(li);

    li.addEventListener("click", (event) => {
      dogCard.innerHTML = "";
      const h2 = document.createElement("h2");
      h2.innerText = data[i].name;
      dogCard.append(h2);

      const image = document.createElement("img");
      image.setAttribute("src", data[i].image);
      dogCard.append(image);

      const desc = document.createElement("div");
      desc.classList.add("main__dog-section__desc");
      const h3 = document.createElement("h3");
      h3.innerText = "Bio";
      desc.append(h3);

      const pBio = document.createElement("p");
      pBio.innerText = data[i].bio;
      desc.append(pBio);
      dogCard.append(desc);

      const isNaughty = document.createElement("p");
      const em = document.createElement("em");
      em.innerText = "is naughty?";
      isNaughty.append(em);

      const span = document.createElement("span");
      span.textContent = " Yes!";
      isNaughty.append(span);
      dogCard.append(isNaughty);

      const button = document.createElement("button");
      button.classList.add("toggle");
      button.innerText = "Good dog";
      dogCard.append(button);

      const estimateBtn = document.querySelector(".toggle");
      estimateBtn.addEventListener("click", (event) => {
        if (estimateBtn.textContent === "Good dog") {
          estimateBtn.textContent = "Bad Dog";
          span.textContent = " No!";
        } else if (estimateBtn.textContent === "Bad Dog") {
          estimateBtn.textContent = "Good dog";
          span.textContent = " Yes!";
        }
      });
    });
  }
}

createDogCard(data);

addCard.addEventListener("click", (event) => {
  dogCard.innerHTML = "";

  dogCard.insertAdjacentHTML("beforeend", `<h2>Add a new Dog</h2>`);
  dogCard.insertAdjacentHTML(
    "beforeend",
    `<form class="form">
        <label for="id">Dog's ID</label>
        <input type="text" id="id" name="id" required>

        <label for="name">Dog's name</label>
        <input type="text" id="name" name="name" required>

        <label for="image">Dog's picture</label>
        <input type="url" id="image" name="image">

        <label for="bio">Dog's bio</label>
        <textarea rows="5" id="bio" name="bio"></textarea required>

        <input type="submit" id="submit" name="submit" value="Let's add a dog!" class="form__button">
    </form>`
  );

  addDog();
});

function addDog() {
  const addButton = document.querySelector(".dogs-list__button--add");

  const form = document.querySelector("form");
  const idInput = document.querySelector("#id");
  const nameInput = document.querySelector("#name");
  const imageInput = document.querySelector("#image");
  const bioInput = document.querySelector("#bio");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    let id = +idInput.value;
    let name = nameInput.value;
    let image = imageInput.value;
    let bio = bioInput.value;

    console.log(id);
    addNewDogToList(id, name, image, bio);
  });
}

function addNewDogToList(id, name, image, bio) {
  data.unshift({
    id: id,
    name: name,
    image: image,
    bio: bio,
  });

  dogList.textContent = "";
  createDogCard(data);
}
