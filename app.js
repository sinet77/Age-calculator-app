(function () {


    let dash1 = document.querySelector('.dash1');
    let dash2 = document.querySelector('.dash2');
    let dash3 = document.querySelector('.dash3');
    let bar1 = document.getElementById('bar1');
    let bar2 = document.getElementById('bar2');
    let bar3 = document.getElementById('bar3');
    let dayLabel = document.getElementById('dayLabel');
    let monthLabel = document.getElementById('monthLabel');
    let yearLabel = document.getElementById('yearLabel');



    let currentDate = new Date();
    let day = currentDate.getDate(); // dzień od 1 do 31
    let month = currentDate.getMonth() + 1; // miesiąc od 0 do 11, dlatego +1
    let year = currentDate.getFullYear();



    function calculateAndDisplayResults() {
        let result1, result2, result3;


        if (bar3.value < year) {
            result1 = year - bar3.value;
        }

        if (bar2.value > month) {
            result2 = bar2.value - month
        } else {
            result2 = month - bar2.value;
        }

        if (bar1.value > day) {
            result3 = bar1.value - day;
        } else {
            result3 = day - bar1.value;
        }

        dash1.textContent = result1;
        dash2.textContent = result2;
        dash3.textContent = result3;


    }

    // Funkcja sprawdzająca i wyświetlająca czerwone błędy
    function checkAndDisplayError(element, condition, dash) {
        let isInputValid = true;
        if (condition) {
            element.style.display = "block";
            dash.textContent = "--"
            isInputValid = false;

        } else {
            element.style.display = "none";
            isInputValid = true;
        }
        return isInputValid;
    }


    function checkIfBarsFilled() {
        let isFilled = true;

        if (bar1.value.trim() === "") {
            validDay.textContent = "This field is required"
            dash1.textContent = "--"
            dayLabel.style.color = "hsl(0, 100%, 67%)";
            bar1.style.borderColor = "hsl(0, 100%, 67%)";
            isFilled = false;

        
        } if (bar2.value.trim() === "") {
            validMonth.textContent = "This field is required"
            dash2.textContent = "--"
            monthLabel.style.color = "hsl(0, 100%, 67%)";
            bar2.style.borderColor = "hsl(0, 100%, 67%)";
            isFilled = false;

        } if (bar3.value.trim() === "") {
            validYear.textContent = "This field is required"
            dash3.textContent = "--"
            yearLabel.style.color = "hsl(0, 100%, 67%)";
            bar3.style.borderColor = "hsl(0, 100%, 67%)";
            isFilled = false;
        }
        
        return isFilled;
    }


    const validDay = document.querySelector('#dayError')
    const validMonth = document.querySelector('#monthError')
    const validYear = document.querySelector('#yearError')
    const form = document.querySelector('#form');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        console.log('Form submitted');
        
        const bar1Value = bar1.value;
        const bar2Value = bar2.value;
        const bar3Value = bar3.value;

        console.log('bar1Value:', bar1Value);
        console.log('bar2Value:', bar2Value);
        console.log('bar3Value:', bar3Value);

        validDay.textContent = "Must be a valid day";
        validMonth.textContent = "Must be a valid month";
        validYear.textContent = "Must be in the past";

        const checkIfFilled = checkIfBarsFilled();

        const dayValidation = checkAndDisplayError(validDay, bar1Value < 1 || bar1Value > 31, dash1);
        const monthValidation = checkAndDisplayError(validMonth, bar2Value < 1 || bar2Value > 12, dash2);
        const yearValidation = checkAndDisplayError(validYear, bar3Value < 1 || bar3Value > year, dash3);


        if (checkIfFilled && dayValidation && monthValidation && yearValidation) {

            dayLabel.style.color = "hsl(0, 1%, 44%, 0.8)";
            bar1.style.borderColor = "hsl(0, 1%, 44%, 0.8)";
            monthLabel.style.color = "hsl(0, 1%, 44%, 0.8)";
            bar2.style.borderColor = "hsl(0, 1%, 44%, 0.8)";
            yearLabel.style.color = "hsl(0, 1%, 44%, 0.8)";
            bar3.style.borderColor = "hsl(0, 1%, 44%, 0.8)";
            calculateAndDisplayResults();
        }

    })



})();