import Header from "./layout/Header/Header";
import "./App.css";
import Footer from "./layout/Footer/Footer";
import NewsProvider from "./context/newsContext";
import Banner from "./components/Banner/Banner";
import CardSection from "./components/CardSection/CardSection";
import TopContainer from "./components/TopContainer/TopContainer";

function App() {

  return (
    <NewsProvider>
      <main>
        <Header />
        <Banner />
        <CardSection />
        <TopContainer />
        <Footer />
      </main>
    </NewsProvider>
  );
}

export default App;
