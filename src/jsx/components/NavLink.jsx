export default function NavLink({ title, link, onClick }) {
  return (
    <a href={link} className="navbar-item-link" onClick={onClick}>
      <li className="navbar-list-item">{title}</li>
    </a>
  )
}