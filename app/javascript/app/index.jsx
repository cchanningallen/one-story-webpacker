import React from 'react'
import ReactDOM from 'react-dom'

import AppRoot from './AppRoot';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <AppRoot />,
      document.body.appendChild(document.createElement('div')),
  )
});
