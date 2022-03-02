import React,{ useState,useEffect } from 'react';
import { Grid } from '@mui/material'
import OurTeamFake from './ourTeamFake';
import OneCard from './oneCard';

export default function OurTeamCards() {
  const [inforTeam,setInforTeam]= useState(OurTeamFake);
  useEffect(() => {
    return () => {
      
    }
  },[inforTeam])
  return (
    <div>
    <Grid container spacing={3}>            
      {inforTeam.map((infor) => (<Grid item key={infor.name} md={3} xs={6}><OneCard inforTeam={inforTeam} setInforTeam={setInforTeam} infor={infor}/></Grid>))}
    </Grid>
    </div>
  )
}
