export default function ButtonSecondary({ text, link }) {
  return <a className="btn btn-secondary" href={link} target="_blank" rel="noopener noreferrer">{text}</a>
}