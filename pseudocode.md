# JavaScript Alarm Clock Application


## Code Explanation

### Displaying Current Time
-  `displayTime()` function.
    - Obtaining the current time using `Date` object.
    - Formatting hours, minutes, and seconds.
    - Updating the HTML element with the current time.
- Use of `setInterval` to update the time display every second.

### Setting Alarm
    - Event listener for the alarm button.
    - Parsing the entered time.
    - Setting the alarm time using `Date` object.
    - Storing the alarm time in the `window` object.

### Checking Alarm
- Obtaining the current time.
- Checking if the current time matches the alarm time.
- Triggering the alarm if matched.

### Triggering Alarm
- Displaying an alert when the alarm is triggered.
