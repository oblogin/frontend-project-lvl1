import {goodBye, randomInteger, greeting} from "./helpers.js";
import readlineSync from "readline-sync";

const getRandomSign = () => {
    switch (randomInteger(0, 3)) {
        case 0:
            return '+';
        case 1:
            return '-';
        case 2:
            return '*';
        default:
            return '+';
    }
};

const calculator = (first, second, sign) => {
    switch (sign) {
        case '+':
            return first + second;
        case '-':
            return first - second;
        case '*':
            return first * second;
        default:
            return first + second;
    }
};

const calculatorGame = (name) => {
    console.log('What is the result of the expression?');

    let countRightAnswer = 0;

    while (countRightAnswer < 3) {
        const first = randomInteger(1, 100);
        const second = randomInteger(1, 100);
        const sign = getRandomSign();
        const rightAnswer = calculator(first, second, sign);

        console.log(`Question: ${first} ${sign} ${second}`);
        const answer = readlineSync.question('Your answer: ');

        if (rightAnswer === Number(answer)) {
            console.log('Correct!');
            countRightAnswer += 1;
        } else {
            console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
            console.log(`Let's try again, ${name}!`);
            return;
        }
    }

    goodBye(name);
};

export default () => {
    const userName = greeting();
    calculatorGame(userName);
};