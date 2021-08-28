import React from 'react';
import { alpha, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import PostAddIcon from '@material-ui/icons/PostAdd';
import SettingsApplicationsIcon from '@material-ui/icons/SettingsApplications';
import {  Link,} from 'react-router-dom';
import Container from '@material-ui/core/Container';

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
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
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
    },
  },
  menuDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      marginLeft: '80px',
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
    marginRight: '5px'
  },
  selected:{
    color: '#ff8000',
  },
  colorBlack: {
    color: 'rgba(0, 0, 0, 0.87)'
  }
}));


export default function Header() {
  const classes = useStyles();
  const [isLogin, setIsLogin] = React.useState('true');
  const userInfo= isLogin;
  const handleAccountLogOut = () => {
    handleAccountMenuClose();
    setIsLogin(false);
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
      <MenuItem onClick={handleMenuClose}><Link className={classes.colorBlack} to="/">Trang chủ</Link></MenuItem>
      <MenuItem onClick={handleMenuClose}><Link className={classes.colorBlack} to="/congdong">Cộng đồng</Link></MenuItem>
      <MenuItem onClick={handleMenuClose}><Link className={classes.colorBlack} to="/baiviet">Bài Viết</Link></MenuItem>
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
          <AccountCircle />
        </IconButton>
        <p onClick={handleMobileMenuClose}>Profile</p>
      </MenuItem>
    </Menu>
  );

  //set up style for select menu, select
  const [selectedType,setSelectedType] = React.useState('');

  return (
    <div className={classes.grow}>
      <AppBar position="fixed">
      <Container>
        <Toolbar>
          <Link  onClick = {() => setSelectedType('')} to="/">
            <Typography className={classes.title} variant="h6" noWrap>
              Team 2 IT
            </Typography>
          </Link>
          <div className={classes.menuDesktop}>
            <MenuItem>
              <Link className={selectedType==='homepage' ? classes.selected : ''}
                onClick = {() => setSelectedType('homepage')} to="/">
                  Trang chủ
              </Link>
            </MenuItem>
            <MenuItem>
              <Link className={selectedType==='community' ? classes.selected : ''}
                onClick = {() => setSelectedType('community')}
                to="/congdong">
                  Cộng Đồng
              </Link>
            </MenuItem>
            <MenuItem>
              <Link className={selectedType==='blogs' ? classes.selected : ''}
                onClick = {() => setSelectedType('blogs')}
                to="/baiviet">
                  Bài viết
              </Link>
            </MenuItem>
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
          {userInfo ? (
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
                <AccountCircle />
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
              <ButtonGroup disableElevation variant="contained" color="primary">
                <Button>
                  <Link className={selectedType==='signup' ? classes.selected : ''}
                    onClick = {() => setSelectedType('signup')}
                    to="/dangky">
                      Đăng Ký
                  </Link>
                </Button>
                <Button>
                  <Link className={selectedType==='signin' ? classes.selected : ''}
                    onClick = {() => setSelectedType('signin')}
                    to="/dangnhap">
                      Đăng Nhập
                  </Link>
                </Button>
              </ButtonGroup>
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