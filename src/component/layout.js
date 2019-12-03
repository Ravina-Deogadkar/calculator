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
		width:"300px",
		margin:"auto"
    }

});

class Calculator extends Component {
    constructor(props) {
		super(props);
		this.state= {
			expression: ''
		}
	}
	handlechange=(data)=>{
		this.setState(data);
	}

    render() {
        const classes = this.props;
        return (<main className="container">
			<Header/>
            <div className="calcbox" style={{width:"300px", margin:"auto"}}>
                <TextField
                fullWidth
                    id="filled-txt"
                    className={classes.textField}
                    margin="normal"
					variant="filled"
					value = {this.state.expression}
                />
                <KeyPad expr={this.state.expression} changeExpr={this.handlechange}/>
            </div>
        </main>);
	}
	
}

export default withStyles(useStyles)(Calculator);