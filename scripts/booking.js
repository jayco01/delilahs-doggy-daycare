/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?
const monday = document.getElementById("monday");
const tuesday = document.getElementById("tuesday");
const wednesday = document.getElementById("wednesday");
const thursday = document.getElementById("thursday");
const friday = document.getElementById("friday");

const full = document.getElementById("full");
const half = document.getElementById("half");

const calculatedCost = document.getElementById("calculated-cost");
let costSum = parseInt(calculatedCost.innerHTML);
let costPerDay = 35;

const clearButton = document.getElementById("clear-button");



/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

function toggleMonday() {
    if (monday.classList.contains("clicked")) {
      monday.classList.remove("clicked");
      costSum -= costPerDay;
    } else {
      monday.classList.add("clicked");
      costSum += costPerDay;
    }
    recalcCost();
  }
  monday.addEventListener("click", toggleMonday);
  
  function toggleTuesday() {
    if (tuesday.classList.contains("clicked")) {
      tuesday.classList.remove("clicked");
      costSum -= costPerDay;
    } else {
      tuesday.classList.add("clicked");
      costSum += costPerDay;
    }
    recalcCost();
  }
  tuesday.addEventListener("click", toggleTuesday);
  
  function toggleWednesday() {
    if (wednesday.classList.contains("clicked")) {
      wednesday.classList.remove("clicked");
      costSum -= costPerDay;
    } else {
      wednesday.classList.add("clicked");
      costSum += costPerDay;
    }
    recalcCost();
  }
  wednesday.addEventListener("click", toggleWednesday);
  
  function toggleThursday() {
    if (thursday.classList.contains("clicked")) {
      thursday.classList.remove("clicked");
      costSum -= costPerDay;
    } else {
      thursday.classList.add("clicked");
      costSum += costPerDay;
    }
    recalcCost();
  }
  thursday.addEventListener("click", toggleThursday);
  
  function toggleFriday() {
    if (friday.classList.contains("clicked")) {
      friday.classList.remove("clicked");
      costSum -= costPerDay;
    } else {
      friday.classList.add("clicked");
      costSum += costPerDay;
    }
    recalcCost();
  }
  friday.addEventListener("click", toggleFriday);

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

function resetTotal() {
    monday.classList.remove("clicked");
    tuesday.classList.remove("clicked");
    wednesday.classList.remove("clicked");
    thursday.classList.remove("clicked");
    friday.classList.remove("clicked");
    costSum = 0;
    recalcCost();  
}
clearButton.addEventListener("click",resetTotal)


/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

function calculateHalfDay() {
    if (!half.classList.contains("clicked")) {
      half.classList.add("clicked");
      full.classList.remove("clicked");
      costPerDay = 20;
      if (
        monday.classList.contains("clicked") ||
        tuesday.classList.contains("clicked") ||
        wednesday.classList.contains("clicked") ||
        thursday.classList.contains("clicked") ||
        friday.classList.contains("clicked")
      ) {
        costSum = (costSum / 35) * costPerDay;
      } else {
        costSum = 0;
      }
      calculatedCost.innerHTML = Math.round(costSum);
    }
  }
  half.addEventListener("click",calculateHalfDay)


// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

function calculateFullDay() {
    if (!full.classList.contains("clicked")) {
      full.classList.add("clicked");
      half.classList.remove("clicked");
      costPerDay = 35;
  
      if (
        monday.classList.contains("clicked") ||
        tuesday.classList.contains("clicked") ||
        wednesday.classList.contains("clicked") ||
        thursday.classList.contains("clicked") ||
        friday.classList.contains("clicked")
      ) {
        costSum = (costSum / 20) * costPerDay;
      } else {
        costSum = 0;
      }
      calculatedCost.innerHTML = Math.round(costSum);
    }
  }
  full.addEventListener("click",calculateFullDay)

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function recalcCost() {
    calculatedCost.innerHTML = costSum; 
  }
