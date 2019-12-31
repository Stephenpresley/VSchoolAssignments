const h1 = document.createElement("h1");
h1.textContent = "JavaScript made me do this!";
document.getElementById("header").appendChild(h1);
h1.className = "header";

const h2 = document.createElement("h2");
h2.innerHTML = '<span class="name">Stephen</span> wrote the JavsScript';
document.getElementById("header").appendChild(h2);
h2.className = "header";

const messages = document.getElementsByClassName('message');

messages[0].textContent = 'What is the land speed of an unladen swallow?';
messages[1].textContent = 'Sure, go ahead.';
messages[2].textContent = 'I have a question to ask you.';
messages[3].textContent = 'Is it an African Swallow or European Swallow?';

const clear = document.getElementById('clear-button')
clear.addEventListener('click', function(){
    
})


