/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?
const monday = document.getElementById("monday");
const teusday = document.getElementById("tuesday");
const wednesday = document.getElementById("wednesday");
const thursday = document.getElementById("thursday");
const friday = document.getElementById("friday");

const full = document.getElementById("full");
const half = document.getElementById("half");

const calculatedCost = document.getElementById("calculated-cost");
let costSum = parseInt(calculatedCost.innerHTML);
let costPerDay = 20;

const clearButton = document.getElementById("clear-button");



/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!


function addMonday() {
    if (monday.classList.contains("clicked")) {
        monday.classList.remove("clicked");
        costSum -= costPerDay;
        calculatedCost.innerHTML = costSum;
    } else {
        monday.classList.add("clicked");
        costSum += costPerDay;
        calculatedCost.innerHTML = costSum;
    }
}
monday.addEventListener("click",addMonday)

function addTeusday() {
    if (teusday.classList.contains("clicked")) {
        teusday.classList.remove("clicked");
        costSum -= costPerDay;
        calculatedCost.innerHTML = costSum;
    } else {
        teusday.classList.add("clicked");
        costSum += costPerDay;
        calculatedCost.innerHTML = costSum;
    }
}
teusday.addEventListener("click",addTeusday)

function addWednesday() {
    if (wednesday.classList.contains("clicked")) {
        wednesday.classList.remove("clicked");
        costSum -= costPerDay;
        calculatedCost.innerHTML = costSum;
    } else {
        wednesday.classList.add("clicked");
        costSum += costPerDay;
        calculatedCost.innerHTML = costSum;
    }
}
wednesday.addEventListener("click",addWednesday)

function addThursday() {
    if (thursday.classList.contains("clicked")) {
        thursday.classList.remove("clicked");
        costSum -= costPerDay;
        calculatedCost.innerHTML = costSum;
    } else {
        thursday.classList.add("clicked");
        costSum += costPerDay;
        calculatedCost.innerHTML = costSum;
    }
}
thursday.addEventListener("click",addThursday)

function addFriday() {
    if (friday.classList.contains("clicked")) {
        friday.classList.remove("clicked");
        costSum -= costPerDay;
        calculatedCost.innerHTML = costSum;
    } else {
        friday.classList.add("clicked");
        costSum += costPerDay;
        calculatedCost.innerHTML = costSum;
    }
}
friday.addEventListener("click",addFriday)

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

function resetTotal() {
    monday.classList.remove("clicked");
    teusday.classList.remove("clicked");
    wednesday.classList.remove("clicked");
    thursday.classList.remove("clicked");
    friday.classList.remove("clicked");
}

clearButton.addEventListener("click",resetTotal)




/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.




// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.





/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value


