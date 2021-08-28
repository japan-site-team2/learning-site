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
        border: '1px solid rgba(100, 110, 115)'
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
                    <div>
                        <p className={classes.appendix}>
                            ABOUT US
                        </p>
                    </div>
                    <Box className={classes.solgan} fontSize={{ xs: 'h6.fontSize', sm: 'h5.fontSize', md: 'h4.fontSize' }}>
                        Chúng tôi đem lại cho cộng đồng IT sử dụng tiếng Nhật những chia sẽ hữu ích.
                    </Box>
                    <Box fontSize={{ xs: 'body2.fontSize', sm: 'h6.fontSize' }}>
                        Với một đội ngũ có kinh nghiệm về IT và tiếng Nhật;
                        kết hợp với một cộng đồng lớn những người đang học tập, làm việc đang sữ dụng tiếng Nhật trong lĩnh vực IT.
                        Chúng tôi hy vọng sẽ mang lại những đóng góp, trợ giúp, những chia sẽ hữu ích cho bạn.
                    </Box>
                </Grid><Grid item xs={12} sm={6} className={classes.head}>
                    <div>
                        <p className={classes.appendix}>
                            how to
                        </p>
                    </div>
                    <Box className={classes.solgan} fontSize={{ xs: 'h6.fontSize', sm: 'h5.fontSize', md: 'h4.fontSize' }}>
                        Chúng tôi hoạt động dựa trên tiêu chí chia sẽ nhiều hơn thành công lơn hơn.
                    </Box>
                    <Box fontSize={{ xs: 'body2.fontSize', sm: 'h6.fontSize' }}>
                        Đến với Team 2 IT bạn có thể tra cứu các từ vựng theo từng chủ đề với những ví dụ minh họa cụ thể.
                        Bạn có thể like, share các chủ để yêu thích. Bạn cũng có thể chia sẽ những thắc mắc cũng như hiểu biết của mình 
                        thông qua những bài đăng.
                    </Box>
                </Grid>
            </Grid>
            <div className={classes.root}>
                <ImageList rowHeight={220} cols={4}>
                    {itemData.map((item) => (
                    <ImageListItem className={classes.img} key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
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
                        Đội ngũ xây dựng Team2 IT.
                    </Typography>
                </div>
                <Box fontSize={{ xs: 'body2.fontSize', sm: 'h5.fontSize' }}>
                   Đội ngũ của Team 2 IT gồm những thành viên tài năng, vui tính, năng động. Chúng tôi luôn mong muốn sự gắn kết từ các bạn.
                   Lưu ý: Nhấn vào thành viên để biết được bí mật của Team 2 IT!
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
