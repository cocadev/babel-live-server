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
            '[Under Construction...]'
        );
    }
}

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

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
