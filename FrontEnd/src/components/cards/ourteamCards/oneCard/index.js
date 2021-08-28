import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import { Link } from '@material-ui/core';
import TwitterIcon from '@material-ui/icons/Twitter';
import ourTeamFake from '../ourTeamFake';
import ourTeam from '../ourTeam'

const useStyles = makeStyles({

  root: {
    maxWidth: 345,
    minHeight: 320,
    '&:hover':{
      transform:'translateY(-5px)',
    },
    transition: 'all 0.2s ease-in-out 0s',
    cursor: 'pointer',
  },
  team: {
    textAlign: 'left',
    fontSize: 18,
    hover:'translateY(-4px)',
    transition: 'all 0.2s ease-in-out 0s',
  },
  teamAV:{
    height: '80px',
    width: '80px',
    marginBottom: '10px',
  },
  speak:{
    marginTop: '10px',
  },
  contact:{
    maxHeight: '25px',
    justifyContent: 'space-between',
    paddingRight: '160px',
    paddingLeft: '20px',
  }, 
  icon:{
    fontSize: '20px',
    color: 'rgb(176, 190, 197)',
  }
});

export default function OneCard({inforTeam,infor,setInforTeam}) {
  const classes = useStyles();
  const changeInfor = ()=> {
    if (inforTeam===ourTeam) {setInforTeam(ourTeamFake)}
    else {setInforTeam(ourTeam)}
  }
  return (
    <Card className={classes.root} onClick={changeInfor}>
      <CardActionArea>
        <CardContent className={classes.team}>
          <Avatar className={classes.teamAV} alt={infor.name} src={infor.avatar} />
          <Typography variant="h6">
           {infor.name}
          </Typography>
          <Typography variant="body2" color="rgb(100, 110, 115)">
            {infor.jobTitle}
          </Typography>
          <span className={classes.speak} >
            {infor.spoken}
          </span>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.contact}>
        <Link href={infor.github} className={classes.icon}>
          <GitHubIcon/>
        </Link>
        <Link href={infor.facebook} className={classes.icon}>
          <FacebookIcon/>
        </Link>
        <Link href={infor.twitter} className={classes.icon}>
          <TwitterIcon/>
        </Link>
      </CardActions>
    </Card>
  )
}


