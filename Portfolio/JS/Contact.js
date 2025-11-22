const form = document.getElementById('form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('Email');
const messageInput = document.getElementById('message');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    checkinputs();
});

function checkinputs() {
    const nameValue = nameInput.value.trim();
    const emailValue = emailInput.value.trim();
    const messageValue = messageInput.value.trim();
    
    if(nameValue === '') {  
        alert('Name cannot be blank');
    } else {
        alert('Name looks good');
    }

    if(emailValue === '') {
        alert('Email cannot be blank');
    } else if (!isValidEmail(emailValue)) {
        alert('Not a valid email');
    } else {
        alert('Email looks good');
    }

    if(messageValue === '') {
        alert('Message cannot be blank');
    } else {
        alert('Message looks good');
    }
}

function isValidEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;    
    return re.test(String(email).toLowerCase());
}


