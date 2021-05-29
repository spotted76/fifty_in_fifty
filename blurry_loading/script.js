
const bgDiv = document.getElementById('bg-image');
const percentage = document.getElementById('percent');

const textBlurMax = 50;
const durationInMsecs = 1500;
const incrementInMsecs = 40;
const interval = durationInMsecs/incrementInMsecs;

const blurStart = window.getComputedStyle(bgDiv).getPropertyValue('filter');
let blurStartValue = /\d+/g.exec(blurStart);
blurStartValue = Number(blurStartValue[0]);
console.log(blurStartValue);

let totalIncrements = 0;
console.log('Starting');
const intPtr = window.setInterval(() => {

    totalIncrements += incrementInMsecs;
    adjustBlur(totalIncrements);
    adjustPercent(totalIncrements);
    if ( totalIncrements >= durationInMsecs ) {
        console.log('DONE');
        calcPercentage(durationInMsecs);
        adjustPercent(durationInMsecs);
        clearInterval(intPtr);
    }

}, incrementInMsecs);

function adjustBlur(increment) {

    //Find the percentage
    let percentComplete = calcPercentage(increment);
    let blurValue = blurStartValue - ( (percentComplete/100) * blurStartValue);
    bgDiv.style.setProperty('filter', `blur(${blurValue}px)`);

}

function adjustPercent(increment) {

    let percentComplete = calcPercentage(increment);
    percentage.innerHTML = `${percentComplete}%`;

    
    //fade opacity out by percentage
    percentage.style.setProperty('opacity', `${100 - percentComplete}%`)
}

function calcPercentage(increment) {
    return  Math.floor((increment / durationInMsecs) * 100);
}
