'use strict';

console.log('grokonez.com');

// JSX
var site = {
    title: 'Java Sample Approach',
    description: 'Java/Javascript Technology - Spring Framework'
};

var counter = 0;
var add = function add() {
    counter++;
    console.log('add One, counter = ' + counter);
    renderApp();
};

var minus = function minus() {
    counter--;
    console.log('minus One, counter = ' + counter);
    renderApp();
};

function getContent(content) {
    if (content) {
        return React.createElement(
            'p',
            null,
            content
        );
    } else {
        return React.createElement(
            'p',
            null,
            '[Wang Harry Construction...]'
        );
    }
}

var appRoot = document.getElementById('app');

var renderApp = function renderApp() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h2',
            null,
            site.title
        ),
        React.createElement(
            'p',
            null,
            site.description
        ),
        React.createElement(
            'p',
            null,
            'Counter: ',
            counter
        ),
        React.createElement(
            'button',
            { onClick: add },
            'ADD+'
        ),
        React.createElement(
            'button',
            { onClick: minus },
            'MINUS-'
        ),
        getContent(site.content)
    );
    ReactDOM.render(template, appRoot);
};

renderApp();
