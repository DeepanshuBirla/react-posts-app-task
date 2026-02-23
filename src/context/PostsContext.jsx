import { createContext,useState,useEffect } from 'react'
export const PostsContext = createContext()

export const PostsProvider = ({children}) => {
    const [posts,setPosts] = useState([])
    const [loading,setLoading] = useState(true)
    const [currentPage,setCurrentPage] = useState(1)

    useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => {
          setPosts(data)
          setTimeout(() => {
            setLoading(false)
        },5000)
        })
        .catch(err => {
          console.error('Fetch error:',err)
          setLoading(false)
        })
    }, [])

    const removePost = (id) => {
      setPosts(prev => {
        const newPosts = prev.filter(p => p.id !== id)
        const newTotalPages = Math.ceil(newPosts.length / 6)
        if (currentPage > newTotalPages && newTotalPages > 0) {
          setCurrentPage(newTotalPages)
        }
        return newPosts
      })
    }

    return (
      <PostsContext.Provider value={{posts,loading,currentPage,setCurrentPage,removePost}}>
        {children}
      </PostsContext.Provider>
    )
  }