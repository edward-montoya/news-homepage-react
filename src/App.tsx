import Header from "./layout/Header/Header";
import "./App.css";
import Footer from "./layout/Footer/Footer";
import NewsProvider from "./context/newsContext";
import Banner from "./components/Banner/Banner";

function App() {

  return (
    <NewsProvider>
      <main>
        <Header></Header>
        <Banner></Banner>
        <Footer></Footer>
      </main>
    </NewsProvider>
  );
}

export default App;
