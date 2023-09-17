import ModalController from '../modal/ModalController'

export default function SinglePostView(props) {
  const { post, showModal, setShowModal } = props
  return (
    <div>
      <div key={post.id} className="post">
        <h3>{post.title}</h3>
        <p>{post.body}</p>
        <p className="user">{post.user}</p>
        <button onClick={() => setShowModal(!showModal)} className="btn">
          {showModal ? 'Hide' : 'Show'}
        </button>
        {showModal && <ModalController post={post} />}
      </div>
    </div>
  )
}
