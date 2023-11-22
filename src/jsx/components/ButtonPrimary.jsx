export default function ButtonPrimary({ text, link }) {
  return (
    <a 
      className="btn btn-primary" 
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      {text}
    </a>
  )
}