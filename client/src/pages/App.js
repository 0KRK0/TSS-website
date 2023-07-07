import '../static_files/App.css';
import Header from './Home/Header';
import Carousel from './Home/Carousel';
import Career from './Home/Career';
import Insight from './Home/Insight';
import Service from './Home/Services';
import ContactUs from './Home/ContactUs';
import Footer from './Home/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Carousel />
      <Career />
      <Insight />
      <Service />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
