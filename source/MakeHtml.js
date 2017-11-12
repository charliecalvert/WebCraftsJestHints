import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MakeHtmlDropDowns from './MakeHtmlDropDowns';
import MakeHtmlHomeButton from './MakeHtmlHomeButton';

class MakeHtml extends React.Component {
    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <MakeHtmlHomeButton />
                    <MakeHtmlDropDowns />
                </div>
            </MuiThemeProvider>
        );
    }
}

export default MakeHtml;
