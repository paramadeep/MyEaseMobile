'use strict';

import React from 'react';

var Screens =  {
  render:(route,navigator)=>{
    var Screen = route.screen
    return(
      <Screen navigator={navigator} data={route.data}/>
    );
  }
  
}
  module.exports = Screens
