const looks = [
  {
    id: 1,
    queen: "Akashia",
    season: 1,
    episode: 0,
    runway: "Best Drag",
    image: "https://i.pinimg.com/736x/1c/f3/d0/1cf3d0327704786cd45a5bb364e276cd.jpg",
    colors: ["teal"],
    tags: ["cocktail dress", "camp"]
  },
  {
    id: 2,
    queen: "Akashia",
    season: 1,
    episode: 0,
    runway: "Drag Race",
    image: "https://i.pinimg.com/736x/87/15/ae/8715ae679efa31c97ca9840a17e1f189.jpg",
    colors: ["red", "black"],
    tags: ["cocktail dress", "fashion"]
  },
  {
    id: 3,
    queen: "BeBe Zahara Benet",
    season: 1,
    episode: 0,
    runway: "Best Drag",
    image: "https://i.pinimg.com/736x/48/de/bf/48debfd162d08df98ab9d570526c6759.jpg",
    colors: ["black"],
    tags: ["catsuit", "fashion"]
  }
];

// -------------------- STORAGE --------------------
let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
let selectedLook = null;
let activeTags = [];

// -------------------- PAGINATION --------------------
let currentPage = 1;
const looksPerPage = 50;
let currentFilteredLooks = looks;

// -------------------- RENDER GRID --------------------
function renderLooks(data) {
  const grid = document.getElementById("grid");
  const loadMoreBtn = document.getElementById("loadMoreBtn");

  grid.innerHTML = "";

  const visibleLooks = data.slice(
    0,
    currentPage * looksPerPage
  );

  let html = "";

  visibleLooks.forEach(l => {
    const isFav = favorites.includes(l.id);

    html += `
      <div class="card" onclick="openModal(${l.id})">
        <img src="${l.image}" alt="${l.queen}" loading="lazy">
        <h3>${l.queen}</h3>
        <p>Season ${l.season} • Episode ${l.episode}</p>
        <p>${l.runway}</p>
        ${isFav ? "<p>❤️ Favorited</p>" : ""}
      </div>
    `;
  });

  grid.innerHTML = html;

  if (visibleLooks.length >= data.length) {
    loadMoreBtn.style.display = "none";
  } else {
    loadMoreBtn.style.display = "inline-block";
  }
}

// -------------------- FILTER SYSTEM --------------------
function filterLooks() {
  const search = document.getElementById("searchBar").value.toLowerCase();
  const season = document.getElementById("seasonFilter").value;
  const episode = document.getElementById("episodeFilter").value;

  let filtered = looks;

  if (season !== "all") {
    filtered = filtered.filter(l => l.season == season);
  }

  if (episode !== "all") {
    filtered = filtered.filter(l => l.episode == episode);
  }

  if (activeTags.length > 0) {
    filtered = filtered.filter(l =>
      activeTags.every(tag => l.tags.includes(tag))
    );
  }

  if (search) {
    filtered = filtered.filter(l =>
      l.queen.toLowerCase().includes(search) ||
      l.runway.toLowerCase().includes(search) ||
      l.tags.some(tag =>
        tag.toLowerCase().includes(search)
      )
    );
  }

  currentFilteredLooks = filtered;
  currentPage = 1;

  renderLooks(filtered);
}

// -------------------- TAG SYSTEM --------------------
const allTags = [
  "camp",
  "comedy",
  "cocktail dress",
  "fashion",
  "catsuit"
];

function renderTags() {
  const bar = document.getElementById("tagBar");
  bar.innerHTML = "";

  allTags.forEach(tag => {
    bar.innerHTML += `
      <div class="tag ${activeTags.includes(tag) ? "active" : ""}"
           onclick="toggleTag('${tag}')">
        ${tag}
      </div>
    `;
  });
}

function toggleTag(tag) {
  if (activeTags.includes(tag)) {
    activeTags = activeTags.filter(t => t !== tag);
  } else {
    activeTags.push(tag);
  }

  renderTags();
  filterLooks();
}

// -------------------- MODAL --------------------
function openModal(id) {
  selectedLook = looks.find(l => l.id === id);

  document.getElementById("modalImg").src = selectedLook.image;
  document.getElementById("modalQueen").textContent = selectedLook.queen;

  document.getElementById("modalInfo").textContent =
    `Season ${selectedLook.season} • Episode ${selectedLook.episode}`;

  document.getElementById("modalRunway").textContent =
    selectedLook.runway;

  updateFavButton();

  document
    .getElementById("modal")
    .classList.remove("hidden");
}

document.getElementById("closeModal").onclick = () => {
  document
    .getElementById("modal")
    .classList.add("hidden");
};

// -------------------- FAVORITES --------------------
function toggleFavorite() {
  if (!selectedLook) return;

  if (favorites.includes(selectedLook.id)) {
    favorites = favorites.filter(
      id => id !== selectedLook.id
    );
  } else {
    favorites.push(selectedLook.id);
  }

  localStorage.setItem(
    "favorites",
    JSON.stringify(favorites)
  );

  updateFavButton();
  renderLooks(currentFilteredLooks);
}

function updateFavButton() {
  const btn = document.getElementById("favBtn");

  btn.textContent = favorites.includes(selectedLook.id)
    ? "💔 Unfavorite"
    : "❤️ Favorite";
}

// -------------------- EVENTS --------------------
document.getElementById("favBtn").onclick =
  toggleFavorite;

document.getElementById("searchBar")
  .addEventListener("input", filterLooks);

document.getElementById("seasonFilter")
  .addEventListener("change", filterLooks);

document.getElementById("episodeFilter")
  .addEventListener("change", filterLooks);

document.getElementById("loadMoreBtn")
  .addEventListener("click", () => {
    currentPage++;
    renderLooks(currentFilteredLooks);
  });

// -------------------- INIT --------------------
renderTags();
renderLooks(looks);
