import React from 'react';
import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom';
import { Container, Box, Grid } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'space-between', 
    alignItems: 'center',
    minHeight: '80px',
    fontSize: '1.25rem',
  },
  groupLink: {
    padding: 0,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between', 
  },
  icon: {
    marginRight: theme.spacing(0.5),
    width: 20,
    height: 20,
  },
  footer: {
    flexGrow: 1,
    backgroundColor: '#f5f5f5',
    minHeight: '80px',
  }
}));


export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.footer}>
      <Container>
        <div className={classes.container} >
          <Grid item xs={4} sm={3} className={classes.groupLink}>
            <div>
              <Link to="/about">Giới Thiệu</Link>
            </div>
            <Box>
              <Link to="/terms"> Điều khoản</Link>
            </Box>
            <Box>
              <Link to="/contacts">Liên hệ</Link>
            </Box>
          </Grid>
          <div>© 2021 Tiếng Nhật IT</div>
        </div>
      </Container>
    </div>
  );
}

