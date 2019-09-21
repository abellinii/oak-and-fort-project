var Papa = require('papaparse')






class DataExtracter{
	
	constructor(config){
		this.filename=config.file;
		this.data={};
		this.unmassagedData=[];

	}



	getitems(){
		return new Promise((res,rej)=>{  //Make as promise for async function in App
		  var that = this;

		  Papa.parse(that.filename, {         //Give filename to papaparse
			 	download:true,
			 						//Download file
			 	complete: function(results) {
			 		that.data['empty'] = 0;			//intialize empty to keep track of items without label
			 		
			       for(var i = 1; i < results.data.length;i++){		//loop and clean data of empty items

			       		let item = results.data[i][2]
				       	if(item  != ''){	       		     		
				       		that.unmassagedData.push(item)			//Store useful data in array 
				       	}else{
				       		that.data['empty'] += 1					//increment items without label
				       	}
			       }


			       for (var newItem in that.unmassagedData){		//Access each of the stored items from clean data
			       		let strippedItem;
				       if(that.unmassagedData[newItem] == undefined){		//If item is undefined identify line and log for refenence
				       	console.log("check undefined at index: " + newItem)
				       	continue;
				       }else {
				       	strippedItem = (that.unmassagedData[newItem].split(":")[2])?(that.unmassagedData[newItem].split(":")[2]):(that.unmassagedData[newItem].split(":")[1]); //If no child use parent as identifier
				       	
				       	
				       
				       }
			       	
				       	if(strippedItem in that.data){
				       		that.data[strippedItem] = that.data[strippedItem] + 1 //If object contains item increment
				       	}else{
				       		that.data[strippedItem] = 1;		//If item does not contain item add and set to one

				       	}
			       }
			      
			      res(that.data) 
				}

		    })
		  })
		}

}


export default DataExtracter