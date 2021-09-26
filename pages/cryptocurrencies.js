import { Footer, Coins } from "../components";
import { useGetCryptosQuery } from "../services/apiServices";

const Cryptocurrencies = () => {
  const { data, error, isLoading } = useGetCryptosQuery(100);
  const coins = data?.data?.coins;

  return (
    <section className="cryptocurrencies">
      {isLoading ? (
        <h1>Loading</h1>
      ) : error ? (
        <h1>error...</h1>
      ) : (
        coins && (
          <>
            <h1 className="heading">Cryptocurrencies</h1>
            <Coins coins={coins} />
            <Footer />
          </>
        )
      )}
    </section>
  );
};

export default Cryptocurrencies;
