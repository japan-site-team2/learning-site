import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import { Container, Typography, Link, Box, Button, Grid } from '@mui/material';
import Categories from '../../components/categories';
import HeadImage from '../../images/homePage/header.jpg'

const useStyles = makeStyles((theme) => ({
  header: {
    minHeight: '450px',
    padding: '20px',
    borderRadius: '7px',
    backgroundImage:`url(${HeadImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 100%',
    marginTop: '10px',
  }, 
  footer: {
    width: '80%',  
    borderTop:'1px solid rgba(0,0,0,0.5)',
    marginTop: '40px',
    padding: '50px',
    textAlign: 'center',
  },
  logos:{
    minHeight: '120px',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  category: {
    backgroundColor: '#dbd7d7', 
    marginTop: '20px',
    padding: '20px',
    borderRadius: '7px',
  },  
  categoryContent: {
    marginTop: '10px',
    backgroundColor: 'hsl(205,46%,92%)', 
    borderRadius: '7px',
  }, 
}));
export default function HomePage() {
  const [button1,setButton1] =useState('outlined')
  const [button2,setButton2] =useState('contained')
  const classes = useStyles();

  return (
    <Container>
      <Grid container className={classes.header}>
        <Grid item sm={8} xs={12}>
          <Typography variant="h3">Tiếng Nhật trong lĩnh vực IT</Typography>
          <Box sx={{pl: 1, pt: 2}}>
            <Typography variant="h5" color="primary">
              Chủ đề đa dạng! Bài viết hữu ích!Cộng đồng gắn kết! Từ vựng phong phú!
            </Typography>
            <Typography variant="h6" style={{marginTop: '10px'}}>
              Team 2 IT là trang web chia sẽ tiếng Nhật trong lĩnh vực IT.
              Chúng tôi hi vọng các bạn cùng tham với chúng tôi để cùng nhau xây dựng một cộng đồng gắt kết, 
              để cùng nhau ngày càng phát triển.
            </Typography>
            <div style={{marginTop: '30px',}}>
              <Link href="/dangnhap" underline="none">
                <Button variant={button1} color="primary"
                  onMouseOver={ e => {setButton1('contained');setButton2('outlined')}}
                  onMouseOut={e => {setButton1('outlined');setButton2('contained')}}>
                  Đăng Nhập
                </Button>
              </Link>
              <Link href="/community" underline="none">
                <Button variant={button2} color="primary" style={{marginLeft: '20px'}}>Tham gia</Button>
              </Link>
            </div>
          </Box>
        </Grid>
      </Grid>
      <Grid container className={classes.category}>
        <Typography variant="h4">Chủ đề từ vựng tiếng Nhật</Typography>
        <Grid container className={classes.categoryContent}>
          <Categories/>  
        </Grid>
      </Grid>
      <Grid container style={{display:'flex',alignItems: 'center',justifyContent: 'center'}}>
        <div className={classes.footer}>
          <Typography variant="h3"> Các đơn vị tài trợ cho chúng tôi! </Typography>
          <Typography variant="h6" style={{color:'rgba(0, 0, 0, 0.54)'}}>Chúng tôi rất vui mừng và trân trọng sự giúp đỡ từ các đơn vị!</Typography>
          <div className={classes.logos}></div>
          <Typography variant="h5">Bạn muốn trở thành nhà tài trợ cho Team2 IT ?</Typography>
          <Link href="/contacts" underline="none">
            <Button variant={button1} color="primary" 
              style={{marginTop: '10px'}}
              onMouseOver={ e => {setButton1('contained')}}
              onMouseOut={e => {setButton1('outlined')}}
            >Liên hệ với chúng tôi</Button>
          </Link>
        </div> 
      </Grid>
    </Container>
  );
}