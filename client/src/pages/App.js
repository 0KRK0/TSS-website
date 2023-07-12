import '../styles/App.css';
import Footer from './Home/Footer';
import Header from './Home/Header';
import Carousel from './Home/Carousel';
import Careers from './Home/Careers';
import Service from './Home/Services';
import Process from './Home/Process';
import Partners from './Home/Partners';
import Policy from './Policy/policies'

function App() {
  return (
    <div className="App">
      <Header />
      <Carousel />
      <Partners />
      <Careers />
      <Process />
      <Policy />
      <Service />
      <Footer />
    </div>
  );
}

export default App;
