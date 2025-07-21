document.addEventListener('DOMContentLoaded', function() {
    // Constants
    const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'];
    const dayNames = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 
                       'July', 'August', 'September', 'October', 'November', 'December'];

    // DOM Elements
    const currentDateElement = document.getElementById('currentDate');
    const dayDropdown = document.getElementById('dayDropdown');
    const classesContainer = document.getElementById('classesContainer');
    const currentClassBanner = document.getElementById('currentClassBanner');
    const currentClassText = document.getElementById('currentClassText');
    const timeLeftText = document.getElementById('timeLeftText');

    // Global schedule variable
    let schedule = {};

    // Fetch schedule data
    fetch('schedule.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            schedule = data.schedule;
            initializeApp();
        })
        .catch(error => {
            console.error('Error loading schedule:', error);
            classesContainer.innerHTML = '<div class="error">Failed to load schedule. Please try again later.</div>';
        });

    function initializeApp() {
        // Get current day
        const now = new Date();
        let currentDayIndex = now.getDay();
        currentDayIndex = (currentDayIndex >= 1 && currentDayIndex <= 5) ? currentDayIndex - 1 : 0;
        const currentDay = days[currentDayIndex];

        // Set up date display
        currentDateElement.textContent = `${dayNames[currentDayIndex]}, ${monthNames[now.getMonth()]} ${now.getDate()}, ${now.getFullYear()}`;
        dayDropdown.value = currentDay;

        // Display initial schedule
        displaySchedule(currentDay);

        // Event listeners
        dayDropdown.addEventListener('change', function() {
            displaySchedule(this.value);
        });

        // Update current class every minute
        setInterval(() => {
            if (dayDropdown.value === currentDay) {
                updateCurrentClass();
            }
        }, 60000);
    }

    function displaySchedule(day) {
        if (!schedule[day]) {
            classesContainer.innerHTML = '<div class="no-classes">No schedule data for this day</div>';
            return;
        }

        const daySchedule = schedule[day];
        classesContainer.innerHTML = '';

        if (daySchedule.length === 0) {
            classesContainer.innerHTML = '<div class="no-classes">No classes scheduled</div>';
            return;
        }

        daySchedule.forEach(cls => {
            const classItem = document.createElement('li');
            classItem.className = `class-item ${cls.type}`;
            classItem.innerHTML = `
                <div class="class-time">
                    <i class="far fa-clock"></i> ${cls.time}
                </div>
                <span class="class-type">${cls.type === 'lab' ? 'Lab' : 'Lecture'}</span>
                <h3 class="class-name">${cls.name}</h3>
                <div class="class-code">${cls.code}</div>
                <div class="class-meta">
                    <div class="meta-item">
                        <i class="fas fa-user-tie"></i> ${cls.faculty}
                    </div>
                    <div class="meta-item">
                        <i class="fas fa-map-marker-alt"></i> ${cls.location}
                    </div>
                </div>
            `;
            classesContainer.appendChild(classItem);
        });

        if (day === days[new Date().getDay() - 1]) {
            updateCurrentClass();
        }
    }

    function updateCurrentClass() {
        const now = new Date();
        const currentTime = now.getHours() * 60 + now.getMinutes();
        const currentDay = days[now.getDay() - 1];
        const daySchedule = schedule[currentDay] || [];

        // Reset all classes
        document.querySelectorAll('.class-item').forEach(item => {
            item.classList.remove('current', 'past');
        });

        let currentClassFound = false;
        let nextClassFound = false;

        daySchedule.forEach((cls, index) => {
            const [startTime, endTime] = parseTimeRange(cls.time);
            const classItem = document.querySelectorAll('.class-item')[index];

            if (currentTime >= startTime && currentTime < endTime) {
                classItem.classList.add('current');
                currentClassFound = true;
                const minutesLeft = endTime - currentTime;
                currentClassText.textContent = `${cls.name} ends in ${minutesLeft} min`;
            } 
            else if (currentTime < startTime && !currentClassFound && !nextClassFound) {
                nextClassFound = true;
                const minutesUntil = startTime - currentTime;
                currentClassText.textContent = `Next: ${cls.name} in ${minutesUntil} min`;
            }
            else if (currentTime > endTime) {
                classItem.classList.add('past');
            }
        });

        if (!currentClassFound && !nextClassFound) {
            currentClassText.textContent = "No more classes today";
        }
    }

    function parseTimeRange(timeText) {
        const timeMatch = timeText.match(/(\d{1,2}):(\d{2})\s*–\s*(\d{1,2}):(\d{2})(?:\s*(AM|PM))?/i);
        if (!timeMatch) return [0, 0];

        let startHour = parseInt(timeMatch[1]);
        const startMinute = parseInt(timeMatch[2]);
        let endHour = parseInt(timeMatch[3]);
        const endMinute = parseInt(timeMatch[4]);
        const period = timeMatch[5]?.toUpperCase();

        // Convert to 24-hour format
        if (period === 'PM' && startHour !== 12) startHour += 12;
        if (period === 'AM' && startHour === 12) startHour = 0;
        if (period === 'PM' && endHour !== 12) endHour += 12;
        if (period === 'AM' && endHour === 12) endHour = 0;

        return [
            startHour * 60 + startMinute,
            endHour * 60 + endMinute
        ];
    }
});