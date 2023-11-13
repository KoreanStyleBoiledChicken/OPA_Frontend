import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PullRequestPage from './pages/pullRequest/PullRequestPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          
        </Route>
        <Route path='/pull-requests' element={<PullRequestPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
