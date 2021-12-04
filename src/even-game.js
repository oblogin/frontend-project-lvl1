import readlineSync from 'readline-sync';
import { goodBye, randomInteger, greeting } from './helpers.js';

const getRightEvenAnswer = (number) => (number % 2 === 0 ? 'yes' : 'no');

const evenGame = (name) => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let countRightAnswer = 0;

  while (countRightAnswer < 3) {
    const number = randomInteger(1, 100);

    console.log(`Question: ${number} `);
    const answer = readlineSync.question('Your answer: ');
    const rightAnswer = getRightEvenAnswer(number);

    if (answer === rightAnswer) {
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
  evenGame(userName);
};
