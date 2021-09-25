import moment from "moment";
import Link from "next/link";

const AllNews = ({ news }) => {
  const demoImage =
    "https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News";
  return (
    <div className="news">
      {news.map((singleNews) => (
        <Link href={singleNews.url} key={singleNews.name}>
          <a className="link" target="blank">
            <div className="news__card">
              <div className="head">
                <h2>{singleNews.name}</h2>
                <img
                  src={singleNews.image?.thumbnail?.contentUrl || demoImage}
                  alt="news image"
                />
              </div>
              <p className="body">{singleNews.description}</p>
              <div className="bottom">
                <div className="provider">
                  <img
                    src={
                      singleNews.provider[0]?.image?.thumbnail?.contentUrl ||
                      demoImage
                    }
                    alt="provider"
                  />
                  <p>{singleNews.provider[0].name}</p>
                </div>
                <p className="time">
                  {moment(singleNews.datePublished).startOf("hour").fromNow()}
                </p>
              </div>
            </div>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default AllNews;
