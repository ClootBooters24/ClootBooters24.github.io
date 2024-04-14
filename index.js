// JavaScript code to dynamically generate floating 1's and 0's with fade in/out animations

// function createFloatingElements() {
//     const terminal = document.querySelector('.terminal');
//     const fragment = document.createDocumentFragment();

//     for (let i = 0; i < 10; i++) {
//         const randomNumber = Math.floor(Math.random() * 2);
//         const randomDelay = Math.random() * 5; // Random delay for staggered animations
//         const element = document.createElement('span');
//         element.textContent = randomNumber.toString();
//         element.classList.add(randomNumber === 0 ? 'zero' : 'one');
//         element.style.left = Math.random() * 100 + '%'; // Random horizontal position
//         element.style.top = Math.random() * 100 + '%'; // Random vertical position
//         element.style.animationDelay = randomDelay + 's'; // Staggered animation delay
//         fragment.appendChild(element);
//     }

//     terminal.appendChild(fragment);
// }

// createFloatingElements();


consoleText(['Clayton Warstler'], 'text', ['tomato']);

function consoleText(words, id, colors) {
  if (colors === undefined) colors = ['#fff'];
  var visible = true;
  var con = document.getElementById('console');
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var target = document.getElementById(id)
  target.setAttribute('style', 'color:' + colors[0])
  window.setInterval(function() {

    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount)
      window.setTimeout(function() {
        var usedColor = colors.shift();
        colors.push(usedColor);
        var usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        target.setAttribute('style', 'color:' + colors[0])
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;

    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount)
      letterCount += x;
    }
  }, 120)
  window.setInterval(function() {
    if (visible === true) {
      con.className = 'console-underscore hidden'
      visible = false;

    } else {
      con.className = 'console-underscore'

      visible = true;
    }
  }, 400)
}