const Form = document.querySelector('form');

Form.addEventListener('submit',function(event){
    event.preventDefault();
    
    const Height = parseInt(document.querySelector('#height').value);
    const Weight = parseInt(document.querySelector('#weight').value);
    const Result = document.querySelector('#results');

    if(Height === '' || Height < 0 || isNaN(Height)){
        Result.innerHTML = `Please give a valid height ${Height}`;
    }
    else if(Weight === '' || Weight < 0 || isNaN(Weight)){
        Result.innerHTML = `Please give a valid height ${Weight}`;
    }
    else{
        const BMI = (Weight / (Height*Height/10000)).toFixed(2);
        Result.innerHTML = `<span>${BMI}</span>`
    }
});