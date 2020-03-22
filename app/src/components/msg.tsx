import Snackbar from '@material-ui/core/Snackbar';
import React from 'react';
import ReactDOM from 'react-dom';

export function msg(msg: string) {
  const container = document.getElementById('msg')!
  const MSG = (
    <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      open
      onClose={() => ReactDOM.unmountComponentAtNode(container)}
      autoHideDuration={2000}
      message={msg}
    />
  )
  return ReactDOM.render(MSG, container);
}
