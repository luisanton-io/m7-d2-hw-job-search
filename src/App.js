import logo from './logo.svg';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { BrowserRouter, Route } from 'react-router-dom'
import SearchPage from './components/SearchPage'
import JobDetail from './components/JobDetail'

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={SearchPage} />
      <Route path="/:jobId" component={JobDetail} />
    </BrowserRouter>
  );
}

export default App;
