export default function PostView(props) {
  const { formData, handleChange, handleSubmit } = props
  console.log('🚀 ~ file: PostView.jsx:3 ~ PostView ~ formData:', formData)

  return (
    <>
      <h1>Add a new post</h1>
      <form className="container" onSubmit={handleSubmit}>
        <div>
          <div className="form-group">
            <label htmlFor="user">Name</label>
            <input
              type="user"
              className="form-control"
              id="user"
              name="user"
              value={formData.user}
              placeholder="Enter name"
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="title">Title </label>
            <input
              type="title"
              className="form-control"
              id="title"
              name="title"
              value={formData.title}
              aria-describedby="titleHelp"
              placeholder="Enter title"
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="body">Comments</label>
            <textarea
              className="form-control"
              id="body"
              name="body"
              value={formData.body}
              defaultValue={''}
              maxLength={140}
              onChange={handleChange}
            />
          </div>
          <div className="btn-container">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </form>
    </>
  )
}
