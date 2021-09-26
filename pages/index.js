import Link from "next/link";
import { Footer } from "../components";
import { useGetCryptosQuery } from "../services/apiServices";
import { useGetCryptoNewsQuery } from "../services/newsApiServices";
import millify from "millify";
import Coins from "../components/Coins";
import AllNews from "../components/AllNews";

export default function Home() {
  const { data, error, isLoading } = useGetCryptosQuery(10);
  const globalStats = data?.data?.stats;
  const coins = data?.data?.coins;

  const { data: cryptoNews } = useGetCryptoNewsQuery({
    newsCategory: "Cryptocurrency",
    count: 6,
  });

  const news = cryptoNews?.value;

  return (
    <section className="home">
      {isLoading ? (
        <h1>Loading</h1>
      ) : error ? (
        <h1>error...</h1>
      ) : (
        data && (
          <>
            <main className="home__main">
              <div className="home__main__stats">
                <h1 className="heading">Global Crypto Stats</h1>
                <div className="stats__items">
                  <div className="stats__item">
                    <p>Total Cryptocurrencies</p>
                    <h2>{millify(globalStats.total)}</h2>
                  </div>
                  <div className="stats__item">
                    <p>Total Market Cap</p>
                    <h2>{millify(globalStats.totalMarketCap)}</h2>
                  </div>
                  <div className="stats__item">
                    <p>Total Markets</p>
                    <h2>{millify(globalStats.totalMarkets)}</h2>
                  </div>
                  <div className="stats__item">
                    <p>Total 24h Volume</p>
                    <h2>{millify(globalStats.total24hVolume)}</h2>
                  </div>
                  <div className="stats__item">
                    <p>Total Exchanges</p>
                    <h2>{millify(globalStats.totalExchanges)}</h2>
                  </div>
                </div>
              </div>
              <div className="home__coins">
                <div className="heading__with__show">
                  <h1 className="heading">Top Crypto Currencies</h1>
                  <Link href="/cryptocurrencies">
                    <a className="btn link">Show More</a>
                  </Link>
                </div>
                <Coins coins={coins} />
              </div>
              {news && (
                <div className="home__news">
                  <div className="heading__with__show">
                    <h1 className="heading">Top Crypto News</h1>
                    <Link href="/news">
                      <a className="btn link">Show More</a>
                    </Link>
                  </div>
                  <AllNews news={news} />
                </div>
              )}
            </main>
            <Footer />
          </>
        )
      )}
    </section>
  );
}
