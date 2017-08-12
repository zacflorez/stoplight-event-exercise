(function() {
  'use strict';

  // YOUR CODE HERE
  //Red light

  var stop = document.querySelector('#stopButton')
  //same as document.getElementById('stopButton')
  var redLight = document.querySelector('#stopLight')

  stop.addEventListener("click", function() {
  redLight.classList.toggle('stop')
  //selects the redLight variable and toggles the css (classList) item (stop)
  })

  //Yellow light
  var slow = document.querySelector('slowButton')
  var yellowLight = document.querySelector('slowLight')

  slow.addEventListener('click', function () {
  yellowLight.classList.toggle('slow')
  })

  //Green light
  var go = document.querySelector('goButton')
  var greenLight = document.querySelector('goLight')

  go.addEventListener('click', function () {
  greenLight.classList.toggle('go')
  })

})();
