import React from 'react'
import { withStyles } from '@material-ui/core'
import {grey} from '@material-ui/core/colors'



const styles = theme =>({
	root:{
		backgroundColor:'#000000',
		position:'fixed',
		top:0,
		left:0,
		right:0,
		height:10
	},
	title:{
		fontFamily: 'Work Sans',
		margin:'auto, auto',
		height:50,
		fontSize:'4rem',
		postition: 'absolute'

	}


})




const Title =(props) => (
		<div >
		<div className={props.classes.root}></div>
		<div className={props.classes.title}><p>OAK + FORT</p></div>
		</div>
	)


export default withStyles(styles)(Title)