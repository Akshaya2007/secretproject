const apiKey = "YOUR_PANDASCORE_API_KEY";

fetch("https://api.pandascore.co/matches/upcoming", {
  headers: { Authorization: `Bearer ${apiKey}` },
})
.then(res => res.json())
.then(data => {
  const container = document.getElementById("upcoming-matches");
  data.forEach(match => {
    if (match.opponents.some(o => o.opponent.name.toLowerCase().includes("nepal"))) {
      container.innerHTML += `
        <div class="match-item">
          <h3>${match.name}</h3>
          <p><strong>Teams:</strong> ${match.opponents.map(o => o.opponent.name).join(" vs ")}</p>
          <p><strong>Date:</strong> ${new Date(match.begin_at).toLocaleString()}</p>
          <p><strong>Game:</strong> ${match.videogame.name}</p>
        </div>
      `;
    }
  });
});
