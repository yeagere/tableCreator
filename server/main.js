import { Meteor } from 'meteor/meteor';

import {Timer} from '../imports/api/tasks.js';

Meteor.startup(() => {
  // code to run on server at startup
if (Timer.find().count() == 0) {
      Timer.insert({number:1}); //initialize count value 1
    }
    SyncedCron.start(); //call syncronization function
});

SyncedCron.add({  //added with code 'meteor add percolate:synced-cron'
    name: 'Constantly update counter',
    schedule: function(parser) {  //parser is a later.parse object
      return parser.recur().every().second(); //run function every second
    },
    job: function() {
      var currentTime=Timer.findOne();  //find current count value
      var currentNumber=currentTime.number;  //redefine value as number
      var futureNumber = currentNumber+1;  //increment count value everytime function is syncronized
      return Timer.update({_id:currentTime._id}, {$set: {number:futureNumber}});  //update count value
    }
});
