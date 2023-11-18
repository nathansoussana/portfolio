export default function Button({ text, link }) {
  return <a className="btn-primary" href={link}>{text}</a>
}