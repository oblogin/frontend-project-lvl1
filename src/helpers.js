import readlineSync from 'readline-sync';

export const randomInteger = (min, max) => {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

export const greeting = () => {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${name}!`);

  return name;
};

export const goodBye = (name) => {
  console.log(`Congratulations, ${name}!`);
};
