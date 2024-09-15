

document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay'
        },
        events: [
            {
                title: 'Assignment 1 Due',
                start: '2024-09-15'
            },
            {
                title: 'Assignment 2 Due',
                start: '2024-09-20'
            }
            // Add more events as needed
        ]
    });
    calendar.render();

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
