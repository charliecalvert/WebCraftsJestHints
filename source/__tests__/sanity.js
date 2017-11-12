import React from 'react';
import ReactDOM from 'react-dom';
import ReactHome from '../ReactHome';
import HomeButtons from '../HomeButtons';
import MakeHtml from '../MakeHtml';
import MakeHtmlDropDowns from '../MakeHtmlDropDowns';
import MakeHtmlHomeButton from '../MakeHtmlHomeButton';
import MakeImage from '../MakeImage';

describe('WebCrafts Sanity Test', function() {
    'use strict';

    it('expects true to be true', function() {
        expect(true).toBe(true);
    });

    it('renders ReactHome without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<ReactHome />, div);
    });

    it('renders HomeButtons without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<HomeButtons />, div);
    });

    it('tests if we can load MakeHtml', () => {
        const div = document.createElement('div');
        ReactDOM.render(<MakeHtml />, div);
    });

    it('tests if we can load MakeHtml DropDowns', () => {
        const div = document.createElement('div');
        ReactDOM.render(<MakeHtmlDropDowns />, div);
    });

    it('tests if we can load MakeHtml DropDowns', () => {
        const div = document.createElement('div');
        ReactDOM.render(<MakeHtmlHomeButton />, div);
    });

    it('tests if we can load MakeHtml', () => {
        const div = document.createElement('div');
        ReactDOM.render(<MakeImage />, div);
    });
});
