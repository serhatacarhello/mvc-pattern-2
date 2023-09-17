import { useEffect, useState } from 'react'
import ModalView from './ModalView'
import axios from 'axios'

export default function ModalController(props) {
  const { post } = props

  const [userPosts, setUserPosts] = useState([])

  useEffect(() => {
    axios
      .get(`http://localhost:3030/posts?user=${post.user}`)
      .then((res) => {
        setUserPosts(res.data)
        console.log('res', res.data)
      })
      .catch((err) => console.log('err', err))
  }, [])

  if (userPosts.length === 0) return <p>No other posts</p>

  return <ModalView userPosts={userPosts} />
}
