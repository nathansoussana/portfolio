export default function Hamburger({ onClick }) {
  return (
    <div className="hamburger-icon" onClick={onClick}>
      <div className="hamburger-line"></div>
      <div className="hamburger-line"></div>
      <div className="hamburger-line"></div>
    </div>
  )
}