import { Mongo } from 'meteor/mongo';
Table = new Mongo.Collection('tables');

if(Meteor.isClient){

  Template.table.headerData = function() {
    return Table.findOne({}).headerData;
  };

  Template.table.mainData = function() {
    return Table.findOne({}).mainData;
  };
}

if(Meteor.isServer){
  Meteor.startup(() => {
    var initialHeaderData =      ['AMC_HOT_SWAP','0x0','discrete','0x0100','na1','na2','na3','na4','na5','na6'];

    var initialMainData = [
      ['+12V',12.475,'Volts','ok',9.934,'7.932','5.930','13.861','15.863','18.866'],
      ['+3.3V MMC', '33.850', 'Volts', 'ok', '29.845', '30.785', '31.960', '34.780', '35.955', '36.895'],
      [],
      [],
      [],
    ];

    Table.insert({
      headerData: initialHeaderData,
      mainData: initialMainData
    }); 
    console.log(Table.findOne({}).headerData);
    console.log(Table.findOne({}).mainData); 
  });
}
