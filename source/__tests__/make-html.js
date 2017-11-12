import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import MakeHtml from '../MakeHtml';
import MakeHtmlHomeButton from '../MakeHtmlHomeButton';
import ElfDebugEnzyme from '../ElfDebugEnzyme';
const elfDebugEnzyme = new ElfDebugEnzyme(true, 'make-html');

describe('React Home Tests', () => {
    it('proves that MakeHtmlHomeButton is part of the MakeHtml page', () => {
        const wrapper = shallow(<MakeHtml />);
        const h1tag = <MakeHtmlHomeButton/>;
        elfDebugEnzyme.getAll(wrapper, true);
        expect(wrapper.contains(h1tag)).toEqual(true);
    });
});
