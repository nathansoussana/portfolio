export default function NavLink({title, link}) {
  return (
    <a href={link} className="navbar-item-link">
      <li className="navbar-list-item">{title}</li>
    </a>
  )
}