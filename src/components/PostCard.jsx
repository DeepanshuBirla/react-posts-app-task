import {useContext} from 'react'
import { PostsContext } from '../context/PostsContext.jsx'

const PostCard = ({post}) => {
  const {removePost} = useContext(PostsContext) 

  return (
    <div className="post-card">
      <button className="close-btn" onClick={() => removePost(post.id)}>
        X
        </button>
        <img 
        src={'https://picsum.photos/seed/${post.id}/300/180'}
        alt={post.title}
        loading="lazy"
        />
        <h3>{post.title}</h3>
        <p>{post.body.substring(0, 90)}...</p>
        <small style={{color: '#777'}}>Mon, 21 Dec 2020 14:57 GMT</small>
        </div>
  )
}
export default PostCard