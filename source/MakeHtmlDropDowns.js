import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DropDownMenu from 'material-ui/DropDownMenu';
import RaisedButton from 'material-ui/RaisedButton';

const buttonStyle = {
    margin: '10px 10px 10px 0'
};

const siteDirs = [];
const destDirs = [];

class MakeHtmlDropDowns extends React.Component {
    constructor() {
        super();

        this.state = {
            walk: 'Generate HTML',
            siteDir: 'unknown',
            destDir: 'unknown',
            value: 1
        };
    }


    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <h1>Render Markdown as HTML</h1>
                    <DropDownMenu
                        value={this.state.value}
                        autoWidth={true}
                    >
                        {siteDirs}
                    </DropDownMenu>
                    <br />
                    <DropDownMenu
                        value={this.state.value}
                        autoWidth={true}
                    >
                        {destDirs}
                    </DropDownMenu>
                    <br />
                    <RaisedButton
                        style={buttonStyle}
                        primary={true}
                    >
                        {this.state.walk}
                    </RaisedButton>

                    <pre>{this.state.configSummary}</pre>
                </div>
            </MuiThemeProvider>
        );
    }
}


export default MakeHtmlDropDowns;
