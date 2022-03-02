import { getPosts, getType} from '../actions/posts';
import { INIT_STATE } from '../state';

export default function Posts(state = INIT_STATE.postsData, action) {
    switch (action.type) {
      case getType(getPosts.getPostsRequest):
        return {
          ...state,
          isLoading: true,
        };
      case getType(getPosts.getPostsSuccess):
        return {
          ...state,
          isLoading: false,
          data: action.payload,
        };
      case getType(getPosts.getPostsFailure):
        return {
          ...state,
          isLoading: false,
        };
    
      default:
          return state;
      }
  }