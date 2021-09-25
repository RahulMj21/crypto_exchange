import Head from "next/head";
import { Header, Sidebar } from ".";

const layout = ({ children }) => {
  return (
    <>
      <Header />
      <Head>
        <title>Cryptoverse</title>
      </Head>
      <main className="main">
        <Sidebar />
        <div className="section">{children}</div>
      </main>
    </>
  );
};

export default layout;
