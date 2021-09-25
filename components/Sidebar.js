import Link from "next/link";
import {
  AiOutlineHome,
  AiOutlineFund,
  AiOutlineMoneyCollect,
  AiOutlineBulb,
} from "react-icons/ai";
const Sidebar = () => {
  return (
    <nav className="sidebar">
      <Link href="/">
        <a className="link sidebar__link">
          <AiOutlineHome />
          <span>Home</span>
        </a>
      </Link>
      <Link href="/cryptocurrencies">
        <a className="link sidebar__link">
          <AiOutlineFund />
          <span>Cryptocurrencies</span>
        </a>
      </Link>
      <Link href="/exchanges">
        <a className="link sidebar__link">
          <AiOutlineMoneyCollect />
          <span>Exchanges</span>
        </a>
      </Link>
      <Link href="/news">
        <a className="link sidebar__link">
          <AiOutlineBulb />
          <span>News</span>
        </a>
      </Link>
    </nav>
  );
};

export default Sidebar;
