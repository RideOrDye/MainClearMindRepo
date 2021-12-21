
const slider = document.querySelector(`#slider`);
const range = document.querySelector(`.range`);
const nu = document.querySelector(`.nu`);
const colorPickerJs = document.getElementById("color-picker");
const submitButton = document.querySelector("input[type=submitAll]");
const buttonSize = document.getElementById('buttonSize');
const sliderSize = document.getElementById('sliderSize');
const submitAll = document.getElementById('submitButton');
const rangeField = document.getElementById('rangeField');

//onSubmit is performing onclick funtionality for all settings at once
submitAll.addEventListener('click', function() {
  
    sliderFunc(buttonSize.value,'blue',sliderSize.value, rangeField.value, '0px');
    changeColor()
  })
  
  function changeColor(){
    let colorPickerJS = document.getElementById('color-picked').value;
    document.body.style.backgroundColor = colorPickerJS;
  }
/*
arrow function below consist of if statements checks that check for parameters 
(buttonSize, colorTheme, sliderSize, buttonPosition) 
buttonSize = [small,medium,large]
colorTheme = [blue, red] (disabled feature)
sliderSize = adjusts size of button [small,medium,large]
rangeNum = has a user input max of 200;
buttonPosition = is at a default position
*/
const sliderFunc =  (buttonSize, colorTheme, sliderSize, rangeNum, buttonPosition)=> {
    if (buttonSize === 'small') {
        slider.style.height = '20px';
        slider.style.width = '10px';
    } else if (buttonSize === 'medium') {
        slider.style.height = '30px';
        slider.style.width = '15px';
    } else {
        slider.style.height = '40px';
        slider.style.width = '20px';
    }

    if (colorTheme === 'blue') {
        range.style.backgroundColor = 'blue';
        slider.style.backgroundColor = 'yellow';
        nu.style.color = 'blue';
    } else if (colorTheme === 'red') {
        range.style.backgroundColor = 'red';
        slider.style.backgroundColor = 'orange';
        nu.style.color = 'red';
    }

    if (sliderSize === 'small') {
        range.style.height = '300px';
        nu.style.fontSize = "8px";
    } else if (sliderSize === 'medium') {
        range.style.height = '400px';
        nu.style.fontSize = "10px";
    } else {
        range.style.height = '500px';
        nu.style.fontSize = "12px"
    }

    slider.style.top = buttonPosition;

// range input is being passed as a parameter and looped
if(rangeNum != '') {
    nu.innerHTML = '';
    for (let i = 0; i <= rangeNum; i+= 10) {
      var child = document.createElement("li");                 
      var textnode = document.createTextNode(`${rangeNum - i} -`);         
      child.appendChild(textnode);                              
      nu.appendChild(child); 
     }
    }
}

//The event listeners that trigger mouseup and down
slider.addEventListener('mousedown', start);
document.addEventListener('mouseup', stop);
function start(e) {
    document.addEventListener('mousemove', move);
}
function stop() {
    document.removeEventListener('mousemove', move);
}
/*function move keeps the slider within range and styles the position to move up and down. 
//(e) parameter is dependent on mousemove event that adjust the slider position using styles.
The interpolated statement is converting px to a string.
*/
function move(e) {
    if (!(e.y > range.offsetHeight - slider.offsetHeight) && !(e.y < 0)) {
        slider.style.top = `${e.y}px`;
    }
}