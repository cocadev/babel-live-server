class NoteApp extends React.Component {
    render() {
        const jsaTitle = 'Java Sample Approach';
        const jsaDescription = {
            'd1': 'Java/JavaScript Technology',
            'd2': 'Spring Framework'
        }
        const jsaNotes = [
            'Java Core Tutorials',
            'Spring Integration Applications',
            'Angular + Spring Boot Tutorials'];
 
        return (
            <div>
                <Title title={jsaTitle} />
                <Header description={jsaDescription} />
                <Notes notes={jsaNotes} />
                <Action />
            </div>
        );
    }
}
 
function Title(props) {
    return <h2>{props.title}</h2>;
}
 
class Header extends React.Component {
    render() {
        return <h4>{this.props.description.d1} - {this.props.description.d2}</h4>;
    }
}
 
class Notes extends React.Component {
    render() {
        return (
            <div>
                JSA Notes:
                <ol>
                    {this.props.notes.map(note =>
                        <li><Note note={note} /></li>
                    )}
                </ol>
            </div>
        );
    }
}
 
class Note extends React.Component {
    render() {
        return (
            <div>
                {this.props.note}
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