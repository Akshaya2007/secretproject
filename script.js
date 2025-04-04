const apiKey = "YOUR_PANDASCORE_API_KEY";

const headers = {
  Authorization: `Bearer ${apiKey}`,
};

async function fetchMatches(endpoint, elementId) {
  try {
    const response = await fetch(`https://api.pandascore.co/${endpoint}`, { headers });
    const data = await response.json();
    const container = document.getElementById(elementId);
    container.innerHTML = "";

    data.forEach(match => {
      const matchDiv = document.createElement("div");
      matchDiv.className = "match-item";
      matchDiv.innerHTML = `
        <h3>${match.name || "Match"}</h3>
        <p><strong>Teams:</strong> ${match.opponents.map(o => o.opponent.name).join(" vs ")}</p>
        <p><strong>Game:</strong> ${match.videogame.name}</p>
        <p><strong>Status:</strong> ${match.status}</p>
      `;
      container.appendChild(matchDiv);
    });
  } catch (err) {
    console.error(`Error fetching ${elementId}:`, err);
  }
}

// Fetch matches
fetchMatches("lol/matches/upcoming", "upcoming-matches");
fetchMatches("lol/matches/running", "live-matches");
fetchMatches("lol/matches/past", "past-matches");
