'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var maxCount = 3;

var Counter = function (_React$Component) {
    _inherits(Counter, _React$Component);

    function Counter(props) {
        _classCallCheck(this, Counter);

        var _this = _possibleConstructorReturn(this, (Counter.__proto__ || Object.getPrototypeOf(Counter)).call(this, props));

        console.log('>contructor()');

        _this.add = _this.add.bind(_this);
        _this.minus = _this.minus.bind(_this);

        _this.state = {
            counter: 0
        };
        return _this;
    }

    _createClass(Counter, [{
        key: 'add',
        value: function add() {
            this.setState(function (prevState) {
                console.log('>>add One, counter=' + (prevState.counter + 1));
                return {
                    counter: prevState.counter + 1
                };
            });
        }
    }, {
        key: 'minus',
        value: function minus() {
            this.setState(function (prevState) {
                console.log('>>minus One, counter=' + (prevState.counter - 1));
                return {
                    counter: prevState.counter - 1
                };
            });
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var strCount = localStorage.getItem('counter');
            console.log('>componentDidMount(): load saved data >> counter=' + strCount);

            var counter = Number.parseInt(strCount, 10);

            if (!isNaN(counter)) {
                if (counter > this.props.maxCount) {
                    counter = this.props.maxCount;
                    console.log('Counter is bigger than MaxCount => descrease it to ' + counter);
                }
                this.setState(function () {
                    return { counter: counter };
                });
            }
        }
    }, {
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps, nextState) {
            console.log('>shouldComponentUpdate()' + ' --nextProps=' + nextProps.maxCount + ' --nextState=' + nextState.counter);

            if (nextState.counter > nextProps.maxCount) {
                console.log('counter[' + nextState.counter + '] > maxCount[' + nextProps.maxCount + '] => not update component!');
                return false;
            }

            console.log('update component!');
            return true;
        }
    }, {
        key: 'getSnapshotBeforeUpdate',
        value: function getSnapshotBeforeUpdate(prevProps, prevState) {
            console.log('>getSnapshotBeforeUpdate()' + ' --prevProps=' + prevProps.maxCount + ' --prevState=' + prevState.counter);

            return '[maxCount= ' + prevProps.maxCount + ' & counter= ' + prevState.counter + ']';
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps, prevState, snapshot) {
            console.log('>componentDidUpdate()' + ' --prevProps=' + prevProps.maxCount + ' --prevState=' + prevState.counter + ' --snapshot=' + snapshot);

            if (prevState.counter !== this.state.counter) {
                console.log('save counter value[' + this.state.counter + '] to storage.');
                localStorage.setItem('counter', this.state.counter);
            }

            console.log('------------------------------');
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            console.log('>componentWillUnmount()');
        }
    }, {
        key: 'render',
        value: function render() {
            console.log('>render()');

            return React.createElement(
                'div',
                null,
                React.createElement(
                    'h1',
                    null,
                    'Java Sample Approach'
                ),
                React.createElement(
                    'h3',
                    null,
                    'MaxCount: ',
                    this.props.maxCount
                ),
                React.createElement(
                    'p',
                    null,
                    'Counter: ',
                    this.state.counter
                ),
                React.createElement(
                    'button',
                    { onClick: this.add },
                    'ADD+'
                ),
                React.createElement(
                    'button',
                    { onClick: this.minus },
                    'MINUS-'
                ),
                React.createElement('br', null),
                React.createElement('br', null),
                React.createElement(
                    'button',
                    { onClick: _render },
                    'update MaxCount'
                )
            );
        }
    }], [{
        key: 'getDerivedStateFromProps',
        value: function getDerivedStateFromProps(nextProps, prevState) {
            console.log('>getDerivedStateFromProps()' + ' --nextProps=' + nextProps.maxCount + ' --prevState=' + prevState.counter);

            if (prevState.counter > nextProps.maxCount) {
                console.log('counter[' + prevState.counter + '] > new maxCount[' + nextProps.maxCount + '] => set counter to [' + nextProps.maxCount + ']');
                return {
                    counter: nextProps.maxCount
                };
            }

            console.log('check MAX counter >> no need to change counter!');
            return null;
        }
    }]);

    return Counter;
}(React.Component);

var _render = function _render() {
    maxCount = maxCount + 1;
    ReactDOM.render(React.createElement(Counter, { maxCount: maxCount }), document.getElementById('app'));
};

ReactDOM.render(React.createElement(Counter, { maxCount: maxCount }), document.getElementById('app'));
