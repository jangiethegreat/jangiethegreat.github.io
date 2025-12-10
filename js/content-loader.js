/**
 * Dynamic Content Loader
 * Loads content from config.js and updates the DOM
 */

document.addEventListener('DOMContentLoaded', function() {
    loadPersonalInfo();
    loadStats();
    loadSocialLinks();
    loadSkills();
    loadProjects();
    loadContactInfo();
    loadFooter();
});

// ============ LOAD PERSONAL INFO ============
function loadPersonalInfo() {
    // Update profile title
    const titleElement = document.querySelector('.profile__title');
    if (titleElement) {
        titleElement.innerHTML = `I'm <span class="gradient-text">${PERSONAL_INFO.name}</span><br />${PERSONAL_INFO.title}`;
    }

    // Update subtitle
    const subtitleElement = document.querySelector('.subtitle');
    if (subtitleElement) {
        subtitleElement.textContent = PERSONAL_INFO.subtitle;
    }

    // Update description
    const descriptionElement = document.querySelector('.description');
    if (descriptionElement) {
        descriptionElement.textContent = PERSONAL_INFO.description;
    }

    // Update page title
    document.title = `${PERSONAL_INFO.name} | ${PERSONAL_INFO.title}`;

    // Update meta tags
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
        metaDescription.content = `${PERSONAL_INFO.name} - ${PERSONAL_INFO.title} specializing in Laravel, PHP, and modern web technologies.`;
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
        ogTitle.content = `${PERSONAL_INFO.name} - ${PERSONAL_INFO.title} Portfolio`;
    }
}

// ============ LOAD STATS ============
function loadStats() {
    const statsRow = document.querySelector('.stats-row');
    if (!statsRow) return;

    const statsData = [
        { number: STATS.projects, label: 'Projects Completed' },
        { number: STATS.experience, label: 'Years Experience' },
        { number: STATS.clients, label: 'Happy Clients' }
    ];

    statsRow.innerHTML = statsData.map(stat => `
        <div class="stat-item">
            <h3 class="stat-number">${stat.number}</h3>
            <p class="stat-label">${stat.label}</p>
        </div>
    `).join('');
}

// ============ LOAD SOCIAL LINKS ============
function loadSocialLinks() {
    const socialLinksContainer = document.querySelector('.social-links');
    if (!socialLinksContainer) return;

    socialLinksContainer.innerHTML = `
        <a href="${SOCIAL_LINKS.github}" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <ion-icon name="logo-github"></ion-icon>
        </a>
        <a href="${SOCIAL_LINKS.linkedin}" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <ion-icon name="logo-linkedin"></ion-icon>
        </a>
        <a href="${SOCIAL_LINKS.email}" aria-label="Email">
            <ion-icon name="mail-outline"></ion-icon>
        </a>
    `;
}

// ============ LOAD SKILLS ============
function loadSkills() {
    const skillsGrid = document.querySelector('.skills-grid');
    if (!skillsGrid) return;

    // Clear existing content
    skillsGrid.innerHTML = '';

    // Create skill categories
    Object.keys(SKILLS).forEach(categoryKey => {
        const categoryName = categoryKey.charAt(0).toUpperCase() + categoryKey.slice(1);
        const skills = SKILLS[categoryKey];
        const iconName = SKILL_ICONS[categoryKey] || 'code-outline';

        const categoryDiv = document.createElement('div');
        categoryDiv.className = 'skill-category';
        
        categoryDiv.innerHTML = `
            <div class="category-header">
                <ion-icon name="${iconName}"></ion-icon>
                <h3>${categoryName}</h3>
            </div>
            <div class="skill-items">
                ${skills.map(skill => `<div class="skill-badge">${skill}</div>`).join('')}
            </div>
        `;

        skillsGrid.appendChild(categoryDiv);
    });
}

// ============ LOAD PROJECTS ============
function loadProjects() {
    const projectsGrid = document.querySelector('.projects-grid');
    if (!projectsGrid) return;

    // Clear existing content
    projectsGrid.innerHTML = '';

    // Create project cards
    PROJECTS.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        
        projectCard.innerHTML = `
            <div class="project-image">
                <div class="project-overlay">
                    <a href="${project.link}" class="project-link">
                        <ion-icon name="eye-outline"></ion-icon>
                        View Project
                    </a>
                </div>
                <img src="${project.image}" alt="${project.title}" loading="lazy">
            </div>
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-tech">
                    ${project.tech.map(tech => `<span>${tech}</span>`).join('')}
                </div>
            </div>
        `;

        projectsGrid.appendChild(projectCard);
    });
}

// ============ LOAD CONTACT INFO ============
function loadContactInfo() {
    const contactInfo = document.querySelector('.contact__info');
    if (!contactInfo) return;

    contactInfo.innerHTML = `
        <div class="contact-card">
            <div class="contact-icon">
                <ion-icon name="mail-outline"></ion-icon>
            </div>
            <h3>Email</h3>
            <a href="${SOCIAL_LINKS.email}">${PERSONAL_INFO.email}</a>
        </div>

        <div class="contact-card">
            <div class="contact-icon">
                <ion-icon name="logo-github"></ion-icon>
            </div>
            <h3>GitHub</h3>
            <a href="${SOCIAL_LINKS.github}" target="_blank" rel="noopener noreferrer">@${PERSONAL_INFO.github}</a>
        </div>

        <div class="contact-card">
            <div class="contact-icon">
                <ion-icon name="location-outline"></ion-icon>
            </div>
            <h3>Location</h3>
            <p>${PERSONAL_INFO.location}</p>
        </div>
    `;
}

// ============ LOAD FOOTER ============
function loadFooter() {
    const footerText = document.getElementById('footer-text');
    if (footerText) {
        footerText.innerHTML = `&copy; ${new Date().getFullYear()} ${PERSONAL_INFO.name}. Built with <ion-icon name="heart"></ion-icon> and lots of <ion-icon name="cafe-outline"></ion-icon>`;
    }
}

// ============ HELPER FUNCTIONS ============
function escapeHtml(text) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, m => map[m]);
}
