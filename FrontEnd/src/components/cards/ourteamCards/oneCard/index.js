import React from 'react';
import { makeStyles } from '@mui/styles';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { Link, Typography  } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
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
          <Typography variant="body2">
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


