import React from 'react';
import './index.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import HomePage from './pages/homePage';
import Community from './pages/community';
import Blogs from './pages/blogs';
import LogIn from './pages/logIn';
import SignUp from './pages/signUp';
import NotFound from './pages/notFound';
import About from './pages/about';
import Terms from './pages/terms';
import Contacts from './pages/contacts'
import CreatePost from './pages/community/posts/creatPost'
import Vocabularies from './pages/vocabularies';
import Vocabulary from './pages/vocabulary';
import { ThemeProvider , createTheme } from '@mui/material/styles';
import * as checkLogin from './constants/index'

const theme = createTheme({
  typography: {
    fontFamily: [
      '"Muli,sans-serif"',
    ].join(','),
  },
  components: {
    MuiMenuItem: {
      styleOverrides: {
        root: {
          fontSize: '1.4rem',
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          Typography: { fontSize: '2rem'},
          body2: { fontSize: '2rem'},
        },
      },
    },
  },  
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header/>
          <Switch>
            <Route path="/" exact><HomePage/></Route>
            <Route path={`/vocabularies/:_id`}><Vocabularies/></Route>
            <Route path={`/vocabulary/:_id`}><Vocabulary/></Route>
            <Route path="/community/ask" exact><CreatePost /></Route>
            <Route path="/community"><Community isLogin={checkLogin.isLogin}/></Route>
            <Route path="/blogs" component={Blogs}></Route>
            <Route path="/login"><LogIn/></Route>
            <Route path="/signup" component={SignUp}></Route>
            <Route path="/about"><About/></Route>
            <Route path="/terms"><Terms/></Route>
            <Route path="/contacts"><Contacts/></Route>
            <Route><NotFound/></Route>
          </Switch>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}
export default App;
