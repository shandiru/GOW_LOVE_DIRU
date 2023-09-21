document.addEventListener('DOMContentLoaded', function () {
    const inputDate = document.getElementById('inputDate');
    const inputTime = document.getElementById('inputTime');
    const result = document.getElementById('result');

    function updateTimer() {
        const inputDateTime = new Date(inputDate.value + 'T' + inputTime.value);
        const currentTime = new Date();

        const timeDifference = inputDateTime - currentTime;
        const years = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 365))*(-1)-1;
        const months = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 30.44))*(-1)-1;
    
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24))*(-1);
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))*(-1)-1;
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60))*(-1);
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000)*(-1);

        const resultText = [
            years >= 0 ? `+${years} Years` : `${years} Years`,
            months >= 0 ? `+${months} Months` : `${months} Months`,
            days >= 0 ? `+${days} Days` : `${days} Days`,
            hours >= 0 ? `+${hours} Hours` : `${hours} Hours`,
            minutes >= 0 ? `+${minutes} Minutes` : `${minutes} Minutes`,
            seconds >= 0 ? `+${seconds} Seconds` : `${seconds} Seconds`,
        ];

        result.textContent = resultText.join(', ');
    }

    updateTimer(); // Initial calculation
    result.style.display = 'block'; // Display the result

    setInterval(updateTimer, 1000); // Update every second
});
