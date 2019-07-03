'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NoteApp = function (_React$Component) {
    _inherits(NoteApp, _React$Component);

    function NoteApp() {
        _classCallCheck(this, NoteApp);

        return _possibleConstructorReturn(this, (NoteApp.__proto__ || Object.getPrototypeOf(NoteApp)).apply(this, arguments));
    }

    _createClass(NoteApp, [{
        key: 'render',
        value: function render() {
            var jsaTitle = 'Java Sample Approach';
            var jsaDescription = {
                'd1': 'Java/JavaScript Technology',
                'd2': 'Spring Framework'
            };
            var jsaNotes = ['Java Core Tutorials', 'Spring Integration Applications', 'Angular + Spring Boot Tutorials'];

            return React.createElement(
                'div',
                null,
                React.createElement(Title, { title: jsaTitle }),
                React.createElement(Header, { description: jsaDescription }),
                React.createElement(Notes, { notes: jsaNotes }),
                React.createElement(Action, null)
            );
        }
    }]);

    return NoteApp;
}(React.Component);

function Title(props) {
    return React.createElement(
        'h2',
        null,
        props.title
    );
}

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
                'h4',
                null,
                this.props.description.d1,
                ' - ',
                this.props.description.d2
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
                            null,
                            React.createElement(Note, { note: note })
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

    function Note() {
        _classCallCheck(this, Note);

        return _possibleConstructorReturn(this, (Note.__proto__ || Object.getPrototypeOf(Note)).apply(this, arguments));
    }

    _createClass(Note, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                this.props.note,
                React.createElement(
                    'button',
                    { style: { margin: 5 } },
                    'Remove'
                )
            );
        }
    }]);

    return Note;
}(React.Component);

var Action = function (_React$Component5) {
    _inherits(Action, _React$Component5);

    function Action() {
        _classCallCheck(this, Action);

        return _possibleConstructorReturn(this, (Action.__proto__ || Object.getPrototypeOf(Action)).apply(this, arguments));
    }

    _createClass(Action, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'form',
                    { onSubmit: submit },
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
                    { onClick: removeAll },
                    'Remove All'
                )
            );
        }
    }]);

    return Action;
}(React.Component);

var submit = function submit() {};
var removeAll = function removeAll() {};

ReactDOM.render(React.createElement(NoteApp, null), document.getElementById('app'));
