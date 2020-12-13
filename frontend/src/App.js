import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import './bootstrap.min.css'; // bootswatch
import HomeScreen from './screens/HomeScreen';

const App = () => {
  return (
    <>
      <Router>
        <Route exact path='/' component={HomeScreen} />
      </Router>
    </>
  );
};

export default App;
