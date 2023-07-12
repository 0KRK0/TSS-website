import '../styles/App.css';
import Footer from './Home/Footer';
import Header from './Home/Header';
import Carousel from './Home/Carousel';
import Careers from './Home/Careers';
import Service from './Home/Services';
import Partners from './Home/Partners';

function App() {
  return (
    <div className="App">
      <Header />
      <Carousel />
      <Partners />
      <Careers />
      <Service />
      <Footer />
    </div>
  );
}

export default App;
