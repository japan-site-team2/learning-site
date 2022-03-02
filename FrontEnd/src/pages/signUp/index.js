import React,{ useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import LockIcon from '@mui/icons-material/Lock';
import { Typography, TextField, Grid, Button, Avatar, Container, Box } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { makeStyles } from '@mui/styles';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useHistory } from "react-router-dom";
import axios from 'axios';
import * as api from '../../redux/api'
import BackgroundImage from '../../images/sigup/nen.jpg';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  page: {
    backgroundImage: `url(${BackgroundImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 100%',
    minHeight: '584px',
    paddingTop: '10px'
  },
  paper: {
    marginTop: theme.spacing(1),
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    aligns: 'center',
    paddingBottom: theme.spacing(2),
    minHeight: '552px'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(2, 0, 2),
  },
  row: {
    display: 'flex',
    marginTop: '15px'
  },
  input: {
    position: 'relative',
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
  icon2: {
    position: 'absolute',
    zIndex:'100',
    color: 'rgb(186, 184, 184)',
    top: '32px',
    right: '15px',
    cursor: 'pointer',
  }
}));
export default function SignUp() {
  const classes = useStyles();
  
  const [labelType,setLabelType] = useState('password')
  const [labelType2,setLabelType2] = useState('password')
  const handleShowPassword = ()=>{
    labelType === 'password'? setLabelType('text') : setLabelType('password') ;
  }
  const handleShowPassword2 = ()=>{
    labelType2 === 'password'? setLabelType2('text') : setLabelType2('password') ;
  }

  const [nameError,setNameError] = useState('');
  const [emailError,setEmailError] = useState('');
  const [passwordError,setPasswordError] = useState('');
  const [password2Error,setPassword2Error] = useState('');
  const [checked, setChecked] = React.useState(false);
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  function validation(details) {
    setNameError('');
    setEmailError('')
    setPasswordError('')
    setPassword2Error('')
    if (details.name===''){
      setNameError('Vui long nhập đầy đủ!')
    }
    else{
      const regex = /^[a-zA-Z0-9]+$/;
      if (regex.test(details.name) === false){
        setNameError('Tên đăng ký không hợp lệ!')
      } 
      if (details.name.length < 3){
        setNameError('Vui long nhập ít nhất 3 ký tự!')
      }
    }
    if (details.email===''){
      setEmailError('Vui long nhập đầy đủ!')
    }
    else{
      const regex = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;
      if (regex.test(details.email) === false){
        setEmailError('Email không hợp lệ!')
      }
    }
    if (details.password===''){
      setPasswordError('Vui long nhập đầy đủ!')
    }
    else{
      if (details.password.length < 6){
        setPasswordError('Vui long nhập ít nhất 6 ký tự!')
      }
      if (details.password.length > 50){
        setPasswordError('Vui long nhập tối đa 50 ký tự!')
      }
      const regex = /^[a-zA-Z0-9]+$/;
      if (regex.test(details.password) === false){
        setPasswordError('Mật khẩu không hợp lệ!')
      } 
    }
    if (details.password2===''){
      setPassword2Error('Vui long nhập đầy đủ!')
    }
    else{
      if (details.password2 !== details.password){
        setPassword2Error('Mật khẩu không khớp!')
      }
    }
    if (nameError||emailError||passwordError||password2Error){return false}
    else{return true}
  }

  const [details,setDetails] = useState({name:'',email: '', password:'',password2: '',})
  let history = useHistory();

  const trySignup = async () => {
    try {
      const response = await axios({
        method: "post",
        url: `${api.URL}/api/register`,
        data: details,
        headers:{"Content-Type" : "application/json"}
      })
      if (response.data.success) {
        alert('Đăng ký thành công!')
        history.push('/login')
      }
      else  {
        setEmailError('Email đã tồn tại!')
        history.push('/signup')
      }
    } catch (error) {
      console.log(error);
    }
  }
  const handleSignUp = (e)=>{
    alert('Vui lòng đợi xác nhận thông tin!')
    if (checked===true){
      setEmailError('')
      if (validation(details)===false|| !details.name || !details.email || !details.password || !details.password2) {
        e.preventDefault();
      }
      else {
        trySignup();
      }
    }
    else {e.preventDefault();alert('Vui lòng đồng ý với điều khoản của Tiếng Nhật IT!')}
  }

  return (
    <Container className={classes.page}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Box sx={{display: 'flex',justifyContent: 'center', alignItems: 'center'}}>
            <Avatar className={classes.avatar}>
              <LockIcon />
            </Avatar>
          </Box>
          <Typography component="h1" variant="h5" sx={{textAlign: 'center', color: '#dd2c00'}}>
            Đăng ký tài khoản!
          </Typography>
          <form className={classes.form} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12} className={classes.input}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  label="Họ và tên"
                  autoComplete="lname"
                  onChange={e => setDetails({...details,name:e.target.value})}
                  value={details.name}
                />
                <Typography variant="subtitle2" className={classes.errorMessage}>{nameError}</Typography>
              </Grid>
              <Grid item xs={12} className={classes.input}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  label="Địa chỉ email"
                  autoComplete="email"
                  onChange={e => setDetails({...details,email:e.target.value})}
                  value={details.email}
                />
                <Typography variant="subtitle2" className={classes.errorMessage}>{emailError}</Typography>
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
                <Typography variant="subtitle2" className={classes.errorMessage}>{passwordError}</Typography>
              </Grid>
              <Grid item xs={12} className={classes.input}>
              {labelType2 === 'password' ? <VisibilityIcon className={classes.icon2} onClick={handleShowPassword2} /> : <VisibilityOffIcon  className={classes.icon2} onClick={handleShowPassword2} /> }
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  label="Xác nhận mật khẩu"
                  type={labelType2}
                  autoComplete="current-password"
                  onChange={e => setDetails({...details,password2:e.target.value})}
                  value={details.password2}
                />
                <Typography variant="subtitle2" className={classes.errorMessage}>{password2Error}</Typography>
              </Grid>
              <Grid className={classes.row} item xs={12} >
                <FormControlLabel
                  checked={checked}
                  onChange={handleChange}
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="" 
                  sx={{paddingRight: '-10px', marginRight: 0}}
                />
                <Box sx={{display: 'flex',justifyContent: 'center', alignItems: 'center'}}>
                  <Typography variant="body2">Tôi đã đọc và đồng ý với các <Link to="/terms" style={{color: '#f50057'}}>điều khoản</Link> của Tiếng Nhật IT.</Typography>
                </Box>
                </Grid>
            </Grid>
            <Button
              type="button"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={handleSignUp}
            >
              Đăng ký tài khoản
            </Button>
            <Grid container justifyContent="flex-end" sx={{marginTop: '5px'}}>
              <Grid>
                Bạn đã có tài khoản!
                <Link to="/login" variant="body2" style={{color: '#f50057'}}>
                   Đăng nhập
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    </Container>
  );
}