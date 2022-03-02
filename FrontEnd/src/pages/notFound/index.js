import React from 'react';
import { Container,Button, Typography} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    page: {
        minHeight: '584px',
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'center',
        height: '100%',
        alignItems: 'center',
    },
    btn: {
        marginTop:'40px',
    },
    link:{
        color: 'white',
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
                    <div>
                        <Typography variant="h1">404 Error</Typography>
                        <Typography variant="h3">Trang này không tồn tại!</Typography>
                        <Typography variant="h5" color="s">
                            Nếu bạn cho rằng đây là vấn đề của chúng tôi, vui lòng cho chúng tôi biết. 
                            <Link to="/contacts" style={{color: 'blue'}}>Liên hệ.</Link>
                        </Typography>
                    </div>
                    <div className={classes.btn}>
                        <Button variant="contained">
                            <Link className={classes.link} to="/">Quay lại trang chủ.</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </Container>
    )
}
