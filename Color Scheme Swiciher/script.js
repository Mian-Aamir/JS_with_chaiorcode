const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');
const heading = document.querySelector('h1');

buttons.forEach(function(button){
    button.addEventListener('click',function(event){
        switch(event.target.id){
            case 'grey':
                body.style.backgroundColor = event.target.id;
                heading.style.color = '';
                break;
            case 'white':
                body.style.backgroundColor = event.target.id;
                heading.style.color = '';
                break;
            case 'blue':
                body.style.backgroundColor = event.target.id;
                heading.style.color = '';
                break;
            case 'black':
                body.style.backgroundColor = event.target.id;
                heading.style.color = 'white';
                break;
        }
    });
});
