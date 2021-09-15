import React,{ useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingBottom: theme.spacing(2)
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    position: 'relative',
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  conditions: {
    fontSize: 16,
  },
  row: {
    display: 'flex',
  },
  icon: {
    position: 'absolute',
    zIndex:'100',
    color: 'rgb(186, 184, 184)',
    top: '160px',
    right: '10px',
    cursor: 'pointer',
  }
}));

export default function SignUp() {
  const classes = useStyles();
  const [labelType,setLabelType] = useState('password')
  const handleShowPassword = ()=>{
    labelType === 'password'? setLabelType('text') : setLabelType('password') ;
    
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Đăng ký
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
              {labelType === 'password' ? <VisibilityIcon className={classes.icon} onClick={handleShowPassword} /> : <VisibilityOffIcon  className={classes.icon} onClick={handleShowPassword} /> }
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type={labelType}
                id="password"
                autoComplete="current-password"
              />
            </Grid>
            <Grid className={classes.row} item xs={12} >
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="" 
              />
              <Typography className={classes.conditions} component="p">Tôi đã đọc và đồng ý chấp thuận các <Link href="/dieukhoan">điều khoản</Link> của Team 2 IT.</Typography>
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Đăng ký tài khoản
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="/dangnhap" variant="body2">
                Bạn đã có tài khoản? Đăng nhập
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}