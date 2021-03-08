import './scss/Header.scss';
import { Avatar } from '@material-ui/core';
import avatar from './imgs/image0.jpg';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  small: {
      width: theme.spacing(4),
      height: theme.spacing(4),
  },
  large: {
      width: theme.spacing(15),
      height: theme.spacing(15),
  }
}));


export default function Header() {
    const classes = useStyles();
    return (
      <header className="Header">
          <div className="avatar"><Avatar src={avatar} alt="Photo Profil" className={classes.large}/></div>
          <h1>Guy Ilunga Boucher</h1>
      </header>
    );
  }
  