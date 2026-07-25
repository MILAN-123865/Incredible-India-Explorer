import { presidents } from './data.js';
import { Timeline } from './components/Timeline.js';
import { SearchBar } from './components/SearchBar.js';

document.addEventListener('DOMContentLoaded', () => {
    const appContainer = document.getElementById('president-explorer-app');
    
    // Add originalIndex to preserve numbering ("1st President", etc.) even when filtered
    const indexedPresidents = presidents.map((p, i) => ({ ...p, originalIndex: i }));

    // Render controls
    const controlsHtml = `
        <div class="controls-wrapper">
            ${SearchBar()}
        </div>
        <div id="timeline-root"></div>
    `;
    appContainer.innerHTML = controlsHtml;

    const timelineRoot = document.getElementById('timeline-root');
    const searchInput = document.getElementById('president-search');

    // Function to render the timeline based on filtered data
    function render(data) {
        timelineRoot.style.opacity = '0';
        setTimeout(() => {
            timelineRoot.innerHTML = Timeline(data);
            timelineRoot.style.opacity = '1';
        }, 150);
    }

    // Function to apply filters
    function applyFilters() {
        const query = searchInput.value.toLowerCase();

        const filtered = indexedPresidents.filter(p => {
            const matchesName = p.name.toLowerCase().includes(query);
            const matchesYear = p.electionYear.includes(query);
            return matchesName || matchesYear;
        });

        render(filtered);
    }

    // Event Listener for interactive filtering
    searchInput.addEventListener('input', applyFilters);

    // Initial render
    render(indexedPresidents);
});
