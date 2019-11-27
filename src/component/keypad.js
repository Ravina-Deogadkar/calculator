import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const useStyles = (theme) => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    margin: {
        margin: theme.spacing(1),
    },
});

class KeyPad extends Component {
    constructor(props) {
		super(props);
		this.state={
			expression: ''
		}
       // this.evaluate();
    }
	handleClick= name => event =>{
		console.log(name);
	}
    
    render() {
        const classes = this.props;
        return (
            <div>
                <Grid container spacing={3} >
                    <Grid item xs={3}>
                        <Button variant="outlined" size="small" color="primary" className={classes.margin} onClick={this.handleClick('1')}>
                            1
        </Button>
                    </Grid>
                    <Grid item xs={3}>
                        <Button variant="outlined" size="small" color="primary" className={classes.margin} onClick={this.handleClick('2')}>
                            2
        </Button>
                    </Grid>
                    <Grid item xs={3}>
                        <Button variant="outlined" size="small" color="primary" className={classes.margin} onClick={this.handleClick('3')}>
                            3
        </Button>
                    </Grid>
                    <Grid item xs={3}>
                        <Button variant="outlined" size="small" color="primary" className={classes.margin} onClick={this.handleClick('+')}>
                            +
        </Button>
                    </Grid>
                    <Grid item xs={3}>
                        <Button variant="outlined" size="small" color="primary" className={classes.margin} onClick={this.handleClick('4')}>
                            4
        </Button>
                    </Grid>
                    <Grid item xs={3}>
                        <Button variant="outlined" size="small" color="primary" className={classes.margin} onClick={this.handleClick('5')}>
                            5
        </Button>
                    </Grid>
                    <Grid item xs={3}>
                        <Button variant="outlined" size="small" color="primary" className={classes.margin} onClick={this.handleClick('6')}>
                            6
        </Button>
                    </Grid>
                    <Grid item xs={3}>
                        <Button variant="outlined" size="small" color="primary" className={classes.margin} onClick={this.handleClick('-')}>
                            -
        </Button>
                    </Grid>
                    <Grid item xs={3}>
                        <Button variant="outlined" size="small" color="primary" className={classes.margin} onClick={this.handleClick('7')}>
                            7
        </Button>
                    </Grid>
                    <Grid item xs={3}>
                        <Button variant="outlined" size="small" color="primary" className={classes.margin} onClick={this.handleClick('8')}>
                            8
        </Button>
                    </Grid>
                    <Grid item xs={3}>
                        <Button variant="outlined" size="small" color="primary" className={classes.margin} onClick={this.handleClick('9')}>
                            9
        </Button>
                    </Grid>
                    <Grid item xs={3}>
                        <Button variant="outlined" size="small" color="primary" className={classes.margin} onClick={this.handleClick('*')}>
                            *
        </Button>
                    </Grid>
                    <Grid item xs={3}>
                        <Button variant="outlined" size="small" color="primary" className={classes.margin} onClick={this.handleClick('0')}>
                            0
        </Button>
                    </Grid>
                    <Grid item xs={3}>
                        <Button variant="outlined" size="small" color="primary" className={classes.margin} onClick={this.handleClick('/')}>
                            /
        </Button>
                    </Grid>
                    <Grid item xs={3}>
                        <Button variant="outlined" size="small" color="primary" className={classes.margin} onClick={this.handleClick('.')}>
                            .
        </Button>
                    </Grid>
                    <Grid item xs={3}>
                        <Button variant="outlined" size="small" color="primary" className={classes.margin} onClick={this.handleClick('=')}>
                            =
        </Button>
                    </Grid>
                </Grid>

            </div>
        );
    }
}

export default withStyles(useStyles)(KeyPad);