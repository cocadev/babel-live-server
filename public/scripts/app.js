'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NoteApp = function (_React$Component) {
    _inherits(NoteApp, _React$Component);

    function NoteApp(props) {
        _classCallCheck(this, NoteApp);

        var _this = _possibleConstructorReturn(this, (NoteApp.__proto__ || Object.getPrototypeOf(NoteApp)).call(this, props));

        _this.appRemoveAll = _this.appRemoveAll.bind(_this);
        _this.appAddNote = _this.appAddNote.bind(_this);
        _this.appDeleteNote = _this.appDeleteNote.bind(_this);

        _this.state = {
            jsaNotes: ['Java Core Tutorials', 'Spring Integration Applications', 'Angular + Spring Boot Tutorials']
        };
        return _this;
    }

    _createClass(NoteApp, [{
        key: 'appRemoveAll',
        value: function appRemoveAll() {
            console.log("Removing All Notes...");
            this.setState(function () {
                return {
                    jsaNotes: []
                };
            });
        }
    }, {
        key: 'appAddNote',
        value: function appAddNote(note) {
            if (!note) {
                console.log('Note should not be blank!');
            } else if (this.state.jsaNotes.indexOf(note) > -1) {
                console.log('Note alreaday exists, add another Note!');
            } else {
                this.setState(function (prevState) {
                    return {
                        jsaNotes: prevState.jsaNotes.concat([note])
                    };
                });
            }
        }
    }, {
        key: 'appDeleteNote',
        value: function appDeleteNote(note) {
            console.log('Deleting Note...');
            this.setState(function (prevState) {
                console.log('Deleting Note: ' + note + ' at index: ' + prevState.jsaNotes.indexOf(note));
                prevState.jsaNotes.splice(prevState.jsaNotes.indexOf(note), 1);
                return {
                    jsaNotes: prevState.jsaNotes
                };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var jsaTitle = 'Java Sample Approach';
            var jsaDescription = 'Java/JavaScript Technology - Spring Framework';

            return React.createElement(
                'div',
                null,
                React.createElement(Header, { title: jsaTitle, description: jsaDescription }),
                React.createElement(Notes, {
                    notes: this.state.jsaNotes,
                    deleteNote: this.appDeleteNote }),
                React.createElement(Action, {
                    removeAll: this.appRemoveAll,
                    addNote: this.appAddNote })
            );
        }
    }]);

    return NoteApp;
}(React.Component);

var Header = function (_React$Component2) {
    _inherits(Header, _React$Component2);

    function Header() {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
    }

    _createClass(Header, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'h2',
                    null,
                    this.props.title
                ),
                React.createElement(
                    'h4',
                    null,
                    this.props.description
                )
            );
        }
    }]);

    return Header;
}(React.Component);

var Notes = function (_React$Component3) {
    _inherits(Notes, _React$Component3);

    function Notes() {
        _classCallCheck(this, Notes);

        return _possibleConstructorReturn(this, (Notes.__proto__ || Object.getPrototypeOf(Notes)).apply(this, arguments));
    }

    _createClass(Notes, [{
        key: 'render',
        value: function render() {
            var _this4 = this;

            return React.createElement(
                'div',
                null,
                'JSA Notes:',
                React.createElement(
                    'ol',
                    null,
                    this.props.notes.map(function (note) {
                        return React.createElement(
                            'li',
                            { key: note },
                            React.createElement(Note, {
                                note: note,
                                deleteNote: _this4.props.deleteNote })
                        );
                    })
                )
            );
        }
    }]);

    return Notes;
}(React.Component);

var Note = function (_React$Component4) {
    _inherits(Note, _React$Component4);

    function Note(props) {
        _classCallCheck(this, Note);

        var _this5 = _possibleConstructorReturn(this, (Note.__proto__ || Object.getPrototypeOf(Note)).call(this, props));

        _this5.deleteData = _this5.deleteData.bind(_this5);
        return _this5;
    }

    _createClass(Note, [{
        key: 'deleteData',
        value: function deleteData() {
            this.props.deleteNote(this.props.note);
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                this.props.note,
                React.createElement(
                    'button',
                    { onClick: this.deleteData, style: { margin: 5 } },
                    'Remove'
                )
            );
        }
    }]);

    return Note;
}(React.Component);

var Action = function (_React$Component5) {
    _inherits(Action, _React$Component5);

    function Action(props) {
        _classCallCheck(this, Action);

        var _this6 = _possibleConstructorReturn(this, (Action.__proto__ || Object.getPrototypeOf(Action)).call(this, props));

        _this6.addData = _this6.addData.bind(_this6);
        return _this6;
    }

    _createClass(Action, [{
        key: 'addData',
        value: function addData(e) {
            e.preventDefault();
            console.log('Adding new Note...');

            var note = e.target.elements.data.value;
            this.props.addNote(note);
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'form',
                    { onSubmit: this.addData },
                    React.createElement('input', { type: 'text', name: 'data' }),
                    React.createElement(
                        'button',
                        null,
                        'Add'
                    )
                ),
                React.createElement('br', null),
                React.createElement(
                    'button',
                    { onClick: this.props.removeAll },
                    'Remove All'
                )
            );
        }
    }]);

    return Action;
}(React.Component);

ReactDOM.render(React.createElement(NoteApp, null), document.getElementById('app'));
