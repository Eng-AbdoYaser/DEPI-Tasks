const numbers = [1, 2, 3, 4, 5];
const sum = sumNumbers(numbers);

function sumNumbers(arr) {
    return arr.reduce((acc, val) => acc + val, 0);
}

console.log(`The sum of the numbers is: ${sum}`);