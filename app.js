(function () {

    let circleButton = document.querySelector('.circle-button')
    let dash1 = document.querySelector('.dash1');
    let dash2 = document.querySelector('.dash2');
    let dash3 = document.querySelector('.dash3');
    let bar1 = document.getElementById('bar1');
    let bar2 = document.getElementById('bar2');
    let bar3 = document.getElementById('bar3');



    let currentDate = new Date();
    let day = currentDate.getDate(); // dzień od 1 do 31
    let month = currentDate.getMonth() + 1; // miesiąc od 0 do 11, dlatego +1
    let year = currentDate.getFullYear();

    //changing color of labels above the bars
    function changeLabelColor(label, color) {
        label.style.color = color;
    }

    function calculateAndDisplayResults() { // ma oblcizac tylko z tymi dobrymi danymi
        let result1, result2, result3;


        if (bar3.value < year) {

            // dash1.textContent = '--';
        } else {
            result1 = year - bar3.value;
            dash1.textContent = result1;
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

        
        dash2.textContent = result2;
        dash3.textContent = result3;

        // wiem ze tu cos trzeba zmienic ale nie mam pojecia jak
    }

    // Funkcja sprawdzająca i wyświetlająca czerwone błędy
    function checkAndDisplayError(element, condition,dash) {
        if (condition) {
            element.style.display = "block";
            dash.textContent = "--"

        } else {
            element.style.display = "none";

        }
    }


    function checkIfBarsFilled() {
        if (bar1.value.trim() === "") {
            validDay.textContent = "This field is required"
            dash1.textContent = "--"
        } if (bar2.value.trim() === "") {
            validMonth.textContent = "This field is required"
            dash2.textContent = "--"
        } if (bar3.value.trim() === "") {
            validYear.textContent = "This field is required"
            dash3.textContent = "--"
        }

    }


    const validDay = document.querySelector('#dayError')
    const validMonth = document.querySelector('#monthError')
    const validYear = document.querySelector('#yearError')
    const form = document.querySelector('#form');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const bar1Value = bar1.value;
        const bar2Value = bar2.value;
        const bar3Value = bar3.value;  


        validDay.textContent = "Must be a valid day";
        validMonth.textContent = "Must be a valid month";
        validYear.textContent = "Must be in the past";

        checkIfBarsFilled();
        
        checkAndDisplayError(validDay, bar1Value < 1 || bar1Value > 31, dash1);
        checkAndDisplayError(validMonth, bar2Value < 1 || bar2Value > 12, dash2);
        checkAndDisplayError(validYear, bar3Value < 1 || bar3Value > year, dash3);
        
        

        calculateAndDisplayResults();
    })



})();