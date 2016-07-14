'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Avatar from './components/avatar';

let USER_DATA = {
  name: 'Emmanuel Akinyele',
  username: 'andela-eakinyele',
  image: 'https://avatars3.githubusercontent.com/u/15085757?v=3&u=be0c642ef0c64c1f6c95930282fbeea914cd6fc6&s=140'
}

ReactDOM.render(<Avatar user={USER_DATA} />,
  document.getElementById('app')
);