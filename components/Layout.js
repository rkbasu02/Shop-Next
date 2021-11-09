import Header from "./Header";
import Banner from "./Banner";
import Footer from "./Footer";

export default function Layout({ children, home }) {
  return (
    <div>
      <Header />
      {home && <Banner />}
      <main>{children}</main>
      <Footer home={home} />
    </div>
  );
}
