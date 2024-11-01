document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        headerToolbar: {
            left: '',
            center: 'title',
            right: ''
        },
        themeSystem: 'bootstrap5',
        events: [
            {
                title: 'Assignment 1 - Web Development',
                start: '2024-11-15',
                className: 'event-assignment',
                backgroundColor: '#ffc107', // warning color for this deadline
                borderColor: '#ffc107'
            },
            {
                title: 'Assignment 2 - Database Systems',
                start: '2024-11-20',
                className: 'event-assignment',
                backgroundColor: '#dc3545', // danger color for this deadline
                borderColor: '#dc3545'
            },
            {
                title: 'Midterm Project - Software Engineering',
                start: '2024-11-22',
                className: 'event-assignment',
                backgroundColor: '#dc3545', // danger color
                borderColor: '#dc3545'
            },
            {
                title: 'Lab Report 3 - Computer Networks',
                start: '2024-11-25',
                className: 'event-assignment',
                backgroundColor: '#ffc107', // warning color
                borderColor: '#ffc107'
            },
            {
                title: 'Group Presentation - Web Development',
                start: '2024-11-28',
                className: 'event-assignment',
                backgroundColor: '#0dcaf0', // info color
                borderColor: '#0dcaf0'
            },
            {
                title: 'Quiz 2 Preparation - Database Systems',
                start: '2024-12-01',
                className: 'event-assignment',
                backgroundColor: '#198754', // success color
                borderColor: '#198754'
            },
            {
                title: 'Final Project Proposal - Software Engineering',
                start: '2024-12-05',
                className: 'event-assignment',
                backgroundColor: '#0d6efd', // primary color
                borderColor: '#0d6efd'
            }
        ],
        eventDidMount: function(info) {
            // Add tooltips to events
            $(info.el).tooltip({
                title: info.event.title,
                placement: 'top',
                trigger: 'hover',
                container: 'body'
            });
        },
        dayMaxEvents: true, // Allow "more" link when too many events
        eventClick: function(info) {
            // Handle event clicks
            showEventDetails(info.event);
        }
    });
    calendar.render();

    // Add custom navigation button handlers
    document.getElementById('prevMonth').addEventListener('click', function() {
        calendar.prev();
    });

    document.getElementById('nextMonth').addEventListener('click', function() {
        calendar.next();
    });

    document.getElementById('todayBtn').addEventListener('click', function() {
        calendar.today();
    });

    // Add view change handlers
    document.getElementById('monthView').addEventListener('click', function() {
        calendar.changeView('dayGridMonth');
    });

    document.getElementById('weekView').addEventListener('click', function() {
        calendar.changeView('timeGridWeek');
    });

    document.getElementById('dayView').addEventListener('click', function() {
        calendar.changeView('timeGridDay');
    });

    // Populate upcoming events
    updateUpcomingEvents(calendar.getEvents());

    // Event handlers for calendar filters
    document.querySelectorAll('.calendar-filters input[type="checkbox"]').forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            filterCalendarEvents(calendar);
        });
    });

    // Add Event Button Handler
    document.getElementById('addEventBtn').addEventListener('click', function() {
        // Implement add event functionality
        console.log('Add event clicked');
    });
});

function showEventDetails(event) {
    // Implement event details display
    console.log('Event clicked:', event);
}

function updateUpcomingEvents(events) {
    const upcomingEventsList = document.querySelector('.upcoming-events');
    upcomingEventsList.innerHTML = '';

    // Sort events by date and take the next 5
    const sortedEvents = events.sort((a, b) => a.start - b.start).slice(0, 5);

    sortedEvents.forEach(event => {
        const li = document.createElement('li');
        li.innerHTML = `
            <strong>${event.title}</strong><br>
            <small>${event.start.toLocaleDateString()}</small>
        `;
        upcomingEventsList.appendChild(li);
    });
}

function filterCalendarEvents(calendar) {
    const personalChecked = document.getElementById('personalCal').checked;
    const courseChecked = document.getElementById('courseCal').checked;
    const assignmentsChecked = document.getElementById('assignmentsCal').checked;

    calendar.getEvents().forEach(event => {
        if (event.classNames.includes('event-personal')) {
            event.setProp('display', personalChecked ? 'auto' : 'none');
        } else if (event.classNames.includes('event-course')) {
            event.setProp('display', courseChecked ? 'auto' : 'none');
        } else if (event.classNames.includes('event-assignment')) {
            event.setProp('display', assignmentsChecked ? 'auto' : 'none');
        }
    });
}