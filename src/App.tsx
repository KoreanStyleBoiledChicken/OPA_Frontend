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
        <Route path='/pull-requests' element={<MainLayout children={<PullRequestPage/>}/> } />
        <Route path='/yaml/file-uploads' element={<MainLayout children={<YamlFileUploadPage/>}/> } />
        <Route path='/pull-requests/1' element={<PullRequestDetailPage pr={{
          id: 3,
          companyName: 'Hello',
          prName: '#16 ingress 보안 설정 변경',
          prTimeStamp: "03 January 2023 02:47 PM",
          status: '위험',
          count: 15
        }}/>} />
    
      </Routes>
    </BrowserRouter>
  );
}

export default App;
