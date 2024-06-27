let element = document.querySelector('.project');

window.addEventListener('keydown', (event) => {
    element.innerHTML = `<table class='table table-success'><tr><td>Key</td><td>Key Code</td><td>Code</td></tr><tr><td>${event.key}</td><td>${event.keyCode}</td><td>${event.code}</td></tr></table>`;
})