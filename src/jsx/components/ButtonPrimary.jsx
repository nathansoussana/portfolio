export default function ButtonPrimary({ text, link }) {
  return (
  <a className="btn btn-primary" href={link}>
    {text}
   </a>
  )
}