import React from 'react';
import {withStyles, Button} from '@material-ui/core'
import {grey} from '@material-ui/core/colors'


const styles ={
	root:{
		margin: '.5rem 1rem',
		backgroundColor:'#000000',
		color:'#FFFFFF',
		width:'auto'
	}
}


const MyButton = (props) =>(
	<Button
		name={props.name}
		className={props.classes.root}
		variant='contained'
		onClick={props.onClick}
		value={props.value}
	>
		{props.buttonName}
	</Button>


)

export default withStyles(styles)(MyButton)

