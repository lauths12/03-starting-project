import headerImg from "../../assets/investment-calculator-logo.png"
import "./Header.css"

export default function Header() {
  return (
    <header id="header">
      <img src={headerImg} alt="logo"></img>
      <h1>Investment Calculator</h1>
    </header>
  );
}
