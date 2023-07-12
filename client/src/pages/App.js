import '../styles/App.css';
import Footer from './Home/Footer';
import Header from './Home/Header';
import Carousel from './Home/Carousel';
import Careers from './Home/Careers';
import Service from './Home/Services';
import Process from './Home/Process';

function App() {
  return (
    <div className="App">
      <Header />
      <Carousel />
      <Careers />
      <Process />
      <Service />
      <Footer />
    </div>
  );
}

export default App;
