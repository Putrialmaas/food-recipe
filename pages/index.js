import Meta from "../components/Meta";
import Header from "../components/Header";
import List from "../components/List";
import Footer from "../components/Footer";
import BottomBar from "../components/BottomBar";

export default function Home() {
  return (
    <div>

      <Meta title="Food Recipe" />

      <Header />

      <List />

      <BottomBar />

    </div>
  );
}