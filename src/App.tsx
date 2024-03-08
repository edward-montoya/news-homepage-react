import Header from "./layout/Header/Header";
import "./App.css";
import Footer from "./layout/Footer/Footer";
import NewsProvider from "./context/newsContext";

function App() {

  return (
    <NewsProvider>
      <main>
        <Header></Header>
        <Footer></Footer>
      </main>
    </NewsProvider>
  );
}

export default App;
