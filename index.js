
document.getElementById("start").addEventListener("click",startChangingColor);
document.getElementById("stop").addEventListener("click",stopChangingColor);


//RGB   ------STYLE-------+++++++-----------

// random number generated for rgb code
const colorChange=function(){
    let randomNumber1 = Math.floor(Math.random()*256);
    let randomNumber2 = Math.floor(Math.random()*256);
    let randomNumber3 = Math.floor(Math.random()*256);
    document.body.style.backgroundColor=`rgb(${randomNumber1},${randomNumber2},${randomNumber3})`;
}

let startPrn; // this is the setInterval API declared here do that it can be used in the  stop operation function.

// start operation
function startChangingColor(){
    startPrn= setInterval(colorChange,2000);
}

// stop operation
function stopChangingColor(){
    clearInterval(startPrn);
}

//HEX CODE------STYLE  ------++++++++------------

const randomColor = function(){
    const hex ='0123456789ABCDEF';
    let color = '#';
    for(let i = 0; i<6; i++){
        color += hex[Math.floor(Math.random()*16)];    //6- hexcode is of sixchar,  16-- hex length is 16.
    }
    return color;
}

let intervalId;
const startChangingColor = function (){
    if(!intervalId){
        intervalId= setInterval(changeBgColor,1000);
    }

    function changeBgColor(){
        document.body.style.backgroundColor = randomColor();
    }
};
const stopChangingColor = function(){
    clearInterval(intervalId);
    intervalId=null;
};
