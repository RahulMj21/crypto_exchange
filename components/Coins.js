import millify from "millify";
import { useEffect, useRef, useState } from "react";
import { MdSearch } from "react-icons/md";
import Link from "next/link";

const Coins = ({ coins }) => {
  const [allCoins, setAllCoins] = useState();
  const [searchTerm, setSearchTerm] = useState();
  const inputRef = useRef(null);

  useEffect(() => {
    const filteredCoins = coins.filter((coin) =>
      coin.name.toLowerCase().includes(searchTerm)
    );
    setAllCoins(filteredCoins);
  }, [searchTerm]);

  useEffect(() => {
    setAllCoins(coins);
  }, [coins]);

  return (
    <>
      {coins.length > 10 && (
        <div className="inputBox" onClick={() => inputRef.current.focus()}>
          <MdSearch />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search here"
            onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
          />
        </div>
      )}
      <div className="cryptocurrencies__coins">
        {allCoins &&
          allCoins.map((coin) => (
            <Link href={`/coin/${coin.id}`} key={coin.rank}>
              <a className="link">
                <div className="coindata">
                  <div className="coindata__heading">
                    <h3>
                      {`
                      ${coin.rank}.  ${coin.name}`}
                    </h3>
                    <img src={coin.iconUrl} alt="coin logo" />
                  </div>
                  <div className="coindata__body">
                    <p>price: ${millify(coin.price)}</p>
                    <p>Market Cap: {millify(coin.marketCap)}</p>
                    <p>Daily Change: {millify(coin.change)}</p>
                  </div>
                </div>
              </a>
            </Link>
          ))}
      </div>
    </>
  );
};

export default Coins;
