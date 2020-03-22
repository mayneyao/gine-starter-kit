import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import LinearProgress from '@material-ui/core/LinearProgress';
import { makeStyles } from '@material-ui/core/styles';
import FavoriteIcon from '@material-ui/icons/Favorite';
import SettingsIcon from '@material-ui/icons/Settings';
import RestoreIcon from '@material-ui/icons/Restore';
import React from 'react';
import { useHistory, useLocation } from "react-router-dom";
import { useImmutableContext } from 'store';


const useStyles = makeStyles({
  root: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
    zIndex: 99
  },
  progress: {
    position: 'fixed',
    bottom: 0,
    width: '100%',
    zIndex: 100
  },
});

export default function SimpleBottomNavigation(props: any) {
  const classes = useStyles();
  const location = useLocation()
  const [value, setValue] = React.useState(location.pathname);
  const { state } = useImmutableContext()
  const history = useHistory()

  return (
    <>
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
          history.push(newValue)
        }}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction label="Home" value="/" icon={<RestoreIcon />} />
        <BottomNavigationAction label="Favorites" value="/favs" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Settings" value="/settings" icon={<SettingsIcon />} />
      </BottomNavigation>
      {state.status.loading && <LinearProgress className={classes.progress} />}
    </>
  );
}
