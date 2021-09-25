import Link from "next/link";

const Header = () => {
  return (
    <header className="header">
      <Link href="/">
        <a className="link header__logo">
          <img
            src="/images/cryptocurrency.png"
            alt="logo"
            className="header__logoImg"
          />
          <h4 className="header__logoText">Cryptoverse</h4>
        </a>
      </Link>
      <button className="btn">login</button>
    </header>
  );
};

export default Header;
