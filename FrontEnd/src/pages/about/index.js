import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { Grid, makeStyles} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import itemData from './itemData.js';
import OurTeamCards from '../../components/cards/ourteamCards'
import Box from '@material-ui/core/Box';
import { Link } from 'react-router-dom';
import Ripple from '../../components/animations/ripple'

const useStyles = makeStyles((theme) => ({
    root:{
        flexWrap: 'wrap',
        justifyContent: 'center',
        maxWidth: '100%',
        marginTop: '40px',
        textAlign: 'center',
        lineHeight: '1.6',
        fontFamily: 'Inter',
        fontWeight: '500',
    },
    head:{
        flexWrap: 'wrap',
        justifyContent: 'center',
        maxWidth: '100%',
        marginTop: '20px',
        textAlign: 'center',
        lineHeight: '1.6',
        fontFamily: 'Inter',
        fontWeight: '500',
        paddingLeft: '10px',
        paddingRight: '10px',
        
    },
    appendix:{
        margin: '0px 0px 0.35em',
        fontSize: '1rem',
        lineHeight: '1.5',
        color: 'rgb(100, 110, 115)',
        textTransform: 'uppercase',
        fontWeight: '500',
    },
    solgan:{
        margin:'0px 0px 10px 0px ',
        lineHeight: '1.2',
        fontWeight: '700',
        color: 'rgb(45, 55, 72)',
    },
    img:{
        boxShadow: '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)', 
    },
    btn:{
        marginTop: '20px',
    },
    icon:{
        marginLeft: '5px'
    },
    imageList: {
        width: 500,
        height: 450,
    },
    ourteam: {
        backgroundColor: 'rgb(240, 242, 245)', 
        padding: '10px',
        marginTop: '40px'
    },
}))


export default function About() {
    const classes = useStyles();
    return (
        <Container>
            <Grid container>
              <Grid item xs={12} sm={6} className={classes.head}>
                    {Ripple(
                        <p className={classes.appendix}>
                            about us
                        </p>
                    )}
                    <Box className={classes.solgan} fontSize={{ xs: 'h6.fontSize', sm: 'h5.fontSize', md: 'h4.fontSize' }}>
                        Ch??ng t??i ??em l???i cho c???ng ?????ng IT s??? d???ng ti???ng Nh???t nh???ng chia s??? h???u ??ch.
                    </Box>
                    <Box fontSize={{ xs: 'body2.fontSize', sm: 'h6.fontSize' }}>
                        V???i m???t ?????i ng?? c?? kinh nghi???m v??? IT v?? ti???ng Nh???t;
                        k???t h???p v???i m???t c???ng ?????ng l???n nh???ng ng?????i ??ang h???c t???p, l??m vi???c ??ang s??? d???ng ti???ng Nh???t trong l??nh v???c IT.
                        Ch??ng t??i hy v???ng s??? mang l???i nh???ng ????ng g??p, tr??? gi??p, nh???ng chia s??? h???u ??ch cho b???n.
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} className={classes.head}>
                    {Ripple(
                        <p className={classes.appendix}>
                            how to
                        </p>
                    )}
                    <Box className={classes.solgan} fontSize={{ xs: 'h6.fontSize', sm: 'h5.fontSize', md: 'h4.fontSize' }}>
                        <rotateInDownLeftDiv>Ch??ng t??i ho???t ?????ng d???a tr??n ti??u ch?? chia s??? nhi???u h??n th??nh c??ng l??n h??n.</rotateInDownLeftDiv>
                    </Box>
                    <Box fontSize={{ xs: 'body2.fontSize', sm: 'h6.fontSize' }}>
                        ?????n v???i Team 2 IT b???n c?? th??? tra c???u c??c t??? v???ng theo t???ng ch??? ????? v???i nh???ng v?? d??? minh h???a c??? th???.
                        B???n c?? th??? like, share c??c ch??? ????? y??u th??ch. B???n c??ng c?? th??? chia s??? nh???ng th???c m???c c??ng nh?? hi???u bi???t c???a m??nh 
                        th??ng qua nh???ng b??i ????ng.
                    </Box>
                </Grid>
            </Grid>
            <div className={classes.root}>
                <ImageList className={classes.img} rowHeight={220} cols={4}>
                    {itemData.map((item) => (
                    <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                        <img src={item.img} alt={item.title} />
                    </ImageListItem>
                    ))}
                </ImageList>
            </div>  
            <div className={classes.root} xs={12} sm={3} spacing={1}>
                <div>
                    <p className={classes.appendix}>
                        our team
                    </p>
                </div>
                <div>
                    <Typography className={classes.solgan} variant='h3' >
                        ?????i ng?? x??y d???ng Team2 IT.
                    </Typography>
                </div>
                <Box fontSize={{ xs: 'body2.fontSize', sm: 'h5.fontSize' }}>
                   ?????i ng?? c???a Team 2 IT g???m nh???ng th??nh vi??n t??i n??ng, vui t??nh, n??ng ?????ng. Ch??ng t??i lu??n mong mu???n s??? g???n k???t t??? c??c b???n.
                   L??u ??: Nh???n v??o th??nh vi??n ????? bi???t ???????c b?? m???t c???a Team 2 IT!
                </Box>
                <Link to="/lienhe">
                    <Button className={classes.btn} variant="contained" color="primary" >
                        Contacts us   
                        <ArrowRightAltIcon className={classes.icon} />
                    </Button>
                </Link> 
            </div>
            <div className={classes.ourteam}>
                <OurTeamCards/>
            </div>
        </Container>
    )
}
