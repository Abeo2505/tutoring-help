/* ================================
   CATALOGUE.JS - Tutors Catalogue Logic
   ================================ */

/**
 * Mock Data - 12 Tutors
 * Contains realistic tutor data for demonstration
 */
const tutorsData = [
    {
        id: 1,
        name: "Sophie Dupont",
        avatar: "https://i.pravatar.cc/400?img=1",
        subjects: ["Mathématiques"],
        level: ["Lycée"],
        location: "En ligne",
        price: 35,
        rating: 4.9,
        reviews: 45,
        experience: 8,
        students: 120,
        badges: ["Vérifié", "Top Avis"],
        specialties: ["Standard"]
    },
    {
        id: 2,
        name: "Marc Lefèvre",
        avatar: "https://i.pravatar.cc/400?img=2",
        subjects: ["Français"],
        level: ["Primaire", "Collège", "Lycée"],
        location: "Paris",
        price: 28,
        rating: 4.8,
        reviews: 52,
        experience: 12,
        students: 200,
        badges: ["Vérifié", "Spécialiste Dys"],
        specialties: ["Dyslexie"]
    },
    {
        id: 3,
        name: "Isabelle Martin",
        avatar: "https://i.pravatar.cc/400?img=3",
        subjects: ["Anglais"],
        level: ["Collège", "Lycée"],
        location: "Lyon",
        price: 32,
        rating: 4.7,
        reviews: 38,
        experience: 6,
        students: 85,
        badges: ["Vérifié", "Haut Potentiel"],
        specialties: ["HPI"]
    },
    {
        id: 4,
        name: "Pierre Bernard",
        avatar: "https://i.pravatar.cc/400?img=4",
        subjects: ["Sciences", "Physique-Chimie"],
        level: ["Collège", "Lycée"],
        location: "Marseille",
        price: 38,
        rating: 4.6,
        reviews: 31,
        experience: 10,
        students: 95,
        badges: ["Vérifié"],
        specialties: ["Standard"]
    },
    {
        id: 5,
        name: "Marie Rousseau",
        avatar: "https://i.pravatar.cc/400?img=5",
        subjects: ["Histoire-Géographie"],
        level: ["Primaire", "Collège", "Lycée"],
        location: "En ligne",
        price: 25,
        rating: 4.5,
        reviews: 28,
        experience: 5,
        students: 72,
        badges: ["Vérifié"],
        specialties: ["Standard"]
    },
    {
        id: 6,
        name: "Thomas Moreau",
        avatar: "https://i.pravatar.cc/400?img=6",
        subjects: ["Mathématiques"],
        level: ["Primaire", "Collège"],
        location: "Toulouse",
        price: 22,
        rating: 4.8,
        reviews: 44,
        experience: 7,
        students: 110,
        badges: ["Vérifié", "TDAH Friendly"],
        specialties: ["TDAH"]
    },
    {
        id: 7,
        name: "Céline Leclerc",
        avatar: "https://i.pravatar.cc/400?img=7",
        subjects: ["Français", "Littérature"],
        level: ["Lycée"],
        location: "Paris",
        price: 40,
        rating: 4.9,
        reviews: 50,
        experience: 15,
        students: 180,
        badges: ["Vérifié", "Top Avis", "Expert Bac"],
        specialties: ["Standard"]
    },
    {
        id: 8,
        name: "Antoine Dupuis",
        avatar: "https://i.pravatar.cc/400?img=8",
        subjects: ["Anglais", "Espagnol"],
        level: ["Tous niveaux"],
        location: "En ligne",
        price: 30,
        rating: 4.7,
        reviews: 35,
        experience: 9,
        students: 130,
        badges: ["Vérifié", "Natif"],
        specialties: ["Standard"]
    },
    {
        id: 9,
        name: "Laurence Martin",
        avatar: "https://i.pravatar.cc/400?img=9",
        subjects: ["Sciences", "Biologie"],
        level: ["Collège", "Lycée"],
        location: "Lyon",
        price: 36,
        rating: 4.8,
        reviews: 42,
        experience: 11,
        students: 105,
        badges: ["Vérifié", "Spécialiste Bac"],
        specialties: ["Standard"]
    },
    {
        id: 10,
        name: "Jean Fournier",
        avatar: "https://i.pravatar.cc/400?img=10",
        subjects: ["Mathématiques", "Informatique"],
        level: ["Lycée", "Supérieur"],
        location: "Bordeaux",
        price: 45,
        rating: 4.6,
        reviews: 25,
        experience: 14,
        students: 70,
        badges: ["Vérifié", "Ingénieur"],
        specialties: ["Standard"]
    },
    {
        id: 11,
        name: "Véronique Leroy",
        avatar: "https://i.pravatar.cc/400?img=11",
        subjects: ["Primaire - Toutes matières"],
        level: ["Primaire"],
        location: "En ligne",
        price: 20,
        rating: 4.5,
        reviews: 60,
        experience: 8,
        students: 150,
        badges: ["Vérifié", "Popoulaire"],
        specialties: ["Standard"]
    },
    {
        id: 12,
        name: "David Renard",
        avatar: "https://i.pravatar.cc/400?img=12",
        subjects: ["Français"],
        level: ["Collège", "Lycée"],
        location: "Marseille",
        price: 29,
        rating: 4.7,
        reviews: 33,
        experience: 6,
        students: 88,
        badges: ["Vérifié", "Spécialiste Dys"],
        specialties: ["Dyslexie"]
    }
];

/**
 * Current Filter State
 */
let currentFilters = {
    subjects: [],
    levels: [],
    locations: [],
    maxPrice: 100,
    specialties: [],
    minRating: 0,
    sortBy: 'rating'
};

let filteredTutors = [...tutorsData];

/**
 * Initialize Catalogue
 * Called on page load
 */
document.addEventListener('DOMContentLoaded', () => {
    initCatalogue();
});

function initCatalogue() {
    setupEventListeners();
    applyURLFilters();
    renderTutors();
}

/**
 * Setup Event Listeners
 * Attaches handlers to filter elements
 */
function setupEventListeners() {
    // Filter checkboxes
    document.querySelectorAll('.filter-checkbox').forEach(checkbox => {
        checkbox.addEventListener('change', handleFilterChange);
    });

    // Budget range slider
    const budgetRange = document.getElementById('budget-range');
    if (budgetRange) {
        budgetRange.addEventListener('input', handleBudgetChange);
    }

    // Sort dropdown
    const sortSelect = document.getElementById('sort-select');
    if (sortSelect) {
        sortSelect.addEventListener('change', handleSortChange);
    }

    // Reset filters button
    const resetBtn = document.getElementById('reset-filters');
    if (resetBtn) {
        resetBtn.addEventListener('click', resetFilters);
    }

    // Close offcanvas after filter selection on mobile
    const filterCheckboxes = document.querySelectorAll('.filter-checkbox');
    filterCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            const offcanvas = document.getElementById('filterOffcanvas');
            if (window.innerWidth < 992 && offcanvas) {
                const bsOffcanvas = bootstrap.Offcanvas.getInstance(offcanvas);
                if (bsOffcanvas) bsOffcanvas.hide();
            }
        });
    });
}

/**
 * Handle Filter Change
 * Called when any filter is toggled
 */
function handleFilterChange(e) {
    const checkbox = e.target;
    const type = checkbox.id.split('-')[0]; // 'subject', 'level', 'location', etc.

    if (type === 'subject') {
        const index = currentFilters.subjects.indexOf(checkbox.value);
        if (checkbox.checked) {
            if (index === -1) currentFilters.subjects.push(checkbox.value);
        } else {
            if (index > -1) currentFilters.subjects.splice(index, 1);
        }
    } else if (type === 'level') {
        const index = currentFilters.levels.indexOf(checkbox.value);
        if (checkbox.checked) {
            if (index === -1) currentFilters.levels.push(checkbox.value);
        } else {
            if (index > -1) currentFilters.levels.splice(index, 1);
        }
    } else if (type === 'location') {
        const index = currentFilters.locations.indexOf(checkbox.value);
        if (checkbox.checked) {
            if (index === -1) currentFilters.locations.push(checkbox.value);
        } else {
            if (index > -1) currentFilters.locations.splice(index, 1);
        }
    } else if (type === 'need') {
        const index = currentFilters.specialties.indexOf(checkbox.value);
        if (checkbox.checked) {
            if (index === -1) currentFilters.specialties.push(checkbox.value);
        } else {
            if (index > -1) currentFilters.specialties.splice(index, 1);
        }
    } else if (type === 'rating') {
        currentFilters.minRating = checkbox.value ? parseFloat(checkbox.value) : 0;
    }

    applyFilters();
}

/**
 * Handle Budget Change
 * Updates price range filter
 */
function handleBudgetChange(e) {
    currentFilters.maxPrice = parseInt(e.target.value);
    const display = document.getElementById('budget-display');
    if (display) {
        display.textContent = `${currentFilters.maxPrice}€`;
    }
    applyFilters();
}

/**
 * Handle Sort Change
 * Changes tutor sorting
 */
function handleSortChange(e) {
    currentFilters.sortBy = e.target.value;
    applyFilters();
}

/**
 * Apply Filters
 * Filters and sorts tutors based on current state
 */
function applyFilters() {
    filteredTutors = tutorsData.filter(tutor => {
        // Subject filter
        if (currentFilters.subjects.length > 0) {
            const hasSubject = tutor.subjects.some(subject => 
                currentFilters.subjects.some(filter => 
                    subject.toLowerCase().includes(filter.toLowerCase())
                )
            );
            if (!hasSubject) return false;
        }

        // Level filter
        if (currentFilters.levels.length > 0) {
            const hasLevel = tutor.level.some(level => 
                currentFilters.levels.includes(level.toLowerCase())
            );
            if (!hasLevel) return false;
        }

        // Location filter
        if (currentFilters.locations.length > 0) {
            const hasLocation = currentFilters.locations.some(loc =>
                tutor.location.toLowerCase().includes(loc.toLowerCase())
            );
            if (!hasLocation) return false;
        }

        // Price filter
        if (tutor.price > currentFilters.maxPrice) return false;

        // Specialties filter
        if (currentFilters.specialties.length > 0) {
            const hasSpecialty = tutor.specialties.some(spec =>
                currentFilters.specialties.includes(spec.toLowerCase())
            );
            if (!hasSpecialty) return false;
        }

        // Rating filter
        if (tutor.rating < currentFilters.minRating) return false;

        return true;
    });

    // Apply sorting
    sortTutors();

    // Update display
    updateResultsCount();
    renderTutors();
}

/**
 * Sort Tutors
 * Sorts tutors based on current sort option
 */
function sortTutors() {
    switch (currentFilters.sortBy) {
        case 'rating':
            filteredTutors.sort((a, b) => b.rating - a.rating);
            break;
        case 'price-low':
            filteredTutors.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            filteredTutors.sort((a, b) => b.price - a.price);
            break;
        case 'experience':
            filteredTutors.sort((a, b) => b.experience - a.experience);
            break;
        default:
            break;
    }
}

/**
 * Render Tutors
 * Displays filtered tutors in grid
 */
function renderTutors() {
    const grid = document.getElementById('tutors-grid');
    const noResults = document.getElementById('no-results');

    if (!grid) return;

    // Show/hide no results message
    if (filteredTutors.length === 0) {
        grid.innerHTML = '';
        if (noResults) noResults.style.display = 'block';
        return;
    }

    if (noResults) noResults.style.display = 'none';

    // Generate HTML
    grid.innerHTML = filteredTutors.map(tutor => `
        <div class="col-md-6 col-lg-4" role="gridcell">
            <article class="tutor-card h-100">
                <div class="card-img-container position-relative">
                    <img src="${tutor.avatar}" alt="Photo de profil de ${tutor.name}" class="card-img-top">
                    ${tutor.badges.length > 0 ? `
                        <div class="badges-overlay">
                            ${tutor.badges.map(badge => {
                                let badgeClass = 'bg-secondary';
                                if (badge === 'Vérifié') badgeClass = 'bg-success';
                                else if (badge.includes('Dys') || badge.includes('Dyslexie')) badgeClass = 'bg-info';
                                else if (badge.includes('HPI') || badge.includes('Haut Potentiel')) badgeClass = 'bg-primary';
                                else if (badge.includes('Top') || badge.includes('Populaire')) badgeClass = 'bg-warning text-dark';
                                else if (badge.includes('TDAH')) badgeClass = 'bg-danger';
                                
                                const icon = badge === 'Vérifié' ? 'check-circle' : 
                                            badge.includes('Top') ? 'fire' :
                                            badge.includes('Dys') ? 'book' :
                                            badge.includes('HPI') ? 'brain' :
                                            badge.includes('TDAH') ? 'heart' : 'star';
                                
                                return `<span class="badge ${badgeClass}" aria-label="${badge}">
                                    <i class="fas fa-${icon}" aria-hidden="true"></i> ${badge}
                                </span>`;
                            }).join('')}
                        </div>
                    ` : ''}
                </div>
                <div class="card-body">
                    <h3 class="card-title h5">${tutor.name}</h3>
                    <p class="card-text text-muted small">
                        ${tutor.subjects.join(', ')} • ${tutor.level[0]}
                    </p>
                    
                    <div class="d-flex align-items-center mb-2">
                        <div class="stars" aria-label="Note: ${tutor.rating} étoiles">
                            ${getStarsHtml(tutor.rating)}
                            <span class="ms-2 small fw-bold">${tutor.rating}</span>
                        </div>
                    </div>
                    
                    <p class="card-text small text-muted mb-2">
                        ${tutor.reviews} avis • ${tutor.experience} ans
                    </p>
                    
                    <p class="card-text">
                        <strong>${tutor.price}€/h</strong>
                        <span class="text-muted small ms-2">• ${tutor.location}</span>
                    </p>
                    
                    <a href="tutor-profile.html?id=${tutor.id}" class="btn btn-primary btn-sm w-100" 
                       aria-label="Voir le profil de ${tutor.name}">
                        Voir le profil
                    </a>
                </div>
            </article>
        </div>
    `).join('');
}

/**
 * Update Results Count
 * Shows number of filtered results
 */
function updateResultsCount() {
    const countElement = document.getElementById('results-count');
    if (countElement) {
        countElement.textContent = filteredTutors.length;
    }
}

/**
 * Apply URL Filters
 * Pre-applies filters from URL parameters
 */
function applyURLFilters() {
    const params = new URLSearchParams(window.location.search);
    
    if (params.has('subject')) {
        const subject = params.get('subject');
        const checkbox = document.getElementById(`subject-${subject.split(' ')[0].toLowerCase()}`);
        if (checkbox) {
            checkbox.checked = true;
            currentFilters.subjects.push(subject);
        }
    }

    if (params.has('level')) {
        const level = params.get('level');
        const checkbox = document.getElementById(`level-${level}`);
        if (checkbox) {
            checkbox.checked = true;
            currentFilters.levels.push(level);
        }
    }

    if (params.has('location')) {
        const location = params.get('location');
        const checkbox = document.getElementById(`location-${location}`);
        if (checkbox) {
            checkbox.checked = true;
            currentFilters.locations.push(location);
        }
    }

    applyFilters();
}

/**
 * Reset Filters
 * Clears all filters and resets to default view
 */
function resetFilters() {
    currentFilters = {
        subjects: [],
        levels: [],
        locations: [],
        maxPrice: 100,
        specialties: [],
        minRating: 0,
        sortBy: 'rating'
    };

    // Uncheck all checkboxes
    document.querySelectorAll('.filter-checkbox').forEach(checkbox => {
        checkbox.checked = false;
    });

    // Reset budget slider
    const budgetRange = document.getElementById('budget-range');
    if (budgetRange) {
        budgetRange.value = 50;
        document.getElementById('budget-display').textContent = '50€';
    }

    // Reset sort
    const sortSelect = document.getElementById('sort-select');
    if (sortSelect) {
        sortSelect.value = 'rating';
    }

    applyFilters();
    showNotification('Filtres réinitialisés', 'info');
}

/**
 * Get Stars HTML
 * Creates accessible star rating display
 */
function getStarsHtml(rating) {
    let html = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= Math.floor(rating)) {
            html += '<i class="fas fa-star text-warning" aria-hidden="true"></i>';
        } else if (i - rating < 1) {
            html += '<i class="fas fa-star-half text-warning" aria-hidden="true"></i>';
        } else {
            html += '<i class="far fa-star text-warning" aria-hidden="true"></i>';
        }
    }
    return html;
}
