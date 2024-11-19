const cardsData = [
  {
    img: "assests/img/Img 01.svg",
    avatar: "assests/img/avatar.jpeg",
    avatarName: "Dianne Russell",
    description:
      "Want to buy a house but are unsure about what we should know, here I will try to explain what we should know and check when we want to buy a house",
    title: "The things we need to check when we want to buy a house",
    icon: "assests/img/ic_round-access-time.svg",
    time: "4 min read ",
    date: "25 Apr 2021",
  },
  {
    img: "assests/img/Img 02.svg",
    avatar: "assests/img/avatar.jpeg",
    avatarName: "Courtney Henry",
    description:
      "Want to buy a house but are unsure about what we should know, here I will try to explain what we should know and check when we want to buy a house",
    title: "7 Ways to distinguish the quality of the house we want to buy",
    icon: "assests/img/ic_round-access-time.svg",
    time: "4 min read ",
    date: "25 Apr 2021",
  },
  {
    img: "assests/img/Img 03.svg",
    avatar: "assests/img/Avatar02.png",
    avatarName: "Darlene Robertson",
    title: "The best way to know the quality of the house we want to buy",
    description:
      "Want to buy a house but are unsure about what we should know, here I will try to explain what we should know and check when we want to buy a house",
    icon: "assests/img/ic_round-access-time.svg",
    time: "4 min read ",
    date: "25 Apr 2021",
  },
  // {
  //   img: "assests/img/Imgs.svg",
  //   avatar: "assests/img/ic_round-access-time.svg",
  //   avatarName: "Dianne Russell",
  //   description: "The things we need to check when we want to buy a house",
  //   icon: "assests/img/Icons.svg",
  //   time: "4 min read ",
  //   date: "25 Apr 2021",
  // },
];

let currentIndex = 0;
const cardsPerPage = 3;

const articleContentHTML = `
  <div class="article-section-content__element__cards" id="cardsContainer">
    ${cardsData
      .map(
        (card, index) => `
        <div class="article-section-content__element__card" onClick="updateBigCard(${index})">
          <img src="${card.img}" alt="article-img" class="article-img" />
          <div class="card-content">
            <div class="card-content__name">
              <img src="${card.avatar}" alt="avatar" class="card-content__name-avatar">
              <p>${card.avatarName}</p>
            </div>
            <p>${card.title}</p>
            <div class="card-content__icon">
              <img src="${card.icon}" alt="">
              <p>${card.time} | ${card.date}</p>
            </div>
          </div>
        </div>`
      )
      .join("")}
  </div>`;
document.getElementById("articleSection").innerHTML = articleContentHTML;

function updateBigCard(index) {
  const card = cardsData[index];

  document.getElementById("bigCardImg").src = card.img;
  document.getElementById("bigCardAvatar").src = card.avatar;
  document.getElementById("bigCardAuthor").textContent = card.avatarName;
  document.getElementById("bigCardTitle").textContent = card.title;
  document.getElementById("bigCardDescription").textContent = card.description;
  document.getElementById(
    "bigCardReadTime"
  ).textContent = `${card.time} | ${card.date}`;
}

// -----------card-button-----
let scrollContainer = document.querySelector("#gallery");
let backBtn = document.getElementById("backBtn");
let nextBtn = document.getElementById("nextBtn");

nextBtn.addEventListener("click", () => {
  scrollContainer.style.scrollBehavior = "smooth";
  scrollContainer.scrollLeft += 500;
});
backBtn.addEventListener("click", () => {
  scrollContainer.style.scrollBehavior = "smooth";
  scrollContainer.scrollLeft -= 500;
});

// ------hide button------
document.getElementById("tab-handle").addEventListener("click", function () {
  const articleContentHTML = `
  <div class="article-section-content__element__cards">
    ${cardsData
      .map(
        (card, index) => `
          <div class="article-section-content__element__card" onClick="updateBigCard(${index})">
            <img src="${card.img}" alt="article-img" class="article-img" />
            <div class="card-content">
              <div class="card-content__name">
                <img src="${card.avatar}" alt="avatar" class="card-content__name-avatar">
                <p>${card.avatarName}</p>
              </div>
              <p>${card.title}</p>
              <div class="card-content__icon">
                <img src="${card.icon}" alt="">
                <p>${card.time} | ${card.date}</p>
              </div>
            </div>
          </div>`
      )
      .join("")}
  </div>`;
  document.getElementById("articleSection1").innerHTML = articleContentHTML;
});

// ---cross-button----
document.getElementById("cross").addEventListener("click", () => {
  document.getElementById("footer-bottom").style.display = "none";
});
