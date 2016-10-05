import { Template } from 'meteor/templating';

import './main.html';

import {Timer} from '../imports/api/tasks.js';
import {Table} from '../imports/api/tasks.js';

/*Template.timer.helpers ({
    seconds:function(){  //read out value to paragraph in html code      
      var currentTime=Timer.findOne();  //grab single value from Timer
      return currentTime.number;  //return count value
    }
}); */

Template.table.helpers({
  header: [
    {text: 'AMC_HOT_SWAP'}, {text: '0x0'}, {text: 'discrete'}, {text: '0x0100'}, {text: 'na1'}, {text: 'na2'}, {text: 'na3'}, {text: 'na4'}, {text: 'na5'}, {text: 'na6'},
  ],

  row: [
    {data: [
      {text: '+12V'},{text: '12.475'},{text: 'Volts'},{text: 'ok'},{text: '9.934'},{text: '7.932'},{text: '5.930'},{text: '13.861'},{text: '15.863'},{text: '18.866'},
    ]}, 
    {data: [
      {text: '+3.3V MMC'},{text: '33.850'},{text: 'Volts'},{text: 'ok'},{text: '29.845'},{text: '30.785'},{text: '31.960'},{text: '34.780'},{text: '35.955'},{text: '36.895'},
    ]},
//need to update with real data
    {data: [
      {text: '+3.3V MMC'},{text: '33.850'},{text: 'Volts'},{text: 'ok'},{text: '29.845'},{text: '30.785'},{text: '31.960'},{text: '34.780'},{text: '35.955'},{text: '36.895'},
    ]},
    {data: [
      {text: '+3.3V MMC'},{text: '33.850'},{text: 'Volts'},{text: 'ok'},{text: '29.845'},{text: '30.785'},{text: '31.960'},{text: '34.780'},{text: '35.955'},{text: '36.895'},
    ]},
    {data: [
      {text: '+3.3V MMC'},{text: '33.850'},{text: 'Volts'},{text: 'ok'},{text: '29.845'},{text: '30.785'},{text: '31.960'},{text: '34.780'},{text: '35.955'},{text: '36.895'},
    ]},
    {data: [
      {text: '+3.3V MMC'},{text: '33.850'},{text: 'Volts'},{text: 'ok'},{text: '29.845'},{text: '30.785'},{text: '31.960'},{text: '34.780'},{text: '35.955'},{text: '36.895'},
    ]},
    {data: [
      {text: '+3.3V MMC'},{text: '33.850'},{text: 'Volts'},{text: 'ok'},{text: '29.845'},{text: '30.785'},{text: '31.960'},{text: '34.780'},{text: '35.955'},{text: '36.895'},
    ]},
    {data: [
      {text: '+3.3V MMC'},{text: '33.850'},{text: 'Volts'},{text: 'ok'},{text: '29.845'},{text: '30.785'},{text: '31.960'},{text: '34.780'},{text: '35.955'},{text: '36.895'},
    ]},

  ],
});

/*Template.systemTable.helpers ({
    getTable:function(){
      return Table.find({});
    } 
}); */

/* Template.staticTable.OnRender = function(){ //rebuild the table each time site is refreshed
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

}; */

