import React,{ useState,useEffect } from 'react';
import { Grid } from '@material-ui/core'
import OurTeam from './ourTeam';
import OneCard from './oneCard';



export default function OurTeamCards() {
  const [inforTeam,setInforTeam]= useState(OurTeam);
  useEffect(() => {

    return () => {
      
    }
  },[inforTeam])
  return (
    <div>
    <Grid container spacing={3}>            
      {inforTeam.map((infor) => (<Grid item sm={3} xs={6}><OneCard inforTeam={inforTeam} setInforTeam={setInforTeam} infor={infor}/></Grid>))}
    </Grid>
    </div>
  )
}
