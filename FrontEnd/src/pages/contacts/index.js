import React from 'react'
import { useState } from 'react'
import PropTypes from 'prop-types';
import { Container, Grid, TextField, Box, Button, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(1),
        display: 'flex',    
        flexDirection: 'column',
        alignItems: 'center',
        paddingBottom: theme.spacing(2),
        minHeight: '552px',
      },
    message: {
        border: '1px solid black', 
        borderRadius: '7px',  
    },
    contact: {
        margin: '20px',  
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'center',
    }

}))
function Item(props) {
    const {sx, ...other} = props;
    return (
        <Box sx={{ p: 1, m: 1,...sx}}
        {...other}
        />
    )
}

Item.propTypes = {
    sx: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object])),
      PropTypes.func,
      PropTypes.object,
    ]),
  };

export default function Contacts() {
    const [details,setDetails] = useState({name:'',email: '', message: ''})
    const classes = useStyles();
    return (
        <div>
            <div style={{backgroundColor: '#f7f9fc'}}>
                <Container style={{padding: '5px', paddingLeft: '10px', paddingTop: '20px'}} >
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                            <Box component="form" noValidate className={classes.message} sx={{ mt: 1 ,display: 'flex', flexDirection: 'column',p:1, m:1 }}>
                                <Item><Typography variant="h4" >Message</Typography></Item>
                                <Item>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        label="Họ và tên"
                                        autoComplete="lname"
                                        onChange={e => setDetails({...details,name:e.target.value})}
                                        value={details.name}
                                    />
                                </Item>
                                <Item>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        label="Địa chỉ email"
                                        autoComplete="email"
                                        onChange={e => setDetails({...details,email:e.target.value})}
                                        value={details.email}
                                    />
                                </Item>
                                <Item>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        rows="5"
                                        label="Message"
                                        autoComplete="message"
                                        onChange={e => setDetails({...details,message:e.target.value})}
                                        value={details.message}
                                    />
                                </Item>
                                <Item><Button type="submit" fullWidth variant="contained" color="primary" sx={{mt: 3, mb: 2}}> Submit</Button></Item>
                            </Box>
                        </Grid> 
                        <Grid item xs={12} sm={6} >
                            <Box component="form" noValidate  sx={{ mt: 3 ,display: 'flex', flexDirection: 'column',p:1, m:1}}>
                                <Item><Typography variant="h4" >Những câu hỏi thường gặp.</Typography></Item>
                                <Item>
                                    <Accordion>
                                        <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                        >
                                            <Typography>Accordion 1</Typography>
                                            </AccordionSummary>
                                        <AccordionDetails>
                                        <Typography>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                                        </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                </Item>
                                <Item>
                                    <Accordion>
                                        <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                        >
                                            <Typography>Accordion 1</Typography>
                                            </AccordionSummary>
                                        <AccordionDetails>
                                        <Typography>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                                        </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                </Item>
                                <Item>
                                    <Accordion>
                                    <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                    >
                                        <Typography>Accordion 1</Typography>
                                        </AccordionSummary>
                                    <AccordionDetails>
                                    <Typography>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                                    </Typography>
                                    </AccordionDetails>
                                </Accordion>
                                </Item>
                                <Item>
                                    <Accordion>
                                        <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                        >
                                            <Typography>Accordion 1</Typography>
                                            </AccordionSummary>
                                        <AccordionDetails>
                                        <Typography>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                                        </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                </Item>
                            </Box>
                        </Grid> 
                    </Grid>
                    <Grid container className={classes.contact}>
                        <Grid item sm={10}>
                            <Box sx={{mt: 1, display: 'flex', justifyContent: 'space-between'}}>
                                <Typography variant='h6'>Call us: 03666272828</Typography>
                                <Typography variant='h6'>Emaill us: tiengnhatIt@gmail.com</Typography> 
                                <Typography variant='h6'>Address: quang tri, viet nam</Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </div>   
        </div>  
    )
}
