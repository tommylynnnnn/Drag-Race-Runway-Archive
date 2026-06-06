const looks = [
  {
    queen: "Sasha Colby",
    season: 15,
    episode: 3,
    runway: "Princess Eleganza",
    placement: 1,
    image: "https://via.placeholder.com/300x400",
    colors: ["gold", "white"],
    tags: ["elegant", "gown", "pageant"]
  },
  {
    queen: "Jinkx Monsoon",
    season: 5,
    episode: 2,
    runway: "Pants Down Bottoms Up",
    placement: 7,
    image: "https://via.placeholder.com/300x400",
    colors: ["red", "black"],
    tags: ["camp", "comedy", "weird"]
  },
  {
    queen: "Symone",
    season: 13,
    episode: 1,
    runway: "Entrance Look",
    placement: 1,
    image: "https://via.placeholder.com/300x400",
    colors: ["black", "gold"],
    tags: ["fashion", "iconic"]
  }
];

// Render
function renderLooks(data) {
  const grid = document.getElementById("grid");
  grid.innerHTML = "";

  data.forEach(l => {
    grid.innerHTML += `
      <div class="card">
        <img src="${l.image}" alt="${l.queen}">
        <h3>${l.queen}</h3>
        <p>Season ${l.season} • Episode ${l.episode}</p>
        <p>${l.runway}</p>
      </div>
    `;
  });
}

// Filtering logic
function filterLooks() {
  const search = document.getElementById("searchBar").value.toLowerCase();
  const season = document.getElementById("seasonFilter").value;
  const queen = document.getElementById("queenFilter").value;
  const episode = document.getElementById("episodeFilter").value;

  let filtered = looks;

  // season filter
  if (season !== "all") {
    filtered = filtered.filter(l => l.season == season);
  }

  // queen filter
  if (queen !== "all") {
    filtered = filtered.filter(l => l.queen === queen);
  }

  // episode filter
  if (episode !== "all") {
    filtered = filtered.filter(l => l.episode == episode);
  }

  // search filter (VERY powerful)
  if (search !== "") {
    filtered = filtered.filter(l =>
      l.queen.toLowerCase().includes(search) ||
      l.runway.toLowerCase().includes(search) ||
      l.tags.some(tag => tag.includes(search)) ||
      l.colors.some(color => color.includes(search))
    );
  }

  renderLooks(filtered);
}

// Event listeners
document.getElementById("searchBar").addEventListener("input", filterLooks);
document.getElementById("seasonFilter").addEventListener("change", filterLooks);
document.getElementById("queenFilter").addEventListener("change", filterLooks);
document.getElementById("episodeFilter").addEventListener("change", filterLooks);

// Initial render
renderLooks(looks);
