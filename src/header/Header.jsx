import React from 'react';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import './Header.css';

function Header({ title, link }) {
  return (
    <AppBar position="static">
      <Toolbar>
        <Grid container spacing={16} alignItems="center" direction="row" justify="space-between">
          <Link to="/" className="app-header-link">
            <Typography variant="title" color="inherit">
              {title}
            </Typography>
          </Link>
          <Link to={link.href} className="app-header-link">
            {link.text}
          </Link>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
