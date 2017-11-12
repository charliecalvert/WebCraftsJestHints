import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import MakeHtmlHomeButton from '../MakeHtmlHomeButton';
import ElfDebugEnzyme from '../ElfDebugEnzyme';
const elfDebugEnzyme = new ElfDebugEnzyme(true, 'make-html-home-button');

describe('React Home Tests', () => {
    it('renders p tag with home button instructions', () => {
        const wrapper = shallow(<MakeHtmlHomeButton />);
        const h1tag = <p>Select button to return to the home page.</p>;
        elfDebugEnzyme.getLast(wrapper, 'p', true);
        expect(wrapper.contains(h1tag)).toEqual(true);
    });
});
