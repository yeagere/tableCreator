Table = new Mongo.Collection("table");

import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
  var headerData = ['AMC_HOT_SWAP','0x0','discrete','0x0100','na1','na2','na3','na4','na5','na6'];

  var mainData = [
    ['+12V',12.475,'Volts','ok',9.934,'7.932','5.930','13.861','15.863','18.866'],
    ['+3.3V MMC', '33.850', 'Volts', 'ok', '29.845', '30.785', '31.960', '34.780', '35.955', '36.895'],
    [],
    [],
    [],
  ];

  Table.insert({
    header: headerData,
    main: mainData
  });

  console.log(Table.findOne({}).header);
  console.log(Table.findOne({}).main);

});


