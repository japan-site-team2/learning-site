import React from 'react';
import { Container, Grid, Typography,Box, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom'
const useStyles = makeStyles({
    root: {
        marginBottom: '22px',
        color: 'rgb(45, 55, 72)',
        fontFamily: 'Inter, sans-serif',
        fontWeight: 400,
        fontSize: '1rem',
        lineHeight: 1.2,
        backgroundColor: 'rgb(255, 255, 255)',
    },
    page: {
        marginTop: '20px',
        boxShadow: 'rgb(140 152 164 / 18%) 0px 10px 40px 10px',
        borderRadius: '8px',
    },
    head:{
        backgroundColor: 'rgb(25, 118, 210)',
        borderRadius: '8px',  
        textAlign: 'center',
    },
    headInner: {
        fontFamily: 'Inter, sans-serif',
        padding: '30px',
        color: 'rgb(255, 255, 255)',
        fontWeight: 700,
        lineHeight: 1,
    },
    headArc:{
        width: '100%',
        marginBottom: '-8px',
        transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    },
    text: {
        paddingLeft: '32px',
        fontSize: 18,
    },
    noticePlace:{  
        padding: '20px',
    },
    notice: {
        position: 'sticky',
        top: '100px',
        backgroundColor: 'rgb(255, 255, 255)',
        color: 'rgb(45, 55, 72)',
        border: '1px solid rgba(0, 0, 0, 0.12)',
        borderRadius: '4px',
        padding: '20px',
    },
    btn:{
        margin: 'auto',
        marginTop: '15px',
    },
})

export default function Terms() {

    const classes = useStyles();
    return (
        <div className={classes.root}>
           <Container>
            <div className={classes.page}>
                <div className={classes.head}>
                    <Typography className={classes.headInner} variant="h3">Chính sách, điều khoản.</Typography>
                    <Typography variant="body1" color="primary">Cập nhập vào tháng 8 năm 2021.</Typography>
                    <svg className={classes.headArc} preserveAspectRatio="none" 
                    xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 1920 80.1">
                    <path fill="#fff" d="M0,0c0,0,934.4,93.4,1920,0v80.1H0L0,0z"></path></svg>
                </div>
                <Grid container>
                    <Grid item className={classes.text} xs={12} sm={9}>
                        <Typography variant='h5'>1. Miễn phí</Typography>
                        <p>Team 2 là website cung cấp thông tin học tiếng Nhật hoàn toàn miễn phí.</p>
                        <Typography variant='h5'>2. Đảm bảo hợp pháp</Typography>
                        <p>Tại đây các bạn vui lòng không gửi lên các thông tin liên quan đến tuyên 
                        truyền bất hợp pháp hoặc các nội dung xuyên tạc đến các tổ chức cá nhân khác, 
                        vui lòng chỉ trao đổi trong phạm vi liên quan đến việc học tiếng Nhật.
                        Các thành viên có hành vi, vi phạm đến chính sách của chúng tôi sẽ buộc chúng tôi phải hủy tài khoản của bạn.</p>
                        <Typography variant='h5'>3. Bảo mật thông tin khách hàng</Typography>
                        <p>Chúng tôi cam kết bảo mật tất cả các thông tin như email,.. 
                        những thông tin này chúng tôi chỉ sử dụng cho mục đích đăng nhập, 
                        ngoài ra sẽ không sử dụng cho bất kỳ mục đích nào khác.
                        Chúc các bạn học tập tốt !</p>
                    </Grid>
                    <Grid item sm={3} className={classes.noticePlace}>
                        <Box className={classes.notice}>
                            <Typography variant='h5'>Làm thế nào để liên hệ với chúng tôi?</Typography>
                            <Typography variant='body1'>Nếu bạn có bất kỳ câu hỏi hoặc thắc mắc nào về chính sách điều khoản, vui lòng liên hệ với chúng tôi.</Typography>
                            <Link to="/lienhe">
                                <Button className={classes.btn} variant="contained" color="primary" >
                                    Contacts Us   
                                </Button>
                            </Link> 
                        </Box>
                    </Grid>
                </Grid>
            </div>
           </Container>
        </div>
    )
}
