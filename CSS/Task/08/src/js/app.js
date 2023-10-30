const products = [
  {
    id: 1,
    name: "Paarmodelle All Might",
    type: "Wanderschuhe",
    color: ["gray", "black"],
    price: 39.68,
    img: "shoes-1",
    freeShipping: true,
    discount: false,
  },
  {
    id: 2,
    name: "Converse All Star",
    type: "1970Os Hi",
    color: ["gray", "brown", "black"],
    price: 89.0,
    img: "shoes-4",
    freeShipping: false,
    discount: false,
  },
  {
    id: 3,
    name: "Hoka One One Clifton",
    type: "L Suede",
    color: ["gray", "blue"],
    price: 45.0,
    img: "shoes-2",
    freeShipping: false,
    discount: true,
  },
  {
    id: 4,
    name: "Vans UltraRange",
    type: "Exo MTE-1",
    color: ["gray", "blue"],
    price: 39.68,
    img: "shoes-3",
    freeShipping: false,
    discount: false,
  },
  {
    id: 1,
    name: "Paarmodelle All Might",
    type: "Wanderschuhe",
    color: ["gray", "black"],
    price: 39.68,
    img: "shoes-1",
    freeShipping: true,
    discount: false,
  },
  {
    id: 2,
    name: "Converse All Star",
    type: "1970Os Hi",
    color: ["gray", "brown", "black"],
    price: 89.0,
    img: "shoes-4",
    freeShipping: false,
    discount: false,
  },
  {
    id: 3,
    name: "Hoka One One Clifton",
    type: "L Suede",
    color: ["gray", "blue"],
    price: 45.0,
    img: "shoes-2",
    freeShipping: false,
    discount: true,
  },
  {
    id: 4,
    name: "Vans UltraRange",
    type: "Exo MTE-1",
    color: ["gray", "blue"],
    price: 39.68,
    img: "shoes-3",
    freeShipping: false,
    discount: false,
  },
];
const shipping = '<div class="shipping"><p>Free Shipping</p></div>';
const discount =
  '<div class="discount"><i class="fa-solid fa-percent"></i></div>';
const cardList = document.getElementsByClassName("card-list")[0];

const cardRender = (elemen, data) => {
  elemen.innerHTML = data.map((item, index) => {
      return `<div class="card" key=${index}>
                <div class="card-image">
                  ${item.freeShipping ? shipping : ""}
                  ${item.discount ? discount : ""}
                  <div class="image">
                    <img src="./public/assets/image/${item.img}.png" alt="${item.name}">
                  </div>
                  <div>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
                <div class="card-detail">
                  <div class="title">
                    <p>${item.name}</p>
                    <p>${item.type}</p>
                  </div>
                  <div class="color-price">
                    <div class="color-list">
                      ${item.color.map((item) => `<div class="color" style="background-color: ${item}"></div>`).join("")}
                    </div>
                    <div class="price">
                      <p><b>$${item.price}</b></p>
                    </div>
                  </div>
                </div>
              </div>`;}).join("");
};

cardRender(cardList, products);

const searchButton = document
  .getElementById("search-button")
  .addEventListener("click", (e) => {
    const searchInput = document.getElementById("search-input").value;
    const filterProducts = products.filter((item, index) => {
      return item.name.toLowerCase().includes(searchInput.toLowerCase());
    });
    cardRender(cardList, filterProducts);
    e.preventDefault();
  });
