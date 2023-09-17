import SinglePostController from '../../components/single-post/SinglePostController'

export default function ListView(props) {
  const { posts } = props
  console.log('posts', posts)

  const postElements = posts.map((post, index) => {
    return <SinglePostController key={index} post={post} />
  })

  return (
    <>
      <div className="container">
        {!postElements && <p>Loading...</p>}
        <div>{postElements}</div>
      </div>
    </>
  )
}
