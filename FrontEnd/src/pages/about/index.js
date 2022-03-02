import React from 'react';
import { Container, Typography, Grid, Button, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Link } from 'react-router-dom';
import itemData from './itemData.js';
import OurTeamCards from '../../components/cards/ourteamCards'
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
        textAlign: 'center',
        lineHeight: '1.6',
        fontFamily: 'Inter',
        fontWeight: '500',
        paddingLeft: '10px',
        paddingRight: '10px',
        paddingTop: '15px',
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

function srcset(image, size, rows = 1, cols = 1) {
    return {
      src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
      srcSet: `${image}?w=${size * cols}&h=${
        size * rows
      }&fit=crop&auto=format&dpr=2 2x`,
    };
  }

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
                        Đem lại cho cộng đồng IT sử dụng tiếng Nhật những chia sẽ hữu ích.
                    </Box>
                    <Box fontSize={{ xs: 'body2.fontSize', sm: 'h6.fontSize' }}>
                        Với một đội ngũ có kinh nghiệm về IT và tiếng Nhật;
                        kết hợp với một cộng đồng lớn những người đang học tập, làm việc đang sữ dụng tiếng Nhật trong lĩnh vực IT.
                        Chúng tôi hy vọng sẽ mang lại những đóng góp, trợ giúp, những chia sẽ hữu ích cho bạn.
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} className={classes.head}>
                    {Ripple(
                        <p className={classes.appendix}>
                            how to
                        </p>
                    )}
                    <Box className={classes.solgan} fontSize={{ xs: 'h6.fontSize', sm: 'h5.fontSize', md: 'h4.fontSize' }}>
                       Hoạt động dựa trên tiêu chí chia sẽ nhiều hơn thành công lơn hơn.
                    </Box>
                    <Box fontSize={{ xs: 'body2.fontSize', sm: 'h6.fontSize' }}>
                        Đến với Team 2 IT bạn có thể tra cứu các từ vựng theo từng chủ đề với những ví dụ minh họa cụ thể.
                        Bạn có thể like, share các chủ để yêu thích. Bạn cũng có thể chia sẽ những thắc mắc cũng như hiểu biết của mình 
                        thông qua những bài đăng.
                    </Box>
                </Grid>
            </Grid>
            <div className={classes.root}>
                <ImageList className={classes.img} rowHeight={160} cols={4}>
                    {itemData.map((item) => (
                        <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                            <img
                                {...srcset(item.img, 160, item.rows, item.cols)}
                                alt={item.title}
                                loading="lazy"
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
            </div>  
            <div className={classes.root}>
                <div>
                    <p className={classes.appendix}>
                        our team
                    </p>
                </div>
                <div>
                    <Typography className={classes.solgan} variant='h3' >
                        Đội ngũ xây dựng Team2 IT.
                    </Typography>
                </div>
                <Box fontSize={{ xs: 'body2.fontSize', sm: 'h5.fontSize' }}>
                   Đội ngũ của Team 2 IT gồm những thành viên tài năng, vui tính, năng động. Chúng tôi luôn mong muốn sự gắn kết từ các bạn.
                   Lưu ý: Nhấn vào thành viên để biết được bí mật của Team 2 IT!
                </Box>
                <div className={classes.btn} >
                    <Link to="/lienhe">
                        <Button variant="contained" color="primary" >
                            Contacts us   
                            <ArrowRightAltIcon className={classes.icon} />
                        </Button>
                    </Link> 
                </div>
            </div>
            <div className={classes.ourteam}>
                <OurTeamCards/>
            </div>
        </Container>
    )
}
