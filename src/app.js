console.log('grokonez.com');

// JSX
const site = {
    title: 'Java Sample Approach',
    description: 'Java/Javascript Technology - Spring Framework'
};

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
            {getContent(site.content)}
        </div>
    );
    ReactDOM.render(template, appRoot);
}

renderApp();
