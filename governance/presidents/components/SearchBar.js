export function SearchBar() {
    return `
        <div class="search-container">
            <label for="president-search" class="sr-only">Search Presidents</label>
            <input type="text" id="president-search" placeholder="Search by name or election year..." aria-label="Search Presidents">
            <span class="search-icon">🔍</span>
        </div>
    `;
}
