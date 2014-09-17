var person = prompt('Who am I looking for?'),
    isFound = false;

while (isFound === false) {
    if (confirm('Are you ' + person + '?')) {
        alert('Hi ' + person + '!');
        isFound = true;
    } else {
        alert('Please go get ' + person + '.');
    }
}
