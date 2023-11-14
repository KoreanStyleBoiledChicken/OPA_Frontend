import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PullRequestPage from './pages/pullRequest/PullRequestPage';
import PullRequestDetailPage from './pages/pullRequestDetail/PullRequestDetailPage';
import MainLayout from './component/MainLayout';
import YamlFileUploadPage from './pages/yamlFileUpload/YamlFileUploadPage';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
        </Route>
        <Route path='/pull-requests' element={<MainLayout children={<PullRequestPage />} />} />
        <Route path='/yaml/file-uploads' element={<MainLayout children={<YamlFileUploadPage />} />} />
        <Route path='/pull-requests/:id' element={<MainLayout children={<PullRequestDetailPage/>
        }
        />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
