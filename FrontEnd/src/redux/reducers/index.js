import { combineReducers } from 'redux';
import Categories from './categories'
import Posts from './posts'
import loadUser from './getUser'
export default combineReducers({
  Categories, Posts,loadUser
});