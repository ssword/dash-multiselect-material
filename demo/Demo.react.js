import React, {Component} from 'react';
import {MultipleSelect} from '../src';

const names = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder'
  ]

class Demo extends Component {
    constructor() {
        super();
        this.state = {
            value: ''
        }
    }

    render() {
        return (
            <div>
                <h1>dash-select-material Demo</h1>

                <hr/>
                <h2>ExampleComponent</h2>
                <MultipleSelect options={names} floatingLabel='Demo Label'
                />
                <hr/>
            </div>
        );
    }
}

export default Demo;
