import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Applist extends Component {
    static propTypes = {
        num: PropTypes.number.isRequired
    }
    constructor(props) {
        super(props);
        this.state = {
            num: props.num
        }
    }
    handlePlus = () => {
        this.setState(state => ({ ...state, num: state.num + 1 }));
    }
    render() {
        return (<div>
            <p>{this.state.num}</p>
            <button onClick={this.handlePlus}>+1</button>
        </div>)
    }
}
