import '../static_files/App.css';
import Footer from './Footer';
import Header from './Header';
import Carousel from './Carousel';
import Career from './Career';
import Insight from './Insight';
import Service from './Service';
import Form from './Form';

function App() {
  return (
    <div className="App">
      <Header />
      <Carousel />
      <Career />
      <Insight />
      <Service />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
