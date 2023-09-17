export default function ModalView(props) {
  const { userPosts } = props

  const userPostElements = userPosts?.map((post, index) => {
    return (
      <div key={index} className="post">
        <h3>{post.title}</h3>
        <p>{post.body}</p>
        {/* <p className="user">{post.user}</p> */}
        Lorem, sit amet consectetur adipisicing elit. Tempora reprehenderit
        impedit corporis quam quisquam non temporibus architecto minima magnam,
        simipsum dolor doloremque officia exercitationem veritatis. Odio dolorem
        ex voluptatibus itaque!ilique beatae Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Quidem dignissimos quod libero maiores
        esse distinctio cum perferendis, non officia ducimus, possimus eligendi.
        Minima sunt voluptatum autem aliquid illo neque architecto.
      </div>
    )
  })

  return <div>{userPosts && userPostElements}</div>
}
