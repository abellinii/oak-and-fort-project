import React from 'react'
import { withStyles } from '@material-ui/core'
import {grey} from '@material-ui/core/colors'
import Github from '../img/GitHub.png'



const styles = theme =>({
	root:{
		backgroundColor:'#FFFFFF',
		position:'fixed',
		bottom:0,
		left:0,
		right:0,
		height:40,
		borderTop:"1px solid #000000",
		display: 'flex',
        alignItems: 'center',
        justifyContent:'center'
	},
	title:{
		fontFamily: 'Work Sans',
		margin:'auto, auto',
		height:50,
		fontSize:'4rem',
		position: 'absolute'

	}


})




const Footer =(props) => (
		
		<div className={props.classes.root}><a href="https://github.com/abellinii"><img src={Github} alt="Github logo"></img></a></div>
		
	)


export default withStyles(styles)(Footer)