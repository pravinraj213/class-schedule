document.addEventListener('DOMContentLoaded', function() {
    // Class data for each day (unchanged)
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
        ],
        saturday: [],
        sunday: []
    };

    // Get current day and set up the schedule
    const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const now = new Date();
    const currentDayIndex = now.getDay();
    const currentDay = days[currentDayIndex];

    // Set up date display
    document.getElementById('currentDate').textContent =
        `${dayNames[currentDayIndex]}, ${monthNames[now.getMonth()]} ${now.getDate()}, ${now.getFullYear()}`;

    // Set up dropdown
    const dayDropdown = document.getElementById('dayDropdown');
    dayDropdown.value = currentDay;

    // Display schedule for the selected day
    function displaySchedule(day) {
        const classesContainer = document.getElementById('classesContainer');
        const daySchedule = schedule[day] || [];

        // Clear previous classes
        classesContainer.innerHTML = '';

        if (daySchedule.length === 0) {
            classesContainer.innerHTML = `
                <div class="no-classes">
                    <i class="fas fa-calendar-times"></i>
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
        }
    }

    // Initialize with today's schedule
    displaySchedule(currentDay);

    // Handle day selection change
    dayDropdown.addEventListener('change', function() {
        const selectedDay = this.value;
        const dayIndex = days.indexOf(selectedDay);

        // Only update the displayed date if the selected day is today
        if (selectedDay === currentDay) {
            const date = new Date(now);
            date.setDate(now.getDate() + (dayIndex - currentDayIndex));

            document.getElementById('currentDate').textContent =
                `${dayNames[dayIndex]}, ${monthNames[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
        }
        // If it's not the current day, the date display will remain as the current day's date,
        // or whatever it was before the selection.

        displaySchedule(selectedDay);
    });

    // Highlight current class if any
    function updateCurrentClass() {
        const now = new Date();
        const currentHour = now.getHours();
        const currentMinute = now.getMinutes();
        const currentTime = currentHour * 60 + currentMinute;

        const currentClassBanner = document.getElementById('currentClassBanner');
        const currentClassText = document.getElementById('currentClassText');
        const timeLeftText = document.getElementById('timeLeftText');

        let currentClassFound = false;

        document.querySelectorAll('.class-item').forEach(item => {
            item.classList.remove('current');

            const timeText = item.querySelector('.class-time').textContent;
            const [startTime, endTime] = parseTimeRange(timeText);

            if (startTime <= currentTime && currentTime <= endTime) {
                item.classList.add('current');
                currentClassFound = true;

                // Update banner - removed location
                const className = item.querySelector('.class-name').textContent.trim();
                currentClassText.textContent = `${className}`;

                const timeLeft = endTime - currentTime;
                const hoursLeft = Math.floor(timeLeft / 60);
                const minsLeft = timeLeft % 60;

                // Adjust "Ends in" text
                if (timeLeft <= 0) {
                    timeLeftText.textContent = `Ending now!`;
                } else if (hoursLeft > 0) {
                    timeLeftText.textContent = `Ends in ${hoursLeft}h ${minsLeft}m`;
                } else if (minsLeft > 0) {
                    timeLeftText.textContent = `Ends in ${minsLeft}m`;
                } else {
                    timeLeftText.textContent = `Ends in less than a minute`;
                }


                currentClassBanner.style.display = 'flex';
            }
        });

        if (!currentClassFound) {
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

    // --- Notification Logic ---
    let notificationInterval;

    function requestNotificationPermission() {
        if (!("Notification" in window)) {
            console.warn("This browser does not support desktop notification");
        } else if (Notification.permission !== "granted") {
            Notification.requestPermission().then(permission => {
                if (permission === "granted") {
                    console.log("Notification permission granted.");
                } else {
                    console.warn("Notification permission denied.");
                }
            });
        }
    }

    function scheduleEndOfClassNotifications() {
        if (notificationInterval) {
            clearInterval(notificationInterval);
        }

        notificationInterval = setInterval(() => {
            const now = new Date();
            const currentHour = now.getHours();
            const currentMinute = now.getMinutes();
            const currentTime = currentHour * 60 + currentMinute;
            const today = days[now.getDay()];
            const todaySchedule = schedule[today] || [];

            if (Notification.permission !== "granted") {
                return;
            }

            for (let i = 0; i < todaySchedule.length; i++) {
                const currentClass = todaySchedule[i];
                const [startTime, endTime] = parseTimeRange(currentClass.time);

                // Notification should trigger exactly at endTime or immediately after (within 1 min)
                const notificationTriggerTimeStart = endTime;
                const notificationTriggerTimeEnd = endTime + 1;


                if (currentTime >= notificationTriggerTimeStart && currentTime <= notificationTriggerTimeEnd) {
                     const lastNotifiedKey = `lastNotification_${today}_${currentClass.code}_${endTime}`;
                     const lastNotifiedTime = localStorage.getItem(lastNotifiedKey);

                     // Only notify if not notified recently (e.g., within the last 30 seconds to prevent spam)
                     if (!lastNotifiedTime || (now.getTime() - parseInt(lastNotifiedTime) > 30000)) {
                        const nextClass = todaySchedule[i + 1];

                        let notificationTitle;
                        let notificationBody;

                        if (nextClass) {
                            notificationTitle = "Next Class Alert!";
                            // Include start time and location of next class
                            notificationBody = `${nextClass.name} (${nextClass.code}) starts at ${nextClass.time.split(' – ')[0]} in ${nextClass.location}.`;
                        } else {
                            notificationTitle = "Classes Concluded!";
                            notificationBody = "You have no more classes scheduled for today. Enjoy your break!";
                        }

                        new Notification(notificationTitle, {
                            body: notificationBody,
                            icon: 'https://www.google.com/s2/favicons?domain=' + window.location.hostname
                        });

                        localStorage.setItem(lastNotifiedKey, now.getTime().toString());
                     }
                }
            }
        }, 60000); // Check every minute
    }

    // Request permission when the page loads
    requestNotificationPermission();
    scheduleEndOfClassNotifications();

    // Update current class highlighting every 5 seconds for responsiveness
    setInterval(updateCurrentClass, 5000);

    // Check for day change
    setInterval(() => {
        const newDayIndex = new Date().getDay();
        if (days[newDayIndex] !== currentDay) {
            console.log("Day changed, re-scheduling notifications.");
            const updatedNow = new Date();
            const updatedCurrentDayIndex = updatedNow.getDay();
            const updatedCurrentDay = days[updatedCurrentDayIndex];

            document.getElementById('currentDate').textContent =
                `${dayNames[updatedCurrentDayIndex]}, ${monthNames[updatedNow.getMonth()]} ${updatedNow.getDate()}, ${updatedNow.getFullYear()}`;
            dayDropdown.value = updatedCurrentDay;

            displaySchedule(updatedCurrentDay);
            scheduleEndOfClassNotifications();
        }
    }, 3600000); // Check every hour for a day change
});