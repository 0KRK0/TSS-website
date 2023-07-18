import '../styles/App.css';
import { Routes, Route } from 'react-router-dom';
import Footer from './Home/Footer';
import Header from './Home/Header';
import Policy from './Policy/policies'
import Home from './Home/Home';
import About from './About/About';
import NotFound from './Home/NotFound';

function App() {
  return (
    <>
      <Routes>

        <Route path='/' element={<Header />}>

          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='policies' element={<Policy />} />

          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
