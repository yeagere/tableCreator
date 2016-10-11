import { Meteor } from 'meteor/meteor';
import {Table} from '../imports/api/tasks.js';
import { Template } from 'meteor/templating';

import './main.html';

console.log(Table.findOne({}).header);
console.log(Table.findOne({}).main);

  var header = Table.findOne({}).header;
  var main = Table.findOne({}).main;

Template.table.headerData = function() {
  return header;
};

Template.table.mainData = function() {
  return main;
};

/*  var headerData = ['AMC_HOT_SWAP','0x0','discrete','0x0100','na1','na2','na3','na4','na5','na6'];

  var mainData = [
    ['+12V',12.475,'Volts','ok',9.934,'7.932','5.930','13.861','15.863','18.866'],
    ['+3.3V MMC', '33.850', 'Volts', 'ok', '29.845', '30.785', '31.960', '34.780', '35.955', '36.895'],
    [],
    [],
    [],
  ];

Template.table.headerData = function() {
  return headerData;
};

Template.table.mainData = function() {
  return mainData;
};*/
