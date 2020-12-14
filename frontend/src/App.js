import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { Provider } from 'react-redux';
import './bootstrap.min.css'; // bootswatch
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import MissionsScreen from './screens/MissionsScreen';
import ContactScreen from './screens/ContactScreen';
import CartScreen from './screens/CartScreen';
import ProfileScreen from './screens/ProfileScreen';
import ProductScreen from './screens/ProductScreen';

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <main className='py-3'>
          <Container>
            <Route exact path='/' component={HomeScreen} />
            <Route exact path='/about' component={AboutScreen} />
            <Route exact path='/missions' component={MissionsScreen} />
            <Route exact path='/contact' component={ContactScreen} />
            <Route path='/cart' component={CartScreen} />
            <Route path='/profile' component={ProfileScreen} />
            <Route path='/product/:id' component={ProductScreen} />
          </Container>
        </main>
        <Footer />
      </Router>
    </>
  );
};

export default App;
