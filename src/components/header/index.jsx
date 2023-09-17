import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <header>
      <h1>Forum</h1>
      <NavLink to={'/'}>Posts</NavLink>
      <NavLink to={'/add-post'}>Add Post</NavLink>
    </header>
  )
}
