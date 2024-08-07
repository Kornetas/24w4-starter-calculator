let displayValue = '0'
let firstOperand = null
let secondOperand = null
let currentOperator = null

function updateDisplay() {
  const display = document.getElementById('display')
  display.innerText = displayValue
}

function appendNumber(number) {
  if (displayValue === '0') {
    displayValue = number.toString()
  } else {
    displayValue += number.toString()
  }
  updateDisplay()
}

function appendOperator(operator) {
  if (currentOperator !== null) {
    calculate()
  }
  firstOperand = parseFloat(displayValue)
  currentOperator = operator
  displayValue = '0'
}

function calculate() {
  secondOperand = parseFloat(displayValue)
  if (currentOperator === '+') {
    displayValue = (firstOperand + secondOperand).toString()
  } else if (currentOperator === '-') {
    displayValue = (firstOperand - secondOperand).toString()
  } else if (currentOperator === '*') {
    displayValue = (firstOperand * secondOperand).toString()
  } else if (currentOperator === '/') {
    displayValue = (firstOperand / secondOperand).toString()
  }
  updateDisplay()
  firstOperand = null
  secondOperand = null
  currentOperator = null
}

function clearDisplay() {
  displayValue = '0'
  firstOperand = null
  secondOperand = null
  currentOperator = null
  updateDisplay()
}

updateDisplay()

function switchTheme() {
  const calculator = document.querySelector('.calculator')
  if (calculator.style.backgroundColor === 'white') {
      calculator.style.backgroundColor = ''
      calculator.style.color = 'white'
      document.querySelectorAll('.button').forEach(button => {
          button.style.color = 'white'
      })
  } else {
      calculator.style.backgroundColor = 'white'
      calculator.style.color = 'black'
      document.querySelectorAll('.button').forEach(button => {
          button.style.color = 'black'
      })
  }
}

function playSound() {
  var audio = document.getElementById("myAudio");
  audio.play();
}
function playSoundTwo() {
  var audio = document.getElementById("myAudioTwo");
  audio.play();
}
function playSoundThree() {
  var audio = document.getElementById("myAudioThree");
  audio.play();
}
function playSoundFour() {
  var audio = document.getElementById("myAudioFour");
  audio.play();
}
function playSoundFive() {
  var audio = document.getElementById("myAudioFive");
  audio.play();
}



