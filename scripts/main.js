/* Image switcher code */

var myImage = document.querySelector('img');

myImage.onclick = function()
{
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/pitch-sml.jpg')
    {
      myImage.setAttribute ('src','images/pitch-sml-bw.jpg');
    }
    else
    {
      myImage.setAttribute ('src','images/pitch-sml.jpg');
    }
}

/* Personalized welcome message code */

// gets references to the new button we added and the heading, and stores them in variables
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName()
{
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.innerHTML = 'Last Man Standing, yo: ' + myName;
}

// initialisation code
if(!localStorage.getItem('name'))
{
  setUserName();
}
else
{
  var storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Last Man Standing, yo: ' + storedName;
}

// button event handler
myButton.onclick = function() {
  setUserName();
}


/* other crap */

// Selects the first h1 element only
// var myHeading = document.querySelector('h1');

// Changes the contents of the element
// myHeading.innerHTML = 'Hello world!';

// var iceCream = 'chocolate';

// if (iceCream === 'chocolate')
// {
//   alert('Yay, I love chocolate ice cream!');    
// } else {
//   alert('Awwww, but chocolate is my favorite...');    
// }

// var myVariable = document.querySelector('h1');

// alert('hello!');

// function multiply(num1,num2)
// {
//   var result = num1 * num2;
//   return result;
// }

// multiply(4,7);
// multiply(20,20);
// multiply(0.5,3);

// assigns a listener to click events
// document.querySelector('img').onclick = function()
// {
//     // alert('Ouch! Stop poking me!');
//     alert(document.querySelector('img').alt);
// }