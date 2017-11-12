import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import 'whatwg-fetch';


class MakeHtml extends React.Component {
    constructor() {
        super();
    }


    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <h1>Pix Picker</h1>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default MakeHtml;
