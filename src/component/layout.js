import React, { Component } from 'react';
import KeyPad from './keypad';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Header from './header';

const useStyles = (theme) => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    margin: {
        margin: theme.spacing(1),
    },
    calcbox: {
        width: "50%",
    }

});

class Calculator extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const classes = this.props;
        return (<main class="container">
			<Header/>
            <div class="calcbox" style={{width:"300px", margin:"auto"}}>
                <TextField
                fullWidth
                    id="filled-txt"
                    defaultValue="0"
                    className={classes.textField}
                    margin="normal"
                    variant="filled"
                />
                <KeyPad />
            </div>
        </main>);
    }
}

export default withStyles(useStyles)(Calculator);