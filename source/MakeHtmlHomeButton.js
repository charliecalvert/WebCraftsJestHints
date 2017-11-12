import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

const buttonStyle = {
    margin: '10px 10px 10px 0'
};

class MakeHtmlHomeButton extends React.Component {
    constructor() {
        super();

        this.state = {
            home: 'Go Home'
        };
    }

    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <RaisedButton
                        style={buttonStyle}
                        primary={true}
                    >
                        {this.state.home}
                    </RaisedButton>
                    <p>Select button to return to the home page.</p>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default MakeHtmlHomeButton;
