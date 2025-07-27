const Clock = document.getElementById('clock');
// const Clock = document.querySelector('#clock');

// Contorl Events
setInterval(function(){
    let date = new Date();
    Clock.innerHTML = date.toLocaleTimeString();
},100);