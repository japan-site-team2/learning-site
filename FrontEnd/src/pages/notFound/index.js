import React from 'react';
import { Container,Button, Link, makeStyles,Typography} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    page: {
       display: 'flex',
       justifyContent: 'center',
       textAlign: 'center',
       height: '537px',
       alignItems: 'center',
    },
    btn: {
        marginTop:'20px',
    },
    link:{
        '&:hover': {
            textDecoration: 'none'
        },
    }
}))
export default function Notfound() {
    const classes=useStyles();
    return (
        
        <Container>
            <div className={classes.page}>
            <div>
                <Typography variant="h1">404 Error</Typography>
                <Typography variant="h3">Trang này không tồn tại!</Typography>
                <Typography variant="h5" color="s">
                    Nếu bạn cho rằng đây là vấn đề của chúng tôi, vui lòng cho chúng tôi biết. 
                    <Link href="/gioithieu">Liên hệ</Link>
                </Typography>
                <Button variant="contained" className={classes.btn}>
                    <Link className={classes.link} color="white" href="/">Quay lại trang chủ.</Link>
                </Button>
            </div>
            </div>
        </Container>
    
    )
}
