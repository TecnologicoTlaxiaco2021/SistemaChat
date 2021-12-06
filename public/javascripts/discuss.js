// Socket
let socket = io();

// Elements
let messages = document.getElementById('messages');
let form = document.getElementById('form');
let input = document.getElementById('input');

// User ID
const rnd = Math.round(Math.random() * 100000);
document.querySelector("span").value = "User" + rnd;
document.querySelector("input#user").value = " ";

// Form listener
form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (input.value) {
        /**
         * @param {string} event Chat event
         * @param {string} message Message
         * @param {number} User ID 
         */

        socket.emit('chat message', input.value, document.querySelector("span").innerHTML, rnd);

        // Reset input form after send message
        input.value = '';
    }

    // Stop user from typing messages
    input.readOnly = true;
    input.placeholder = "Wait for 5 seconds to type messages again";

    // Allow user to type again in 5 seconds
    setTimeout(() => {
        input.readOnly = false;
        input.placeholder = "";
    }, 5000);
});

// Enter username
const handle = () => {
  if (document.querySelector("input#user").value == " ") {
    document.querySelector("span").value = "User" + rnd;
    return;
  }
  document.querySelector("span").innerHTML = document.querySelector("input#user").value;
};
document.querySelector("input#user").addEventListener("keydown", handle);

document.querySelector("input#user").addEventListener("keyup", handle);

document.querySelector("input#user").addEventListener("keypress", handle);

// Handle socket
socket.on('chat message', (msg, textAlign, user) => {
    let item = document.createElement('li');
    item.style.textAlign = textAlign;
    item.innerHTML = `<p>${msg}</p><div class="username">${user}</div>`;
    messages.appendChild(item);
    window.scrollTo(0, document.body.scrollHeight);
});
