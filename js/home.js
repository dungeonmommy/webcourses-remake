

document.addEventListener('DOMContentLoaded', function() {

    // Sidebar toggle functionality
    const sidebarToggle = document.body.querySelector('#sidebarToggle');
    if (sidebarToggle) {
        sidebarToggle.addEventListener('click', event => {
            event.preventDefault();
            document.body.classList.toggle('sidebar-expanded');
            localStorage.setItem('sidebar-expanded', document.body.classList.contains('sidebar-expanded'));
        });
    }

    // Check for saved state
    if (localStorage.getItem('sidebar-expanded') === 'true') {
        document.body.classList.add('sidebar-expanded');
    }
});
