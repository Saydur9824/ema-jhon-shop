import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Inventory from './components/Inventory/Inventory';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import OrderReview from './components/OrderReview/OrderReview';
import Orders from './components/Orders/Orders';
import PleaseOrder from './components/PleaseOrder/PleaseOrder';
import Register from './components/Register/Register';
import Shipping from './components/Shipping/Shipping';
import Shop from './components/Shop/Shop';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './PrivateRoute/PrivateRoute';

function App() {
  return (
    <div>
      <AuthProvider>
      <Router>
            <Header></Header>
          <Switch>
              <Route exact path = '/'>
                <Shop></Shop>
              </Route>
              <Route path = '/shop'>
                <Shop></Shop>
              </Route>
              <Route path = '/review'>
                <OrderReview></OrderReview>
              </Route>
              <PrivateRoute path = '/inventory'>
                <Inventory></Inventory>
              </PrivateRoute>
              <PrivateRoute path = '/shipping'>
                <Shipping></Shipping>
              </PrivateRoute>
              <PrivateRoute path = '/PleaseOrder'>
                <PleaseOrder></PleaseOrder>
              </PrivateRoute>
              <PrivateRoute path = '/orders'>
                <Orders></Orders>
              </PrivateRoute>
              <Route path ='/login'>
                <Login></Login>
              </Route>
              <Route path = '/register'>
                <Register></Register>
              </Route>
              <Route path = '*'>
                <NotFound></NotFound>
              </Route>
          </Switch>
        </Router>
      </AuthProvider>
    
    </div>
  );
}

export default App;
