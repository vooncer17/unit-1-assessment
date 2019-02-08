// Storing dom elements

var plus = document.querySelector('#plus')
var minus = document.querySelector('#minus')
var header = document.querySelector('h1')

document.querySelector('h1').innerHTML

document.querySelector('input').value


// Adding event listeners

var checkValue = function() {
    if ((parseInt(document.querySelector('h1').innerHTML) < 0)) {
        header.style.color = "red"
    } else {
        header.style.color = "black"
    }
}

plus.addEventListener('click', function() {
    if (!isNaN(parseInt(document.querySelector('input').value))) {
    document.querySelector('h1').innerHTML = parseInt(document.querySelector('input').value) + parseInt(document.querySelector('h1').innerHTML)
    } else {
        alert('please enter a number')
    }

});

minus.addEventListener('click', function() {
    document.querySelector('h1').innerHTML = parseInt(document.querySelector('h1').innerHTML) - parseInt(document.querySelector('input').value) 
});

setInterval(checkValue, 10);


// When someone hits the minus or subtract button, store the value in the input, 
// add/subtract the number from the current h1 dom value, and then update h1 with that new value
