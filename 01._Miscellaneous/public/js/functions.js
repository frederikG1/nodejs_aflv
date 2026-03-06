//Functions is reusable code that performs a task

// A greet function that takes a name as parameter
function greet(name) {
  return "Hello, " + name;
}
console.log(greet("Frederik"));


//A RandomInt function that takes two parameters, min and max
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max + 1 - min) + min);
}
console.log(getRandomInt(4, 9));


//Callback function is a function that takes another function (=>)
function doTwice(action) {
    action();
    action();
}
doTwice(() => console.log("Working"));


//Can also look like this using const
function performAction(name, action) {
    return action(name)
}

const workingAction = (name) => {
    return `${name} is working`;
}
console.log(workingAction("Frederik", workingAction));
