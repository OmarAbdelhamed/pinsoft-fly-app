import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { store } from './app/store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; // Import the correct components from react-router-dom
import HomeScreen from './screens/HomeScreen';
import Header from './components/UI/Header';
import FlyTicketScreen from './screens/FlyTicketScreen';
import LoginScreen from './screens/LoginScreen';
import FlyingDetailScreen from './screens/FlyingDetailScreen';
import RegisterScreen from './screens/RegisterScreen';
import PaymentScreen from './screens/PaymentScreen';
import UserProfileScreen from './screens/UserProfileScreen';
import UserTicketScreen from './screens/UserTicketScreen';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/home' element={<HomeScreen />} />
        <Route path='/' element={<LoginScreen />} />
        <Route path='/Details' element={<FlyingDetailScreen />} />
        <Route path='/ticket' element={<FlyTicketScreen />} />
        <Route path='/mytickets' element={<UserTicketScreen />} />
        <Route path='/login' element={<LoginScreen />} />
        <Route path='/register' element={<RegisterScreen />} />
        <Route path='/payment' element={<PaymentScreen />} />
        <Route path='/profile' element={<UserProfileScreen />} />
        <Route
          path='*' // Catch-all route for 404 page
          element={
            <div className=' flex flex-col items-center'>
              <h1 className=' text-3xl mt-8 lg:text-5xl font-bold'>
                404 page not found
              </h1>
              <Link
                className='text-white bg-red-400 text-2xl mt-8 rounded-xl px-4 py-2'
                to='/login'
              >
                Homepage
              </Link>
            </div>
          }
        />
      </Routes>
    </Router>
  );
};

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
