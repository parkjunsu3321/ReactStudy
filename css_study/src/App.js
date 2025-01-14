import Header from './component/Header';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Movie from './pages/Movie';
import Shopping from './pages/Shopping';
import Test from './pages/Test';
import Main from './pages/Main';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();

  const noHeaderPaths = ['/','/SignUp','/SignIn'];

  return (
    <div className="App">
      {!noHeaderPaths.includes(location.pathname) && <Header />}
      <Routes>
        <Route path='/' element={<Main/>} />
        <Route path='/SignIn' element={<SignIn/>} />
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/test' element={<Test/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/shopping" element={<Shopping/>} />
        <Route path="/movie" element={<Movie/>} />
        <Route path="/about" element={<About/>} />
      </Routes>
    </div>
  );
}

export default App;
