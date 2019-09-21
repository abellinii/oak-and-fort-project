  import {Input, withStyles} from '@material-ui/core';
  import React, {Component} from 'react';
  import MyButton from './components/Button'
  import { Grid } from '@material-ui/core'
  import './App.css'
  import MyPlaceholder from './components/Placeholder'
  import DataExtracter from './lib/DataExtracter'
  import Title from './components/Title'
  import Footer from './components/Footer'

  var filename = require('./lib/items.csv')                 //Reference dir for CSV file
  var dataExtracter = new DataExtracter({file: filename})  //Make instance to parse CSV file

 


const styles ={
  root:{
    margin: '.5rem 1rem',
    backgroundColor:'#000000',
    color:'#FFFFFF'
  }
}





class App extends Component{

   constructor(props){
    super(props);
  
  
    this.state ={
      data:dataExtracter.data,
      show:false,
      selectedItem:null,
      selectedValue:null,
    }

    this.getJSON = this.getJSON.bind(this);
    this.itemClicked = this.itemClicked.bind(this);

  }



  itemClicked = async (e) => {
      e.preventDefault();
      if(e.currentTarget.name != "total"){          
        this.setState({
          selectedItem:e.currentTarget.name,
          selectedValue:e.currentTarget.value,
          show:true
        })
      }else{      //If button is title calculate total items
        var total = 0;
        await Object.values(this.state.data).map((value) => {
          total += value;
       })

        this.setState({
      selectedItem:"This store",
      selectedValue:total,
      show:true
        })
  }

}

  getJSON = async() => {
    
        var newdata;
        await dataExtracter.getitems()      //Extract data from CSV and give JSON data to state
        newdata = dataExtracter.data

        this.setState({data:newdata},()=>{
          this.forceUpdate()
        })
     
  }
//Conditionally render page data
  //On initial load show buttton to get inventory
    //Onclick parse csv and dynamically render buttons
      //Once an item is clicked shows corresponding number of the item
render(){

  const myData = this.state.data

  return(
    <div className="app">
    <Title/>

    {Object.entries(dataExtracter.data).length !== 0 ? (

      <div>
         <Grid container justify='center' direction='column'>
            <div className='sumItems'>
            <MyButton  name="total" key={"total"} buttonName={"Sum items"} onClick={this.itemClicked}/>
            </div>
            <MyPlaceholder selected={this.state.show} value={this.state.show ? this.state.selectedItem + " has " + this.state.selectedValue + " items avaliable": "Please choose an item!"} />
         </Grid>

        <Grid container justify='center' className='scrollable'>
          {Object.entries(myData).map(([key,value]) => {
            
        return <MyButton
                    name={key}
                    key={key}
                    buttonName= {key }
                    onClick= {this.itemClicked}
                    value={value}
                    />
        
          })}
        </Grid>
      </div> )

          
    :

    (<div className="entryButton"><MyButton  onClick={this.getJSON} buttonName= "GET ITEMS"/></div>)

    }


    <Footer/>

    </div>

    )






}

}

export default withStyles(styles)(App)
