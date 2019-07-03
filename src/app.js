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



const app = {
    title: 'Java Sample Approach',
    categories: []
}

const removeAll = () => {
    app.categories = [];
    renderApp();
}

const submit = (e) => {
    e.preventDefault();

    const data = e.target.elements.data.value;
    if (data) {
        console.log(data);
        app.categories.push(data);
        e.target.elements.data.value = '';
        renderApp();
    }
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

            <h2>{app.title}</h2>
            <p>{app.categories.length > 0 ? 'Categories:' : 'No category!'}</p>

            <ol>
                {
                    app.categories.map((category) =>
                        <li key={category}>{category}</li>
                    )
                }
            </ol>

            <form onSubmit={submit}>
                <input type="text" name="data" />
                <button>Add</button>
            </form>

            <br />
            <button onClick={removeAll}>Remove All</button>

            <p>Counter: {counter}</p>

            <button onClick={add}>ADD+</button>
            <button onClick={minus}>MINUS-</button>

            {getContent(site.content)}
        </div>
    );
    ReactDOM.render(template, appRoot);
}

renderApp();
