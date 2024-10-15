consoleText(['Clayton Warstler'], 'name', ['tomato']);
function consoleText(words, id, colors) {
  if (colors === undefined) colors = ['#fff'];
  let visible = true;
  let con = document.getElementById('console');
  let letterCount = 1;
  let x = 1;
  let waiting = false;
  let target = document.getElementById(id)
  target.setAttribute('style', 'color:' + colors[0])
  window.setInterval(function() {

    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount)
      window.setTimeout(function() {
        let usedColor = colors.shift();
        colors.push(usedColor);
        let usedWord = words.shift();
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

// document.querySelectorAll('nav a').forEach(anchor => {
//   anchor.addEventListener('click', function (e) {
//     e.preventDefault();
//     const sectionId = this.getAttribute('data-section');
//     const section = document.getElementById(sectionId);
//     section.scrollIntoView({ behavior: 'smooth' });
//     history.pushState(null, '', `/${sectionId}`);
//   });
// });

// window.addEventListener('popstate', function () {
//   const sectionId = location.pathname.substring(1);
//   const section = document.getElementById(sectionId);
//   if (section) {
//     section.scrollIntoView({ behavior: 'smooth' });
//   }
// });