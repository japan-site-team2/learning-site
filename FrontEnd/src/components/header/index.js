import React, { useState } from 'react';
import axios from 'axios';
import * as api from '../../redux/api';
import { useDispatch, useSelector } from 'react-redux';
import { MenuItem, Button, Container } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { alpha, } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
// import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import PostAddIcon from '@mui/icons-material/PostAdd';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import {  Link,} from 'react-router-dom';
import * as checkToken from '../../constants';
import * as checkLogin from '../../constants/index';
import stringAvatar from '../avatars';
import Avatar from '@mui/material/Avatar';
import { userState$ } from '../../redux/selectors'

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
    height: '64px',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.8),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 1),
    },
    marginRight: theme.spacing(2),
    marginLeft: 3,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 21),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      justifyContent: 'space-between',
    },
  },
  menuDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
   
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  menuMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  userIcon:{
    marginRight: '5px',
    fontSize: '1.25rem'
  },
  selected:{
    color: '#ff8000 !important',
  },
  colorBlack: {
    color: 'red',
    
  }
}));

export default function Header() {
  const classes = useStyles();
  const [isLogin,setIsLogin] = useState(checkLogin.isLogin);
  const logOut = async () => {
    try {
      const response = await axios({
        method: "get",
        url: `${api.URL}/api/logout`,
        params: {"token":`${checkToken.token}`},
        headers: {"Content-Type" : "application/json"},
      })
      if (response.data.success===true) {
        window.location.reload();
        alert("Bạn đã đăng xuất thành công")
      }
    } 
    catch (error) {
      console.log(error);
    }
  }
  const handleAccountLogOut = () => {
    localStorage.setItem('isLogin',false)
    logOut();
    localStorage.removeItem('accessToken')
    setIsLogin(false);
    handleAccountMenuClose();
  }
  
  // set up menu pages list  in mobile
  const [MenuAnchorEl, setMenuAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(MenuAnchorEl);
  const handleMenuOpen = (event) => {
    setMenuAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setMenuAnchorEl(null);

  };
  const menuId = 'primary-search-menu';
  const renderMenu = (
    <Menu
      anchorEl={MenuAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}><Link to="/">Trang chủ</Link></MenuItem>
      <MenuItem onClick={handleMenuClose}><Link to="/community">Cộng đồng</Link></MenuItem>
      <MenuItem onClick={handleMenuClose}><Link to="/blogs">Bài Viết</Link></MenuItem>
    </Menu>
  );

  //set up user account menu
  const [anchorEl, setAnchorEl] = React.useState(null);
  const isAccountMenuOpen = Boolean(anchorEl);
  const handleAccountMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleAccountMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };
  const AccountMenu = 'primary-search-account-menu';
  const renderAccountMenu  = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={AccountMenu}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isAccountMenuOpen}
      onClose={handleAccountMenuClose}
    >.
      <MenuItem onClick={handleAccountMenuClose}><SettingsApplicationsIcon className={classes.userIcon} />Quản Lý</MenuItem>
      <MenuItem onClick={handleAccountMenuClose}><PostAddIcon className={classes.userIcon} />Đăng bài viết</MenuItem>
      <MenuItem onClick={handleAccountLogOut}><ExitToAppIcon className={classes.userIcon} /> Đăng Xuất</MenuItem>
    </Menu>
  );

  // set up menu user parent in mobile
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };
  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton onClick={handleMobileMenuClose} aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p onClick={handleMobileMenuClose}>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton onClick={handleMobileMenuClose} aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p onClick={handleMobileMenuClose}>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleAccountMenuOpen}>
        <IconButton onClick={handleMobileMenuClose}
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
        <Avatar {...stringAvatar('Kent Dodds')} />
        </IconButton>
        <p onClick={handleMobileMenuClose}>Profile</p>
      </MenuItem>
    </Menu>
  );

  //set up style for select menu, select
  const [selectedType,setSelectedType] = React.useState('');
  const dispatch = useDispatch();
  const dataUser = useSelector(userState$);
  return (
    <div className={classes.grow}>
      <AppBar position="fixed" color="default">
      <Container>
        <Toolbar style={{paddingLeft: '6px'}}>
          <div className={classes.menuDesktop}>
            <Link className={selectedType==='homepage' ? classes.selected : ''}
              onClick = {() => setSelectedType('homepage')} to="/">
              <MenuItem>
                Tiếng Nhật IT
              </MenuItem>
            </Link>
            <Link className={selectedType==='community' ? classes.selected : ''}
              onClick = {() => setSelectedType('community')}
              to="/community">
              <MenuItem>
                Cộng Đồng
              </MenuItem>
            </Link>   
            <Link className={selectedType==='blogs' ? classes.selected : ''}
              onClick = {() => setSelectedType('blogs')}
              to="/blogs">
              <MenuItem>
                Bài viết
              </MenuItem>
            </Link>
          </div>
          <div className={classes.menuMobile}>
            <IconButton
            aria-label="show more"
            aria-controls={menuId}
            aria-haspopup="true"
            onClick={handleMenuOpen }
            color="inherit"
            >
                <MenuIcon />
            </IconButton>
          </div>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <div className={classes.grow} />
          { isLogin==='true' ? (
          <div>
            <div className={classes.sectionDesktop}>
              <IconButton aria-label="show 4 new mails" color="inherit">
                <Badge badgeContent={4} color="secondary">
                  <MailIcon />
                </Badge>
              </IconButton>
              <IconButton aria-label="show 17 new notifications" color="inherit">
                <Badge badgeContent={17} color="secondary">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls={AccountMenu}
                aria-haspopup="true"
                onClick={handleAccountMenuOpen}
                color="inherit"
              >
              <Avatar {...stringAvatar(`${dataUser.name}`)}/>
              </IconButton>
            
            </div>
            <div className={classes.sectionMobile}>
              <IconButton
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </div>
          </div>
          ) : (
            <div>
              <Link to="/signUp">
                <Button className={selectedType==='signup' ? classes.selected : ''}
                  onClick = {() => setSelectedType('signup')}>  
                    Đăng Ký 
                </Button>
              </Link>
              <Link to="/logIn">
                <Button className={selectedType==='signin' ? classes.selected : ''}
                  onClick = {() => setSelectedType('signin')}>
                  Đăng Nhập
                </Button>
              </Link>
            </div>
          )} 
        </Toolbar>
        </Container>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
      {renderAccountMenu}
    </div>
  );
}