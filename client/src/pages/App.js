import '../static_files/App.css';
import Footer from './Home/Footer';
import Header from './Home/Header';
import Carousel from './Home/Carousel';
import Careers from './Home/Careers';
import Insight from './Home/Insight';
import Service from './Home/Services';
import Form from './Home/Form';
import ContactUs from './Home/ContactUs/ContactUs';

function App() {
  return (
    <div className="App">
      <Header />
      <Carousel />
      <Careers />
      <Insight />
      <Service />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
