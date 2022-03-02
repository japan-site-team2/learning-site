import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import Posts from '../../components/posts';
import { Box, Tabs, Tab, Typography, Button, Grid, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  page: {
    margin: '30px 0 20px 0'
  },
  header: { 
    padding: '20px',
    border: '1px solid #d50000',
    borderRadius: '5px',
    textAlign: 'center',
  },
  body: { 
      height: '100%',
      border: '1px solid rgba(92,147,187,0.17)',
      borderRadius: '7px',
      backgroundColor: '#f5f5f5',
      marginTop: '10px',  
  }
}))
function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            {children}
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
export default function Community({isLogin}) {
    const classes=useStyles();
    const [value, setValue] = React.useState(0);
    const [title, setTitle] = React.useState('Tất cả câu hỏi');
   
    const handleChange = (event, newValue) => {
        setValue(newValue);
    }
    const [button1,setButton1] =useState('outlined')
    return (
      <div className={classes.page}>
        <Container>
            <div className={classes.header}>
                <div className={classes.headerContent}>
                    <Typography variant="h4">Hãy cùng với chúng tôi tạo nên một cộng đồng gắn kết.</Typography>
                    <Typography variant="h6" style={{color:'rgba(0,0,0,0.54)'}}>Ở đây, bạn có thể đặt câu hỏi cho mọi người về các vấn đề
                        tiếng Nhật. Bạn có thể giúp đỡ người khác giải quyết vấn đề. Bạn cũng có thể chia sẽ những hiểu biết, kinh nghiệm 
                        của mình. Chúng tôi rất vui mừng và trân trọng những đóng góp của bạn!
                    </Typography> 
                    <Link to="/community">
                      <Button variant={button1} color="primary"
                          onMouseOver={ e => {setButton1('contained')}}
                          onMouseOut={e => {setButton1('outlined')}} style={{ marginTop: '20px'}}
                      >
                          Đăng Nhập
                      </Button>
                    </Link>
                </div>
                <div style={{marginTop: '30px'}}>
                    <Grid container>
                      
                    </Grid>
                    <Typography variant='h5'>Xin cám ơn sự đóng góp tích cực từ các bạn!</Typography>
                </div>
                <div style={{width: '100%',display: 'flex', justifyContent: 'center'}}>
                    <div style={{ width: '80%', borderTop: '1px solid rgba(63, 81, 181, 0.5)',borderStyle: 'double',margin: '10px',}}></div>                
                </div>
            </div>
            <div className={classes.body}>
                <Box sx={{ width: '100%' }}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding:'20px'}}>  
                        <Grid container >
                          <Grid item md={6} xs={12}>
                            <Tabs value={value} onChange={handleChange}>
                                <Tab label="all" {...a11yProps(0)} onClick= {() =>{setTitle('Tất cả câu hỏi')}}/>
                                <Tab label="new" {...a11yProps(1)} onClick= {() =>{setTitle('Câu hỏi mới nhất')}}/>
                                <Tab label="popular" {...a11yProps(2)} />
                            </Tabs>
                          </Grid>
                          <Grid item md={6} xs={12} sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}} >
                            <Typography variant="h5" color="primary">{title}</Typography>
                            <Button variant="contained" disabled={isLogin==='true' ? false : true} > <Link to="/community/ask" underline="none">Đặt câu hỏi</Link></Button>
                            
                          </Grid>
                        </Grid>
                    </Box>
                    <TabPanel value={value} index={0}>
                      <Posts/>
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        Item Two
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        Item Three
                    </TabPanel>
                </Box>
            </div> 
        </Container>
      </div>
    )
}
