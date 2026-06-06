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
  },
  {
    id: 4,
    queen: "BeBe Zahara Benet",
    season: 1,
    episode: 0,
    runway: "Drag Race",
    image: "https://i.pinimg.com/736x/0c/99/26/0c9926aa8bf1add845ab6ac74319a1c9.jpg",
    colors: ["black", "pink"],
    tags: ["fashion"]
  },
  {
    id: 5,
    queen: "Jade",
    season: 1,
    episode: 0,
    runway: "Best Drag",
    image: "https://i.pinimg.com/736x/a5/d9/ba/a5d9ba7ef4e52f1948a6fd9de5ffa2fa.jpg",
    colors: ["white", "black"],
    tags: ["fashion", "streetwear"]
  },
  {
    id: 6,
    queen: "Jade",
    season: 1,
    episode: 0,
    runway: "Drag Race",
    image: "https://i.pinimg.com/736x/d8/33/c6/d833c699bea73cabde111213408268a6.jpg",
    colors: ["dark blue"],
    tags: ["fashion", "denim"]
  },
  {
    id: 7,
    queen: "Nina Flowers",
    season: 1,
    episode: 0,
    runway: "Best Drag",
    image: "https://i.pinimg.com/736x/c3/99/5b/c3995b846b4efa4a50385671fb31367f.jpg",
    colors: ["burgundy"],
    tags: ["patterned", "alternative"]
  },
  {
    id: 8,
    queen: "Nina Flowers",
    season: 1,
    episode: 0,
    runway: "Drag Race",
    image: "https://i.pinimg.com/736x/e3/51/67/e351679d2cbdd313d230bbaa28fde421.jpg",
    colors: ["dark blue"],
    tags: ["alternative", "denim"]
  },
  {
    id: 9,
    queen: "Ongina",
    season: 1,
    episode: 0,
    runway: "Best Drag",
    image: "https://i.pinimg.com/736x/9e/ac/db/9eacdb1b729cb2f306e25250fe6c5476.jpg",
    colors: ["black"],
    tags: ["fashion"]
  },
  {
    id: 10,
    queen: "Ongina",
    season: 1,
    episode: 0,
    runway: "Drag Race",
    image: "https://i.pinimg.com/736x/ef/85/a0/ef85a0f08b06681b03f4a930f1024632.jpg",
    colors: ["dark blue", "yellow"],
    tags: ["fashion", "denim", "camp"]
  },
  {
    id: 11,
    queen: "Rebecca Glasscock",
    season: 1,
    episode: 0,
    runway: "Best Drag",
    image: "https://i.pinimg.com/736x/42/8d/f6/428df6c5b78c9648d7a1839fe19a41c2.jpg",
    colors: ["black", "white"],
    tags: ["fashion", "patterned", "cocktail dress"]
  },
  {
    id: 12,
    queen: "Rebecca Glasscock",
    season: 1,
    episode: 0,
    runway: "Drag Race",
    image: "https://i.pinimg.com/736x/7e/8d/50/7e8d501aededf0bc4a8e3c475debc195.jpg",
    colors: ["dark blue", "black", "white"],
    tags: ["fashion", "denim", "patterned"]
  },
  {
    id: 13,
    queen: "Shannel",
    season: 1,
    episode: 0,
    runway: "Best Drag",
    image: "https://i.pinimg.com/736x/f2/09/41/f2094136135fa4d666a499c030990e7f.jpg",
    colors: ["brown", "gold", "bronze"],
    tags: ["fashion", "avant-garde"]
  },
  {
    id: 14,
    queen: "Shannel",
    season: 1,
    episode: 0,
    runway: "Drag Race",
    image: "https://i.pinimg.com/736x/2c/0f/1d/2c0f1d84e734c3c4204cb4810035d8d2.jpg",
    colors: ["dark blue", "black"],
    tags: ["fashion", "denim"]
  },
  {
    id: 15,
    queen: "Tammie Brown",
    season: 1,
    episode: 0,
    runway: "Best Drag",
    image: "https://i.pinimg.com/736x/dd/d8/96/ddd896945713675c522f0da2a0e16e72.jpg",
    colors: ["black"],
    tags: ["camp", "fashion"]
  },
  {
    id: 16,
    queen: "Tammie Brown",
    season: 1,
    episode: 0,
    runway: "Drag Race",
    image: "https://i.pinimg.com/736x/ee/c0/df/eec0df427b5a392ca15eda339c9e4dad.jpg",
    colors: ["dark blue"],
    tags: ["camp", "denim"]
  },
  {
    id: 17,
    queen: "Victoria 'Porkchop' Parker",
    season: 1,
    episode: 0,
    runway: "Best Drag",
    image: "https://i.pinimg.com/736x/2e/8b/47/2e8b47d6f9b528e31faa7fb3f44ec80d.jpg",
    colors: ["black"],
    tags: ["fashion"]
  },
  {
    id: 18,
    queen: "Victoria 'Porkchop' Parker",
    season: 1,
    episode: 0,
    runway: "Drag Race",
    image: "https://i.pinimg.com/736x/01/ed/fb/01edfb4ca4412dcc2de2a8fd82edd59d.jpg",
    colors: ["dark blue"],
    tags: ["denim"]
  }
];

// -------------------- SORT A → Z --------------------
looks.sort((a, b) => a.queen.localeCompare(b.queen));

// -------------------- STORAGE --------------------
let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
let selectedLook = null;
let activeTags = [];

// -------------------- PAGINATION --------------------
let currentPage = 1;
const looksPerPage = 50;
let currentFilteredLooks = [...looks];

// -------------------- RENDER GRID --------------------
function renderLooks(data) {
  const grid = document.getElementById("grid");
  const loadMoreBtn = document.getElementById("loadMoreBtn");

  const visibleLooks = data.slice(0, currentPage * looksPerPage);

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

  let filtered = [...looks];

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
      l.tags.some(tag => tag.toLowerCase().includes(search))
    );
  }

  currentFilteredLooks = filtered;
  currentPage = 1;

  renderLooks(filtered);
}

// -------------------- TAG SYSTEM --------------------
const allTags = [
  "camp",
  "cocktail dress",
  "fashion",
  "catsuit",
  "streetwear",
  "denim",
  "patterned",
  "alternative",
  "avant-garde"
];

// (keep your existing tag, modal, favorites, events code exactly the same)

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
