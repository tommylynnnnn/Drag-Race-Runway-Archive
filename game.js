const looks = [
  {
    id: 1,
    queen: "Akashia",
    season: 1,
    episode: o,
    runway: "Best Drag",
    image: "https://static.wikia.nocookie.net/logosrupaulsdragrace/images/8/8a/AkashiaPromoHD.png/revision/latest?cb=20170712132526",
    colors: ["teal"],
    tags: ["cocktail dress", "camp"]
  },
  {
    id: 2,
    queen: "Jinkx Monsoon",
    season: 5,
    episode: 2,
    runway: "Pants Down Bottoms Up",
    image: "https://via.placeholder.com/300x400",
    colors: ["red", "black"],
    tags: ["camp", "comedy"]
  }
];

// FAVORITES (stored in browser)
let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

// CURRENT SELECTED LOOK
let selectedLook = null;

// RENDER GRID
function renderLooks(data) {
  const grid = document.getElementById("grid");
  grid.innerHTML = "";

  data.forEach(l => {
    const isFav = favorites.includes(l.id);

    grid.innerHTML += `
      <div class="card" onclick="openModal(${l.id})">
        <img src="${l.image}">
        <h3>${l.queen}</h3>
        <p>Season ${l.season} • Episode ${l.episode}</p>
        <p>${l.runway}</p>
        ${isFav ? "<p>❤️ Favorited</p>" : ""}
      </div>
    `;
  });
}

// FILTERS (same logic as Tier 1)
function filterLooks() {
  const search = document.getElementById("searchBar").value.toLowerCase();
  const season = document.getElementById("seasonFilter").value;
  const queen = document.getElementById("queenFilter").value;
  const episode = document.getElementById("episodeFilter").value;

  let filtered = looks;

  if (season !== "all") filtered = filtered.filter(l => l.season == season);
  if (queen !== "all") filtered = filtered.filter(l => l.queen === queen);
  if (episode !== "all") filtered = filtered.filter(l => l.episode == episode);

  if (search) {
    filtered = filtered.filter(l =>
      l.queen.toLowerCase().includes(search) ||
      l.runway.toLowerCase().includes(search) ||
      l.tags.some(t => t.includes(search))
    );
  }

  renderLooks(filtered);
}

// OPEN MODAL
function openModal(id) {
  selectedLook = looks.find(l => l.id === id);

  document.getElementById("modalImg").src = selectedLook.image;
  document.getElementById("modalQueen").innerText = selectedLook.queen;
  document.getElementById("modalInfo").innerText =
    `Season ${selectedLook.season} • Episode ${selectedLook.episode}`;
  document.getElementById("modalRunway").innerText = selectedLook.runway;

  updateFavButton();

  document.getElementById("modal").classList.remove("hidden");
}

// CLOSE MODAL
document.getElementById("closeModal").onclick = () => {
  document.getElementById("modal").classList.add("hidden");
};

// FAVORITE SYSTEM
function toggleFavorite() {
  const id = selectedLook.id;

  if (favorites.includes(id)) {
    favorites = favorites.filter(f => f !== id);
  } else {
    favorites.push(id);
  }

  localStorage.setItem("favorites", JSON.stringify(favorites));
  updateFavButton();
  renderLooks(looks);
}

function updateFavButton() {
  const btn = document.getElementById("favBtn");

  if (!selectedLook) return;

  if (favorites.includes(selectedLook.id)) {
    btn.innerText = "💔 Unfavorite";
  } else {
    btn.innerText = "❤️ Favorite";
  }
}

// EVENTS
document.getElementById("favBtn").onclick = toggleFavorite;

document.getElementById("searchBar").addEventListener("input", filterLooks);
document.getElementById("seasonFilter").addEventListener("change", filterLooks);
document.getElementById("queenFilter").addEventListener("change", filterLooks);
document.getElementById("episodeFilter").addEventListener("change", filterLooks);

// INIT
renderLooks(looks);
