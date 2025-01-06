import Header from './component/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Movie from './pages/Movie';
import Shopping from './pages/Shopping'
import Test from './pages/Test';

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Routes>
          <Route path='/test' element={<Test/>}/>
          <Route path="/" element={<Home />} />
          <Route path="/shopping" element={<Shopping/>}/>
          <Route path="/movie" element={<Movie />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
