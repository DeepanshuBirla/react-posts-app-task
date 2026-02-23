import {useContext} from 'react'
import { PostsContext } from '../context/PostsContext.jsx'
import PostCard from './PostCard.jsx'
import Pagination from './Pagination.jsx'

const POSTS_PER_PAGE = 6

const PostList = () => {
  const {posts,loading,currentPage} = useContext(PostsContext)

  if (loading) {
    return <div className="loading">Loading posts...</div>
  }

  const indexOfLast = currentPage * POSTS_PER_PAGE
  const indexOfFirst = indexOfLast - POSTS_PER_PAGE
  const currentPosts = posts.slice(indexOfFirst, indexOfLast) 

  const totalPages = math.ceil(posts.length / POSTS_PER_PAGE)
  return (
    <>
      <div className="card-container">
        {currentPosts.map(post => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
      {totalPages > 1 && (
      <Pagination
      currentPage={currentPage}
      totalPages={currentPage}
      setCurrentPage={setCurrentPage}
      />
      )}
    </>
  )
}
       
    export default PostList