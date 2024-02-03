const input = document.querySelector("#result");
const buttons = document.querySelectorAll("input[type='button']");
const modeSwitchButton = document.querySelector("#mode-switch");

let string = "";
let isScientificMode = false;

// Toggle between basic and scientific modes
modeSwitchButton.addEventListener("click", () => {
    isScientificMode = !isScientificMode;
    if (isScientificMode) {
        modeSwitchButton.textContent = "Basic";
        // You can add additional buttons for scientific functions here
        // For simplicity, I'm just adding sin, cos, and tan for now
        buttons[0].value = "sin";
        buttons[1].value = "cos";
        buttons[2].value = "tan";
       
        buttons[4].value = "^";
        buttons[5].value = "log";
        buttons[6].value = "!";

        buttons[8].value = "sqrt";

        buttons[9].value = "abs";
        buttons[10].value = "ln";
        buttons[12].value = "10^";
    } else {
        modeSwitchButton.textContent = "Scientific";
        // Reset buttons to their original values
        buttons[0].value = "1";
        buttons[1].value = "2";
        buttons[2].value = "3";
        buttons[4].value = "4";
        buttons[5].value = "5";
        buttons[6].value = "6";
        buttons[8].value = "7";
        buttons[9].value = "8";
        buttons[10].value = "9";
        buttons[12].value = "0";
        // Add more buttons as needed
    }
});

// Rest of your existing button click event listener
buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        // Check if in scientific mode and handle additional functions
        if (isScientificMode) {
            // Handle scientific functions here
            if (e.target.value === "sin") {
                string = Math.sin(eval(string));
                input.value = string;
            } else if (e.target.value === "cos") {
                string = Math.cos(eval(string));
                input.value = string;
            } else if (e.target.value === "tan") {
                string = Math.tan(eval(string));
                input.value = string;
            }
            else if (e.target.value === "sqrt") {
                string = Math.sqrt(eval(string));
                input.value = string;
            } else if (e.target.value === "^") {
                string += (eval(string));
                input.value = string;
            }
            else if (e.target.value === "!") {
                string = factorial(eval(string));
                input.value = string;
            }else if (e.target.value === "log") {
                string = Math.log10(eval(string));
                input.value = string;
            } else if (e.target.value === "abs") {
                string = Math.abs(eval(string));
                input.value = string;
            }
            else if (e.target.value === "ln") {
                string = Math.log(eval(string));
                input.value = string;
            } else if (e.target.value === "10^") {
                string = Math.pow(10, eval(string));
                input.value = string;
            }
          
            // Add more scientific functions as needed
        } else {
            // Handle basic calculator functions
            if (e.target.value === "=") {
                string = eval(string);
                input.value = string;
            } else if (e.target.value === "C") {
                string = "";
                input.value = string;
            } else if (e.target.value === "DEL") {
                string = string.substring(0, string.length - 1);
                input.value = string;
            } else {
                string += e.target.value;
                input.value = string;
            }
        }
    });
});

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}
