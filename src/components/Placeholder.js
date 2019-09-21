import React from 'react'
import {withStyles, TextField} from '@material-ui/core'
import {yellow, grey} from '@material-ui/core/colors'


const styles ={
	root:{
		backgroundColor:yellow[50],

		borderRadius: 5,
		width: 300,
		height: 50,
		margin: '0 auto 2rem',
	},
	changed:{
		backgroundColor:grey[700],
		borderRadius: 5,
		width: 300,
		height: 50,
		margin: '0 auto 2rem',
		color:'#FFFFFF'
	}
}




const MyPlaceholder =(props)=>(

<div className={(props.selected)? props.classes.root : props.classes.changed}>
<p>{props.value}</p>
</div>

  )



  export default withStyles(styles)(MyPlaceholder)