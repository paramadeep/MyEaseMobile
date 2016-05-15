'use strict';

import Server from './Server';
var Controller = {
  login: (userName,password)=>{
    return Server.login(userName.password)
      .then((user) => {
        return ({ 
          screen: require('./Screens/ProfileScreen'), 
          data: user
        });
      })
  },
}

module.exports = Controller;
