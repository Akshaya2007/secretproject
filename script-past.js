const apiKey = "YOUR_PANDASCORE_API_KEY";

fetch("https://api.pandascore.co/matches/past", {
  headers: { Authorization: `Bearer ${apiKey}` },
})
.then(res => res.json())
.then(data => {
  const container = document.getElementById("past-matches");
  data.forEach(match => {
    if (match.opponents.some(o => o.opponent.name.toLowerCase().includes("nepal"))) {
      container.innerHTML += `
        <div class="match-item">
          <h3>${match.name}</h3>
          <p><strong>Teams:</strong> ${match.opponents.map(o => o.opponent.name).join(" vs ")}</p>
          <p><strong>Game:</strong> ${match.videogame.name}</p>
          <p><strong>Status:</strong> Finished</p>
        </div>
      `;
    }
  });
});
