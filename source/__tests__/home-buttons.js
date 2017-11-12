import React from 'react';
import HomeButtons from '../HomeButtons';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
//import ElfDebugEnzyme from '../ElfDebugEnzyme';
//const elfDebugEnzyme = new ElfDebugEnzyme(true, 'home-buttons');
import '../../public/javascripts/tools/tiny-pub-sub.js';

describe('WebCrafts Home Buttons Tests', function() {
    'use strict';

    it('expects true to be true', function() {
        expect(true).toBe(true);
    });

    it('publishes clientMakeHtml event after button click', () => {
        const wrapper = shallow(<HomeButtons />);
        let subscriptionCalled = false;
        $.subscribe('clientMakeHtml', (event, target) => {
            expect(event.type).toBe('clientMakeHtml');
            expect(target.message).toBe('The user wants to makeHtml.');
            subscriptionCalled = true;
        });
        wrapper.find('#makeHtml').simulate('click');
        expect(subscriptionCalled).toBeTruthy();
    });

    it('publishes clientMakeHtml event after button click with done', done => {
        const wrapper = shallow(<HomeButtons />);
        $.subscribe('clientMakeHtml', (event, target) => {
            expect(target.message).toBe('The user wants to makeHtml.');
            done();
        });
        wrapper.find('#makeHtml').simulate('click');
    });
});
