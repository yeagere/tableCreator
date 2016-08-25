import { Template } from 'meteor/templating';

import './main.html';

import {Timer} from '../imports/api/tasks.js';
import {Table} from '../imports/api/tasks.js';

//Template.timer.helpers ({
//    seconds:function(){  //read out value to paragraph in html code      
//      var currentTime=Timer.findOne();  //grab single value from Timer
//      return currentTime.number;  //return count value
//    }
//});

Template.systemTable.helpers ({
    //return Table.find({});
    getTable:function(){
      return Table.find({});
    }
});

Template.staticTable.OnRender = function(){ //rebuild the table each time site is refreshed
  Table.remove({}); //"meteor reset"

  var tbl = $('#staticTable tr:has(td)').map(function(i, v) { //jquery referenced from online
    var $td =  $('td', this);
      return {
	  AMC_HOT_SWAP: $td.eq(0).text(), 
	  OxO: $td.eq(1).text(), 
	  discrete: $td.eq(2).text(),
	  OxO1OO: $td.eq(3).text(),  
	  na1: $td.eq(4).text(), 
	  na2: $td.eq(5).text(), 
	  na3: $td.eq(6).text(), 
	  na4: $td.eq(7).text(), 
	  na5: $td.eq(8).text(), 
	  na6: $td.eq(9).text(),
       }
  }).get(); 

    tbl.forEach(function(row) { //run data loop for each object (row)
	Table.insert(row); //insert row into db 
  });

};

