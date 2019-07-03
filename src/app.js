class NoteApp extends React.Component {
    render() {
        return (
            <div>
                <h2>Java Sample Approach</h2>
                <Header />
                <Notes />
                <Action />
            </div>
        );
    }
}
 
class Header extends React.Component {
    render() {
        return <h4>Java/JavaScript Technology - Spring Framework</h4>;
    }
}
 
class Notes extends React.Component {
    render() {
        return (
            <div>
                JSA Notes:
                <ol>
                    <li><Note/></li>
                    <li><Note/></li>
                    <li><Note/></li>
                </ol>
            </div>
        );
    }
}
 
class Note extends React.Component {
    render() {
        return (
            <div>
                This is just a note.
                <button style={{ margin: 5 }}>Remove</button>
            </div>
        );
    }
}
 
class Action extends React.Component {
    render() {
        return (
            <div>
                <form onSubmit={submit}>
                    <input type="text" name="data" />
                    <button>Add</button>
                </form>
 
                <br />
                <button onClick={removeAll}>Remove All</button>
            </div>
        );
    }
}
 
const submit = () => { }
const removeAll = () => { }
 
ReactDOM.render(<NoteApp />, document.getElementById('app'));