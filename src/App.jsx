import {PostsProvider} from './context/PostsContext.jsx';
import PostList from './components/PostList.jsx';
import './App.css'

function App() {
  return (
    <div className="App">
      <h1>Posts Feed</h1>
      <PostsProvider>
        <PostList />
      </PostsProvider>
    </div>
  )
}
export default App