import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './assets/style.scss'
import ListController from './pages/list/ListController'
import PostController from './pages/post/PostController'
import Header from './components/header'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index path="/" element={<ListController />} />
        <Route path="add-post" element={<PostController />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
