import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PullRequest from './pages/pullRequest/PullRequest';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          
        </Route>
        <Route path='/pull-requests' element={<PullRequest/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
