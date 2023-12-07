let counter= 0;
let buttons = document.querySelectorAll("button");
let value = document.getElementById("number");
buttons.forEach(button => {
    button.addEventListener("click", () => {
        if(button.innerText == "Decrease") {
            counter--;
        } else if (button.innerText == "Reset") {
            counter = 0;
        } else {
            counter++;
        }
        if (counter>0) {
            value.style.color= "green"
        } else if (counter <0) {
            value.style.color= "red";
        } else{
            value.style.color = "black";
        }

        value.innerText = counter;
        })
    })