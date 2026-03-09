alert( 'Hello, world!' );

alert('Hello'); alert('World');

alert('Hello');
alert('World');

alert(3 +
1
+ 2);

{
let message;
message = 'Hello!';
alert(message);
}

{
let message = 'Hello!';
alert(message);
}

{
let message;
message = 'Hello!';
message = 'World!';
alert(message);
}

{
let hello = 'Hello world!';
let message;
message = hello;
alert(hello);
alert(message);
}

{
let $ = 1;
let _ = 2;
alert($ + _);
}

num = 5;
alert(num);

{
const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";
let color = COLOR_ORANGE;
alert(color);
}

alert( 1 / 0 );

alert( Infinity );

alert( "not a number" / 2 );

alert( NaN + 1 );
alert( 3 * NaN );
alert( "not a number" / 2 - 1 );

{
let name = "John";
alert( `Hello, ${name}!` );
alert( `the result is ${1 + 2}` );
}

alert( "the result is ${1 + 2}" );

{
let age;
alert(age);
}

{
let age = 100;
age = undefined;
alert(age);
}

alert( 2 > 1 );
alert( 2 == 1 );
alert( 2 != 1 );

{
let result = 5 > 4;
alert( result );
}

alert( 'Z' > 'A' );
alert( 'Glow' > 'Glee' );
alert( 'Bee' > 'Be' );

alert( '2' > 1 );
alert( '01' == 1 );

alert( true == 1 );
alert( false == 0 );

{
let a = 0;
alert( Boolean(a) );
let b = "0";
alert( Boolean(b) );
alert(a == b);
}

alert( 0 == false );

alert( '' == false );

alert( 0 === false );

alert( null === undefined );

alert( null == undefined );

alert( null > 0 );
alert( null == 0 );
alert( null >= 0 );

alert( undefined > 0 );
alert( undefined < 0 );
alert( undefined == 0 );

{
let year = prompt('In which year was ECMAScript-2015 specification published?', '');
if (year == 2015) alert( 'You are right!' );
}

{
let year = prompt('In which year was the ECMAScript-2015 specification published?', '');
if (year == 2015) {
  alert( 'You guessed it right!' );
} else {
  alert( 'How can you be so wrong?' );
}
}

{
let year = prompt('In which year was the ECMAScript-2015 specification published?', '');
if (year < 2015) {
  alert( 'Too early...' );
} else if (year > 2015) {
  alert( 'Too late' );
} else {
  alert( 'Exactly!' );
}
}

{
let accessAllowed;
let age = prompt('How old are you?', '');
if (age > 18) {
  accessAllowed = true;
} else {
  accessAllowed = false;
}
alert(accessAllowed);
}

{
let age = prompt('age?', 18);
let message = (age < 3) ? 'Hi, baby!' :
  (age < 18) ? 'Hello!' :
  (age < 100) ? 'Greetings!' :
  'What an unusual age!';
alert( message );
}

{
let company = prompt('Which company created JavaScript?', '');
(company == 'Netscape') ?
   alert('Right!') : alert('Wrong.');
}

{
let company = prompt('Which company created JavaScript?', '');
if (company == 'Netscape') {
  alert('Right!');
} else {
  alert('Wrong.');
}
}

alert( true || true );
alert( false || true );
alert( true || false );
alert( false || false );

{
let hour = 9;
if (hour < 10 || hour > 18) {
  alert( 'The office is closed.' );
}
}

{
let hour = 12;
let isWeekend = true;
if (hour < 10 || hour > 18 || isWeekend) {
  alert( 'The office is closed.' );
}
}

alert( 1 || 0 );
alert( null || 1 );
alert( null || 0 || 1 );
alert( undefined || null || 0 );

{
let firstName = "";
let lastName = "";
let nickName = "SuperCoder";
alert( firstName || lastName || nickName || "Anonymous");
}

true || alert("not printed");
false || alert("printed");

alert( true && true );
alert( false && true );
alert( true && false );
alert( false && false );

{
let hour = 12;
let minute = 30;
if (hour == 12 && minute == 30) {
  alert( 'The time is 12:30' );
}
}

if (1 && 0) {
  alert( "won't work, because the result is falsy" );
}

alert( 1 && 0 );
alert( 1 && 5 );
alert( null && 5 );
alert( 0 && "no matter what" );

alert( 1 && 2 && null && 3 );

alert( 1 && 2 && 3 );

{
let x = 1;
(x > 0) && alert( 'Greater than zero!' );
}

{
let x = 1;
if (x > 0) alert( 'Greater than zero!' );
}

alert( !true );
alert( !0 );

alert( !!"non-empty string" );
alert( !!null );

alert( Boolean("non-empty string") );
alert( Boolean(null) );

{
let user;
alert(user ?? "Anonymous");
}

{
let user = "John";
alert(user ?? "Anonymous");
}

{
let firstName = null;
let lastName = null;
let nickName = "Supercoder";
alert(firstName ?? lastName ?? nickName ?? "Anonymous");
}

{
let firstName = null;
let lastName = null;
let nickName = "Supercoder";
alert(firstName || lastName || nickName || "Anonymous");
}

{
let height = 0;
alert(height || 100);
alert(height ?? 100);
}

{
let height = null;
let width = null;
let area = (height ?? 100) * (width ?? 50);
alert(area);
}

{
let x = (1 && 2) ?? 3;
alert(x);
}

{
let i = 0;
while (i < 3) {
  alert( i );
  i++;
}
}

{
let i = 3;
while (i) {
  alert( i );
  i--;
}
}

{
let i = 0;
do {
  alert( i );
  i++;
} while (i < 3);
}

for (let i = 0; i < 3; i++) {
  alert(i);
}

{
let a = 2 + 2;
switch (a) {
  case 3:
    alert( 'Too small' );
    break;
  case 4:
    alert( 'Exactly!' );
    break;
  case 5:
    alert( 'Too big' );
    break;
  default:
    alert( "I don't know such values" );
}
}

{
let a = 2 + 2;
switch (a) {
  case 3:
    alert( 'Too small' );
  case 4:
    alert( 'Exactly!' );
  case 5:
    alert( 'Too big' );
  default:
    alert( "I don't know such values" );
}
}

{
let a = "1";
let b = 0;
switch (+a) {
  case b + 1:
    alert("this runs, because +a is 1, exactly equals b+1");
    break;
  default:
    alert("this doesn't run");
}
}

{
let a = 3;
switch (a) {
  case 4:
    alert('Right!');
    break;
  case 3:
  case 5:
    alert('Wrong!');
    alert("Why don't you take a math class?");
    break;
  default:
    alert('The result is strange. Really.');
}
}

{
let arg = prompt("Enter a value?");
switch (arg) {
  case '0':
  case '1':
    alert( 'One or zero' );
    break;
  case '2':
    alert( 'Two' );
    break;
  case 3:
    alert( 'Never executes!' );
    break;
  default:
    alert( 'An unknown value' );
}
}

function showMessage() {
  alert( 'Hello everyone!' );
}
showMessage();
showMessage();

function showMessage2() {
  let message = "Hello, I'm JavaScript!";
  alert( message );
}
showMessage2();

{
let userName = 'John';
function showMessage3() {
  let message = 'Hello, ' + userName;
  alert(message);
}
showMessage3();
}

{
let userName = 'John';
function showMessage4() {
  userName = "Bob";
  let message = 'Hello, ' + userName;
  alert(message);
}
alert( userName );
showMessage4();
alert( userName );
}

{
let userName = 'John';
function showMessage5() {
  let userName = "Bob";
  let message = 'Hello, ' + userName;
  alert(message);
}
showMessage5();
alert( userName );
}

function showMessage6(from, text) {
  alert(from + ': ' + text);
}
showMessage6('Ann', 'Hello!');
showMessage6('Ann', "What's up?");

{
function showMessage7(from, text) {
  from = '*' + from + '*';
  alert( from + ': ' + text );
}
let from = "Ann";
showMessage7(from, "Hello");
alert( from );
}

function showMessage8(from, text = "no text given") {
  alert( from + ": " + text );
}
showMessage8("Ann");

function showMessage9(text) {
  if (text === undefined) {
    text = 'empty message';
  }
  alert(text);
}
showMessage9();

function showCount(count) {
  alert(count ?? "unknown");
}
showCount(0);
showCount(null);
showCount();

{
function sum(a, b) {
  return a + b;
}
let result = sum(1, 2);
alert( result );
}

{
function checkAge(age) {
  if (age >= 18) {
    return true;
  } else {
    return confirm('Do you have permission from your parents?');
  }
}
let age = prompt('How old are you?', 18);
if ( checkAge(age) ) {
  alert( 'Access granted' );
} else {
  alert( 'Access denied' );
}
}

function doNothing() { }
alert( doNothing() === undefined );

function doNothing2() {
  return;
}
alert( doNothing2() === undefined );

{
let sayHi = function() {
  alert( "Hello" );
};
}

function sayHi() {
  alert( "Hello" );
}
alert( sayHi );

{
function sayHi() {
  alert( "Hello" );
}
let func = sayHi;
func();
sayHi();
}

function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}
function showOk() {
  alert( "You agreed." );
}
function showCancel() {
  alert( "You canceled the execution." );
}
ask("Do you agree?", showOk, showCancel);

function ask2(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}
ask2(
  "Do you agree?",
  function() { alert("You agreed."); },
  function() { alert("You canceled the execution."); }
);

sayHi2("John");
function sayHi2(name) {
  alert( `Hello, ${name}` );
}

{
let age = prompt("What is your age?", 18);
let welcome;
if (age < 18) {
  welcome = function() {
    alert("Hello!");
  };
} else {
  welcome = function() {
    alert("Greetings!");
  };
}
welcome();
}

{
let age = prompt("What is your age?", 18);
let welcome = (age < 18) ?
  function() { alert("Hello!"); } :
  function() { alert("Greetings!"); };
welcome();
}

{
let sum = (a, b) => a + b;
alert( sum(1, 2) );
}

{
let double = n => n * 2;
alert( double(3) );
}

{
let sayHi = () => alert("Hello!");
sayHi();
}

{
let age = prompt("What is your age?", 18);
let welcome = (age < 18) ?
  () => alert('Hello!') :
  () => alert("Greetings!");
welcome();
}

{
let sum = (a, b) => {
  let result = a + b;
  return result;
};
alert( sum(1, 2) );
}

alert('Hello'); alert('World');

alert('Hello')
alert('World')

{
let value = true;
alert(typeof value);
value = String(value);
alert(typeof value);
}

alert( "6" / "2" );

{
let str = "123";
alert(typeof str);
let num = Number(str);
alert(typeof num);
}

{
let age = Number("an arbitrary string instead of a number");
alert(age);
}

alert( '1' + 2 );
alert( 1 + '2' );

{
let userName = prompt("Your name?", "Alice");
let isTeaWanted = confirm("Do you want some tea?");
alert( "Visitor: " + userName );
alert( "Tea wanted: " + isTeaWanted );
}

{
let x = 1;
x = -x;
alert( x );
}

{
let x = 1, y = 3;
alert( y - x );
}

alert( 5 % 2 );
alert( 8 % 3 );
alert( 8 % 4 );

alert( 2 ** 2 );
alert( 2 ** 3 );
alert( 2 ** 4 );

alert( 4 ** (1/2) );
alert( 8 ** (1/3) );

alert(2 + 2 + '1' );

alert('1' + 2 + 2);

alert( 6 - '2' );
alert( '6' / '2' );

{
let x = 1;
alert( +x );
let y = -2;
alert( +y );
alert( +true );
alert( +"" );
}

{
let apples = "2";
let oranges = "3";
alert( apples + oranges );
}

{
let apples = "2";
let oranges = "3";
alert( +apples + +oranges );
}