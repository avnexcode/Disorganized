const products = [
  {
    id: 1,
    name: "Nike air",
    img: "shoes-1",
    imgColor: "#7ce499",
    price: "180.00",
    discount: "289.00",
    colors: ["black", "red", "orangered", "rgb(222, 222, 11)"],
  },
  {
    id: 2,
    name: "Air Jordan",
    img: "shoes-2",
    imgColor: "#cfc2ff",
    price: "199.00",
    discount: "289.00",
    colors: ["black", "red", "orangered", "rgb(222, 222, 11)"],
    category: ["New"],
  },
  {
    id: 3,
    name: "Nike Netro",
    img: "shoes-3",
    imgColor: "#817bf5",
    price: "135.00",
    discount: "289.00",
    colors: ["black", "red", "orangered", "rgb(222, 222, 11)"],
    category: ["Hot", "New"],
  },
  {
    id: 4,
    name: "Air Spain",
    img: "shoes-4",
    imgColor: "#68eaea",
    price: "149.00",
    discount: "199.00",
    colors: ["black", "red", "orangered", "rgb(222, 222, 11)"],
    category: ["Hot"]
  },
  {
    id: 1,
    name: "Nike air",
    img: "shoes-1",
    imgColor: "#7ce499",
    price: "180.00",
    discount: "289.00",
    colors: ["black", "red", "orangered", "rgb(222, 222, 11)"],
  },
  {
    id: 2,
    name: "Air Jordan",
    img: "shoes-2",
    imgColor: "#cfc2ff",
    price: "199.00",
    discount: "289.00",
    colors: ["black", "red", "orangered", "rgb(222, 222, 11)"],
    category: ["New"],
  },
  {
    id: 3,
    name: "Nike Netro",
    img: "shoes-3",
    imgColor: "#817bf5",
    price: "135.00",
    discount: "289.00",
    colors: ["black", "red", "orangered", "rgb(222, 222, 11)"],
    category: ["Hot", "New"],
  },
  {
    id: 4,
    name: "Air Spain",
    img: "shoes-4",
    imgColor: "#68eaea",
    price: "149.00",
    discount: "199.00",
    colors: ["black", "red", "orangered", "rgb(222, 222, 11)"],
    category: ["Hot"]
  },
];
const candyContainer = document.getElementById("main-candy-content");

const generateElement = (totalElement) => {
  let random = Math.round(Math.random() * 60);
  let result = "";
  for (let i = 0; i < totalElement; i++) {
    let candyColor = "";
    if ((i + 1) % 2 === 0) {
      // Jika i adalah kelipatan 3 (indeks dimulai dari 0), atur kelas warna sesuai
      if ((i + 1) % 3 === 0) {
        candyColor = "#0277ff";
      } else if ((i + 1) % 4) {
        candyColor = "#eb6003";
      } else {
        candyColor = "#817bf5";
      }
    }

    result += `
      <div class="candy">
        <div class="progres" style="background-color: ${candyColor}; height: ${
      random * 2
    }px"></div>
        <div class="date">${22 + i}</div>
      </div>
    `;
  }
  return result;
};

candyContainer.innerHTML = generateElement(10);


const displayCard = (elemen, item) => {
  return `<div class="card">
            <div class="card-image" style="background-color: ${item.imgColor}">
              <img src="./public/assets/image/${item.img}.png" alt="" />
              <div class="category">
              ${item.category? item.category.map(item => {
                let output = ""
                if (item === "New") {
                  output += `<span style="background-color: #0277ff">${item}</span>`
                } else {
                  output += `<span>${item}</span>`
                }
                return output;
              }).join("") : ''}
              </div>
            </div>
            <div class="card-info">
              <h1>${item.name}</h1>
              <div class="price">
                <p>$${item.price}</p>
                <p>$${item.discount}</p>
              </div>
              <div class="display-color">
                <p>Colors</p>
                <div class="color-list">
                ${item.colors ? item.colors.map(item => {
                  return `<div class="color-box"><div class="color" style="background-color: ${item}"></div></div>`
                }).join("") : ''}
                </div>
              </div>
            </div>
          </div>`;
};


const cardList = document.getElementsByClassName('card-list')[0]
cardList.innerHTML = products.map((item) => {
  return displayCard(cardList, item);
}).join("")

