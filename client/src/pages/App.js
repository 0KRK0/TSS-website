import '../styles/App.css';
import Header from './Home/Header';
import Carousel from './Home/Carousel';
import Careers from './Home/Careers';
import Insight from './Home/Insight';
import Services from './Home/Services';
import ContactUs from './Home/ContactUs';
import Footer from './Home/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Carousel />
      <Careers />
      <Insight />
      <Services />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
