import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

const buttonStyle = {
    margin: '15px'
};

class HomeButtons extends React.Component {
    constructor() {
        super();

        this.state = {
            makeImage: 'Make Image',
            makeHtml: 'Make HTML'
        };
    }

    makeHtml() {
        $.publish('clientMakeHtml', {
            message: 'The user wants to makeHtml.'
        });
    }

    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <h1>WebCraft Home Page</h1>
                    <RaisedButton
                        id='makeHtml'
                        style={buttonStyle}
                        primary={true}
                        onClick={this.makeHtml}
                    >
                        {this.state.makeHtml}
                    </RaisedButton>
                    <RaisedButton
                        id='makeImage'
                        style={buttonStyle}
                        primary={true}
                    >
                        {this.state.makeImage}
                    </RaisedButton>
                    <p>Select a button.</p>
                    <p>This is a react component.</p>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default HomeButtons;
