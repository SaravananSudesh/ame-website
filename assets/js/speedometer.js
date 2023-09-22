var countDownDate = new Date("Oct 5, 2023 00:00:00").getTime();

function pad(num) {
    var s = "0" + num;
    return s.substr(s.length - 2);
}

var x = setInterval(function() {

    //Speedometer Init
    document.getElementById("needle").style.transform = 'rotate(0deg)';
    document.getElementById("needle-m").style.transform = 'rotate(0deg)';

    var now = new Date().getTime();
  
    var distance = countDownDate - now;
  
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    
  
    document.getElementById("trip").innerHTML = `<div class="number">${pad(days)[0]}</div><div class="number">${pad(days)[1]}</div>
                                                <div class="number">${pad(hours)[0]}</div><div class="number">${pad(hours)[1]}</div>
                                                <div class="number">${pad(minutes)[0]}</div><div class="number">${pad(minutes)[1]}</div>`

    document.getElementById("trip-m").innerHTML = `<div class="number">${pad(days)[0]}</div><div class="number">${pad(days)[1]}</div>
                                                <div class="number">${pad(hours)[0]}</div><div class="number">${pad(hours)[1]}</div>
                                                <div class="number">${pad(minutes)[0]}</div><div class="number">${pad(minutes)[1]}</div>`

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("needle").style.transform = 'rotate(0deg)';
        document.getElementById("trip").innerHTML = `<div class="number">0</div><div class="number">0</div>
                                                <div class="number">0</div><div class="number">0</div>
                                                <div class="number">0</div><div class="number">0</div>`

        document.getElementById("needle-m").style.transform = 'rotate(0deg)';
        document.getElementById("trip-m").innerHTML = `<div class="number">0</div><div class="number">0</div>
                                                <div class="number">0</div><div class="number">0</div>
                                                <div class="number">0</div><div class="number">0</div>`
    }
    else{
        //Speedometer Variables
        var speed = (days + (hours/24)) * 20
        document.getElementById("needle").style.transform = `rotate(${speed}deg)`;
        document.getElementById("needle-m").style.transform = `rotate(${speed}deg)`;
    }
}, 1000);