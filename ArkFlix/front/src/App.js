import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './component/Header';
import Main from './pages/Main';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/" element={<Main />} />
        <Route path="/SignUp" element={<SignUp/>} />
        <Route path="/SignIn" element={<SignIn/>} />
      </Routes>
    </Router>
  );
}

export default App;