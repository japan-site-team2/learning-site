import React from 'react';
import { makeStyles } from '@mui/styles';
import { Card, CardActionArea, CardActions, CardContent, Typography, Button, CardMedia } from '@mui/material';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    width: '100%',
    minHeight: 300,
    '&:hover':{
      transform:'translateY(-1px)',
    },
    boxShadow:' rgba(0, 0, 0, 0.06) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 2px 6px 0px, rgba(0, 0, 0, 0.09) 0px 3px 8px 0px',
    transition: 'all 0.2s ease-in-out 0s',
    cursor: 'default',
  },
});

export default function Category({category}) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/static"
          title="Contemplative Reptile"
        />
        <Link to={`/vocabularies/${category._id}`}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
            {category.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
              across all continents except Antarctica
            </Typography>
        </CardContent>
        </Link>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  )
}


