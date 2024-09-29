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
});