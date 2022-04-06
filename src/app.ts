let maxCount = 3;
 
class Counter extends React.Component {
    constructor(props) {
        super(props);
 
        console.log('>contructor()');
 
        this.add = this.add.bind(this);
        this.minus = this.minus.bind(this);
 
        this.state = {
            counter: 0
        }
    }
 
    add() {
        this.setState((prevState) => {
            console.log('>>add One, counter=' + (prevState.counter + 1));
            return {
                counter: prevState.counter + 1
            };
        });
    }
 
    minus() {
        this.setState((prevState) => {
            console.log('>>minus One, counter=' + (prevState.counter - 1));
            return {
                counter: prevState.counter - 1
            };
        });
    }
 
    static getDerivedStateFromProps(nextProps, prevState) {
        console.log('>getDerivedStateFromProps()'
            + ' --nextProps=' + nextProps.maxCount
            + ' --prevState=' + prevState.counter);
 
        if (prevState.counter > nextProps.maxCount) {
            console.log('counter[' + prevState.counter + '] > new maxCount[' + nextProps.maxCount
                + '] => set counter to [' + nextProps.maxCount + ']');
            return {
                counter: nextProps.maxCount
            };
        }
 
        console.log('check MAX counter >> no need to change counter!');
        return null;
    }
 
    componentDidMount() {
        const strCount = localStorage.getItem('counter');
        console.log('>componentDidMount(): load saved data >> counter=' + strCount);
 
        let counter = Number.parseInt(strCount, 10);
 
        if (!isNaN(counter)) {
            if (counter > this.props.maxCount) {
                counter = this.props.maxCount;
                console.log('Counter is bigger than MaxCount => descrease it to ' + counter);
            }
            this.setState(() => ({ counter }));
        }
    }
 
    shouldComponentUpdate(nextProps, nextState) {
        console.log('>shouldComponentUpdate()'
            + ' --nextProps=' + nextProps.maxCount
            + ' --nextState=' + nextState.counter);
 
        if (nextState.counter > nextProps.maxCount) {
            console.log('counter[' + nextState.counter + '] > maxCount[' + nextProps.maxCount
                + '] => not update component!');
            return false;
        }
 
        console.log('update component!');
        return true;
    }
 
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('>getSnapshotBeforeUpdate()'
            + ' --prevProps=' + prevProps.maxCount
            + ' --prevState=' + prevState.counter);
 
        return '[maxCount= ' + prevProps.maxCount + ' & counter= ' + prevState.counter + ']';
    }
 
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('>componentDidUpdate()'
            + ' --prevProps=' + prevProps.maxCount
            + ' --prevState=' + prevState.counter
            + ' --snapshot=' + snapshot);
 
        if (prevState.counter !== this.state.counter) {
            console.log('save counter value[' + this.state.counter + '] to storage.');
            localStorage.setItem('counter', this.state.counter);
        }
 
        console.log('------------------------------');
    }
 
    componentWillUnmount() {
        console.log('>componentWillUnmount()');
    }
 
    render() {
        console.log('>render()');
 
        return (
            <div>
                <h1>Java Sample Approach</h1>
                <h3>MaxCount: {this.props.maxCount}</h3>
                <p>Counter: {this.state.counter}</p>
                <button onClick={this.add}>ADD+</button>
                <button onClick={this.minus}>MINUS-</button>
 
                <br /><br />
                <button onClick={render}>update MaxCount</button>
            </div>
        );
    }
}
 
const render = (() => {
    maxCount = maxCount + 1;
    ReactDOM.render(<Counter maxCount={maxCount} />, document.getElementById('app'));
});
 
ReactDOM.render(<Counter maxCount={maxCount} />, document.getElementById('app'));