// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.
const main = document.querySelector("main")
const submitButton = document.getElementById("submit-button")
const thankYou = document.createElement("p")

function showThankYou() {
    main.innerHTML = ""; 
    main.appendChild(thankYou);
    thankYou.innerHTML = "Thank you for your message!";
    thankYou.style.fontSize = "24px"; 
    thankYou.style.height = "420px";
    thankYou.style.display = "flex";
    thankYou.style.justifyContent = "flex-start"
}

submitButton.addEventListener("click", showThankYou)

