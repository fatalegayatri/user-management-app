import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import UserList from './components/UserList';
import UserDetail from './components/UserDetail';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="bg-background min-h-screen">
          <Routes>
            <Route path="/" element={<UserList />} />
            <Route path="/user/:id" element={<UserDetail />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;