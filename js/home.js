document.addEventListener('DOMContentLoaded', function() {

    // Sidebar toggle functionality
    const sidebarToggle = document.body.querySelector('#sidebarToggle');
    if (sidebarToggle) {
        sidebarToggle.addEventListener('click', event => {
            event.preventDefault();
            document.body.classList.toggle('sidebar-expanded');
            localStorage.setItem('sidebar-expanded', document.body.classList.contains('sidebar-expanded'));

            // Toggle icon based on sidebar state
            const icon = this.querySelector('i');
            if (document.body.classList.contains("sidebar-expanded")) {
                icon.classList.remove('fa-chevron-right'); // or whichever icon you chose
                icon.classList.add('fa-chevron-left');     // or whichever icon you chose
            } else {
                icon.classList.remove('fa-chevron-left');  // or whichever icon you chose
                icon.classList.add('fa-chevron-right');    // or whichever icon you chose
            }
        });
    }

    // Check for saved state
    if (localStorage.getItem('sidebar-expanded') === 'true') {
        document.body.classList.add('sidebar-expanded');
    }
});
