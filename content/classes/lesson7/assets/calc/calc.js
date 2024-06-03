// Stacks
let numbers_stack = [];
let operator_stack = [];
// Flags
let number_complete = false;
let new_expression = false;
let new_operator = true;

//Handle Values
function appendToDisplay(value) {
    let display = document.getElementById("display");
    let auxdisplay = document.getElementById("auxdisplay");

    new_operator = true;

    // Clears auxiliar display when it's a new expression
    if (new_expression)
        auxdisplay.value = "";
    // Resets main display if the number is complete
    if (number_complete) {
        document.getElementById("display").value = "";
        number_complete = false;
    }
    // Prevents zeros and dots repetition
    if (!(display.value == '0' && value == '0') && 
       (value != '.' || display.value.indexOf('.') < 0)) {
            // Deny zeros at the left
            if (display.value == '0' && value != '.') {
                display.value = value;
                auxdisplay.value = value;
            } else {
                display.value += value;
                auxdisplay.value += value;
            }
    }
}

// Handle Operators
function operator(value) {
    let auxdisplay = document.getElementById("auxdisplay");

    // Update the auxiliar display
    if (new_operator) {
        auxdisplay.value += value;
        new_operator = false;
    } else if (!new_operator) {
        auxbackspace();
        auxdisplay.value += value;
    }

    // Handle the expression
    if (new_expression){
        auxdisplay.value = document.getElementById("display").value;
        auxdisplay.value += value;
        new_expression = false;
    }

    // Handle the stacks
    if (!number_complete) {
        addNumberToStack();
        while (lenghtOfOperatorStack()>0 && !precedence(topOfOperatorStack(), value)) {
            let result = partialCalculate();
            addResultToStack(result);
        }

    } else {
        getOperatorFromStack(value);
    }
    addOperatorToStack(value);
}

// Handles the calculation
function calculate() {
    new_expression = true;
    addNumberToStack();
    let result = 0;
    while (lenghtOfOperatorStack()>0) {
        result = partialCalculate();
        addResultToStack(result);
    } 
    document.getElementById("display").value = result;
}

function clearDisplay() {
    document.getElementById("auxdisplay").value = "";
    document.getElementById("display").value = "";
    number_complete = false;
}

function backspace() {
    var displayValue = document.getElementById("display").value;
    document.getElementById("display").value = displayValue.substring(0, displayValue.length - 1);
    auxbackspace();
}

function auxbackspace() {
    var auxdisplayValue = document.getElementById("auxdisplay").value;
    document.getElementById("auxdisplay").value = auxdisplayValue.substring(0, auxdisplayValue.length - 1);
}

function addNumberToStack() {
    let number = document.getElementById("display").value;
    number_complete = true;
    numbers_stack.push(number);
}

function addResultToStack(number) {numbers_stack.push(number);}

function addOperatorToStack(value) {operator_stack.push(value);}

function getOperatorFromStack(value) {return operator_stack.pop();}

function partialCalculate() {
    let n2 = numbers_stack.pop();
    let n1 = numbers_stack.pop();
    let op = getOperatorFromStack();
    let result = eval(n1 + op + n2);
    return result;
}

function precedence(op1, op2, op3) {
    let operators = new Map([
        ['+', 1],
        ['-', 1],
        ['*', 2],
        ['/', 2],
        ['^', 3],
        ['√', 3]
    ]);
    return operators.get(op2) > operators.get(op1); 
}

function topOfOperatorStack() {return operator_stack[operator_stack.length-1];}

function lenghtOfOperatorStack() {return operator_stack.length;}