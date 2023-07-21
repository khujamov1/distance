var speedOfWalk = 3;
var speedOfCycle = 30;
var speedOfCar = 120;
var speedOfPlane = 500;

var elSpeedForm = document.querySelector(".speeds-form");
var elSpeedInput = elSpeedForm.querySelector(".speed-input");
var elWalk = elSpeedForm.querySelector(".walk");
var elCycle = elSpeedForm.querySelector(".cycle");
var elCar = elSpeedForm.querySelector(".car");
var elPlane = elSpeedForm.querySelector(".plane");

elSpeedForm.addEventListener("submit", function(evt){
    evt.preventDefault();
    
    var elSpeedInputVal = elSpeedInput.value;
    
    function calculate(speed) {
        var hour = Math.trunc(elSpeedInputVal / speed);
        var convert = (elSpeedInputVal / speed) * 60;
        var minute = Math.trunc(convert % 60)
        return(`${hour}soat ${minute}minutda`);
    };
    
    elWalk.textContent = calculate(speedOfWalk);
    elCycle.textContent = calculate(speedOfCycle);
    elCar.textContent = calculate(speedOfCar);
    elPlane.textContent = calculate(speedOfPlane);
})
