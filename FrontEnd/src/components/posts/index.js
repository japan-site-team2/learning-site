import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../redux/actions/posts';
import { postsState$ } from '../../redux/selectors';
import Post from '../../components/posts/post/index'
import OurTeam from '../../components/cards/ourteamCards/ourTeam';

export default function Posts() {
  const dispatch = useDispatch();
  const posts = useSelector(postsState$);
  React.useEffect(() => {
    dispatch(actions.getPosts.getPostsRequest());
  }, [dispatch]);
  return (
    <div>
      {posts.map((post)=>(
        <Post key={post.name} namePost={post.name}/>
        ))}
      {OurTeam.map((post)=>(
        <Post key={post.name} userName={post.name} userAvatar={post.avatar}  />
        ))}
    </div>
  );
}
