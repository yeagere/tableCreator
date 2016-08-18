import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

import {Timer} from '../imports/api/tasks.js';

Template.timer.helpers ({
    seconds:function(){  //read out value to paragraph in html code      
      var currentTime=Timer.findOne();  //grab single value from Timer
      return currentTime.number;  //return count value
    }
});

