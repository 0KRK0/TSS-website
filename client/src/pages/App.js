import '../static_files/App.css';
import Footer from './Home/Footer';
import Header from './Home/Header';
import Carousel from './Home/Carousel';
import Careers from './Home/Careers';
import Insight from './Home/Insight';
import Service from './Home/Services';
import Form from './Home/Form';

function App() {
  return (
    <div className="App">
      <Header />
      <Carousel />
      <Careers />
      <Insight />
      <Service />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
