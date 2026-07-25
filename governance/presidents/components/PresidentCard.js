export function PresidentCard(president, index) {
    const powersHtml = president.constitutionalPowers.map(p => `<li>${p}</li>`).join('');
    const decisionsHtml = president.importantDecisions.map(d => `<li>${d}</li>`).join('');
    const factsHtml = president.facts.map(f => `<p>💡 ${f}</p>`).join('');

    return `
        <div class="president-card">
            <div class="president-card-header">
                <div class="president-portrait">
                    <img src="${president.portrait}" alt="Portrait of ${president.name}" loading="lazy" />
                </div>
                <div class="president-title">
                    <h3>${president.name}</h3>
                    <p class="president-term-label">${index + 1}${getOrdinal(index + 1)} President of India</p>
                    <p class="president-election"><strong>Election:</strong> ${president.electionYear}</p>
                    <p class="president-term"><strong>Term:</strong> ${president.termStart} – ${president.termEnd}</p>
                    <p class="president-vp"><strong>VP before Presidency:</strong> ${president.vicePresidentBefore}</p>
                </div>
            </div>
            <div class="president-card-body">
                <div class="president-section">
                    <h4>Biography</h4>
                    <p>${president.biography}</p>
                </div>
                <div class="president-section">
                    <h4>Constitutional Powers in Action</h4>
                    <ul>${powersHtml}</ul>
                </div>
                <div class="president-section">
                    <h4>Important Decisions / Events</h4>
                    <ul>${decisionsHtml}</ul>
                </div>
                <div class="president-section president-facts">
                    <h4>Interesting Facts</h4>
                    ${factsHtml}
                </div>
            </div>
        </div>
    `;
}

function getOrdinal(n) {
    const s = ["th", "st", "nd", "rd"],
        v = n % 100;
    return (s[(v - 20) % 10] || s[v] || s[0]);
}
