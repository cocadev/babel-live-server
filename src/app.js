console.log('grokonez.com');

// JSX
const site = {
    title: 'Java Sample Approach',
    description: 'Java/Javascript Technology - Spring Framework'
};

let counter = 0;
const add = () => {
    counter++;
    console.log('add One, counter = ' + counter);
    renderApp();
}
 
const minus = () => {
    counter--;
    console.log('minus One, counter = ' + counter);
    renderApp();
}

function getContent(content) {
    if (content) {
        return <p>{content}</p>
    } else {
        return <p>[Wang Harry Construction...]</p>
    }
}

const appRoot = document.getElementById('app');

const renderApp = () => {
    const template = (
        <div>
            <h2>{site.title}</h2>
            <p>{site.description}</p>

            <p>Counter: {counter}</p>

            <button onClick={add}>ADD+</button>
            <button onClick={minus}>MINUS-</button>

            {getContent(site.content)}
        </div>
    );
    ReactDOM.render(template, appRoot);
}

renderApp();
