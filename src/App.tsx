import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { Feed } from './pages/feed';

import { Home } from './pages/home';
import { Login } from './pages/login';
// import { Teste } from './pages';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/feed" element={ <Feed /> } />
      </Routes>
    </Router>
  );
}

export default App;
