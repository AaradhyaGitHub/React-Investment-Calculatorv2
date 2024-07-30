import  mainLogo  from "../assets/investment-calculator-logo.png";

export default function Header() {
  return (
    <header id="header">
      <img src={mainLogo} alt="Money bag with dollar sign" />
      <h1>Investment Calculator</h1>
    </header>
  );
}
