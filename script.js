document.addEventListener('DOMContentLoaded', function() {
    // Class data for each day
    const schedule = {
        monday: [
            {
                time: "8:00 – 8:50 AM",
                name: "Environmental Sciences",
                code: "MC23313",
                type: "lecture",
                faculty: "Mrs. Dr. D. Udhayakumari",
                location: "A102 (A Block)"
            },
            {
                time: "9:00 – 9:50 AM",
                name: "Database Technology",
                code: "CB23333",
                type: "lecture",
                faculty: "Mrs. Rajammal K",
                location: "A102 (A Block)"
            },
            {
                time: "10:00 – 11:40 AM",
                name: "OOP Using Java",
                code: "CS23333",
                type: "lecture",
                faculty: "Ms. Mistica Dass",
                location: "DG03 (D Block)"
            },
            {
                time: "12:00 – 12:50 PM",
                name: "Software Engineering",
                code: "CB23332",
                type: "lecture",
                faculty: "Dr. Manikandan Thirumalaisamy",
                location: "A102 (A Block)"
            }
        ],
        tuesday: [
            {
                time: "8:00 – 9:50 AM",
                name: "Formal Language & Automata Theory",
                code: "CB23311",
                type: "lecture",
                faculty: "Dr. Vishnu Kumar A",
                location: "B322 (B Block)"
            },
            {
                time: "10:00 – 11:50 AM",
                name: "Computational Statistics",
                code: "CB23331",
                type: "lecture",
                faculty: "Mrs. R Nathiya",
                location: "A110 (A Block)"
            },
            {
                time: "12:00 – 12:50 PM",
                name: "Software Engineering",
                code: "CB23332",
                type: "lecture",
                faculty: "Dr. Manikandan Thirumalaisamy",
                location: "A202 (A Block)"
            },
            {
                time: "1:20 – 3:00 PM",
                name: "Database Technology Lab (Batch 2)",
                code: "CB23333",
                type: "lab",
                faculty: "Mrs. Rajammal K",
                location: "TLFL2 (Techlounge)"
            },
            {
                time: "3:00 – 4:40 PM",
                name: "Software Engineering Lab (Batch 1)",
                code: "CB23332",
                type: "lab",
                faculty: "Dr. Manikandan Thirumalaisamy",
                location: "TLFL2 (Techlounge)"
            }
        ],
        wednesday: [
            {
                time: "8:00 – 8:50 AM",
                name: "Computer Organization & Architecture",
                code: "CB23312",
                type: "lecture",
                faculty: "Mrs. Jayanthi M",
                location: "A209 (A Block)"
            },
            {
                time: "9:00 – 9:50 AM",
                name: "Computer Organization & Architecture",
                code: "CB23312",
                type: "lecture",
                faculty: "Mrs. Jayanthi M",
                location: "A208 (A Block)"
            },
            {
                time: "10:00 – 10:50 AM",
                name: "OOP Using Java",
                code: "CS23333",
                type: "lecture",
                faculty: "Ms. Mistica Dass",
                location: "A205 (A Block)"
            },
            {
                time: "11:00 – 11:50 AM",
                name: "OOP Using Java",
                code: "CS23333",
                type: "lecture",
                faculty: "Ms. Mistica Dass",
                location: "A205 (A Block)"
            },
            {
                time: "12:00 – 12:50 PM",
                name: "Database Technology",
                code: "CB23333",
                type: "lecture",
                faculty: "Mrs. Rajammal K",
                location: "A205 (A Block)"
            }
        ],
        thursday: [
            {
                time: "8:00 – 8:50 AM",
                name: "Environmental Sciences",
                code: "MC23313",
                type: "lecture",
                faculty: "Mrs. Dr. D. Udhayakumari",
                location: "A209 (A Block)"
            },
            {
                time: "9:00 – 9:50 AM",
                name: "Environmental Sciences",
                code: "MC23313",
                type: "lecture",
                faculty: "Mrs. Dr. D. Udhayakumari",
                location: "A209 (A Block)"
            },
            {
                time: "10:00 – 10:50 AM",
                name: "Computer Organization & Architecture",
                code: "CB23312",
                type: "lecture",
                faculty: "Mrs. Jayanthi M",
                location: "A203 (A Block)"
            },
            {
                time: "11:00 – 11:50 AM",
                name: "Database Technology",
                code: "CB23333",
                type: "lecture",
                faculty: "Mrs. Rajammal K",
                location: "A205 (A Block)"
            },
            {
                time: "12:00 – 12:50 PM",
                name: "Computational Statistics",
                code: "CB23331",
                type: "lecture",
                faculty: "Mrs. R Nathiya",
                location: "A103 (A Block)"
            },
            {
                time: "1:20 – 3:00 PM",
                name: "Computational Statistics Lab (Batch 2)",
                code: "CB23331",
                type: "lab",
                faculty: "Mrs. R Nathiya",
                location: "TLGL3 (Techlounge)"
            }
        ],
        friday: [
            {
                time: "8:00 – 9:40 AM",
                name: "Java Lab (Batch 2)",
                code: "CS23333",
                type: "lab",
                faculty: "Ms. Mistica Dass",
                location: "KFR03 (K Block)"
            },
            {
                time: "12:00 – 12:50 PM",
                name: "OOP Using Java",
                code: "CS23333",
                type: "lecture",
                faculty: "Ms. Mistica Dass",
                location: "A102 (A Block)"
            },
            {
                time: "1:00 – 1:50 PM",
                name: "Software Engineering",
                code: "CB23332",
                type: "lecture",
                faculty: "Dr. Manikandan Thirumalaisamy",
                location: "A210 (A Block)"
            },
            {
                time: "2:00 – 2:50 PM",
                name: "Formal Language & Automata Theory",
                code: "CB23311",
                type: "lecture",
                faculty: "Dr. Vishnu Kumar A",
                location: "A208 (A Block)"
            }
        ]
    };

    // Get current day and set up the schedule
    const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'];
    const dayNames = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const now = new Date();
    // Adjust currentDayIndex as Sunday (0) and Saturday (6) are no longer in the array
    let currentDayIndex = now.getDay();
    if (currentDayIndex === 0) { // If Sunday, default to Monday
        currentDayIndex = 1;
    } else if (currentDayIndex === 6) { // If Saturday, default to Friday
        currentDayIndex = 5;
    }
    // Adjust to be 0-indexed for the new 'days' array
    currentDayIndex = (currentDayIndex === 1) ? 0 : (currentDayIndex === 2) ? 1 : (currentDayIndex === 3) ? 2 : (currentDayIndex === 4) ? 3 : (currentDayIndex === 5) ? 4 : 0; // Simplified for Monday-Friday
    
    let currentDay = days[currentDayIndex];

    // Set up date display (Always for the current day)
    const currentDateElement = document.getElementById('currentDate');
    currentDateElement.textContent = `${dayNames[currentDayIndex]}, ${monthNames[now.getMonth()]} ${now.getDate()}, ${now.getFullYear()}`;

    // Set up dropdown
    const dayDropdown = document.getElementById('dayDropdown');
    dayDropdown.value = currentDay;

    // Display schedule for the selected day
    function displaySchedule(day) {
        const classesContainer = document.getElementById('classesContainer');
        const daySchedule = schedule[day] || [];

        // Clear previous classes
        classesContainer.innerHTML = '';

        // Control currentDateElement visibility
        if (day === currentDay) {
            currentDateElement.style.display = 'block'; // Or 'flex' if preferred by CSS
        } else {
            currentDateElement.style.display = 'none';
        }

        if (daySchedule.length === 0) {
            classesContainer.innerHTML = `
                <div class="no-classes">
                    <p>No classes scheduled for this day</p>
                </div>
            `;
        } else {
            daySchedule.forEach(cls => {
                const classItem = document.createElement('li');
                classItem.className = `class-item ${cls.type}`;

                classItem.innerHTML = `
                    <div class="class-time">
                        <i class="far fa-clock"></i> ${cls.time}
                    </div>
                    <span class="class-type">${cls.type === 'lab' ? 'Lab' : cls.type === 'tutorial' ? 'Tutorial' : 'Lecture'}</span>
                    <h3 class="class-name">
                        ${cls.name}
                    </h3>
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
        }

        // If viewing today's schedule, highlight current class
        if (day === currentDay) {
            updateCurrentClass();
        } else {
            // Hide current class banner if not viewing today
            document.getElementById('currentClassBanner').style.display = 'none';
            // Ensure no highlighting or dimming on other days
            document.querySelectorAll('.class-item').forEach(item => {
                item.classList.remove('current');
                item.classList.remove('past'); // Remove 'past' class for other days
            });
        }
    }

    // Initialize with today's schedule
    displaySchedule(currentDay);

    // Handle day selection change
    dayDropdown.addEventListener('change', function() {
        const selectedDay = this.value;
        displaySchedule(selectedDay);
    });

    // Highlight current class and manage banner display
    function updateCurrentClass() {
        const now = new Date();
        const currentHour = now.getHours();
        const currentMinute = now.getMinutes();
        const currentSecond = now.getSeconds();
        const currentTimeInMinutes = currentHour * 60 + currentMinute;
        const currentTimeInSeconds = currentTimeInMinutes * 60 + currentSecond;

        const currentClassBanner = document.getElementById('currentClassBanner');
        const currentClassText = document.getElementById('currentClassText');
        const timeLeftText = document.getElementById('timeLeftText');

        const todaySchedule = schedule[days[now.getDay()]] || [];
        const classItems = document.querySelectorAll('.class-item');

        // Reset all classes: remove 'current' and 'past' from all items
        classItems.forEach(item => {
            item.classList.remove('current');
            item.classList.remove('past');
        });

        if (todaySchedule.length === 0) {
            currentClassBanner.style.display = 'none';
            return;
        }

        let currentClassFound = false; // True if a class is currently active or transitioning
        let firstUpcomingClassFound = false; // True if the banner is set for a future class

        // First pass: Find the current/transitioning class and set the banner.
        // This also helps determine if we are "between working hours" for dimming past classes.
        for (let i = 0; i < todaySchedule.length; i++) {
            const classData = todaySchedule[i];
            const item = classItems[i];
            if (!item) continue;

            const timeText = classData.time;
            const [startTimeInMinutes, endTimeInMinutes] = parseTimeRange(timeText);
            const startTimeInSeconds = startTimeInMinutes * 60;
            const endTimeInSeconds = endTimeInMinutes * 60;

            // Case 1: Class is currently active
            if (currentTimeInSeconds >= startTimeInSeconds && currentTimeInSeconds < (endTimeInSeconds - 60)) {
                item.classList.add('current');
                currentClassFound = true;
                currentClassText.textContent = `${classData.name} ends in ${Math.ceil((endTimeInSeconds - currentTimeInSeconds) / 60)} minutes!`;
                currentClassBanner.style.display = 'flex';
                timeLeftText.textContent = '';
                break; // Found the current class, no need to check further for banner
            }
            // Case 2: Class is in its last minute OR just ended (transition)
            else if (currentTimeInSeconds >= (endTimeInSeconds - 60) && currentTimeInSeconds <= endTimeInSeconds) {
                item.classList.add('current');
                currentClassFound = true;
                const nextClassData = todaySchedule[i + 1];
                if (nextClassData) {
                    const [nextStartTimeInMinutes] = parseTimeRange(nextClassData.time);
                    const timeToNextMinutes = Math.max(0, nextStartTimeInMinutes - currentTimeInMinutes);
                    currentClassText.textContent = `Next: ${nextClassData.name} at ${nextClassData.location} in ${timeToNextMinutes} minutes.`; // Removed type
                    currentClassBanner.style.display = 'flex';
                    timeLeftText.textContent = '';
                } else {
                    currentClassBanner.style.display = 'none'; // No next class
                }
                break; // Found the transition class, no need to check further for banner
            }
            // Case 3: Find the first upcoming class if no current/transitioning class found yet
            else if (currentTimeInSeconds < startTimeInSeconds && !currentClassFound && !firstUpcomingClassFound) {
                const timeToNextMinutes = Math.max(0, startTimeInMinutes - currentTimeInMinutes);
                currentClassText.textContent = `Next: ${classData.name} at ${classData.location} in ${timeToNextMinutes} minutes.`; // Removed type
                currentClassBanner.style.display = 'flex';
                timeLeftText.textContent = '';
                firstUpcomingClassFound = true;
                // DO NOT break here, as we still need to iterate to handle past classes below.
            }
        }

        // Second pass (or continued logic): Apply 'past' dimming if applicable.
        // Dim past classes ONLY if there is an active or upcoming class (i.e., we are within "working hours").
        const isWithinWorkingHours = currentClassFound || firstUpcomingClassFound;

        for (let i = 0; i < todaySchedule.length; i++) {
            const classData = todaySchedule[i];
            const item = classItems[i];
            if (!item) continue;

            const timeText = classData.time;
            const [startTimeInMinutes, endTimeInMinutes] = parseTimeRange(timeText);
            const endTimeInSeconds = endTimeInMinutes * 60;

            // If the class is in the past AND we are currently within the schedule's working hours
            // AND the class is not the currently highlighted 'current' class
            if (currentTimeInSeconds > endTimeInSeconds && isWithinWorkingHours && !item.classList.contains('current')) {
                item.classList.add('past');
            }
        }

        // If no active/upcoming class found and schedule is not empty, hide banner
        if (!currentClassFound && !firstUpcomingClassFound && todaySchedule.length > 0) {
            currentClassBanner.style.display = 'none';
        }
    }


    function parseTimeRange(timeText) {
        // Example: "8:00 – 8:50 AM" or "12:00 – 12:50 PM"
        const timeParts = timeText.match(/(\d{1,2}):(\d{2}) – (\d{1,2}):(\d{2}) (AM|PM)/i);
        if (!timeParts) return [0, 0];

        let startHour = parseInt(timeParts[1]);
        const startMinute = parseInt(timeParts[2]);
        let endHour = parseInt(timeParts[3]);
        const endMinute = parseInt(timeParts[4]);
        const period = timeParts[5].toUpperCase();

        // Adjust for AM/PM to 24-hour format
        if (period === 'PM' && startHour !== 12) startHour += 12;
        if (period === 'AM' && startHour === 12) startHour = 0; // 12 AM is 00:00
        if (period === 'PM' && endHour !== 12) endHour += 12;
        if (period === 'AM' && endHour === 12) endHour = 0; // 12 AM is 00:00

        const startTime = startHour * 60 + startMinute;
        const endTime = endHour * 60 + endMinute;

        return [startTime, endTime];
    }

    // Update current class highlighting every 5 seconds for responsiveness
    setInterval(updateCurrentClass, 5000);

    // Check for day change
    setInterval(() => {
        const newDayIndex = new Date().getDay();
        const updatedNow = new Date();
        // Adjust for new 'days' array indexing
        let adjustedNewDayIndex = newDayIndex;
        if (adjustedNewDayIndex === 0) { // Sunday
            adjustedNewDayIndex = 0; // Default to Monday's index in the new array (0)
        } else if (adjustedNewDayIndex === 6) { // Saturday
            adjustedNewDayIndex = 4; // Default to Friday's index in the new array (4)
        } else { // Monday-Friday (1-5) becomes 0-4
             adjustedNewDayIndex = adjustedNewDayIndex - 1;
        }

        const updatedCurrentDay = days[adjustedNewDayIndex];


        // Only update currentDay variable if the day has actually changed
        if (updatedCurrentDay !== currentDay) {
            currentDay = updatedCurrentDay; // Update the currentDay variable
            console.log("Day changed, updating schedule.");

            // Update the dropdown value to match the new current day
            dayDropdown.value = currentDay;

            // Re-display the schedule for the new current day.
            displaySchedule(currentDay);
        }
    }, 3600000); // Check every hour for a day change
});