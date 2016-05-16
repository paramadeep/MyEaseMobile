'use strict';

var Components = {
  get Button(){return require('./Button')},
  get Label(){return require('./Label')},
  get TextInput(){return require('./TextInput')},
  get Title(){return require('./Title')},
  get FieldValue(){return require('./FieldValue')},
  get DatePicker(){
    return require('./DatePicker');
  },
}

module.exports = Components;
