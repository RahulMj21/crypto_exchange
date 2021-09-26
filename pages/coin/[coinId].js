import { useRouter } from "next/router";
import Link from "next/link";
import { useGetCryptoQuery } from "../../services/apiServices";
import {
  AiOutlineDollarCircle,
  AiOutlineThunderbolt,
  AiOutlineTrophy,
  AiOutlineNumber,
  AiOutlineExclamationCircle,
  AiOutlineCheck,
  AiOutlineStop,
  AiOutlineMoneyCollect,
  AiOutlineFund,
} from "react-icons/ai";
import millify from "millify";
import ReactHtmlParser from "react-html-parser";
import { Footer } from "../../components";

const singleCoin = () => {
  const router = useRouter();
  const coinId = router.query.coinId;
  const { data, error, isLoading } = useGetCryptoQuery(coinId);
  const coinData = data?.data?.coin;

  const stats = coinData && [
    {
      title: "Price to USD",
      value: `$ ${coinData?.price && millify(coinData.price)}`,
      icon: <AiOutlineDollarCircle />,
    },
    { title: "Rank", value: coinData?.rank, icon: <AiOutlineNumber /> },
    {
      title: "24h Volume",
      value: `$ ${coinData?.volume && millify(coinData.volume)}`,
      icon: <AiOutlineThunderbolt />,
    },
    {
      title: "Market Cap",
      value: `$ ${coinData?.marketCap && millify(coinData?.marketCap)}`,
      icon: <AiOutlineDollarCircle />,
    },
    {
      title: "All-time-high(daily avg.)",
      value: `$ ${millify(coinData?.allTimeHigh?.price)}`,
      icon: <AiOutlineTrophy />,
    },
  ];
  const genericStats = coinData && [
    {
      title: "Number Of Markets",
      value: coinData.numberOfMarkets,
      icon: <AiOutlineFund />,
    },
    {
      title: "Number Of Exchanges",
      value: coinData.numberOfExchanges,
      icon: <AiOutlineMoneyCollect />,
    },
    {
      title: "Aprroved Supply",
      value: coinData.approvedSupply ? <AiOutlineCheck /> : <AiOutlineStop />,
      icon: <AiOutlineExclamationCircle />,
    },
    {
      title: "Total Supply",
      value: `$ ${millify(coinData.totalSupply)}`,
      icon: <AiOutlineExclamationCircle />,
    },
    {
      title: "Circulating Supply",
      value: `$ ${millify(coinData.circulatingSupply)}`,
      icon: <AiOutlineExclamationCircle />,
    },
  ];

  return isLoading ? (
    <h1>Loading</h1>
  ) : error ? (
    <h1>error...</h1>
  ) : (
    coinData && (
      <div className="singleCoin">
        <div className="singleCoin__head">
          <img src={coinData.iconUrl} alt="icon" className="singleCoin__icon" />
          <h1 className="heading">{`${coinData.name} (${coinData.slug}) Price`}</h1>
          <p className="singleCoin__text">
            {coinData.name} live price in US dollars. View value statistics,
            market cap and supply.
          </p>
        </div>
        <div className="singleCoin__stats">
          <div className="left">
            <div className="singleCoin__stats__header">
              <h2>{coinData.name} Value Statistics</h2>
              <p className="singleCoin__text">
                An overview showing the stats of {coinData.name}
              </p>
            </div>
            <div className="singleCoin__stats__body">
              {stats.map((stat) => (
                <div className="item" key={stat.title}>
                  <div className="key">
                    {stat.icon}
                    {stat.title}
                  </div>
                  <div className="value">{stat.value}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="right">
            <div className="singleCoin__stats__header">
              <h2>Other Statistics</h2>
              <p className="singleCoin__text">
                An overview showing the stats of all cryptocurrencies
              </p>
            </div>
            <div className="singleCoin__stats__body">
              {genericStats.map((stat) => (
                <div className="item" key={stat.title}>
                  <div className="key">
                    {stat.icon}
                    {stat.title}
                  </div>
                  <div className="value">{stat.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="singleCoin__more">
          <div className="singleCoin__description">
            {ReactHtmlParser(coinData.description)}
          </div>
          <div className="singleCoin__links">
            <h1 className="heading">{coinData.name} Links</h1>
            {coinData.links.map(({ name, type, url }) => (
              <div className="link__item">
                <div className="text">{name}</div>
                <Link href={url}>
                  <a className="link">{type}</a>
                </Link>
              </div>
            ))}
          </div>
        </div>
        <Footer />
      </div>
    )
  );
};
export default singleCoin;
