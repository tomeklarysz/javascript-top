function createGreeting(greeting = "") {
  const myGreet = greeting.toUpperCase();
  return function(name) {
    return `${myGreet} ${name}`;
  };
}

const sayHello = createGreeting('hello');
const sayHey = createGreeting('hey');
console.log(sayHello('wes'));
console.log(sayHello('kait'));
console.log(sayHey('kait'));


// example with private variables

function createGame(gameName){
  let score = 0;
  return function win(){
    score ++;
    return `Your name ${gameName} score is ${score}`
  }
}
const hockeyGame = createGame('Hockey');
console.log(hockeyGame());
console.log(hockeyGame());
console.log(hockeyGame());

const soccerGame = createGame('Soccer');
console.log(soccerGame());
console.log(soccerGame());