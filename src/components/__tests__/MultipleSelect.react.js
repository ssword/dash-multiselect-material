import React from 'react';
import {shallow} from 'enzyme';
import MultipleSelect from '../MultipleSelect.react';

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

describe('ExampleComponent', () => {

    it('renders', () => {
        const component = shallow(<MultipleSelect options={names} />);
        expect(component).to.be.ok;
    });
});