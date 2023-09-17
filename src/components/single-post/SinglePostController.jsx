import { useState } from 'react'
import SinglePostView from './SinglePostView'

export default function SinglePostController(props) {
  const { post } = props

  const [showModal, setShowModal] = useState(false)

  return (
    <SinglePostView
      post={post}
      showModal={showModal}
      setShowModal={setShowModal}
    />
  )
}
