const fetchData = async (config) => {
  try {
    const res = await axios(config);
    return res.data;
  } catch (error) {
    throw Error("There is a problem");
  }
};

const cardsElement = document.querySelector(".cards");
const loadAllData = async () => {
  const cards = await fetchData("https://jsonplaceholder.typicode.com/posts");
  cards.map((card) => {
    const cardElement = document.createElement("div");
    cardElement.classList.add("card");

    cardElement.innerHTML = `
    <h2 class="card-title">${card.id}</h2>
    <p class="card-desc">${card.body}</p>
    `;
    const button = document.createElement("button");
    button.classList.add("card-button");
    button.innerHTML = "Click me!";
    cardElement.appendChild(button);
    cardsElement.appendChild(cardElement);
  });
};

loadAllData();
