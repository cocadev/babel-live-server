'use strict';

console.log('grokonez.com');

// JSX
var site = {
    title: 'Java Sample Approach',
    description: 'Java/Javascript Technology - Spring Framework'
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
        getContent(site.content)
    );
    ReactDOM.render(template, appRoot);
};

renderApp();
