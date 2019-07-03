class NoteApp extends React.Component {
    constructor(props) {
        super(props);
        this.appRemoveAll = this.appRemoveAll.bind(this);
        this.appAddNote = this.appAddNote.bind(this);
        this.appDeleteNote = this.appDeleteNote.bind(this);
 
        this.state = {
            jsaNotes: [
                'Java Core Tutorials',
                'Spring Integration Applications',
                'Angular + Spring Boot Tutorials']
        }
    }
 
    appRemoveAll() {
        console.log("Removing All Notes...");
        this.setState(() => {
            return {
                jsaNotes: []
            }
        });
    }
 
    appAddNote(note) {
        if (!note) {
            console.log('Note should not be blank!');
        } else if (this.state.jsaNotes.indexOf(note) > -1) {
            console.log('Note alreaday exists, add another Note!');
        } else {
            this.setState((prevState) => {
                return {
                    jsaNotes: prevState.jsaNotes.concat([note])
                }
            });
        }
    }
 
    appDeleteNote(note) {
        console.log('Deleting Note...');
        this.setState((prevState) => {
            console.log('Deleting Note: ' + note + ' at index: ' + prevState.jsaNotes.indexOf(note));
            prevState.jsaNotes.splice(prevState.jsaNotes.indexOf(note), 1);
            return {
                jsaNotes: prevState.jsaNotes
            }
        });
    }
 
    render() {
        const jsaTitle = 'Java Sample Approach';
        const jsaDescription = 'Java/JavaScript Technology - Spring Framework';
 
        return (
            <div>
                <Header title={jsaTitle} description={jsaDescription} />
                <Notes
                    notes={this.state.jsaNotes}
                    deleteNote={this.appDeleteNote} />
                <Action
                    removeAll={this.appRemoveAll}
                    addNote={this.appAddNote} />
            </div>
        );
    }
}
 
class Header extends React.Component {
    render() {
        return (
            <div>
                <h2>{this.props.title}</h2>
                <h4>{this.props.description}</h4>
            </div>
        );
    }
}
 
class Notes extends React.Component {
    render() {
        return (
            <div>
                JSA Notes:
                <ol>
                    {this.props.notes.map(note =>
                        <li key={note}>
                            <Note
                                note={note}
                                deleteNote={this.props.deleteNote} />
                        </li>
                    )}
                </ol>
            </div>
        );
    }
}
 
class Note extends React.Component {
    constructor(props) {
        super(props);
        this.deleteData = this.deleteData.bind(this);
    }
 
    deleteData() {
        this.props.deleteNote(this.props.note);
    }
 
    render() {
        return (
            <div>
                {this.props.note}
                <button onClick={this.deleteData} style={{ margin: 5 }}>Remove</button>
            </div>
        );
    }
}
 
class Action extends React.Component {
    constructor(props) {
        super(props);
        this.addData = this.addData.bind(this);
    }
 
    addData(e) {
        e.preventDefault();
        console.log('Adding new Note...');
 
        const note = e.target.elements.data.value;
        this.props.addNote(note);
    }
 
    render() {
        return (
            <div>
                <form onSubmit={this.addData}>
                    <input type="text" name="data" />
                    <button>Add</button>
                </form>
 
                <br />
                <button onClick={this.props.removeAll}>Remove All</button>
            </div>
        );
    }
}
 
ReactDOM.render(<NoteApp />, document.getElementById('app'));