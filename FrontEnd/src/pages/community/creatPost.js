import React from "react";
import { styled } from '@mui/material/styles';
import { Grid, Container, Button, TextField, TextareaAutosize, Typography } from '@mui/material'
import draftToHtml from 'draftjs-to-html';
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Tag, X } from "react-feather";

// import { useDispatch, useSelector } from 'react-redux';
// import * as actions from '../../redux/action/category';
// import { categoriesState$ } from '../../redux/selectors';
// import { createPost } from '../../redux/action/posts';
// import { useHistory } from "react-router-dom"
// <div dangerouslySetInnerHTML={{__html:dataPost.content}}/>

const EditorStyle = styled('div')(({ theme }) => ({
  minHeight: '500px',
  backgroundColor:'#fff',
  boxShadow:'inset 0 4px 7px 1px #ffffff, inset 0 -5px 5px rgb(173 186 204 / 25%), 0 0 5px rgb(0 21 64 / 14%), 0 0 10px rgb(0 0 0 / 20%)',
  padding: '0px 40px',
  borderRadius: '6px',
}));
const TagForm = styled('div')(({ theme }) => ({
  maxWidth: '280px',
  borderRadius: '3px',
  background: '#f9f9f9',
  border: '1px solid #e5e5e5',
  marginBottom: '16px',
  display: 'flex',
  alignItems: 'center',
}));
const TagPost = styled('li')({
  background: 'hsl(205,46%,92%)', borderRadius: '3px', padding: '8px 12px',fontSize: '16px',
  marginBottom: '8px', color: 'hsl(205,47%,42%)',
})

export default function CreatPost() {

  // const [editorState, setEditorState] = useState(() =>
  //   EditorState.createEmpty()
  // );
  // const dispatch = useDispatch();
  // useEffect(() => {
    
  // }, [editorState]);
  const [tags, setTags] = React.useState([]);
  const [dataPost, setDataPost] = React.useState({
    title: '',
    content: '',
  });
  const [editorState, setEditorState] = React.useState(() =>
    EditorState.createEmpty()
  );
  React.useEffect(() => {
   
  }, [editorState]);
  const onChangeTitle = (e) =>{
    setDataPost({
      ...dataPost,
      title:e.target.value,
    })
  }
  const onChangeContent = (e) => {
    setDataPost({
      ...dataPost,
      content: draftToHtml(convertToRaw(editorState.getCurrentContent())),})
    }
  const addPost = (e) => {
    e.preventDefault()
    console.log(dataPost)
    console.log(draftToHtml(convertToRaw(editorState.getCurrentContent())));
  }
  // const handleClick = React.useCallback(() => {
  //   // dispatch(createPost.createPostRequest(data));
  //   console.log(dataPost);
  // }, [data, dispatch]);
  return (
    <div style={{backgroundColor: '#eaeef3', height:'100%', minHeight: '600px'}}>
      <Container>
          <Grid container>
            <Grid style={{padding: '10px 0 10px 0 '}}>
              <Typography variant="h4">Đăng câu hỏi</Typography>
            </Grid>
            <form onSubmit={addPost}>
              <EditorStyle>
                <Grid style={{padding: '20px 0 10px 0 '}}>
                  <Typography>Title</Typography>
                </Grid>
                <TextField fullWidth label="Nhập tiêu đề" id="fullWidth" value={dataPost.title} onChange={onChangeTitle} name='title'/>
                <Grid style={{padding: '20px 0 10px 0 '}}>
                  <Typography>Description</Typography>
                </Grid>
                <Grid style={{backgroundColor: '#f9f9f9', border: '1px solid #e5e5e5',}}>
                <Editor
                editorState={editorState}
                toolbarClassName="toolbarClassName"
                wrapperClassName="wrapperClassName"
                editorClassName="editorClassName"
                onEditorStateChange={setEditorState}
                onChange={onChangeContent}
                />
                </Grid>
                <TextareaAutosize style={{display: 'none'}} disabled
                  value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
                />
                <Grid style={{padding: '20px 0 10px 0 '}}>
                  <Typography>Tag</Typography>
                </Grid>
                <TagForm>
                  <Tag style={{ paddingRight: '8px', paddingLeft: '8px', color: '#7a7a7a'}} size="16" />
                  <input
                    type="text"
                    style={{ width: '100%', border: 'none', padding: '8px 0', fontSize: '16px', color: '#242424', background: 'transparent'}}    
                    placeholder="Add a tag..."
                    onKeyPress={event => {
                      if (event.key === "Enter") {
                        setTags([...tags, event.target.value]);
                        event.target.value = "";
                      }
                    }}
                  />
                </TagForm>
                <ul style={{ width: '100%', listStyleType: 'none', margin: 0, padding: 0, display: 'flex',  flexWrap: 'wrap'}}>
                  {tags.map((tag, index)=> (
                    <TagPost key={index} style={{ marginRight: index !== tags.length ?  '8px' : 0}}>
                      {tag}
                      <X
                        style={{paddingRight: '8px', paddingLeft: '8px', color: 'red'}}
                        size="16"
                        onClick={() => {
                          setTags([...tags.filter(word => word !== tag)]);
                        }}
                      />
                    </TagPost>
                  ))}
                </ul>
                <Button type="submit">Submit</Button>
              </EditorStyle>    
            </form>
          </Grid>
      </Container>
    </div>
  );
}