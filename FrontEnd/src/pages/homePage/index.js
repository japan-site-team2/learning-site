import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Container,Typography } from '@material-ui/core';
import OwnerCard from '../../components/card'

const useStyles = makeStyles((theme) => ({
  container:{
    marginTop: '80px',
  },
  root: {
    flexGrow: 1,
  },
  title: {
    marginBottom: '20px'
  }
}));

export default function HomePage() {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Typography variant="h2" className={classes.title}>Chủ đề </Typography>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid container item xs={12} sm={3} spacing={1}>
            <OwnerCard />
          </Grid>
          <Grid container item xs={12} sm={3} spacing={1}>
            <OwnerCard />
          </Grid>
          <Grid container item xs={12} sm={3} spacing={1}>
            <OwnerCard />
          </Grid>
          <Grid container item xs={12} sm={3} spacing={1}>
            <OwnerCard />
          </Grid>
          <Grid container item xs={12} sm={3} spacing={1}>
            <OwnerCard />
          </Grid>
          <Grid container item xs={12} sm={3} spacing={1}>
            <OwnerCard />
          </Grid>
          <Grid container item xs={12} sm={3} spacing={1}>
            <OwnerCard />
          </Grid>
          <Grid container item xs={12} sm={3} spacing={0}>
            <OwnerCard />
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}

