import '../styles/App.css';
import Footer from './Home/Footer';
import Header from './Home/Header';
import Carousel from './Home/Carousel';
import Careers from './Home/Careers';
import Service from './Home/Services';

function App() {
  return (
    <div className="App">
      <Header />
      <Carousel />
      <Careers />
      <Service />
      <Footer />
    </div>
  );
}

export default App;
