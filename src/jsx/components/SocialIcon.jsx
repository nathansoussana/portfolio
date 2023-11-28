export default function SocialIcon({ name, icon, link }) {
  return (
    <a className="social-icon-item-link" href={link} target="_blank" key={name}>
      <li className="social-icon-item">
        <i className={icon}></i>
      </li>
    </a>
  )
}