export default function ButtonSecondary({ text, link }) {
  return (
    <a 
      href={link} 
      className="btn btn-secondary" 
      target="_blank" 
      rel="noopener noreferrer"
    >
      {text}
    </a>
  )
}