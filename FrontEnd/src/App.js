import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import HomePage from './pages/homePage';
import Community from './pages/community';
import Blogs from './pages/blogs';
import SignIn from './pages/signIn';
import SignUp from './pages/signUp';
import NotFound from './pages/notFound';
import About from './pages/about';
import Conditions from './pages/conditions';
import AdminPage from './pages/adminPage';
import Contacts from './pages/contacts'

let isAdmin = true;
function App() {
  return (
    <BrowserRouter>
      <Header />
        <Switch>
          <Route path="/" component={HomePage} exact></Route>
          <Route path="/congdong" component={Community}></Route>
          <Route path="/baiviet" component={Blogs}></Route>
          <Route path="/dangnhap" component={SignIn}></Route>
          <Route path="/dangky" component={SignUp}></Route>
          <Route path="/gioithieu"><About/></Route>
          <Route path="/dieukhoan"><Conditions/></Route>
          <Route path="/lienhe"><Contacts/></Route>
          <Route path="/adminpage">{isAdmin ? <AdminPage/> : <NotFound/>}</Route>
          <Route><NotFound/></Route>
        </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
