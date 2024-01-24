(function () {

    let circleButton = document.querySelector('.circle-button')
    let dash1 = document.querySelector('.dash1');
    let dash2 = document.querySelector('.dash2');
    let dash3 = document.querySelector('.dash3');
    let mainTexts = document.querySelector('.item');
    let bar1 = document.getElementById('bar1');
    let bar2 = document.getElementById('bar2');
    let bar3 = document.getElementById('bar3');
    let validDay = document.querySelector('.valid-day')
    let validMonth = document.querySelector('.valid-month')
    let validYear = document.querySelector('.valid-year')
    let field = document.querySelector('.field')

    let currentDate = new Date();
    let day = currentDate.getDate(); // dzień od 1 do 31
    let month = currentDate.getMonth() + 1; // miesiąc od 0 do 11, dlatego +1
    let year = currentDate.getFullYear();

    //changing color of labels above the bars
    function changeLabelColor(label, color) {
        label.style.color = color;
    }

    function calculateAndDisplayResults() {
        let result1,result2,result3;
        let originalDash1Value = dash1.textContent;

        if (bar3.value > year) {
            validYear.style.display = "block";
            dash1.textContent = originalDash1Value;
        } else {
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
    function checkAndDisplayError(element, condition) {
        if (condition) {
            element.style.display = "block";

        } else {
            element.style.display = "none";

        }
    }
    function checkIfBarsFilled(element, condition) {
        if (condition) {
            element.style.display = "block";
            text.style.display = "none";

        } else {
            element.style.display = "none";

        }
    }



    bar1.addEventListener('keyup', function (event) {

        checkIfBarsFilled(field, bar1.value.trim() === "", validDay)
        if (event.key === 'Enter') {

            checkAndDisplayError(validDay, bar1.value < 1 || bar1.value > 31);
            calculateAndDisplayResults();

        }
    });

    bar2.addEventListener('keyup', function (event) {

        checkIfBarsFilled(field, bar2.value.trim() === "", validMonth)
        if (event.key === 'Enter') {

            checkAndDisplayError(validMonth, bar2.value < 1 || bar2.value > 12);
            calculateAndDisplayResults();

        }
    });

    bar3.addEventListener('keyup', function (event) {

        checkIfBarsFilled(field, bar3.value.trim() === "", validYear)
        if (event.key === 'Enter') {

            checkAndDisplayError(validYear, bar3.value > year);
            calculateAndDisplayResults();

        }
    });


    circleButton.addEventListener('click', function () {
        checkIfBarsFilled(field, bar1.value.trim() === "")
        checkIfBarsFilled(field, bar2.value.trim() === "")
        checkIfBarsFilled(field, bar3.value.trim() === "")
        checkAndDisplayError(validDay, bar1.value < 1 || bar1.value > 31);
        checkAndDisplayError(validMonth, bar2.value < 1 || bar2.value > 12);
        checkAndDisplayError(validYear, bar3.value < 1 || bar3.value > 2024);


    });





})();