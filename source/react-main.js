import React from 'react';
import ReactDOM from 'react-dom';
import MakeHtml from './MakeHtml';

let homeDiv;

function reactMakeHtml(event, customMessage) {
    console.log(customMessage);
    ReactDOM.render(<MakeHtml />, homeDiv);
}

$(document).ready(function() {
    $.subscribe('reactMakeHtml', reactMakeHtml);
});
