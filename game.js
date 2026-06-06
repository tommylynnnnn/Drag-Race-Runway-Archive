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

// STORAGE
let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
let selectedLook = null;
let activeTags = [];

// -------------------- RENDER GRID --------------------
function renderLooks(data) {
  const grid = document.getElementById("grid");
  grid.innerHTML = "";

  data.forEach(l => {
    const isFav = favorites.includes(l.id);

    grid.innerHTML += `
      <div class="card" onclick="openModal(${l.id})">
        <img src="${l.image}" alt="${l.queen}">
        <h3>${l.queen}</h3>
        <p>Season ${l.season} • Episode ${l.episode}</p>
        <p>${l.runway}</p>
        ${isFav ? "<p>❤️ Favorited</p>" : ""}
      </div>
    `;
  });
}

// -------------------- FILTER SYSTEM --------------------
function filterLooks() {
  const search = document.getElementById("searchBar").value.toLowerCase();
  const season = document.getElementById("seasonFilter").value;
  const episode = document.getElementById("episodeFilter").value;

  let filtered = looks;

  // season filter
  if (season !== "all") {
    filtered = filtered.filter(l => l.season == season);
  }

  // episode filter
  if (episode !== "all") {
    filtered = filtered.filter(l => l.episode == episode);
  }

  // TAG FILTER (IMPORTANT UPGRADE)
  if (activeTags.length > 0) {
    filtered = filtered.filter(l =>
      activeTags.every(tag => l.tags.includes(tag))
    );
  }

  // SEARCH FILTER
  if (search) {
    filtered = filtered.filter(l =>
      l.queen.toLowerCase().includes(search) ||
      l.runway.toLowerCase().includes(search) ||
      l.tags.some(tag => tag.toLowerCase().includes(search))
    );
  }

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
  document.getElementById("modalQueen").innerText = selectedLook.queen;
  document.getElementById("modalInfo").innerText =
    `Season ${selectedLook.season} • Episode ${selectedLook.episode}`;
  document.getElementById("modalRunway").innerText = selectedLook.runway;

  updateFavButton();
  document.getElementById("modal").classList.remove("hidden");
}

document.getElementById("closeModal").onclick = () => {
  document.getElementById("modal").classList.add("hidden");
};

// -------------------- FAVORITES --------------------
function toggleFavorite() {
  if (!selectedLook) return;

  const id = selectedLook.id;

  if (favorites.includes(id)) {
    favorites = favorites.filter(f => f !== id);
  } else {
    favorites.push(id);
  }

  localStorage.setItem("favorites", JSON.stringify(favorites));

  updateFavButton();
  filterLooks(); // IMPORTANT FIX: re-filter instead of full reset
}

function updateFavButton() {
  const btn = document.getElementById("favBtn");

  if (!selectedLook) return;

  btn.innerText = favorites.includes(selectedLook.id)
    ? "💔 Unfavorite"
    : "❤️ Favorite";
}

// -------------------- EVENTS --------------------
document.getElementById("favBtn").onclick = toggleFavorite;

document.getElementById("searchBar").addEventListener("input", filterLooks);
document.getElementById("seasonFilter").addEventListener("change", filterLooks);
document.getElementById("episodeFilter").addEventListener("change", filterLooks);

// -------------------- INIT --------------------
renderTags();
renderLooks(looks);
