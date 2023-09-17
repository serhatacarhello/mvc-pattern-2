import { useState } from 'react'
import PostView from './PostView'
import PostModel from './PostModel'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function PostController() {
  const navigate = useNavigate()
  const newPost = new PostModel()
  const [formData, setFormData] = useState(newPost)
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.user || !formData.title || !formData.body) return

    axios
      .post('http://localhost:3030/posts', formData)
      .then((res) => {
        if (res) navigate('/')
      })
      .catch((err) => console.log('err', err))
  }

  return (
    <PostView
      formData={formData}
      setFormData={setFormData}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  )
}
