import readlineSync from 'readline-sync';

const getAnswer = (number) => {
  if (number % 2 === 0) {
    return 'yes';
  }

  return 'no';
};

const checkAnswer = (number, answer) => (number % 2 === 0 && answer === 'yes') || (number % 2 !== 0 && answer === 'no');

const randomInteger = (min, max) => {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

const greeting = () => {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${name}!`);

  return name;
};

const evenGame = (name) => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let countRightAnswer = 0;

  while (countRightAnswer < 3) {
    const number = randomInteger(1, 100);

    console.log(`Question: ${number} `);
    const answer = readlineSync.question('Your answer: ');

    if (checkAnswer(number, answer)) {
      console.log('Correct!');
      countRightAnswer += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${getAnswer(number)}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

const startEvenGame = () => {
  const userName = greeting();
  evenGame(userName);
};

export default startEvenGame;
