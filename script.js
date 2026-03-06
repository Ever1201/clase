function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.remove('active');
    });

    // Remove active class from all nav items
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });

    // Show the selected section
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
        // Smooth scroll to top
        targetSection.parentElement.scrollTop = 0;
    }

    // Add active class to the clicked nav item
    const navItem = document.querySelector(`[onclick="showSection('${sectionId}')"]`);
    if (navItem) {
        navItem.classList.add('active');
    }

    // Update progress (rough estimate based on total sections)
    updateProgress(sectionId);

    // Auto-close sidebar on mobile after selection
    if (window.innerWidth <= 1024) {
        document.querySelector('.dashboard').classList.remove('sidebar-open');
    }
}

function updateProgress(sectionId) {
    const items = Array.from(document.querySelectorAll('.nav-item'));
    const index = items.findIndex(item => item.getAttribute('onclick').includes(sectionId));
    const progress = ((index + 1) / items.length) * 100;

    const bar = document.getElementById('main-progress-bar');
    if (bar) {
        bar.style.width = `${progress}%`;
    }
}

// Collapsible logic
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('collapsible-trigger')) {
        const content = e.target.nextElementSibling;
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
        e.target.classList.toggle('open');
    }
});

// Initialize first section
window.onload = () => {
    showSection('welcome');
};

function toggleSidebar() {
    if (window.innerWidth <= 1024) {
        document.querySelector('.dashboard').classList.toggle('sidebar-open');
    } else {
        document.querySelector('.dashboard').classList.toggle('sidebar-hidden');
    }
}
