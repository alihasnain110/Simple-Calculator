var display = document.getElementById('display');
        var currentInput = '';

        function appendNumber(number) {
            currentInput += number;
            display.innerText = currentInput;
        }

        function appendOperator(operator) {
            currentInput += ' ' + operator + ' ';
            display.innerText = currentInput;
        }

        function clearDisplay() {
            currentInput = '';
            display.innerText = '0';
        }

        function calculate() {
            try {
                currentInput = eval(currentInput).toString();
                display.innerText = currentInput;
            } catch (error) {
                display.innerText = 'Error';

            }
        }

