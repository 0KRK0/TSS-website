import './styles/App.css';
import Footer from './pages/Home/Footer';
import Header from './pages/Home/Header';
import Carousel from './pages/Home/Carousel';
import Careers from './pages/Home/Careers';
import Service from './pages/Home/Services';
import Partners from './pages/Home/Partners';

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
