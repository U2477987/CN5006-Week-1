const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calculate(operation, numbers) {
    let result = numbers[0];

    switch (operation) {
        case 'addition':
            result = numbers.reduce((a, b) => a + b, 0);
            break;
        case 'subtraction':
            result = numbers.reduce((a, b) => a - b);
            break;
        case 'multiplication':
            result = numbers.reduce((a, b) => a * b, 1);
            break;
        case 'division':
            result = numbers.reduce((a, b) => a / b);
            break;
        default:
            console.log('Invalid operation!');
            rl.close();
            return;
    }

    console.log(`The result of ${operation} is: ${result}`);
    rl.close();
}

rl.question('Enter numbers separated by commas: ', (input) => {
    const numbers = input.split(',').map(Number);

    rl.question('Enter operation (addition, subtraction, multiplication, division): ', (operation) => {
        calculate(operation.toLowerCase(), numbers);
    });
});