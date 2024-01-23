(function () {

    let circleButton = document.querySelector('.circle-button')
    let dash1 = document.querySelector('.dash1');
    let dash2 = document.querySelector('.dash2');
    let mainTexts = document.querySelector('.item');
    let bar1 = document.getElementById('bar1');
    let bar2 = document.getElementById('bar2');
    let bar3 = document.getElementById('bar3');
    let validDay = document.querySelector('.valid-day')
    let validMonth = document.querySelector('.valid-month')
    let validYear = document.querySelector('.valid-year')
    let field = document.querySelector('.field')

    //changing color of labels above the bars
    function changeLabelColor(label, color) {
        label.style.color = color;
    }
    // Funkcja sprawdzająca i wyświetlająca czerwone błędy
    function checkAndDisplayError(element, condition) {
        if (condition) {
            element.style.display = "block";

        } else {
            element.style.display = "none";

        }
    }
    function checkIfBarsFilled(element, condition, text) {
        if (condition) {
            element.style.display = "block";
            text.style.display = "none";

        } else {
            element.style.display = "none";

        }
    }


    bar1.addEventListener('keyup', function (event) {
        if (event.key === 'Enter') {
            checkIfBarsFilled(field, bar1.value.trim() === "", validDay)
            checkAndDisplayError(validDay, bar1.value < 1 || bar1.value > 31);
            let result = 23 - bar1.value;
            dash1.textContent = result;

        }
    });

    bar2.addEventListener('keyup', function (event) {
        if (event.key === 'Enter') {
            checkIfBarsFilled(field, bar2.value.trim() === "", validMonth)
            checkAndDisplayError(validMonth, bar2.value < 1 || bar2.value > 12);
            let result = 8 - bar2.value;
            dash2.textContent = result;

        }
    });

    bar3.addEventListener('keyup', function (event) {
        if (event.key === 'Enter') {
            checkIfBarsFilled(field, bar3.value.trim() === "", validYear)
            checkAndDisplayError(validYear, bar3.value > 2024);
            let result = 8 - bar3.value;
            dash3.textContent = result;

        }
    });


    circleButton.addEventListener('click', function () {
        checkIfBarsFilled(field, bar1.value.trim() === "", validDay)
        checkIfBarsFilled(field, bar1.value.trim() === "", validMonth)
        checkIfBarsFilled(field, bar1.value.trim() === "", validYear)
        checkAndDisplayError(validDay, bar1.value < 1 || bar1.value > 31);
        checkAndDisplayError(validMonth, bar2.value < 1 || bar2.value > 12);
        checkAndDisplayError(validYear, bar3.value < 1 || bar3.value > 2024);


    });





})();