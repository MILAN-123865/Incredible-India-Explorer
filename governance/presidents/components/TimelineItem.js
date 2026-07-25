import { PresidentCard } from './PresidentCard.js';

export function TimelineItem(president, index) {
    return `
        <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-year-label">${president.electionYear.substring(0,4)}</div>
            <div class="timeline-content">
                ${PresidentCard(president, index)}
            </div>
        </div>
    `;
}
