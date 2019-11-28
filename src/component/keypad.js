import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { FetchAPI } from '../fetch.js';

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
	}
	handleClick = name => {
		let expr = this.props.expr + name;
		if (name === 'clear') {
			expr = ''
		}
		console.log(expr);
		this.props.changeExpr({ expression: expr });
	}
	evaluateExpression = () => {
		let expr = this.props.expr;
		FetchAPI.postData("http://localhost:3030/evaluate", { "expression": expr })
			.then((data) => {
				if (data) {
					console.log(data);
					this.props.changeExpr({ expression: data });
				}
			}).catch((err) => {

			});
	}

	render() {
		const classes = this.props;
		return (
			<div>
				<Grid container spacing={3} >
					<Grid item xs={3}>
						<Button variant="outlined" size="small" color="primary" className={classes.margin} onClick={() => {this.handleClick('1')}}>
							1
        </Button>
					</Grid>
					<Grid item xs={3}>
						<Button variant="outlined" size="small" color="primary" className={classes.margin} onClick={()=>{this.handleClick('2')}}>
							2
        </Button>
					</Grid>
					<Grid item xs={3}>
						<Button variant="outlined" size="small" color="primary" className={classes.margin} onClick={()=>{this.handleClick('3')}}>
							3
        </Button>
					</Grid>
					<Grid item xs={3}>
						<Button variant="outlined" size="small" color="primary" className={classes.margin} onClick={()=>{this.handleClick('+')}}>
							+
        </Button>
					</Grid>
					<Grid item xs={3}>
						<Button variant="outlined" size="small" color="primary" className={classes.margin} onClick={()=>{this.handleClick('4')}}>
							4
        </Button>
					</Grid>
					<Grid item xs={3}>
						<Button variant="outlined" size="small" color="primary" className={classes.margin} onClick={()=>{this.handleClick('5')}}>
							5
        </Button>
					</Grid>
					<Grid item xs={3}>
						<Button variant="outlined" size="small" color="primary" className={classes.margin} onClick={()=>{this.handleClick('6')}}>
							6
        </Button>
					</Grid>
					<Grid item xs={3}>
						<Button variant="outlined" size="small" color="primary" className={classes.margin} onClick={()=>{this.handleClick('-')}}>
							-
        </Button>
					</Grid>
					<Grid item xs={3}>
						<Button variant="outlined" size="small" color="primary" className={classes.margin} onClick={()=>{this.handleClick('7')}}>
							7
        </Button>
					</Grid>
					<Grid item xs={3}>
						<Button variant="outlined" size="small" color="primary" className={classes.margin} onClick={()=>{this.handleClick('8')}}>
							8
        </Button>
					</Grid>
					<Grid item xs={3}>
						<Button variant="outlined" size="small" color="primary" className={classes.margin} onClick={()=>{this.handleClick('9')}}>
							9
        </Button>
					</Grid>
					<Grid item xs={3}>
						<Button variant="outlined" size="small" color="primary" className={classes.margin} onClick={()=>{this.handleClick('*')}}>
							*
        </Button>
					</Grid>
					<Grid item xs={3}>
						<Button variant="outlined" size="small" color="primary" className={classes.margin} onClick={()=>{this.handleClick('0')}}>
							0
        </Button>
					</Grid>
					<Grid item xs={3}>
						<Button variant="outlined" size="small" color="primary" className={classes.margin} onClick={()=>{this.handleClick('/')}}>
							/
        </Button>
					</Grid>
					<Grid item xs={3}>
						<Button variant="outlined" size="small" color="primary" className={classes.margin} onClick={()=>{this.handleClick('clear')}}>
							clear
        </Button>
					</Grid>
					<Grid item xs={3}>
						<Button variant="outlined" size="small" color="primary" className={classes.margin} onClick={()=>{this.evaluateExpression()}}>
							=
        </Button>
					</Grid>
				</Grid>

			</div>
		);
	}
}

export default withStyles(useStyles)(KeyPad);