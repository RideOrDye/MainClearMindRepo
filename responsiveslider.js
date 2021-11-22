
const slider = document.querySelector(`#slider`);
const range = document.querySelector(`.range`);
const nu = document.querySelector(`.nu`);

/*

arrow function below consist of if statements checks that check for parameters 
(buttonSize, colorTheme, sliderSize, buttonPosition) 
buttonSize = [small,medium,large]
colorTheme = [blue, red]
sliderSize = adjusts size of button [small,medium,large]
buttonPosition = postion of the button on track bar (0px-160px) 
*/

const sliderFunc = (buttonSize, colorTheme, sliderSize, buttonPosition) => {
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
        range.style.height = '200px';
    } else if (sliderSize === 'medium') {
        range.style.height = '300px';
    } else {
        range.style.height = '400px';
    }

    slider.style.top = buttonPosition;


sliderFunc('large', 'blue', '', '5px');

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