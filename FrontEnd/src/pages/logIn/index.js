import React, { useState } from 'react';
import axios from 'axios'
import * as api from '../../redux/api'
import CssBaseline from '@mui/material/CssBaseline';
import LockIcon from '@mui/icons-material/Lock';
import { Typography, Box, TextField, Grid, Button, Avatar, Container } from '@mui/material';
import { makeStyles } from '@mui/styles';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Link, useHistory } from "react-router-dom";
import Background from '../../images/login/nen.jpg';

const useStyles = makeStyles((theme) => ({
  page: {
    backgroundImage: `url(${Background})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 100%',
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingBottom: theme.spacing(12),
    
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    position: 'relative',
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  input: {
    position: 'relative',
    marginTop: '6px'
  },
  errorMessage: {
    width:'100%',
    position: 'absolute',
    textAlign: 'center',
    color: '#ff3d00',
  },
  icon: {
    position: 'absolute',
    zIndex:'100',
    color: 'rgb(186, 184, 184)',
    top: '32px',
    right: '15px',
    cursor: 'pointer',
  },  
}));

export default function LogIn() {
  const classes = useStyles(); 
  const [labelType,setLabelType] = useState('password')
  const handleShowPassword = ()=>{
    labelType === 'password'? setLabelType('text') : setLabelType('password') ;   
  }
  let history = useHistory();
  const [details,setDetails] = useState({email: '', password:''})
  const [resErrorEmail,setResErrorEmail] = useState('')
  const [resErrorPassword,setResErrorPassword] = useState('')

  const tryLogIn = async () => {
    setResErrorEmail('')
    setResErrorPassword('')
    try {
      const response = await axios({
        method: "post",
        url: `${api.URL}/api/login`,
        data: details,
        headers:{"Content-Type" : "application/json"},
      })
      if (response.data.success===true) {
        localStorage.setItem('accessToken', response.data.token)
        localStorage.setItem('isLogin',true)
        alert('Đăng nhập thành công!')
        history.push('/')
        window.location.reload();
      } 
      if (response.data.success===false) {
        alert('Thông tin đăng nhập không hợp lệ!')
      } 
      if (response.data.error) {
        alert('Thông tin đăng nhập không hợp lệ!')
      } 
    } 
    catch (error) {
      console.log(error);
    }
  }
  const handleLogIn = (e)=>{
    e.preventDefault();
    setResErrorEmail('')
    setResErrorPassword('')
    if (!details.email) {
      e.preventDefault();
      setResErrorEmail('Vui lòng nhập đầy đủ!')
    }
    if (!details.password) {
      e.preventDefault();
      setResErrorPassword('Vui lòng nhập đầy đủ!')
    }
    if (details.password && details.email) { 
      tryLogIn()
    }
  }

  return (
    <Container className={classes.page}>
      <Container component="main" maxWidth="sm">
        <Box sx={{padding: '50px'}}>
          <CssBaseline />
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Đăng Nhập
            </Typography>
            <form className={classes.form} noValidate>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    label="Địa chỉ email"
                    autoComplete="email"
                    onChange={e => setDetails({...details,email:e.target.value})}
                    value={details.email}
                  />
                  <Typography variant="subtitle2" className={classes.errorMessage}>{resErrorEmail}</Typography>
                </Grid>
                <Grid item xs={12} className={classes.input}>
                  {labelType === 'password' ? <VisibilityIcon className={classes.icon} onClick={handleShowPassword} /> : <VisibilityOffIcon  className={classes.icon} onClick={handleShowPassword} /> }
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    label="Mật khẩu"
                    type={labelType}
                    autoComplete="current-password"
                    onChange={e => setDetails({...details,password:e.target.value})}
                    value={details.password}
                  />
                  <Typography variant="subtitle2" className={classes.errorMessage}>{resErrorPassword}</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      color="primary"
                      className={classes.submit}
                      onClick={handleLogIn}
                    >
                    Đăng nhập
                  </Button>
                </Grid>
                <Grid item xs={12}>
                  <Box sx={{display: 'flex',justifyContent: 'center', alignItems: 'center'}}>
                    <Typography variant='body1'> Bạn đã chưa có tài khoản? </Typography>
                    <Link to="/dangky">
                      <Typography variant="body2" color="primary">Đăng ký</Typography>
                    </Link>
                  </Box>
                </Grid>
              </Grid>
            </form>
          </div>
        </Box>
      </Container>
    </Container>
  );
}