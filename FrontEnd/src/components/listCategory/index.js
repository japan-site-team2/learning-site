import * as React from 'react';
import { MenuList, MenuItem, Menu, IconButton} from '@mui/material';
import ViewListIcon from '@mui/icons-material/ViewList';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../redux/actions/categories';
import { categoriesState$ } from '../../redux/selectors';

export default function ListCategory() {
  const dispatch = useDispatch();
  const categories = useSelector(categoriesState$);
  const [selectedIndex, setSelectedIndex] = React.useState(null);
  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
    setMobileMoreAnchorEl(null);
  };
  React.useEffect(() => {
    dispatch(actions.getCategories.getCategoriesRequest());
  }, [dispatch]);
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
    <div>
      <IconButton
        size="large"
        aria-label="show more"
        aria-controls={mobileMenuId}
        aria-haspopup="true"
        onClick={handleMobileMenuOpen}
        color="inherit"
      >
        <ViewListIcon sx={{ fontSize: 55}} />
      </IconButton>
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        id={mobileMenuId}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={isMobileMenuOpen}
        onClose={handleMobileMenuClose}
      > 
        <MenuItem 
          sx={{textAlign: 'center', cursor: 'default', color:"#3f51b5", fontSize: 20}}>
            Danh sách chủ đề 
        </MenuItem> 
        <MenuList
          sx={{
            minWidth: '200px',
            bgcolor: 'background.paper',
            position: 'relative',
            overflow: 'auto',
            maxHeight: 600,
          }}
        >
          {categories.map((item,index) => ( 
            <MenuItem
              onClick={handleListItemClick}
              selected={selectedIndex === index}
              key={index}
             sx={{paddingLeft: '30px',fontSize: 18}}
            >
              {item.name}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </div>
  );
  return (
    <div>
      {renderMobileMenu}
    </div>
  );
}
