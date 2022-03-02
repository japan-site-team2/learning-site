import React from 'react';
import axios from 'axios';
import { useEffect,useState } from 'react';
import { Container, Grid, Typography, Box } from '@mui/material';
import Fab from '@mui/material/Fab';
import VolumeUpOutlinedIcon from '@mui/icons-material/VolumeUpOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import Rating from '@mui/material/Rating';
import { red } from '@mui/material/colors';
import { useParams } from 'react-router';
function BasicRating() {
    const [value, setValue] = React.useState(1);
    const { _id } = useParams();
    const [vocabularyData, setVocabularyData] = useState('');
    useEffect(() => {
        const URL='http://127.0.0.1:5000';
        const getData = async () => {
          try {
              const response = await 
              axios.get(`${URL}/user/${_id}`);
              setVocabularyData(response.data);
          } catch (error) {
            console.error(error);
          }
        };
        getData();
      }, [_id]);
    return (
      <Box
        sx={{
          '& > legend': { mt: 2 },
        }}
      >
        <Rating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
      </Box>
    );
  }

export default function Vocabulary() {
    return (
        <Container sx={{minHeight: '584px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Grid container>
                <Grid item sm={8}>
                    <Box sx={{border: '1px solid black', padding: '20px',height: '100%'}}>
                        <Typography variant="h5" sx={{lineHeight: '2', color: red['A700']}}>Từ Vựng</Typography>
                        <Typography>プログラミング言語</Typography>
                        <Typography variant="h5" sx={{lineHeight: '2', color: red['A700']}}>Ý nghĩa chuyên ngành</Typography>
                        <Typography variant="h6">Ngôn ngữ lập trình (programming language) là dạng ngôn ngữ được chuẩn hóa 
                        theo một hệ thống các quy tắc riêng, sao cho qua đó người lập trình có thể mô tả 
                        các chương trình làm việc dành cho thiết bị điện tử mà cả con người và các thiết bị đó đều hiểu được.</Typography>
                        <Typography variant="h5" sx={{lineHeight: '2', color: red['A700']}}>Ví dụ liên quan</Typography>
                        <Typography>プログラミング言語（プログラミングげんご、英: programming language）とは、プログラムを記述するための人工言語[1]。
                        コンピュータプログラムを書くために考案された、正確に定義された記号と規則のしくみ[2]。以前はしばしばプログラム言語と表記された.</Typography>
                    </Box>
                </Grid>
                <Grid item sm={4}>
                    <Box sx={{border: '1px solid black', borderLeft: 'none', padding: '20px', height: '100%',}}>
                        <Typography variant="h6">Đánh giá bản dịch</Typography>
                            <BasicRating/>
                        <Typography variant="h6">Thao tác</Typography>
                        <Box sx={{ '& > :not(style)': { m: 1 } }}>
                            <Fab color="primary" aria-label="add">
                                <VolumeUpOutlinedIcon />
                            </Fab>
                            <Fab style={{ backgroundColor: '#f50057' }} aria-label="add">
                                <PlaylistAddIcon />
                            </Fab>
                            <Fab disabled aria-label="like">
                                <FavoriteIcon />
                            </Fab>
                            <Fab color="secondary"  aria-label="edit">
                                <ShareOutlinedIcon />
                            </Fab>
                        </Box>
                        <Box>
                            <Typography variant="h6">Bình Luận</Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Container>   
    )
}
