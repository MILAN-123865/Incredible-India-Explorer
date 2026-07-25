import { TimelineItem } from './TimelineItem.js';

export function Timeline(presidents) {
    if (presidents.length === 0) {
        return `<div class="no-results">No Presidents found matching your criteria.</div>`;
    }
    
    // We map through the presidents and pass the original index to keep numbering correct if needed,
    // but since we are filtering, we actually want to pass the original object's index.
    // Assuming the data is pre-sorted, we can just pass the index in the original array.
    // Wait, it's easier if we pass `pm.originalIndex` from the script if we want "1st President", etc. to stay correct.
    
    const itemsHtml = presidents.map(p => TimelineItem(p, p.originalIndex)).join('');
    
    return `
        <div class="timeline-container">
            <div class="timeline-track"></div>
            ${itemsHtml}
        </div>
    `;
}
