const looks = [
  {
    queen: "Sasha Colby",
    season: 15,
    episode: 3,
    runway: "Princess Eleganza",
    placement: 1,
    image: "https://via.placeholder.com/300x400",
    colors: ["gold", "white"]
  },
  {
    queen: "Jinkx Monsoon",
    season: 5,
    episode: 2,
    runway: "Pants Down Bottoms Up",
    placement: 7,
    image: "https://via.placeholder.com/300x400",
    colors: ["red", "black"]
  },
  {
    queen: "Symone",
    season: 13,
    episode: 1,
    runway: "Entrance Look",
    placement: 1,
    image: "https://via.placeholder.com/300x400",
    colors: ["black", "gold"]
  }
];

// Render function
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

// Filter function
function filterLooks() {
  const season = document.getElementById("seasonFilter").value;
  const color = document.getElementById("colorFilter").value;

  let filtered = looks;

  if (season !== "all") {
    filtered = filtered.filter(l => l.season == season);
  }

  if (color !== "all") {
    filtered = filtered.filter(l => l.colors.includes(color));
  }

  renderLooks(filtered);
}

// Event listeners
document.getElementById("seasonFilter").addEventListener("change", filterLooks);
document.getElementById("colorFilter").addEventListener("change", filterLooks);

// Initial render
renderLooks(looks);
