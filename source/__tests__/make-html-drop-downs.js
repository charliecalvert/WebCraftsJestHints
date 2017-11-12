import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import MakeHtmlDropDowns from '../MakeHtmlDropDowns';
import ElfDebugEnzyme from '../ElfDebugEnzyme';
const elfDebugEnzyme = new ElfDebugEnzyme(true, 'make-html-drop-downs');

describe('React Home Tests', () => {
    it('renders default value of H1 tag', () => {
        const wrapper = shallow(<MakeHtmlDropDowns />);
        const h1tag = <h1>Render Markdown as HTML</h1>;
        elfDebugEnzyme.getLast(wrapper, 'h1', true);
        expect(wrapper.contains(h1tag)).toEqual(true);
    });
});
