// Course data structure
const courseData = {
    current: [
        { code: 'CGS 2545C', name: 'Databases', groups: ['Study Group A'] },
        { code: 'COP 3330', name: 'Object-Oriented Programming', groups: ['Project Team 1', 'Study Group B'] },
        { code: 'CIS 4524', name: 'Managing IT Integration', groups: ['Group 5'] },
        { code: 'STA 2023', name: 'Statical Methods 1', groups: ['Study Group C'] }
    ],
    previous: [
        { code: 'PHY 2053', name: 'Physics 1', groups: ['Group 7'] },
        { code: 'PHY 2053L', name: 'Physics 1 Lab', groups: ['Lab Group A'] }
    ]
};

// Enhanced dummy contacts data with more comprehensive course coverage
const dummyContacts = [
    // Databases (CGS 2545C)
    { 
        id: 1,
        name: "Dr. Sarah Database",
        type: "professor",
        courses: ["CGS 2545C"]
    },
    {
        id: 2,
        name: "Alex Query",
        type: "ta",
        courses: ["CGS 2545C"]
    },
    {
        id: 3,
        name: "John SQL",
        type: "student",
        courses: ["CGS 2545C"],
        groups: ["Study Group A"]
    },
    {
        id: 4,
        name: "Maria Tables",
        type: "student",
        courses: ["CGS 2545C"],
        groups: ["Study Group A"]
    },
    {
        id: 5,
        name: "Bob Schema",
        type: "student",
        courses: ["CGS 2545C"]
    },

    // Object-Oriented Programming (COP 3330)
    {
        id: 6,
        name: "Dr. James Java",
        type: "professor",
        courses: ["COP 3330"]
    },
    {
        id: 7,
        name: "Patricia Code",
        type: "ta",
        courses: ["COP 3330"]
    },
    {
        id: 8,
        name: "Tom Class",
        type: "student",
        courses: ["COP 3330"],
        groups: ["Project Team 1"]
    },
    {
        id: 9,
        name: "Linda Object",
        type: "student",
        courses: ["COP 3330"],
        groups: ["Study Group B"]
    },
    {
        id: 10,
        name: "Chris Method",
        type: "student",
        courses: ["COP 3330"],
        groups: ["Project Team 1", "Study Group B"]
    },

    // Managing IT Integration (CIS 4524)
    {
        id: 11,
        name: "Dr. Michael Manager",
        type: "professor",
        courses: ["CIS 4524"]
    },
    {
        id: 12,
        name: "David Integration",
        type: "ta",
        courses: ["CIS 4524"]
    },
    {
        id: 13,
        name: "Sarah Project",
        type: "student",
        courses: ["CIS 4524"],
        groups: ["Group 5"]
    },
    {
        id: 14,
        name: "Kevin Team",
        type: "student",
        courses: ["CIS 4524"],
        groups: ["Group 5"]
    },
    {
        id: 15,
        name: "Rachel Agile",
        type: "student",
        courses: ["CIS 4524"],
        groups: ["Group 5"]
    },

    // Statistical Methods (STA 2023)
    {
        id: 16,
        name: "Dr. Emma Stats",
        type: "professor",
        courses: ["STA 2023"]
    },
    {
        id: 17,
        name: "Nathan Numbers",
        type: "ta",
        courses: ["STA 2023"]
    },
    {
        id: 18,
        name: "Oliver Graph",
        type: "student",
        courses: ["STA 2023"],
        groups: ["Study Group C"]
    },
    {
        id: 19,
        name: "Sophie Data",
        type: "student",
        courses: ["STA 2023"],
        groups: ["Study Group C"]
    },
    {
        id: 20,
        name: "William Chart",
        type: "student",
        courses: ["STA 2023"]
    },

    // Physics 1 (Previous Course)
    {
        id: 21,
        name: "Dr. Peter Physics",
        type: "professor",
        courses: ["PHY 2053", "PHY 2053L"]
    },
    {
        id: 22,
        name: "Lucy Lab",
        type: "ta",
        courses: ["PHY 2053", "PHY 2053L"]
    },
    {
        id: 23,
        name: "Mark Motion",
        type: "student",
        courses: ["PHY 2053", "PHY 2053L"],
        groups: ["Group 7", "Lab Group A"]
    },
    {
        id: 24,
        name: "Hannah Energy",
        type: "student",
        courses: ["PHY 2053", "PHY 2053L"],
        groups: ["Group 7"]
    },
    {
        id: 25,
        name: "Daniel Force",
        type: "student",
        courses: ["PHY 2053", "PHY 2053L"],
        groups: ["Lab Group A"]
    }
];

const dummyMessages = {
    // Professor Messages (IDs: 1, 6, 11, 16, 21)
    1: [ // Dr. Sarah Database
        { sent: false, text: "Hello! I noticed you haven't submitted Assignment 3 yet. Do you have any questions about the SQL queries?", timestamp: "2:30 PM" },
        { sent: true, text: "Yes, I'm having trouble with the JOIN operations. Could we review them during office hours?", timestamp: "2:31 PM" },
        { sent: false, text: "Of course! My office hours are tomorrow from 2-4 PM. Would 2:30 work for you?", timestamp: "2:32 PM" }
    ],
    6: [ // Dr. James Java
        { sent: false, text: "Your last project submission showed great understanding of inheritance concepts.", timestamp: "11:15 AM" },
        { sent: true, text: "Thank you! I spent extra time studying the design patterns you recommended.", timestamp: "11:20 AM" },
        { sent: false, text: "Keep up the good work! Let me know if you need clarification on the upcoming polymorphism topics.", timestamp: "11:22 AM" }
    ],
    11: [ // Dr. Michael Manager
        { sent: false, text: "Have you chosen your group members for the final project yet?", timestamp: "3:45 PM" },
        { sent: true, text: "Not yet, I'm still coordinating with some classmates.", timestamp: "4:00 PM" },
        { sent: false, text: "Please finalize your group by Friday. The project guidelines will be posted tomorrow.", timestamp: "4:05 PM" }
    ],
    16: [ // Dr. Emma Stats
        { sent: false, text: "The class average for the probability exam was 85%. Well done!", timestamp: "1:15 PM" },
        { sent: true, text: "Could you review question 7 in class? Several of us found it challenging.", timestamp: "1:20 PM" },
        { sent: false, text: "Absolutely, I'll address it during tomorrow's lecture.", timestamp: "1:25 PM" }
    ],
    21: [ // Dr. Peter Physics
        { sent: false, text: "Don't forget your lab safety equipment for tomorrow's experiment.", timestamp: "9:30 AM" },
        { sent: true, text: "Will we need our calculators as well?", timestamp: "9:35 AM" },
        { sent: false, text: "Yes, bring both your scientific calculator and lab manual.", timestamp: "9:40 AM" }
    ],

    // TA Messages (IDs: 2, 7, 12, 17, 22)
    2: [ // Alex Query (Database TA)
        { sent: false, text: "I've posted the sample solutions for last week's lab exercises.", timestamp: "10:00 AM" },
        { sent: true, text: "Thanks! Could you clarify the indexing example?", timestamp: "10:05 AM" },
        { sent: false, text: "Sure, I'll be in the lab from 2-4 PM today if you want to go over it.", timestamp: "10:10 AM" }
    ],
    7: [ // Patricia Code (Java TA)
        { sent: false, text: "Your debugging session is scheduled for 3 PM today.", timestamp: "1:00 PM" },
        { sent: true, text: "Perfect, I'll bring my laptop with the problematic code.", timestamp: "1:05 PM" },
        { sent: false, text: "Great, we can work through it in the computer lab.", timestamp: "1:10 PM" }
    ],
    12: [ // David Integration (IT TA)
        { sent: false, text: "I've reviewed your project proposal. Let's discuss the scope.", timestamp: "11:30 AM" },
        { sent: true, text: "When would be a good time to meet?", timestamp: "11:35 AM" },
        { sent: false, text: "I'm available after the lab session tomorrow.", timestamp: "11:40 AM" }
    ],
    17: [ // Nathan Numbers (Stats TA)
        { sent: false, text: "The practice problems for hypothesis testing are now available.", timestamp: "4:15 PM" },
        { sent: true, text: "Are these similar to what we'll see on the exam?", timestamp: "4:20 PM" },
        { sent: false, text: "Yes, they cover all the key concepts we've discussed.", timestamp: "4:25 PM" }
    ],
    22: [ // Lucy Lab (Physics TA)
        { sent: false, text: "Your lab report needs some revisions on the error analysis section.", timestamp: "2:45 PM" },
        { sent: true, text: "Could you point out which parts specifically?", timestamp: "2:50 PM" },
        { sent: false, text: "I'll mark them in your draft during tomorrow's lab.", timestamp: "2:55 PM" }
    ],

    // Student Messages
    3: [ // John SQL
        { sent: false, text: "Hey, are you joining the study group session today?", timestamp: "3:00 PM" },
        { sent: true, text: "Yes, I'll be there! Should I bring my database diagrams?", timestamp: "3:05 PM" },
        { sent: false, text: "That would be helpful! We're reviewing normalization.", timestamp: "3:10 PM" }
    ],
    8: [ // Tom Class
        { sent: false, text: "Did you start working on the inheritance project?", timestamp: "5:15 PM" },
        { sent: true, text: "Yes, I'm stuck on the abstract classes part.", timestamp: "5:20 PM" },
        { sent: false, text: "Want to meet at the library to work on it together?", timestamp: "5:25 PM" }
    ],
    13: [ // Sarah Project
        { sent: false, text: "Our group presentation is next week. Can we meet to practice?", timestamp: "12:30 PM" },
        { sent: true, text: "Sure! How about Wednesday after class?", timestamp: "12:35 PM" },
        { sent: false, text: "Works for me. I'll book a study room.", timestamp: "12:40 PM" }
    ],
    4: [ // Maria Tables (Database student)
        { sent: false, text: "Can you share your notes from yesterday's lecture on foreign keys?", timestamp: "1:15 PM" },
        { sent: true, text: "Sure! I'll scan them and send them over.", timestamp: "1:20 PM" },
        { sent: false, text: "Thanks! The ERD part was especially confusing.", timestamp: "1:25 PM" }
    ],
    5: [ // Bob Schema (Database student)
        { sent: false, text: "Are you free to work on the group project tonight?", timestamp: "11:00 AM" },
        { sent: true, text: "Yes, I can meet after 6 PM. Library?", timestamp: "11:05 AM" },
        { sent: false, text: "Perfect, I'll reserve a study room.", timestamp: "11:10 AM" }
    ],
    9: [ // Linda Object (Java student)
        { sent: false, text: "Have you figured out the polymorphism homework?", timestamp: "2:00 PM" },
        { sent: true, text: "Still working on the last two problems.", timestamp: "2:05 PM" },
        { sent: false, text: "Want to work on it together in the CS lab?", timestamp: "2:10 PM" }
    ],
    10: [ // Chris Method (Java student)
        { sent: false, text: "The UML diagram for our project is ready for review.", timestamp: "4:30 PM" },
        { sent: true, text: "Great! Can you explain the interface implementation part?", timestamp: "4:35 PM" },
        { sent: false, text: "Sure, let's meet before class tomorrow.", timestamp: "4:40 PM" }
    ],
    14: [ // Kevin Team (IT student)
        { sent: false, text: "Our agile presentation is scheduled for next Tuesday.", timestamp: "10:15 AM" },
        { sent: true, text: "I'll prepare the sprint review slides.", timestamp: "10:20 AM" },
        { sent: false, text: "Perfect, I'll handle the burndown charts.", timestamp: "10:25 AM" }
    ],
    15: [ // Rachel Agile (IT student)
        { sent: false, text: "Did you submit your part of the integration document?", timestamp: "3:30 PM" },
        { sent: true, text: "Just finished it. I focused on the API documentation.", timestamp: "3:35 PM" },
        { sent: false, text: "Great! I'll review it tonight.", timestamp: "3:40 PM" }
    ],
    18: [ // Oliver Graph (Stats student)
        { sent: false, text: "Can you explain how to interpret the chi-square results?", timestamp: "9:45 AM" },
        { sent: true, text: "Sure! Let's look at it during our study group.", timestamp: "9:50 AM" },
        { sent: false, text: "Thanks, I'll bring my practice problems too.", timestamp: "9:55 AM" }
    ],
    19: [ // Sophie Data (Stats student)
        { sent: false, text: "Did you get the same p-value for question 5?", timestamp: "5:20 PM" },
        { sent: true, text: "I got 0.043. What did you get?", timestamp: "5:25 PM" },
        { sent: false, text: "Same! That confirms we're on the right track.", timestamp: "5:30 PM" }
    ],
    20: [ // William Chart (Stats student)
        { sent: false, text: "The regression analysis homework is challenging.", timestamp: "7:00 PM" },
        { sent: true, text: "Agreed! Want to review the residual plots together?", timestamp: "7:05 PM" },
        { sent: false, text: "Yes please! Tomorrow during lunch?", timestamp: "7:10 PM" }
    ],
    23: [ // Mark Motion (Physics student)
        { sent: false, text: "Did you calculate the momentum for problem 3?", timestamp: "6:15 PM" },
        { sent: true, text: "Yes, remember to convert the units first!", timestamp: "6:20 PM" },
        { sent: false, text: "Ah, that's what I missed. Thanks!", timestamp: "6:25 PM" }
    ],
    24: [ // Hannah Energy (Physics student)
        { sent: false, text: "Can I borrow your lab goggles tomorrow?", timestamp: "8:30 AM" },
        { sent: true, text: "Sure, I'll bring them to class.", timestamp: "8:35 AM" },
        { sent: false, text: "Thanks! Mine broke during the last experiment.", timestamp: "8:40 AM" }
    ],
    25: [ // Daniel Force (Physics student)
        { sent: false, text: "Are you ready for the force vectors quiz?", timestamp: "4:00 PM" },
        { sent: true, text: "Almost! Still reviewing centripetal force.", timestamp: "4:05 PM" },
        { sent: false, text: "Want to practice some problems together?", timestamp: "4:10 PM" }
    ]
};

let currentChat = null;
let filteredContacts = [];

function initializeMessages() {
    // Initialize filter elements
    const courseFilter = document.getElementById('courseFilter');
    const specificCourseFilter = document.getElementById('specificCourseFilter');
    const memberTypeFilter = document.getElementById('memberTypeFilter');

    // Update dropdown options to remove "All" options
    courseFilter.innerHTML = `
        <option value="">Select Term</option>
        <option value="current">Current Courses</option>
        <option value="previous">Previous Courses</option>
    `;

    memberTypeFilter.innerHTML = `
        <option value="">Select Member Type</option>
        <option value="professor">Professors</option>
        <option value="student">Students</option>
        <option value="ta">Teaching Assistants</option>
    `;

    // Event listeners for filters
    courseFilter.addEventListener('change', handleCourseFilterChange);
    specificCourseFilter.addEventListener('change', applyFilters);
    memberTypeFilter.addEventListener('change', applyFilters);

    // Initialize message handlers
    const messageInput = document.getElementById('message-text');
    const sendButton = document.getElementById('send-message');

    sendButton.onclick = sendMessage;
    messageInput.onkeypress = (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    };

    // Initial display (blank)
    displayContacts();
}

function handleCourseFilterChange(event) {
    const specificCourseFilter = document.getElementById('specificCourseFilter');
    
    specificCourseFilter.innerHTML = '<option value="">Select Course</option>';

    if (event.target.value) {
        specificCourseFilter.disabled = false;
        const courses = courseData[event.target.value];
        
        courses.forEach(course => {
            const option = document.createElement('option');
            option.value = course.code;
            option.textContent = `${course.code} - ${course.name}`;
            specificCourseFilter.appendChild(option);
        });
    } else {
        specificCourseFilter.disabled = true;
    }

    // Reset filtered contacts when changing course term
    filteredContacts = [];
    displayContacts();
}

function applyFilters() {
    const specificCourse = document.getElementById('specificCourseFilter').value;
    const memberType = document.getElementById('memberTypeFilter').value;

    // Only show contacts if a specific course is selected
    if (!specificCourse) {
        filteredContacts = [];
        displayContacts();
        return;
    }

    // Filter contacts by course
    filteredContacts = dummyContacts.filter(contact => 
        contact.courses.includes(specificCourse)
    );

    // Apply member type filter if selected
    if (memberType) {
        filteredContacts = filteredContacts.filter(contact => 
            contact.type === memberType
        );
    }

    displayContacts();
}

function displayContacts() {
    const contactsDiv = document.querySelector('.contacts');
    contactsDiv.innerHTML = '';

    if (filteredContacts.length === 0) {
        const placeholderText = document.createElement('div');
        placeholderText.className = 'text-muted p-3 text-center';
        placeholderText.textContent = 'Select a course and member type to view contacts';
        contactsDiv.appendChild(placeholderText);
        return;
    }

    filteredContacts.forEach(contact => {
        const contactElement = document.createElement('div');
        contactElement.className = 'contact d-flex align-items-center';
        
        const icon = document.createElement('i');
        icon.className = `fas ${getContactIcon(contact.type)} me-2`;
        contactElement.appendChild(icon);
        
        const nameSpan = document.createElement('span');
        nameSpan.innerHTML = `${contact.name}<br><small class="text-muted">${capitalizeFirstLetter(contact.type)}</small>`;
        contactElement.appendChild(nameSpan);
        
        contactElement.onclick = () => loadChat(contact);
        contactsDiv.appendChild(contactElement);
    });
}

// Chat functions
function loadChat(contact) {
    currentChat = contact.id;
    document.getElementById('current-chat-name').textContent = contact.name;
    
    // Update active contact
    document.querySelectorAll('.contact').forEach(el => {
        el.classList.remove('active');
        if (el.textContent.includes(contact.name)) {
            el.classList.add('active');
        }
    });

    displayMessages();
}

function displayMessages() {
    const messagesDiv = document.querySelector('.messages');
    messagesDiv.innerHTML = '';

    const messages = dummyMessages[currentChat] || [];
    messages.forEach(message => {
        const messageElement = document.createElement('div');
        messageElement.className = `message ${message.sent ? 'sent' : 'received'}`;
        
        const messageContent = document.createElement('div');
        messageContent.className = 'message-content';
        messageContent.innerHTML = `
            ${message.text}
            <small class="d-block ${message.sent ? 'text-white-50' : 'text-muted'} mt-1">
                ${message.timestamp}
            </small>
        `;
        
        messageElement.appendChild(messageContent);
        messagesDiv.appendChild(messageElement);
    });

    messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

function sendMessage() {
    if (!currentChat) return;

    const messageInput = document.getElementById('message-text');
    const messageText = messageInput.value.trim();
    
    if (messageText) {
        if (!dummyMessages[currentChat]) {
            dummyMessages[currentChat] = [];
        }

        const now = new Date();
        const timestamp = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

        dummyMessages[currentChat].push({ 
            sent: true, 
            text: messageText,
            timestamp: timestamp
        });
        
        messageInput.value = '';
        displayMessages();
    }
}

function getContactIcon(type) {
    switch(type) {
        case 'professor':
            return 'fa-chalkboard-teacher';
        case 'ta':
            return 'fa-user-graduate';
        case 'student':
            return 'fa-user';
        default:
            return 'fa-user-circle';
    }
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// Initialize when page loads
window.onload = initializeMessages;

