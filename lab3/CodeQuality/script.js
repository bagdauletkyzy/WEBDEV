function hello(name) {
  let phrase = `Hello, ${name}!`;
  debugger;
  say(phrase);
}

function say(phrase) {
  alert(phrase);
}

for (let i = 0; i < 5; i++) {
  console.log("value,", i);
}

if (n < 0) {
  alert(`Power ${n} is not supported`);
}

let str = `
  ECMA International's TC39 is a group of JavaScript developers,
  implementers, academics, and more, collaborating with the community
  to maintain and evolve the definition of JavaScript.
`;

if (
  id === 123 &&
  moonPhase === 'Waning Gibbous' &&
  zodiacSign === 'Libra'
) {
  letTheSorceryBegin();
}

function pow(x, n) {
  let result = 1;
  for (let i = 0; i < n; i++) {
    result *= x;
  }
  return result;
}

function showPrimes(n) {
  nextPrime:
  for (let i = 2; i < n; i++) {
    for (let j = 2; j < i; j++) {
      if (i % j == 0) continue nextPrime;
    }
    alert(i);
  }
}

function showPrimes(n) {
  for (let i = 2; i < n; i++) {
    if (!isPrime(i)) continue;
    alert(i);
  }
}

function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if (n % i == 0) return false;
  }
  return true;
}

for(let i = 0; i < 10; i++) {
  let drop = getWhiskey();
  smell(drop);
  add(drop, glass);
}

for(let t = 0; t < 3; t++) {
  let tomato = getTomato();
  examine(tomato);
  let juice = press(tomato);
  add(juice, glass);
}

addWhiskey(glass);
addJuice(glass);

function addWhiskey(container) {
  for(let i = 0; i < 10; i++) {
    let drop = getWhiskey();
  }
}

function addJuice(container) {
  for(let t = 0; t < 3; t++) {
    let tomato = getTomato();
  }
}

function pow(x, n) {
  return result;
}

i = i ? i < 0 ? Math.max(0, len + i) : i : 0;

for (let i = 0; i < 10; i++) {
  if (cond) {
  }
}

for (let i = 0; i < 10; i++) {
  if (!cond) continue;
}

function pow(x, n) {
  if (n < 0) {
    alert("Negative 'n' not supported");
  } else {
    let result = 1;
    for (let i = 0; i < n; i++) {
      result *= x;
    }
    return result;
  }
}

function pow(x, n) {
  if (n < 0) {
    alert("Negative 'n' not supported");
    return;
  }
  let result = 1;
  for (let i = 0; i < n; i++) {
    result *= x;
  }
  return result;
}

function createElement() {
}

function setHandler(elem) {
}

function walkAround() {
}

let elem = createElement();
setHandler(elem);
walkAround();

let user = authenticateUser();

function render() {
  let user = anotherValue();
}

function ninjaFunction(elem) {
  elem = clone(elem);
}

function pow(x, n) {
  if (n < 0) return NaN;
  if (Math.round(n) != n) return NaN;
  let result = 1;
  for (let i = 0; i < n; i++) {
    result *= x;
  }
  return result;
}

if (!Math.trunc) {
  Math.trunc = function(number) {
    return number < 0 ? Math.ceil(number) : Math.floor(number);
  };
}

height = height ?? 100;

height = (height !== undefined && height !== null) ? height : 100;