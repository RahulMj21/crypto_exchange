import { useGetCryptoNewsQuery } from "../services/newsApiServices";
import { Footer, AllNews } from "../components";

const News = () => {
  const {
    data: cryptoNews,
    error,
    isLoading,
  } = useGetCryptoNewsQuery({
    newsCategory: "Cryptocurrency",
    count: 12,
  });

  const news = cryptoNews?.value;

  return (
    <>
      {isLoading ? (
        <h1>Loading</h1>
      ) : error ? (
        <h1>error...</h1>
      ) : (
        news && (
          <>
            <h1 className="heading">Latest Crypto News</h1>
            <AllNews news={news} />
            <Footer />
          </>
        )
      )}
    </>
  );
};

export default News;
