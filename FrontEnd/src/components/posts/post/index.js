import React from 'react'
import Typography from '@mui/material/Typography';
import { Grid,Avatar, Box} from '@mui/material'
import { styled } from '@mui/system';

const Tags = styled('div')({
    display: 'flex', flexWrap: 'wrap'
})
const Tag = styled('div')({
    background: 'hsl(205,46%,92%)', borderRadius: '3px', padding: '5px 12px',fontSize: '14px',
    margin: '5px 0', color: 'hsl(205,47%,42%)', maxWidth: '170px'
  })

export default function Post({namePost,userAvatar,userName}) {
  ;
    return (    
        <Box sx={{ borderBottom: 1, borderColor: 'divider',padding: '20px' }}> 
            <Grid container>             
                <Grid item md={2}>
                    <Grid container>
                        <Avatar src={userAvatar} />
                        <Typography variant='h6' sx={{marginLeft: '10px'}}>{userName}</Typography>
                    </Grid>
                </Grid>
                <Grid item md={10}>
                    <Typography sx={{ color: 'text.secondary' }}>キーボード có nghĩa là gì?</Typography>
                    <Tags>
                        <Tag>test</Tag>
                    </Tags>
                    <Typography variant='captio' sx={{margin: '5px'}} display="block" gutterBottom>ask 2021-10</Typography>
                </Grid>          
            </Grid>
        </Box>             
    )
}
